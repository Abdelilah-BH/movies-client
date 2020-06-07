import Head from "next/head";
import { useSelector } from "react-redux";
import ListMoviesCards from "../components/cards/movies";
import { Get_subcategories } from "../redux/action/subcategory";

export default function Home() {
  const { data } = useSelector((state) => state.sub_categories);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ListMoviesCards sub_categories={data}/>
        <ListMoviesCards sub_categories={data}/>
        <ListMoviesCards sub_categories={data}/>
        <ListMoviesCards sub_categories={data}/>
      </main>
    </>
  );
}

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(Get_subcategories());
  return {};
};
