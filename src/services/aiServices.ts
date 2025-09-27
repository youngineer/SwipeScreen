import { EXTRACT_PDF_DETAILS_PROMPT } from "../utils/constants";
import { getEnvVar } from "../utils/helperFunctions";

export async function getAiResponse(payload: string) {
    try {
        const apiKey: string = getEnvVar("VITE_APP_OPENROUTER_APIKEY");
        const aiResponse: Response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "x-ai/grok-4-fast:free",
                "messages": [
                    {
                        "role": "user",
                        "content": EXTRACT_PDF_DETAILS_PROMPT + payload
                    }
                ]
            })
        });
        const data: any = await aiResponse.json();
        if (!aiResponse.ok) throw new Error(data.error?.message || "API request failed");

        const content = data.choices?.[0]?.message?.content;
        if (!content) {
            throw new Error("No content received from AI response");
        }
        
        return content;
    } catch (error: any) {
        console.error("Error while fetching AI response:", error);
        throw new Error("Error while fetching AI response:", error);
    }
}