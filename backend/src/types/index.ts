export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatRequest {
  messages: Message[];
  model?: string;
}

export interface ChatResponse {
  message: string;
  role: string;
}
