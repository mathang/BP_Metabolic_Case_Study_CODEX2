const styleButtons = document.querySelectorAll('.style-button');
const chatLog = document.getElementById('chatLog');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const statusEl = document.getElementById('status');

const DEFAULT_STYLE = 'crustyProfessor';
const styles = new Map([
  ['crustyProfessor', 'Respond like a no-nonsense, slightly grumpy professor who peppers explanations with academic wit.'],
  ['wildWest', 'Answer as a storyteller narrating a Wild West cowboy adventure related to the question.'],
  ['futuristic', 'Reply as if you are an AI from a gleaming futuristic sci-fi world using vivid, tech-forward imagery.'],
  ['fantasy', 'Respond in the tone of an epic high-fantasy bard weaving magic into every description.'],
]);

let selectedStyle = DEFAULT_STYLE;
let isSending = false;
const conversation = [];
const conversationId = self.crypto?.randomUUID?.() ?? `conv-${Date.now()}-${Math.random().toString(16).slice(2)}`;

function setActiveStyle(style) {
  selectedStyle = style;
  styleButtons.forEach((btn) => {
    const isActive = btn.dataset.style === style;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
  statusEl.textContent = `Responses will sound like: ${styles.get(style)}`;
  statusEl.classList.remove('error');
}

function appendMessage(role, content) {
  const li = document.createElement('li');
  li.className = `chat-bubble ${role}`;
  li.textContent = content;
  chatLog.appendChild(li);
  chatLog.scrollTo({ top: chatLog.scrollHeight, behavior: 'smooth' });
}

async function sendMessage(message) {
  if (isSending) return;

  isSending = true;
  sendButton.disabled = true;
  statusEl.textContent = 'Contacting the chatbot…';
  statusEl.classList.remove('error');

  const payload = {
    style: selectedStyle,
    conversationId,
    messages: conversation,
  };

  try {
    const response = await fetch('/.netlify/functions/chatbase-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Unexpected error from proxy');
    }

    if (!data.reply) {
      throw new Error('The chatbot returned an empty response.');
    }

    conversation.push({ role: 'assistant', content: data.reply });
    appendMessage('assistant', data.reply);
    statusEl.textContent = 'Ready for your next question.';
  } catch (error) {
    console.error(error);
    statusEl.textContent = error.message || 'Unable to reach the chatbot.';
    statusEl.classList.add('error');
  } finally {
    isSending = false;
    sendButton.disabled = false;
    messageInput.focus();
  }
}

styleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveStyle(button.dataset.style);
  });
});

messageForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (!text) return;

  conversation.push({ role: 'user', content: text });
  appendMessage('user', text);
  messageInput.value = '';
  await sendMessage(text);
});

setActiveStyle(DEFAULT_STYLE);
messageInput.focus();
