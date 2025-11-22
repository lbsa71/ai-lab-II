# Architecture

## System Overview

Monorepo containing a React frontend and Node.js/Express backend for an OpenAI-powered chatbot.

## Component Structure

```
ai-lab-II/
├── frontend/          # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── services/    # API client
│   │   └── types/       # TypeScript interfaces
│   └── vite.config.ts
└── backend/           # Express + TypeScript
    ├── src/
    │   ├── routes/      # API endpoints
    │   ├── services/    # OpenAI integration
    │   └── middleware/  # Error handling, validation
    └── tsconfig.json
```

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast dev server, HMR)
- **State Management**: React hooks (useState, useReducer)
- **HTTP Client**: fetch API
- **Styling**: CSS modules or Tailwind CSS

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js with TypeScript
- **OpenAI SDK**: openai npm package
- **Environment**: dotenv for configuration

## Data Flow

1. User types message in frontend chat interface
2. Frontend sends POST request to backend `/api/chat` endpoint
3. Backend validates request, adds to conversation history
4. Backend forwards to OpenAI API with API key (server-side only)
5. Backend streams response back to frontend
6. Frontend updates UI with assistant's response

## Security

**CRITICAL**: API keys MUST never be exposed to frontend.

- OpenAI API key stored in backend `.env` file only
- Backend acts as proxy between frontend and OpenAI
- Frontend has no direct access to OpenAI credentials
- CORS configured to restrict frontend origins
- Input validation on backend prevents injection attacks
- Rate limiting to prevent abuse

## API Integration Strategy

### Frontend → Backend
```typescript
POST /api/chat
Body: { messages: Message[], model?: string }
Response: { message: string, role: string }
```

### Backend → OpenAI
```typescript
// Backend service handles OpenAI SDK
const completion = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: conversationHistory
});
```

## Component Responsibilities

### Frontend Components
- **ChatInterface**: Main container, manages message state
- **MessageList**: Displays conversation history
- **MessageInput**: User input form with submit
- **Message**: Individual message bubble (user/assistant)
- **LoadingIndicator**: Shows during API calls

### Backend Services
- **ChatService**: Manages OpenAI API calls
- **ConversationService**: Maintains context/history
- **ErrorHandler**: Centralized error handling
- **ValidationMiddleware**: Request validation
