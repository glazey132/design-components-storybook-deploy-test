import styled from 'styled-components';

import star from './star.svg';

const StyledTestButton = styled.div`
  button {
    background-color: lime;
  }

  .github-star-container {
    margin-top: 12px;
    line-height: 20px;
  }
`;

export function TestButton() {
  return (
    <StyledTestButton>
      <div className="github-star-badge">
        <img src={star} className="material-icons" alt="" />
        Star
        
          <button className="test-button">TestButton woooo!!!!!</button>
      </div>
    </StyledTestButton>
  );
}

export default TestButton;
