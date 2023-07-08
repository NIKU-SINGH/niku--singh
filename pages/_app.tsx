import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from '../components/Navbar/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Navbar />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
