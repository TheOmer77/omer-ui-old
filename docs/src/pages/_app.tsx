import type { AppProps } from 'next/app';

import '@theomer77/omer-ui-components/src/styles/index.css'; // temp!! will be in dist
import '@fontsource/figtree/variable.css';
import 'styles/index.css';
import 'styles/theme.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
);
export default App;
