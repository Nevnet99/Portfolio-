import StyleProvider from "@contexts/StyleProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}
