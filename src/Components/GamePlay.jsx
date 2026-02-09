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
  const [totalRolls, setTotalRolls] = useState(0);
  const [wins, setWins] = useState(0);

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
        setTotalRolls(prev => prev + 1);
        
        if (isWin) {
          setScore((prev) => prev + randomNumber);
          setStreak((prev) => prev + 1);
          setWins(prev => prev + 1);
          setGameHistory((prev) => [{result: 'win', number: randomNumber, points: randomNumber, selected: selectedNumber}, ...prev.slice(0, 4)]);
        } else {
          setScore((prev) => Math.max(0, prev - 2));
          setStreak(0);
          setGameHistory((prev) => [{result: 'lose', number: randomNumber, points: -2, selected: selectedNumber}, ...prev.slice(0, 4)]);
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
    setTotalRolls(0);
    setWins(0);
  };
  
  const winRate = totalRolls > 0 ? Math.round((wins / totalRolls) * 100) : 0;
  
  return (
    <MainContaner>
      {showCelebration && (
        <Celebration>
          <div className="celebration-content">
            <span className="trophy">🏆</span>
            <h2>New High Score!</h2>
            <span className="trophy">🏆</span>
          </div>
        </Celebration>
      )}
      
      <GameHeader>
        <Logo>🎲 Dice Master</Logo>
        <HeaderStats>
          <MiniStat>
            <span className="icon">🎯</span>
            <span className="value">{totalRolls} Rolls</span>
          </MiniStat>
          <MiniStat>
            <span className="icon">✅</span>
            <span className="value">{winRate}% Win</span>
          </MiniStat>
        </HeaderStats>
      </GameHeader>
      
      <StatsGrid>
        <StatCard color="purple">
          <StatIcon>🏆</StatIcon>
          <StatInfo>
            <StatValue>{highScore}</StatValue>
            <StatLabel>High Score</StatLabel>
          </StatInfo>
        </StatCard>
        
        <StatCard color="orange">
          <StatIcon>🔥</StatIcon>
          <StatInfo>
            <StatValue>{streak}</StatValue>
            <StatLabel>Current Streak</StatLabel>
          </StatInfo>
        </StatCard>
        
        <StatCard color="blue">
          <StatIcon>⭐</StatIcon>
          <StatInfo>
            <StatValue>{bestStreak}</StatValue>
            <StatLabel>Best Streak</StatLabel>
          </StatInfo>
        </StatCard>
        
        <StatCard color="green">
          <StatIcon>💎</StatIcon>
          <StatInfo>
            <StatValue>{score}</StatValue>
            <StatLabel>Current Score</StatLabel>
          </StatInfo>
        </StatCard>
      </StatsGrid>
      
      <GameArea>
        <SelectionPanel>
          <NumberSel
            setError={setError}
            error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            disabled={isRolling}
          />
        </SelectionPanel>
        
        <DicePanel>
          <RollDice 
            currentDice={currentDice} 
            roleDice={roleDice} 
            isRolling={isRolling}
          />
        </DicePanel>
      </GameArea>
      
      {gameHistory.length > 0 && (
        <HistorySection>
          <HistoryHeader>
            <h3>📊 Game History</h3>
            <HistoryStats>
              <span className="wins">✅ {wins} Wins</span>
              <span className="losses">❌ {totalRolls - wins} Losses</span>
            </HistoryStats>
          </HistoryHeader>
          <HistoryGrid>
            {gameHistory.map((item, index) => (
              <HistoryCard key={index} result={item.result}>
                <div className="history-header">
                  <span className="badge">{item.result === 'win' ? '✅ WIN' : '❌ LOST'}</span>
                  <span className="points">{item.points > 0 ? '+' : ''}{item.points}</span>
                </div>
                <div className="history-body">
                  <div className="selection">
                    <span className="label">You picked</span>
                    <span className="number">{item.selected}</span>
                  </div>
                  <span className="vs">vs</span>
                  <div className="result">
                    <span className="label">Dice rolled</span>
                    <span className="number">{item.number}</span>
                  </div>
                </div>
              </HistoryCard>
            ))}
          </HistoryGrid>
        </HistorySection>
      )}
      
      <ActionButtons>
        <Outlined onClick={reset}>
          <span className="btn-icon">🔄</span>
          Reset Game
        </Outlined>
        <Button onClick={() => SetRules((prev) => !prev)}>
          <span className="btn-icon">{rule ? "❌" : "📜"}</span>
          {rule ? "Hide" : "Show"} Rules
        </Button>
      </ActionButtons>

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
  z-index: 1000;
  animation: slideIn 0.5s ease-out;
  
  .celebration-content {
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
    padding: 40px 80px;
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(255, 215, 0, 0.5);
    display: flex;
    align-items: center;
    gap: 20px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    
    .trophy {
      font-size: 60px;
      animation: pulse 0.8s ease-in-out infinite;
    }
    
    h2 {
      font-size: 42px;
      font-weight: 800;
      color: #333;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`;

const Logo = styled.h1`
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const HeaderStats = styled.div`
  display: flex;
  gap: 15px;
`;

const MiniStat = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  
  .icon {
    font-size: 18px;
  }
  
  .value {
    color: white;
    font-weight: 600;
    font-size: 14px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const StatCard = styled.div`
  background: ${props => {
    const colors = {
      purple: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      orange: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      blue: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      green: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    };
    return colors[props.color] || colors.purple;
  }};
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  animation: slideIn 0.5s ease-out;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`;

const StatIcon = styled.div`
  font-size: 48px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`;

const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: white;
  line-height: 1;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const GameArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const SelectionPanel = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 40px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideIn 0.6s ease-out;
`;

const DicePanel = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 40px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideIn 0.6s ease-out 0.2s both;
`;

const HistorySection = styled.div`
  margin: 40px 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 30px;
  border-radius: 25px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.6s ease-out 0.4s both;
`;

const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  flex-wrap: wrap;
  gap: 15px;
  
  h3 {
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin: 0;
  }
`;

const HistoryStats = styled.div`
  display: flex;
  gap: 15px;
  
  span {
    background: rgba(255, 255, 255, 0.15);
    padding: 6px 14px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    &.wins { color: #4ade80; }
    &.losses { color: #f87171; }
  }
`;

const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

const HistoryCard = styled.div`
  background: ${props => props.result === 'win' 
    ? 'linear-gradient(135deg, rgba(74, 222, 128, 0.2) 0%, rgba(34, 197, 94, 0.2) 100%)'
    : 'linear-gradient(135deg, rgba(248, 113, 113, 0.2) 0%, rgba(239, 68, 68, 0.2) 100%)'};
  border: 2px solid ${props => props.result === 'win' ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'};
  border-radius: 15px;
  padding: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  .history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    
    .badge {
      background: ${props => props.result === 'win' ? '#4ade80' : '#f87171'};
      color: white;
      padding: 4px 10px;
      border-radius: 10px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    
    .points {
      font-size: 18px;
      font-weight: 800;
      color: ${props => props.result === 'win' ? '#4ade80' : '#f87171'};
    }
  }
  
  .history-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    
    .selection, .result {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      
      .label {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 4px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .number {
        font-size: 24px;
        font-weight: 800;
        color: white;
        background: rgba(255, 255, 255, 0.1);
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    
    .vs {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
      font-weight: 600;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
  
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    
    .btn-icon {
      font-size: 20px;
    }
  }
`;

const MainContaner = styled.main`
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;
