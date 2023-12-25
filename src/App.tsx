import { useState } from "react";
import styles from "./App.module.css";
import PollWidget from "./PollWidget/PollWidget";
import { callSubmitPollAPI, pollData } from "./backend/backend";
import { PollResult } from "./PollWidget/PollWidget.type";

function App() {
  const [pollResult, setPollResult] = useState<PollResult[]>([]);

  const submitPoll = async (optionId: number) => {
    const response: PollResult[] = await callSubmitPollAPI(optionId);
    setPollResult(response);
  }

  return (
    <div className={styles.container}>
      <PollWidget 
        poll={pollData} 
        pollResult={pollResult}
        submitHandler={submitPoll}
      />
    </div>
  )
}

export default App;