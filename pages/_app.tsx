import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import GlobalStyle from "../styles/globalstyle";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/themes/default';
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component,pageProps, router  }: AppProps) {
  return (
  <ThemeProvider theme={defaultTheme} >
  <GlobalStyle />
  <Component {...pageProps} key={router.asPath}  />

</ThemeProvider>
  )
}
