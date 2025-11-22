# Backend - AI Lab II

Express.js backend server with OpenAI integration for the AI Lab II chatbot.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from example:
```bash
cp .env.example .env
```

3. Edit `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=sk-your-actual-api-key-here
PORT=3001
FRONTEND_URL=http://localhost:5173
```

## Development

Start the development server with hot reload:
```bash
npm run dev
```

The server will run on `http://localhost:3001` by default.

## Build

Compile TypeScript to JavaScript:
```bash
npm run build
```

Output will be in the `dist/` directory.

## Production

Run the compiled code:
```bash
npm start
```

## API Endpoints

### POST /api/chat

Send a message to the chatbot.

**Request:**
```json
{
  "messages": [
    { "role": "user", "content": "Hello!" }
  ],
  "model": "gpt-3.5-turbo"
}
```

**Response:**
```json
{
  "message": "Hello! How can I help you today?",
  "role": "assistant"
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Project Structure

```
backend/
├── src/
│   ├── index.ts          # Express app entry point
│   ├── routes/
│   │   └── chat.ts       # Chat API endpoints
│   ├── services/
│   │   └── openai.ts     # OpenAI client wrapper
│   └── types/
│       └── index.ts      # TypeScript type definitions
├── .env.example          # Environment variable template
├── package.json
└── tsconfig.json
```

## Environment Variables

- `OPENAI_API_KEY` (required) - Your OpenAI API key
- `PORT` (optional) - Server port, default: 3001
- `FRONTEND_URL` (optional) - CORS allowed origin, default: http://localhost:5173

## Security

- OpenAI API key is stored server-side only
- CORS is configured to only allow requests from the frontend URL
- All requests are validated before processing
- Never commit the `.env` file
