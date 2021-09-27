import { render } from '@testing-library/react';

import testButton from './testButton';

describe('testButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<testButton />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<testButton />);

    expect(getByText('Welcome to handshake-design-components!')).toBeTruthy();
  });
});
