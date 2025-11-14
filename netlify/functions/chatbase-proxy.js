const STYLE_PROMPTS = {
  crustyProfessor:
    'Always reply like a crusty but brilliant professor. Keep explanations sharp, academic, and tinged with dry humour.',
  wildWest:
    'Channel a travelling narrator spinning a Wild West cowboy yarn. Sprinkle frontier imagery and rugged charm into every response.',
  futuristic:
    'Respond as an optimistic futuristic AI from a far-flung sci-fi civilization. Use advanced technology metaphors and gleaming descriptions.',
  fantasy:
    'Answer like a bard in a high-fantasy tavern tale. Embrace magical language, heroic flair, and mythic storytelling.',
};

exports.handler = async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  const apiKey = process.env.CHATBASE_API_KEY;
  const chatbotId = process.env.CHATBASE_CHATBOT_ID;

  if (!apiKey || !chatbotId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error: missing Chatbase credentials.' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  let payload;

  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON payload.' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  const { style, messages, conversationId } = payload;

  if (!style || !STYLE_PROMPTS[style]) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Unknown or missing style selection.' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Please provide at least one user message.' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  const formattedMessages = [
    {
      role: 'system',
      content:
        'You are a creative yet helpful assistant. Answer accurately while adapting to the requested narrative style.',
    },
    {
      role: 'system',
      content: STYLE_PROMPTS[style],
    },
    ...messages,
  ];

  try {
    const response = await fetch('https://www.chatbase.co/api/v1/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        messages: formattedMessages,
        chatbotId,
        conversationId,
        stream: false,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: data?.message || 'Chatbase API error.' }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    const reply = data?.text || data?.response || data?.reply || '';

    if (!reply) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Chatbase returned an empty response.' }),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: 'Failed to contact Chatbase API.' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};
