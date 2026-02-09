import styled from "styled-components"
import { Button } from "../styled/Button"

const HomePage = ({toggle}) => {
  return (
    <Container>
      <div className="background-animation">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
      
      <ContentWrapper>
        <div className="dice-image">
          <img src="./Homepage/dices.png" alt="Dice Game" />
        </div>
        <div className="content">
          <h1>🎲 Dice Game</h1>
          <p className="subtitle">Test your luck and strategy!</p>
          <div className="features">
            <span className="feature">🏆 Track High Scores</span>
            <span className="feature">🔥 Build Streaks</span>
            <span className="feature">⚡ Fast & Fun</span>
          </div>
          <Button onClick={toggle}>🎮 Play Now</Button>
        </div>
      </ContentWrapper>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  
  .background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
  }
  
  .circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: float 6s ease-in-out infinite;
  }
  
  .circle1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  .circle2 {
    width: 200px;
    height: 200px;
    top: 60%;
    right: 10%;
    animation-delay: 2s;
  }
  
  .circle3 {
    width: 150px;
    height: 150px;
    bottom: 10%;
    left: 40%;
    animation-delay: 4s;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  display: flex;
  gap: 60px;
  align-items: center;
  padding: 40px;
  
  .dice-image {
    flex: 1;
    animation: float 3s ease-in-out infinite;
    
    img {
      width: 100%;
      max-width: 500px;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
    }
  }
  
  .content {
    flex: 1;
    text-align: center;
    animation: slideIn 0.8s ease-out;
    
    h1 {
      font-size: 96px;
      font-weight: 800;
      background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
      text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .subtitle {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 30px;
      font-weight: 300;
    }
    
    .features {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    
    .feature {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      padding: 10px 20px;
      border-radius: 25px;
      color: white;
      font-size: 14px;
      font-weight: 500;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    button {
      margin-top: 20px;
      font-size: 20px;
      padding: 15px 50px;
      animation: pulse 2s ease-in-out infinite;
    }
  }
  
  @media (max-width: 968px) {
    flex-direction: column;
    .content h1 {
      font-size: 64px;
    }
  }
`
