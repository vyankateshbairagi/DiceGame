import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSel from "./NumberSel";
import RollDice from "./RollDice";
import { useState, useEffect } from "react";
import { Button, Outlined } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, SetCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [rule, SetRules] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);

  // Load high score and best streak from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem('diceGameHighScore');
    const savedBestStreak = localStorage.getItem('diceGameBestStreak');
    if (savedHighScore) setHighScore(parseInt(savedHighScore));
    if (savedBestStreak) setBestStreak(parseInt(savedBestStreak));
  }, []);

  // Update high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('diceGameHighScore', score.toString());
      if (score > 0) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 3000);
      }
    }
  }, [score]);

  // Update best streak
  useEffect(() => {
    if (streak > bestStreak) {
      setBestStreak(streak);
      localStorage.setItem('diceGameBestStreak', streak.toString());
    }
  }, [streak]);

  const GenRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You Have not selected a Number !!");
      return;
    }
    
    setIsRolling(true);
    setError("");
    
    // Simulate dice rolling animation
    let rollCount = 0;
    const rollInterval = setInterval(() => {
      SetCurrentDice(GenRandomNum(1, 7));
      rollCount++;
      if (rollCount >= 10) {
        clearInterval(rollInterval);
        const randomNumber = GenRandomNum(1, 7);
        SetCurrentDice(randomNumber);
        
        const isWin = selectedNumber === randomNumber;
        if (isWin) {
          setScore((prev) => prev + randomNumber);
          setStreak((prev) => prev + 1);
          setGameHistory((prev) => [{result: 'win', number: randomNumber, points: randomNumber}, ...prev.slice(0, 4)]);
        } else {
          setScore((prev) => Math.max(0, prev - 2));
          setStreak(0);
          setGameHistory((prev) => [{result: 'lose', number: randomNumber, points: -2}, ...prev.slice(0, 4)]);
        }
        
        setSelectedNumber(undefined);
        setIsRolling(false);
      }
    }, 100);
  };
  
  const reset = () => {
    setScore(0);
    setStreak(0);
    setGameHistory([]);
    SetCurrentDice(1);
    setSelectedNumber(undefined);
  };
  
  return (
    <MainContaner>
      {showCelebration && <Celebration>🎉 New High Score! 🎉</Celebration>}
      
      <StatsBar>
        <StatCard>
          <StatLabel>High Score</StatLabel>
          <StatValue>🏆 {highScore}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Current Streak</StatLabel>
          <StatValue>🔥 {streak}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Best Streak</StatLabel>
          <StatValue>⭐ {bestStreak}</StatValue>
        </StatCard>
      </StatsBar>
      
      <div className="topSection">
        <TotalScore score={score} />
        <NumberSel
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          disabled={isRolling}
        />
      </div>
      
      <RollDice 
        currentDice={currentDice} 
        roleDice={roleDice} 
        isRolling={isRolling}
      />
      
      {gameHistory.length > 0 && (
        <HistorySection>
          <h3>Recent Rolls</h3>
          <HistoryList>
            {gameHistory.map((item, index) => (
              <HistoryItem key={index} result={item.result}>
                <span className="number">{item.number}</span>
                <span className={`points ${item.result}`}>
                  {item.points > 0 ? '+' : ''}{item.points}
                </span>
              </HistoryItem>
            ))}
          </HistoryList>
        </HistorySection>
      )}
      
      <div className="btns">
        <Outlined onClick={reset}>🔄 Reset Game</Outlined>
        <Button onClick={() => SetRules((prev) => !prev)}>
          {rule ? "❌ Hide" : "📜 Show"} Rules
        </Button>
      </div>

      {rule && <Rules />}
    </MainContaner>
  );
};

export default GamePlay;

const Celebration = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: 800;
  color: #ffd700;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  z-index: 1000;
  animation: pulse 0.5s ease-in-out infinite;
  background: rgba(0, 0, 0, 0.8);
  padding: 30px 60px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 15px 30px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const HistorySection = styled.div`
  max-width: 500px;
  margin: 30px auto;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  h3 {
    text-align: center;
    color: #333;
    margin-bottom: 15px;
    font-size: 20px;
  }
`;

const HistoryList = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  border-radius: 10px;
  background: ${props => props.result === 'win' ? 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' : 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'};
  min-width: 60px;
  
  .number {
    font-size: 24px;
    font-weight: 700;
    color: #333;
  }
  
  .points {
    font-size: 14px;
    font-weight: 600;
    margin-top: 5px;
    
    &.win { color: #059669; }
    &.lose { color: #dc2626; }
  }
`;

const MainContaner = styled.main`
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  
  .topSection {
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
  }
  
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  }
  
  @media (max-width: 768px) {
    padding: 20px 15px;
    margin: 0;
    
    .topSection {
      flex-direction: column;
      align-items: center;
    }
  }
`;
