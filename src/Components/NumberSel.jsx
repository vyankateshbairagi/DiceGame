import React from "react";
import styled from "styled-components";

const NumberSel = ({setError, error, selectedNumber, setSelectedNumber, disabled}) => {
  const array = [1, 2, 3, 4, 5, 6];
  
  const numberSelectorHandler = (value) => {
    if (!disabled) {
      setSelectedNumber(value);
      setError("");
    }
  }

  return (
    <SelectNum>
      <SectionTitle>Choose Your Number</SectionTitle>
      {error && <ErrorMessage><span className="icon">⚠️</span> {error}</ErrorMessage>}
      <NumberGrid>
        {array.map((value, i) => (
          <Box 
            key={i}
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
            disabled={disabled}
          >
            <span className="number">{value}</span>
          </Box>
        ))}
      </NumberGrid>
    </SelectNum>
  );
};

export default NumberSel;

const SelectNum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  padding: 12px 24px;
  border-radius: 15px;
  margin: 0;
  animation: shake 0.5s ease;
  box-shadow: 0 5px 20px rgba(239, 68, 68, 0.4);
  
  .icon {
    font-size: 20px;
  }
`;

const NumberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Box = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background: ${props => props.isSelected 
    ? 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)' 
    : 'rgba(255, 255, 255, 0.95)'};
  border: 3px solid ${props => props.isSelected ? '#fbbf24' : 'rgba(255, 255, 255, 0.5)'};
  box-shadow: ${props => props.isSelected 
    ? '0 12px 30px rgba(251, 191, 36, 0.5), inset 0 -2px 10px rgba(0, 0, 0, 0.1)' 
    : '0 6px 20px rgba(0, 0, 0, 0.15)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.disabled ? 0.6 : 1};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 18px;
    padding: 3px;
    background: ${props => props.isSelected 
      ? 'linear-gradient(135deg, #fbbf24, #f59e0b, #fbbf24)' 
      : 'transparent'};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: ${props => props.isSelected ? 1 : 0};
    animation: ${props => props.isSelected ? 'pulse 2s ease-in-out infinite' : 'none'};
  }
  
  .number {
    font-weight: 800;
    font-size: 32px;
    color: ${props => props.isSelected ? 'white' : '#333'};
    text-shadow: ${props => props.isSelected ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none'};
  }
  
  &:hover:not([disabled]) {
    transform: ${props => props.isSelected ? 'scale(1.15) rotate(5deg)' : 'translateY(-8px) scale(1.05)'};
    box-shadow: ${props => props.isSelected 
      ? '0 15px 40px rgba(251, 191, 36, 0.6)' 
      : '0 12px 30px rgba(0, 0, 0, 0.25)'};
  }
  
  &:active:not([disabled]) {
    transform: scale(0.95);
  }
  
  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
    
    .number {
      font-size: 28px;
    }
  }
`;
