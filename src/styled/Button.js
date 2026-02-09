import styled from "styled-components"

export const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 30px;
  min-width: 220px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transition: left 0.3s ease;
    z-index: 0;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`

export const Outlined = styled(Button)`
  background: rgba(255, 255, 255, 0.95);
  color: #667eea;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  
  &::before {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  &:hover {
    color: white;
    border-color: transparent;
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
  }
`