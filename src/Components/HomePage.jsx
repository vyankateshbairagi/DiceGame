import styled from "styled-components"
import { Button } from "../styled/Button"

const HomePage = ({toggle}) => {
  return (
    <Container>
      <BackgroundAnimation>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </BackgroundAnimation>
      
      {/* Navigation */}
      <NavBar>
        <Logo>🎲 DiceMaster</Logo>
        <NavLinks>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-to-play">How to Play</NavLink>
        </NavLinks>
      </NavBar>

      {/* Hero Section */}
      <HeroSection>
        <div className="hero-content">
          <MainTitle>
            <span className="line1">Roll the Dice,</span>
            <span className="line2">Master Your Luck</span>
          </MainTitle>
          
          <Subtitle>
            Experience the ultimate dice game with stunning visuals, real-time scoring, and addictive gameplay
          </Subtitle>

          <CTAButton>
            <Button onClick={toggle}>
              <span className="icon">🎮</span>
              Play Now
            </Button>
            <SecondaryButton onClick={toggle}>
              Watch Demo
            </SecondaryButton>
          </CTAButton>

          <QuickStats>
            <Stat>
              <StatValue>∞</StatValue>
              <StatLabel>Unlimited Games</StatLabel>
            </Stat>
            <Stat>
              <StatValue>🏆</StatValue>
              <StatLabel>Track Records</StatLabel>
            </Stat>
            <Stat>
              <StatValue>⚡</StatValue>
              <StatLabel>Instant Feedback</StatLabel>
            </Stat>
          </QuickStats>
        </div>

        <HeroVisual>
          <DiceImageContainer>
            <img src="./Homepage/dices.png" alt="Dice Game" />
            <GlowEffect></GlowEffect>
          </DiceImageContainer>
        </HeroVisual>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection id="features">
        <SectionTitle>
          <h2>Why You'll Love It</h2>
          <Divider></Divider>
        </SectionTitle>

        <FeaturesGrid>
          <FeatureCard>
            <CardIcon>🏆</CardIcon>
            <CardTitle>High Score Tracking</CardTitle>
            <CardDescription>
              Never forget your best score! All your records are saved locally and instantly accessible.
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <CardIcon>🔥</CardIcon>
            <CardTitle>Win Streaks</CardTitle>
            <CardDescription>
              Build impressive winning streaks and challenge yourself to reach new heights of success.
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <CardIcon>✨</CardIcon>
            <CardTitle>Stunning UI</CardTitle>
            <CardDescription>
              Beautiful glassmorphic design with smooth animations and delightful interactions.
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <CardIcon>📊</CardIcon>
            <CardTitle>Game Statistics</CardTitle>
            <CardDescription>
              Track your win rate, total rolls, and detailed game history at a glance.
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <CardIcon>⚡</CardIcon>
            <CardTitle>Fast & Responsive</CardTitle>
            <CardDescription>
              Lightning-fast gameplay with zero lag. Play on any device, anywhere, anytime.
            </CardDescription>
          </FeatureCard>

          <FeatureCard>
            <CardIcon>🎯</CardIcon>
            <CardTitle>Fair Play</CardTitle>
            <CardDescription>
              Completely random dice rolls with transparent mechanics for 100% fair gameplay.
            </CardDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      {/* How to Play Section */}
      <HowToPlaySection id="how-to-play">
        <SectionTitle>
          <h2>How to Play</h2>
          <Divider></Divider>
        </SectionTitle>

        <StepsContainer>
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>Choose Your Number</StepTitle>
            <StepDescription>
              Select any number from 1 to 6 that you think will be rolled
            </StepDescription>
          </Step>

          <Arrow>→</Arrow>

          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>Roll the Dice</StepTitle>
            <StepDescription>
              Click the dice to roll and find out your fate
            </StepDescription>
          </Step>

          <Arrow>→</Arrow>

          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>Get Your Reward</StepTitle>
            <StepDescription>
              Match your guess to earn points or lose 2 points
            </StepDescription>
          </Step>
        </StepsContainer>
      </HowToPlaySection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Roll?</CTATitle>
          <CTASubtitle>Start playing now and become the Dice Master!</CTASubtitle>
          <Button onClick={toggle}>
            <span className="icon">🚀</span>
            Launch Game
          </Button>
        </CTAContent>
      </CTASection>

      {/* Footer */}
      <Footer>
        <p>🎲 Made with ❤️ | © 2026 DiceMaster | All Rights Reserved</p>
      </Footer>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`

const BackgroundAnimation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;

  .circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: float 8s ease-in-out infinite;
    filter: blur(40px);
  }

  .circle1 {
    width: 400px;
    height: 400px;
    top: -10%;
    left: -5%;
    animation-delay: 0s;
    background: rgba(102, 126, 234, 0.15);
  }

  .circle2 {
    width: 300px;
    height: 300px;
    top: 40%;
    right: -8%;
    animation-delay: 2s;
    background: rgba(240, 147, 251, 0.15);
  }

  .circle3 {
    width: 250px;
    height: 250px;
    bottom: 10%;
    left: 20%;
    animation-delay: 4s;
    background: rgba(79, 172, 254, 0.15);
  }

  .circle4 {
    width: 200px;
    height: 200px;
    bottom: 30%;
    right: 10%;
    animation-delay: 3s;
    background: rgba(67, 233, 123, 0.15);
  }
`

const NavBar = styled.nav`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`

const Logo = styled.div`
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const NavLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: white;
    
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transition: width 0.3s ease;
  }
`

const HeroSection = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 40px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 40px 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    gap: 40px;
  }
`

const MainTitle = styled.h1`
  font-size: 72px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 30px;
  color: white;

  .line1 {
    display: block;
    background: linear-gradient(135deg, #fff 0%, #fbbf24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: slideInLeft 0.8s ease-out;
  }

  .line2 {
    display: block;
    background: linear-gradient(135deg, #fbbf24 0%, #f093fb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: slideInRight 0.8s ease-out 0.2s both;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }
`

const Subtitle = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 500px;
  animation: slideIn 0.8s ease-out 0.3s both;

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    font-size: 18px;
  }
`

const CTAButton = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
  animation: slideIn 0.8s ease-out 0.4s both;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }
`

const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.95);
  color: #667eea;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 1);
  }

  &:active {
    transform: translateY(-1px);
  }
`

const QuickStats = styled.div`
  display: flex;
  gap: 40px;
  animation: slideIn 0.8s ease-out 0.5s both;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const StatValue = styled.div`
  font-size: 42px;
  font-weight: 800;
`

const StatLabel = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  text-align: center;
`

const HeroVisual = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const DiceImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  animation: float 3s ease-in-out infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.3));
    position: relative;
    z-index: 2;
  }
`

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
  filter: blur(40px);
`

const FeaturesSection = styled.section`
  position: relative;
  z-index: 1;
  padding: 80px 40px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 48px;
    font-weight: 800;
    background: linear-gradient(135deg, #fff 0%, #fbbf24 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 36px;
    }
  }
`

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  margin: 0 auto;
  border-radius: 2px;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 30px;
  border-radius: 20px;
  transition: all 0.3s ease;
  animation: slideIn 0.6s ease-out;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  }
`

const CardIcon = styled.div`
  font-size: 48px;
  margin-bottom: 15px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
`

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
`

const CardDescription = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`

const HowToPlaySection = styled.section`
  position: relative;
  z-index: 1;
  padding: 80px 40px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`

const Step = styled.div`
  flex: 1;
  min-width: 250px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
    border-color: rgba(255, 255, 255, 0.4);
  }
`

const StepNumber = styled.div`
  font-size: 48px;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
`

const StepTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
`

const StepDescription = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`

const Arrow = styled.div`
  font-size: 32px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 800;

  @media (max-width: 768px) {
    display: none;
  }
`

const CTASection = styled.section`
  position: relative;
  z-index: 1;
  padding: 80px 40px;
  text-align: center;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.15) 100%);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  margin: 60px 40px;
  max-width: 1300px;

  @media (max-width: 768px) {
    padding: 60px 20px;
    margin: 40px 20px;
  }
`

const CTAContent = styled.div`
  animation: slideIn 0.8s ease-out;
`

const CTATitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #fbbf24, #f093fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const CTASubtitle = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const Footer = styled.footer`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 30px 20px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`
