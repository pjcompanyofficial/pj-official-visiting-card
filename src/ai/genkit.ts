'use server';
/**
 * @fileoverview This file initializes the Genkit AI plugin.
 */
import {googleAI} from '@genkit-ai/google-genai';
import {genkit} from 'genkit';

genkit({
  plugins: [googleAI()],
});
