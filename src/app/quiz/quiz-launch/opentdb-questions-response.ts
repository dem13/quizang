
export interface OpentdbQuestionsResponse {
    response_code: number;
    results: OpentdbQuestion[]
}

interface OpentdbQuestion {
    type: string,
    difficulty: string,
    category: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
} 