import React from "react";
import withReduxStore from "../lib/withReduxStore";
import { Provider } from "react-redux";
import Header from "../components/layout/index";
import { parseCookies } from 'nookies';
import { Authetication } from '../redux/action/user';
import { Get_categories } from '../redux/action/category';
import Router from 'next/router';
import "../assets/style.less";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <Provider store={reduxStore}>
      <Header>
        <Component {...pageProps} />
      </Header>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
    await ctx.reduxStore.dispatch(Authetication(parseCookies(ctx).token));
    await ctx.reduxStore.dispatch(Get_categories());
    const { isAuth } = ctx.reduxStore.getState().user;
    if (isAuth && ['/en/signup', '/en/login'].indexOf(ctx.asPath) > -1) {
      if (typeof window !== 'undefined') {
        Router.push('/en');
      } else {
        if (ctx.res) {
          ctx.res.writeHead(301, { Location: '/en' });
          ctx.res.end();
        }
      }
    }
  }
  return { pageProps };
};

export default withReduxStore(MyApp);