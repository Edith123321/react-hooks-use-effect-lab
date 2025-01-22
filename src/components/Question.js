import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Set up the timer
    const timer = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    // Cleanup function to clear timeout on unmount or effect re-run
    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining]);

  // When timeRemaining hits 0
  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10); // Reset timer to 10 seconds
      onAnswered(false); // Trigger callback with false
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h1>{question.text}</h1>
      <p>{timeRemaining} seconds remaining</p>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
