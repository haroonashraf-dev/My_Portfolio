
import { GoogleGenAI } from "@google/genai";

const HAROON_BIO = `
Haroon is a dedicated Front-end Web Developer and Freelancer with deep expertise in React, Tailwind CSS, and Framer Motion. 
He is currently expanding his skill set into the MERN stack (MongoDB, Express, React, Node.js).
His primary services include:
1. High-performance Landing Pages: Built with React and optimized for conversion.
2. Custom Web Applications: Responsive and interactive SPAs.
3. UI/UX Implementation: Bringing complex designs to life using Framer Motion and modern CSS.
4. Maintenance and Scaling: Optimizing existing web projects.

Stack: React, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion, JavaScript (ES6+), HTML5, CSS3.
Currently Learning: Node.js, Express, MongoDB.
Approach: Mobile-first, performance-oriented, and user-centric.
Goal: To help businesses grow through better digital experiences and land a full-time MERN stack position.
`;

export async function chatWithAssistant(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are Haroon's Portfolio Assistant. Your job is to answer questions about Haroon's skills, projects, and services using the following context: ${HAROON_BIO}. Be professional, concise, and helpful. If asked for contact details, suggest using the contact form on the page.`,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to Haroon's brain right now. Please try again later!";
  }
}
