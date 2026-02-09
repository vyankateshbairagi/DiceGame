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
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="flex">
        {array.map((value, i) => (
          <Box 
            key={i}
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
            disabled={disabled}
          >
            {value}
          </Box>
        ))}
      </div>
      <Instructions>Select Number</Instructions> 
    </SelectNum>
  );
};

export default NumberSel;

const SelectNum = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  animation: slideIn 0.5s ease-out 0.2s both;
  
  .flex {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    flex-wrap: wrap;
  }
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  animation: shake 0.5s ease;
  border: 1px solid rgba(239, 68, 68, 0.3);
`;

const Instructions = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border-radius: 15px;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 28px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background: ${props => props.isSelected 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'rgba(255, 255, 255, 0.95)'};
  color: ${props => props.isSelected ? 'white' : '#333'};
  border: 2px solid ${props => props.isSelected ? 'transparent' : 'rgba(255, 255, 255, 0.5)'};
  box-shadow: ${props => props.isSelected 
    ? '0 8px 25px rgba(102, 126, 234, 0.6)' 
    : '0 4px 15px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.disabled ? 0.5 : 1};
  
  &:hover {
    transform: ${props => props.disabled ? 'none' : props.isSelected ? 'scale(1.1)' : 'translateY(-5px)'};
    box-shadow: ${props => props.disabled ? 'none' : props.isSelected 
      ? '0 12px 35px rgba(102, 126, 234, 0.8)' 
      : '0 8px 25px rgba(0, 0, 0, 0.2)'};
  }
  
  &:active {
    transform: ${props => props.disabled ? 'none' : 'scale(0.95)'};
  }
`;
