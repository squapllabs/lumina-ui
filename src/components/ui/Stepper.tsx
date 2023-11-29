import React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

interface StepperProps {
  steps: string[];
  labels: string[];
  activeStep: number;
  completedSteps: boolean[];
  orientation?: 'horizontal' | 'vertical';
}

const StepperContainer = styled.div<{ orientation?: StepperProps['orientation'] }>`
  display: flex;
  flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
  gap: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StepLabel = styled.div<{ orientation?: StepperProps['orientation']; maxCharItem?: string }>`
  white-space: nowrap;
  margin-top: ${({ orientation }) => (orientation === 'vertical' ? '6px' : '10px')};
  font-size: 11px;
  text-align: ${({ orientation }) => (orientation === 'vertical' ? 'left' : 'center')};
  color: #555;
  padding: 0px;
  width: ${({ maxCharItem }) => maxCharItem ? `${maxCharItem.length * 4}px` : 'auto'};
  ${({ orientation }) =>
    orientation === 'vertical' &&
    css`
      margin: 0 10px;
    `}
`;

const StepContainer = styled.div<{ orientation?: StepperProps['orientation']; active?: boolean }>`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ orientation }) => (orientation === 'vertical' ? 'auto' : '120px')};

  ${({ orientation }) =>
    orientation === 'vertical'
      ? css`
          flex-direction: row;
          margin: 15px 10px;          
        `
      : css`
          flex-direction: column;
          margin: 5px 10px 0 10px;
        `}
`;


const Step = styled.div<{ active?: boolean }>`
  width: 30px;
  height: 30px;
  background-color: ${({ active }) => (active ? '#7f56d9' : '#e9e9e9')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  border: 2px solid #7f56d9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 2;
`;

const StepLine = styled.div<{ orientation?: StepperProps['orientation']; active?: boolean }>`
  flex: 1;
  height: 2px;
  background-color: ${({ active }) => (active ? '#e9e9e9' : '#e9e9e9')};
  margin: ${({ orientation }) => (orientation === 'horizontal' ? '0 50px' : '0 0 0 10px')};
  position: absolute;
  z-index: 1;

  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          top: 30%;
          left: 0;
          transform: translateY(-1px); 
          width: 130%; 
          background-color: lightgray;
        `
      : css`
          width: 2px;
          height: 100%;
          left: 8%;
          top: 35px;
          transform: translateX(-3px);
          background-color: lightgray;
        `};
`;

const Stepper: React.FC<StepperProps & {
  maxCharItem?: string; 
}> = ({
  steps,
  labels,
  activeStep,
  completedSteps,
  orientation = 'horizontal',
}) => {

  const [maxCharItem, setMaxCharItem] = useState<string | undefined>(undefined);
  function findMaxCharItem(items: string[]): string | undefined {
    if (items.length === 0) {
      return undefined; 
    }
  
    let maxItem = items[0];
  
    for (let i = 1; i < items.length; i++) {
      if (items[i].length > maxItem.length) {
        maxItem = items[i];
      }
    }
    return maxItem;
  }

  useEffect(() => {
    const foundMaxCharItem = findMaxCharItem(labels);
    setMaxCharItem(foundMaxCharItem);
  }, [labels]);

    return (
      <div>
        <StepperContainer orientation={orientation}>
          {steps.map((_,index) => (
            <StepContainer key={index} orientation={orientation} active={index === activeStep}>
              <Step active={index === activeStep}>{completedSteps[index] ? '✔' : index + 1}</Step>
              <StepLabel orientation={orientation} maxCharItem={maxCharItem}>{labels[index]}</StepLabel>
              {index < steps.length - 1 && <StepLine orientation={orientation} active={index === activeStep} />}
            </StepContainer>
          ))}
        </StepperContainer>
      </div>
    );
  };

export default Stepper;