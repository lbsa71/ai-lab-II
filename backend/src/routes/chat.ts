import { Router, Request, Response } from 'express';
import { getChatCompletion } from '../services/openai';
import type { ChatRequest, ChatResponse } from '../types';

const router = Router();

router.post('/chat', async (req: Request, res: Response): Promise<void> => {
  try {
    const { messages, model } = req.body as ChatRequest;

    // Validate request
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: 'Messages array is required and cannot be empty' });
      return;
    }

    // Validate message structure
    for (const message of messages) {
      if (!message.role || !message.content) {
        res.status(400).json({ error: 'Each message must have role and content' });
        return;
      }
      if (!['user', 'assistant', 'system'].includes(message.role)) {
        res.status(400).json({ error: 'Invalid message role' });
        return;
      }
    }

    // Get completion from OpenAI
    const responseMessage = await getChatCompletion(messages, model);

    const response: ChatResponse = {
      message: responseMessage,
      role: 'assistant',
    };

    res.json(response);
  } catch (error) {
    console.error('Chat endpoint error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
});

export default router;
