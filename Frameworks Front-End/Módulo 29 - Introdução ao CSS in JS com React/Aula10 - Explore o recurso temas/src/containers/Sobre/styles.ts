import styled from "styled-components"

export const GitHubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  justify-content: start;
  gap: 1rem;
  flex-wrap: wrap;

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`
