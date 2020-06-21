import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ListMoviesCards from "../../components/cards/movies";
import { Get_subcategories } from "../../redux/action/subcategory";
import { getInitialLocale } from '../../translations/getInitialLocale';
import LocaleSwitcher from "../../components/localeSwitcher";
import { useRouter } from 'next/router';
import withLocale from '../../hocs/withLocale';
import useTranslation from "../../hooks/useTranslation";

function Home() {
  const { data } = useSelector((state) => state.sub_categories);
  const router = useRouter();
  useEffect(() => {
    router.replace('/[lang]', `/${getInitialLocale()}`);
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <LocaleSwitcher />
        </div>
        <h1 style={{ color: "#fff" }}>{t('about')}</h1>
        <ListMoviesCards sub_categories={data} />
        <ListMoviesCards sub_categories={data} />
        <ListMoviesCards sub_categories={data} />
        <ListMoviesCards sub_categories={data} />
      </main>
    </>
  );
}

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(Get_subcategories());
  return {};
};

export default withLocale(Home);