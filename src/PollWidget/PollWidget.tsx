import { useState } from "react";
import { PollProps } from "./PollWidget.type";
import styles from "./PollWidget.module.css";

function PollWidget(props: PollProps) {
    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);

    const radioButtonClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOptionId(Number(event.target.value));
    }

    const submitButtonClickHandler = () => {
        props.submitHandler(selectedOptionId!);
    };

    return (
        <div className={styles.container}>
            <header>
                {props.poll.question}
            </header>
            {
                props.pollResult.length === 0 ? (
                    <>
                        <main className={styles.main}>
                            {
                                props.poll.options.map(option => (
                                    <label key={option.id} className={styles.option}>
                                        <input
                                            type="radio"
                                            name="poll"
                                            value={option.id}
                                            onChange={radioButtonClickHandler}
                                        />
                                        <span className={styles.option_value}>
                                            {option.value}
                                        </span>
                                    </label>
                                ))
                            }
                        </main>
                        <button
                            className={styles.submit_button}
                            onClick={submitButtonClickHandler}
                            disabled={!selectedOptionId}
                        >
                            Submit
                        </button>
                    </>
                ) : (
                    <main className={styles.main}>
                        {
                            props.pollResult.map(result => (
                                <div 
                                    key={result.id} 
                                    className={`${styles.option} ${styles.result_option}`}
                                >
                                    {result.value} ({result.percentage}%)
                                    <div 
                                        className={
                                            result.isSelected ? 
                                            `${styles.progress_bar} ${styles.selected_progress_bar}` : 
                                            `${styles.progress_bar}`
                                        }
                                        style={{width: `${result.percentage}%`}}
                                    ></div>
                                </div>
                            ))
                        }
                    </main>
                )
            }
        </div>
    )
}

export default PollWidget;