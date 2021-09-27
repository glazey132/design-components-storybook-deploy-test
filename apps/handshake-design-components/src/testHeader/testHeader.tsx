import styled from 'styled-components';

const StyledTestHeader = styled.div`
  header {
    background-color: hotpink;
  }

  .github-star-container {
    margin-top: 12px;
    line-height: 20px;
  }
`;

export function TestHeader() {
  return (
    <StyledTestHeader>
      <header>
          <p>I'm a header</p>
      </header>
    </StyledTestHeader>
  );
}

export default TestHeader;
