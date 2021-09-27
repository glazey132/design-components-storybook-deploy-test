import { render } from '@testing-library/react';

import testHeader from './testHeader';

describe('testHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<testHeader />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<testHeader />);

    expect(getByText('Welcome to handshake-design-components!')).toBeTruthy();
  });
});
