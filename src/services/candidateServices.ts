import type { ICandidateServices, IServiceResponse } from "../types/interfaces";
import pdf2md from "@opendocsg/pdf2md";
import { getAiResponse } from "./aiServices";

class CandidateServices implements ICandidateServices {
  async parseResume(file: File): Promise<IServiceResponse> {
    try {
      const allowedTypes = [
        "application/pdf",
        // DOCX support could be added later
        // "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        return {
          message: "Invalid file type. Only PDF allowed",
          isSuccess: false,
          content: null,
        };
      }

      const extractedText = await this.convertPdfToMarkdown(file);
      const jsonString: string = await getAiResponse(extractedText);
      const parsedJson: JSON = JSON.parse(jsonString);

      return {
        message: "OK",
        isSuccess: true,
        content: parsedJson,
      };
    } catch (error: any) {
      return {
        message: error?.message || "Failed to parse resume",
        isSuccess: false,
        content: null,
      };
    }
  }

  private async convertPdfToMarkdown(file: File): Promise<string> {
    try {
      const arrayBuffer = await file.arrayBuffer();
      const markdown = await pdf2md(arrayBuffer);
      
      return markdown;
    } catch (error: any) {
      console.error("Error converting PDF to markdown:", error);
      throw new Error("PDF conversion failed.");
    }
  }

  private async parseWithAI (markdown: string) {
    try {
      
    } catch (error) {
      console.error("Error parsing markdown with AI:", error);
      throw new Error("Markdown with AI parsing failed.");
    }
  }

}

export default new CandidateServices();
