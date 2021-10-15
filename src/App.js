import { useState } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { quizContext } from "./Helpers/Contexts";

function App() {
    const [gameState, setGameState] = useState("menu");
    const [quizScore, setQuizScore] = useState(0);

    return (
        <div className="App">
            <h1 className="title">Quiz App</h1>
            <quizContext.Provider value={{ gameState, setGameState, quizScore, setQuizScore }}>
                {gameState === "menu" && <MainMenu />}
                {gameState === "quiz" && <Quiz />}
                {gameState === "endScreen" && <EndScreen />}
            </quizContext.Provider>
        </div>
    );
}

export default App;
