export type PollOptions = {
    id: number;
    value: string;
};

export type PollData = {
    question: string;
    options: PollOptions[];
};

export type PollResult = {
    id: number;
    value: string;
    isSelected: boolean;
    percentage: number;
}

export type PollProps = {
    poll: PollData;
    pollResult: PollResult[];
    submitHandler: (optionId: number) => void;
};