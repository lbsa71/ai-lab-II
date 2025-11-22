import OpenAI from 'openai';
import type { Message } from '../types';

let openai: OpenAI;

export const initializeOpenAI = (): void => {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }

  openai = new OpenAI({
    apiKey: apiKey,
  });
};

export const getChatCompletion = async (
  messages: Message[],
  model: string = 'gpt-3.5-turbo'
): Promise<string> => {
  if (!openai) {
    throw new Error('OpenAI client not initialized. Call initializeOpenAI() first.');
  }

  try {
    const completion = await openai.chat.completions.create({
      model: model,
      messages: messages,
    });

    const responseMessage = completion.choices[0]?.message?.content;

    if (!responseMessage) {
      throw new Error('No response from OpenAI');
    }

    return responseMessage;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`OpenAI API error: ${error.message}`);
    }
    throw new Error('Unknown error occurred while calling OpenAI API');
  }
};
