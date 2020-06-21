import Head from "next/head";
import { useSelector } from "react-redux";
import { Breadcrumb, Row, Col } from "antd";
import ReactPlayer from "react-player";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";
import Descriptions from "../../../components/descriptionsMovie";
import { Get_movie } from "../../../redux/action/movie";
import { Get_subcategories } from "../../../redux/action/subcategory";
import MenuSubCategory from "../../../components/menuSubcategory";

export default function Movie() {
  const data_movie = useSelector((state) => state.movie.data);
  const data_subcategory = useSelector((state) => state.sub_categories.data);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <div className="container-card-list" style={{ padding: 18 }}>
          <Breadcrumb>
            <Link as="/" href="/">
              <a>
                <Breadcrumb.Item>
                  <HomeOutlined />
                </Breadcrumb.Item>
              </a>
            </Link>
            <Breadcrumb.Item>
              <span>Movie</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{data_movie.title}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ margin: "18px 0" }}>
            <Row>
              <Col xs={24} md={6} style={{ textAlign: "center" }}>
                <img src={`http://localhost:1337${data_movie.cover.url}`} />
              </Col>
              <Col  xs={24} md={12}>
                <Descriptions data={data_movie} />
              </Col>
              <Col xs={24} md={6}>
                <MenuSubCategory data={data_subcategory} />
              </Col>
            </Row>
          </div>
          <div>
            <h1>Trailer</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ReactPlayer controls width="100%" height="600px" url={data_movie.trailer} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

Movie.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(Get_movie(query.id));
  await reduxStore.dispatch(Get_subcategories());
  return {};
};
