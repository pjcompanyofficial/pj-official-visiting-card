'use server';
/**
 * @fileOverview An AI flow to verify employee documents.
 *
 * - verifyDocument - Extracts employee details from a document image.
 * - DocumentInput - The input type for the verifyDocument function.
 * - DocumentOutput - The return type for the verifyDocument function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DocumentInputSchema = z.object({
  documentImageUri: z
    .string()
    .describe(
      "A photo of an employee document, as a data URI that must include a MIME type and use Base64 encoding."
    ),
});
export type DocumentInput = z.infer<typeof DocumentInputSchema>;

const DocumentOutputSchema = z.object({
  employeeName: z.string().describe("The full name of the employee found on the document."),
  refNumber: z.string().describe("The internal reference number of the employee (e.g., PJ-01/01)."),
  isDocumentLegible: z.boolean().describe("Whether the text on the document is clear and readable."),
});
export type DocumentOutput = z.infer<typeof DocumentOutputSchema>;

export async function verifyDocument(input: DocumentInput): Promise<DocumentOutput> {
  return verifyDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'verifyDocumentPrompt',
  input: {schema: DocumentInputSchema},
  output: {schema: DocumentOutputSchema},
  prompt: `You are an expert document verifier for a company named PJ OFFICIAL.
      Your task is to analyze the provided image of an employee document.
      Extract the employee's full name and their internal reference number (it looks like 'PJ-XX/XX').
      If the document is blank, unclear, or not a document, set isDocumentLegible to false and return empty strings for the other fields.
      Otherwise, set isDocumentLegible to true and provide the extracted details.
      Do NOT check for seals or signatures. Only extract the text.

      Document Image: {{media url=documentImageUri}}`,
});

const verifyDocumentFlow = ai.defineFlow(
  {
    name: 'verifyDocumentFlow',
    inputSchema: DocumentInputSchema,
    outputSchema: DocumentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
