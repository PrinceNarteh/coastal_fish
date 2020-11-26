import React, { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import { RecoilRoot } from "recoil";
import App from "next/app";
import GlobalStyle from "../modules/global/components/base/GlobalStyle";
import { LayoutProvider } from "../modules/global/components/Layout";
import NavBar from "../modules/global/components/NavBar";
import Navigation from "../modules/global/components/Navigation";
// import { AppEventProvider } from "../src/global/hooks/useAppEvent";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        {/* <AppEventProvider> */}
        <LayoutProvider>
          <RecoilRoot>
            <GlobalStyle />
            <AnimatePresence exitBeforeEnter>
              {/* <NavBar /> */}
              <Navigation />
              <Component {...pageProps} />
            </AnimatePresence>
          </RecoilRoot>
        </LayoutProvider>
        {/* </AppEventProvider> */}
      </Fragment>
    );
  }
}

export default MyApp;
