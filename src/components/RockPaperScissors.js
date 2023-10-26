import React, { useState } from "react";
import "./rockpaperscissors.css";

const RockPaperScissors = () => {
  const [computerValue, setComputerValue] = useState(null);
  const [userValue, setUserValue] = useState(null);

  const computerValueGenerator = () => {
    return setComputerValue(Math.floor(Math.random() * 3) + 1);
  };

  const showImage = (userValue) => {
    setUserValue(userValue);
    return setTimeout(() => {
      computerValueGenerator();
    }, 1000);
  };

  const results =
    (computerValue === 1 && userValue === 2) ||
    (computerValue === 2 && userValue === 3) ||
    (computerValue === 3 && userValue === 1) ? (
      <div className="lose-result">Computer Win</div>
    ) : (
      <div className="win-result">You Win</div>
    );
  return (
    <div className="container">
    <h1>Rock Paper Scissors Royale</h1>
      <p>Select the image to start the game</p>
      <div className="image-cards">
        <div className="image-card">
          <button onClick={() => showImage(1)}>
            <img src="./assets/rock-paper-scissor-1.png" alt="rock"></img>Rock
          </button>
        </div>
        <div className="image-card">
          <button onClick={() => showImage(2)}>
            <img src="./assets/rock-paper-scissor-2.png" alt="scisorr"></img>
            Scissor
          </button>
        </div>
        <div className="image-card">
          <button onClick={() => showImage(3)}>
            <img src="./assets/rock-paper-scissor-3.png" alt="paper"></img>Paper
          </button>
        </div>
      </div>

      {userValue && (
        <div className="image-card">
          <p>Your choice :</p>
          <img
            src={`./assets/rock-paper-scissor-${userValue}.png`}
            alt=" User Selected Image"
          />
        </div>
      )}

      {computerValue && (
        <div className="image-card">
          <p>Computer choice :</p>
          <img
            src={`./assets/rock-paper-scissor-${computerValue}.png`}
            alt="Computer's choice"
          ></img>
        </div>
      )}

      <div className="result-container">
      {computerValue &&
        (computerValue === userValue ? (
          <div className="tie-result">Tied!</div>
        ) : (
          <div className="result">{results}</div>
        ))}
        </div>
    </div>
  );
};

export default RockPaperScissors;
