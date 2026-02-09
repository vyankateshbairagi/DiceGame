import styled from "styled-components";

const RollDice = ({currentDice, roleDice, isRolling}) => {
  return (
    <DiceContainer>
      <SectionTitle>Roll the Dice</SectionTitle>
      <DiceWrapper 
        className={isRolling ? 'rolling' : ''} 
        onClick={isRolling ? null : roleDice}
        disabled={isRolling}
      >
        <img src={`/dice/${currentDice}.png`} alt={`dice ${currentDice}`} />
        {isRolling && (
          <RollingOverlay>
            <span className="spinner">🎲</span>
            <span className="text">Rolling...</span>
          </RollingOverlay>
        )}
      </DiceWrapper>
      <Instruction className={isRolling ? 'rolling' : ''}>
        {isRolling ? '🎲 Rolling the dice...' : '👆 Click the Dice to Roll!'}
      </Instruction>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const DiceWrapper = styled.div`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  padding: 35px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  border: 3px solid rgba(255, 255, 255, 0.6);
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 30px;
    padding: 3px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
    background-size: 400% 400%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover:not(.rolling)::before {
    opacity: 1;
    animation: borderGlow 3s ease infinite;
  }
  
  &:hover:not(.rolling) {
    transform: scale(1.15) rotate3d(1, 1, 0, 10deg);
    box-shadow: 0 25px 60px rgba(102, 126, 234, 0.4);
  }
  
  &:active:not(.rolling) {
    transform: scale(1.05);
  }
  
  &.rolling {
    animation: rollDice 0.1s linear infinite;
  }
  
  img {
    display: block;
    width: 160px;
    height: 160px;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
    user-select: none;
  }
  
  @keyframes borderGlow {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @media (max-width: 480px) {
    padding: 25px;
    
    img {
      width: 120px;
      height: 120px;
    }
  }
`;

const RollingOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  
  .spinner {
    font-size: 48px;
    animation: spin 0.5s linear infinite;
  }
  
  .text {
    color: white;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Instruction = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  text-align: center;
  margin: 0;
  transition: all 0.3s ease;
  
  &.rolling {
    color: #fbbf24;
    animation: pulse 1s ease-in-out infinite;
  }
`;
