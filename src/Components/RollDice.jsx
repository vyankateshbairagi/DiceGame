import styled from "styled-components";

const RollDice = ({currentDice, roleDice, isRolling}) => {
  return (
    <DiceContainer>
      <DiceWrapper 
        className={isRolling ? 'rolling' : ''} 
        onClick={isRolling ? null : roleDice}
        disabled={isRolling}
      >
        <img src={`/dice/${currentDice}.png`} alt={`dice ${currentDice}`} />
        {isRolling && <RollingOverlay>Rolling...</RollingOverlay>}
      </DiceWrapper>
      <Instruction>
        {isRolling ? '🎲 Rolling...' : '👆 Click on Dice to Roll'}
      </Instruction>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  animation: slideIn 0.5s ease-out 0.4s both;
`;

const DiceWrapper = styled.div`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: transform 0.3s ease;
  position: relative;
  padding: 30px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.5);
  
  &:hover:not(.rolling) {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 20px 45px rgba(102, 126, 234, 0.4);
  }
  
  &:active:not(.rolling) {
    transform: scale(0.95);
  }
  
  &.rolling {
    animation: rollDice 0.1s linear infinite;
  }
  
  img {
    display: block;
    width: 200px;
    height: 200px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  }
`;

const RollingOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(102, 126, 234, 0.95);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  animation: pulse 0.5s ease-in-out infinite;
`;

const Instruction = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 30px;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
`;
