import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
import TestButton from './testButton/testButton';
import TestHeader from './testHeader/testHeader';

ReactDOM.render(
  <StrictMode>
    <TestHeader />
    <TestButton />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
