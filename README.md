# AI Lab II - OpenAI Chatbot

A simple OpenAI-powered chatbot with React frontend and Express backend.

## Project Description

Full-stack TypeScript application featuring a conversational AI interface. The backend securely manages OpenAI API calls while the frontend provides a clean, responsive chat UI.

## Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express + TypeScript + OpenAI SDK
- **Security**: API keys stored server-side only

See [ARCHITECTURE.md](ARCHITECTURE.md) for detailed system design.

## Project Structure

```
ai-lab-II/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/  # Chat UI components
│   │   ├── services/    # API client
│   │   └── types/       # TypeScript types
│   └── package.json
├── backend/           # Express server
│   ├── src/
│   │   ├── routes/      # API endpoints
│   │   ├── services/    # OpenAI integration
│   │   └── middleware/  # Validation, errors
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Setup Instructions

### 1. Clone Repository

```bash
git clone <repository-url>
cd ai-lab-II
```

### 2. Backend Setup

```bash
cd backend
npm install

# Create environment file
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:

```
OPENAI_API_KEY=sk-your-actual-api-key-here
PORT=3001
FRONTEND_URL=http://localhost:5173
```

**IMPORTANT**: Never commit the `.env` file. It contains sensitive credentials.

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Optionally create `.env` for custom backend URL:

```
VITE_API_URL=http://localhost:3001
```

## Development Workflow

### Start Backend Server

```bash
cd backend
npm run dev
```

Server runs on `http://localhost:3001`

### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

Frontend runs on `http://localhost:5173`

### Run Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Usage

1. Ensure backend server is running with valid OpenAI API key
2. Start frontend development server
3. Open browser to `http://localhost:5173`
4. Type message in chat input and press Enter
5. View AI responses in conversation history

## API Endpoints

### POST /api/chat

Send message to OpenAI chatbot.

**Request**:
```json
{
  "messages": [
    { "role": "user", "content": "Hello!" }
  ],
  "model": "gpt-3.5-turbo"
}
```

**Response**:
```json
{
  "message": "Hello! How can I help you?",
  "role": "assistant"
}
```

## Environment Variables

### Backend

- `OPENAI_API_KEY` (required): Your OpenAI API key
- `PORT` (optional): Server port, default 3001
- `FRONTEND_URL` (optional): CORS origin, default http://localhost:5173

### Frontend

- `VITE_API_URL` (optional): Backend URL, default http://localhost:3001

## Security Notes

- OpenAI API key MUST be in backend `.env` only
- Never expose API keys in frontend code
- Backend validates all requests before forwarding to OpenAI
- CORS configured to restrict frontend origins

## Implementation Guide

See [IMPLEMENTATION_STRATEGY.md](IMPLEMENTATION_STRATEGY.md) for detailed build instructions.

Track progress in [IMPLEMENTATION_PROGRESS.md](IMPLEMENTATION_PROGRESS.md).

## License

MIT
