import styled from 'styled-components';

export const SeuComponenteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

export const SeuComponenteTitle = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const SeuComponenteButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;