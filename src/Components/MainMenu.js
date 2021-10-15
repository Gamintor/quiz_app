import React, { useContext } from "react";
import { quizContext } from "../Helpers/Contexts";
import "../App.css";

export default function MainMenu() {
    const { setGameState } = useContext(quizContext);

    return (
        <div className="menu">
            <button onClick={() => setGameState("quiz")}>Start Quiz</button>
        </div>
    );
}
