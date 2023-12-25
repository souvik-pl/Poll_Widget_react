import { PollData, PollResult } from "../PollWidget/PollWidget.type";

export const pollData: PollData = {
    question: "What is your favorite programming language",
    options: [
        {
            id: 101,
            value: "Javascript"
        },
        {
            id: 102,
            value: "Java"
        },
        {
            id: 103,
            value: "Go"
        }
    ]
};

const pollSubmissionResult: PollResult[] = [
    {
        id: 101,
        value: "Javascript",
        isSelected: false,
        percentage: 60
    },
    {
        id: 102,
        value: "Java",
        isSelected: false,
        percentage: 25
    },
    {
        id: 103,
        value: "Go",
        isSelected: false,
        percentage: 15
    }
];

export async function callSubmitPollAPI(optionId: number): Promise<PollResult[]> {
    return new Promise((resolve) => {
        const index = pollSubmissionResult.findIndex(ele => ele.id === optionId);
        pollSubmissionResult[index].isSelected = true;
        setTimeout(() => {
            resolve(pollSubmissionResult);
        }, 1000);
    });
}