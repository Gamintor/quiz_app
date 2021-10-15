import React, { useContext, useState } from "react";
import { questions } from "../Helpers/QuestionList";
import { quizContext } from "../Helpers/Contexts";
import "../App.css";

const Quiz = () => {
    const { quizScore, setQuizScore, setGameState } = useContext(quizContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (optionChosen === "") return;
        if (questions[currentQuestion].correct === optionChosen) {
            setQuizScore(quizScore + 1);
        }
        setOptionChosen("");
        setCurrentQuestion(currentQuestion + 1);
    };

    const finishQuiz = () => {
        if (optionChosen === "") return;
        if (questions[currentQuestion].correct === optionChosen) {
            setQuizScore(quizScore + 1);
        }
        setGameState("endScreen");
    };

    return (
        <div className="quiz">
            <h1 className="mainQuestion">{questions[currentQuestion].query}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")} className={optionChosen === "A" ? "buttonClicked" : undefined}>
                    {questions[currentQuestion].answerA}
                </button>
                <button onClick={() => setOptionChosen("B")} className={optionChosen === "B" ? "buttonClicked" : undefined}>
                    {questions[currentQuestion].answerB}
                </button>
                <button onClick={() => setOptionChosen("C")} className={optionChosen === "C" ? "buttonClicked" : undefined}>
                    {questions[currentQuestion].answerC}
                </button>
                <button onClick={() => setOptionChosen("D")} className={optionChosen === "D" ? "buttonClicked" : undefined}>
                    {questions[currentQuestion].answerD}
                </button>
            </div>
            {currentQuestion === questions.length - 1 ? (
                <button onClick={finishQuiz} style={{ backgroundColor: "#b71c1c" }}>
                    Finish Quiz
                </button>
            ) : (
                <button onClick={nextQuestion} style={{ backgroundColor: "#4caf50" }}>
                    Next Question
                </button>
            )}
        </div>
    );
};

export default Quiz;
