import { GoogleGenAI, Type } from "@google/genai";
import { Question, TaskType, EvaluationResult } from '../types';

const apiKey = process.env.API_KEY;
// Handle the case where API_KEY might be missing gracefully in the UI, 
// but here we initialize if it exists. 
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const evaluateWriting = async (
  question: Question,
  userResponse: string
): Promise<EvaluationResult> => {
  if (!ai) {
    throw new Error("Gemini API Key is missing.");
  }

  const isTask1 = question.type === TaskType.TASK_1;
  const wordCount = userResponse.split(/\s+/).filter(w => w.length > 0).length;

  const taskDescription = isTask1 
    ? `Task 1: Writing an Email. The user must address: ${question.bullets?.join(', ')}.` 
    : `Task 2: Responding to Survey. Option A: ${question.options?.optionA}. Option B: ${question.options?.optionB}.`;

  const prompt = `
    You are a strict, certified CELPIP Writing Examiner.
    
    Evaluate the following candidate response based on the CELPIP General Writing criteria:
    1. Content/Coherence (Meaning, quality of ideas, organization).
    2. Vocabulary (Range, precision, style).
    3. Readability (Grammar, spelling, punctuation, sentence structure).
    4. Task Fulfillment (Relevance, completeness, tone, word count appropriateness).
    
    The user wrote ${wordCount} words. The recommended range is 150-200 words.
    
    Context:
    ${taskDescription}
    Prompt Title: ${question.title}
    Prompt Text: ${question.prompt}
    
    Candidate Response:
    "${userResponse}"
    
    Provide the output in JSON format ONLY.
    The 'bandScore' should be an integer from 1 to 12.
    'correctedVersion' should be the candidate's text rewritten to a Band 10-12 level, maintaining the original intent but fixing errors.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            bandScore: { type: Type.INTEGER },
            contentScore: { type: Type.INTEGER, description: "Score out of 12" },
            vocabularyScore: { type: Type.INTEGER, description: "Score out of 12" },
            grammarScore: { type: Type.INTEGER, description: "Score out of 12" },
            taskFulfillmentScore: { type: Type.INTEGER, description: "Score out of 12" },
            feedback: { type: Type.STRING, description: "Overall detailed feedback paragraph." },
            strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
            weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctedVersion: { type: Type.STRING },
          },
          required: ["bandScore", "feedback", "strengths", "weaknesses", "correctedVersion", "contentScore", "vocabularyScore", "grammarScore", "taskFulfillmentScore"],
        }
      }
    });

    const jsonText = response.text || "{}";
    const result = JSON.parse(jsonText) as EvaluationResult;
    return result;

  } catch (error) {
    console.error("Gemini Evaluation Error:", error);
    throw new Error("Failed to evaluate writing. Please check your API limits or network.");
  }
};
