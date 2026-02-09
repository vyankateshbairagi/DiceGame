import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <ScoreCard>
        <ScoreNumber className={score > 0 ? 'positive' : score < 0 ? 'negative' : ''}>
          {score}
        </ScoreNumber>
        <ScoreLabel>Total Score</ScoreLabel>
      </ScoreCard>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  animation: slideIn 0.5s ease-out;
`;

const ScoreCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  backdrop-filter: blur(10px);
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  min-width: 200px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ScoreNumber = styled.h1`
  font-size: 100px;
  line-height: 100px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
  
  &.positive {
    animation: pulse 0.5s ease;
  }
  
  &.negative {
    animation: shake 0.5s ease;
  }
`;

const ScoreLabel = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
