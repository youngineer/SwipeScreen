// Core Types
export type QuestionDifficulty = "easy" | "medium" | "hard";
export type InterviewStatus = "not-started" | "in-progress" | "completed";

// Service Response
export interface IServiceResponse {
    message: string;
    isSuccess: boolean;
    content: any;
}

export interface ICandidateServices {
    parseResume(file: File): Promise<IServiceResponse>;
}

// Minimalistic Models for Assignment Requirements
export interface ICandidate {
    id: number;
    name: string;
    email: string;
    phone: string;
    resumeText: string;
    aiSummary: string;
    status: InterviewStatus;
    createdAt: Date;
    completedAt?: Date;
    interviewHistory: IInterview[];
}


export interface IQuestion {
    id: string;
    question: string;
    difficulty: QuestionDifficulty;
    timeLimit: number;
    answer?: string;
    score?: number;
}

export interface IInterview {
    questionList: IQuestion[];
    currentQuestionIndex: number;
    totalScore?: number;
    isComplete: boolean;
    startedAt?: Date;
    completedAt?: Date;
    aiInterviewSummary?: string;
}