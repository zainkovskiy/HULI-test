import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'store';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  #__next{
    min-height: 100vh;
  }
`

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;