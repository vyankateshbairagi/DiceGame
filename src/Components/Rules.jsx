import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <RulesTitle>📜 How to Play Dice Game</RulesTitle>
      <RulesList>
        <RuleItem>
          <RuleIcon>🔢</RuleIcon>
          <RuleText>
            <strong>Step 1:</strong> Select any number from 1 to 6
          </RuleText>
        </RuleItem>
        <RuleItem>
          <RuleIcon>🎲</RuleIcon>
          <RuleText>
            <strong>Step 2:</strong> Click on the dice image to roll
          </RuleText>
        </RuleItem>
        <RuleItem>
          <RuleIcon>✅</RuleIcon>
          <RuleText>
            <strong>Win:</strong> If your selected number matches the dice, you earn points equal to the dice number!
          </RuleText>
        </RuleItem>
        <RuleItem>
          <RuleIcon>❌</RuleIcon>
          <RuleText>
            <strong>Lose:</strong> If you guess wrong, 2 points will be deducted
          </RuleText>
        </RuleItem>
        <RuleItem>
          <RuleIcon>🔥</RuleIcon>
          <RuleText>
            <strong>Streak:</strong> Win consecutively to build your streak!
          </RuleText>
        </RuleItem>
      </RulesList>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  max-width: 800px;
  margin: 40px auto;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  animation: slideIn 0.5s ease-out;
`;

const RulesTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const RulesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RuleItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 12px;
  transition: transform 0.3s ease, background 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    background: rgba(102, 126, 234, 0.1);
  }
`;

const RuleIcon = styled.div`
  font-size: 28px;
  flex-shrink: 0;
`;

const RuleText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  
  strong {
    color: #667eea;
    font-weight: 700;
  }
`;
