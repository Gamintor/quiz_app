import React, { useContext } from "react";
import { quizContext } from "../Helpers/Contexts";
import "../App.css";
import { questions } from "../Helpers/QuestionList";

const EndScreen = () => {
    const { quizScore, setQuizScore, setGameState } = useContext(quizContext);

    const restartQuiz = () => {
        setQuizScore(0);
        setGameState("menu");
    };

    return (
        <div className="endScreen">
            <h1>Quiz Finished!</h1>
            <h3 className="result">{`${quizScore} / ${questions.length}`}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
};

export default EndScreen;
