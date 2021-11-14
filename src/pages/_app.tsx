import 'reflect-metadata';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default App
