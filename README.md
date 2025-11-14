# Styled Chatbase Assistant

This project is a single-page web application that routes Chatbase chatbot conversations through a Netlify Function. The UI lets visitors choose one of four storytelling voices before sending a prompt so the chatbot can answer in that style.

The front-end is completely static and safe to host on Netlify or any static host. All secrets (chatbot ID and API key) stay on the serverless side so they are never exposed to the browser.

## Features

- Four response styles: **Crusty Professor**, **Wild West Cowboy Story**, **Futuristic Sci-Fi**, and **Fantasy**.
- Live conversation view that keeps a running transcript of your session.
- Secure proxy that appends the selected style to the prompt and forwards the request to Chatbase.
- Embeddable in other sites or applications with an `<iframe>` (framing headers already configured).

## Project structure

```
├── index.html                 # Main page with the UI markup
├── style.css                  # Styling for the layout and chat log
├── script.js                  # Client-side logic (style selection, API calls, rendering)
├── netlify/
│   └── functions/
│       └── chatbase-proxy.js  # Netlify Function that calls the Chatbase API
└── _headers                   # Allows the app to be embedded with iframes when hosted on Netlify
```

## Prerequisites

- A Chatbase chatbot with access to the [Chat API](https://www.chatbase.co/docs/api-reference/chat/chat-with-a-chatbot).
- A Chatbase API key that has permission to talk to the chatbot.
- A Netlify account. The free tier works fine.
- (Optional for local development) the [Netlify CLI](https://docs.netlify.com/cli/get-started/) installed globally.

## Local development

1. Clone this repository.
2. Install the Netlify CLI if you do not already have it:

   ```bash
   npm install -g netlify-cli
   ```

3. Create a file named `.env` in the project root with the credentials. Netlify CLI automatically loads this file.

   ```bash
   echo "CHATBASE_API_KEY=your_api_key_here" >> .env
   echo "CHATBASE_CHATBOT_ID=your_chatbot_id_here" >> .env
   ```

4. Start the local dev server. This serves the static site and runs the proxy function on `/.netlify/functions/chatbase-proxy`.

   ```bash
   netlify dev
   ```

5. Open the printed URL (usually `http://localhost:8888`) and begin chatting.

## Deploying to Netlify

1. Push this repository to your own Git provider (GitHub, GitLab, Bitbucket, etc.).
2. In the Netlify dashboard choose **Add new site → Import an existing project** and connect the repo.
3. Accept the default build settings (no build command and `.` as the publish directory).
4. After the site is created, open **Site settings → Environment variables** and add:

   - `CHATBASE_API_KEY`
   - `CHATBASE_CHATBOT_ID`

   Deploys triggered after these variables are set will include them for the serverless function.

5. Trigger a new deploy (Netlify may do this automatically). When the deploy completes, visit the URL to confirm the chatbot responds in different styles.

### Embedding with an iframe

Because the repository ships with an `_headers` file that removes frame restrictions, you can embed the deployed site into other software with a simple iframe:

```html
<iframe src="https://your-site.netlify.app" width="100%" height="600" style="border:0;" title="Styled Chatbase Assistant"></iframe>
```

Adjust the `width`, `height`, or additional attributes as required by your host application.

## Usage tips

- The style selector highlights the active tone. Switching styles mid-conversation keeps the existing transcript but the next answer will use the newly selected voice.
- Conversation history stays only in the current browser session. Refreshing the page starts a new chat with a fresh `conversationId`.
- If you see an error message in the status area, check the Netlify function logs (`netlify functions:tail` locally or the Netlify dashboard in production) for more details.

## License

This repository is provided as-is without an explicit license. Add your own license file if you intend to distribute modified versions.
