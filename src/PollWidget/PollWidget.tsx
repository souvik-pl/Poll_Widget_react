import { useState } from "react";
import { PollProps } from "./PollWidget.type";

function PollWidget(props: PollProps) {
    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);

    const submitButtonClickHandler = () => {
        props.submitHandler(102);
    };

    return (
        <div>
            {props.poll.question}
            <button onClick={submitButtonClickHandler}>Submit</button>
        </div>
    )
}

export default PollWidget;