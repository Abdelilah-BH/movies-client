import { Layout, Input, Button } from "antd";
import { useSelector } from "react-redux";
import Header from "./header";
import { useWindowSize } from "../../helper";

const { Footer, Content } = Layout;

// eslint-disable-next-line react/prop-types
function LayoutComponent({ children }) {
  const { data } = useSelector((state) => state.categories);
  const size = useWindowSize();
  return (
    <Layout style={{ background: `#084177` }}>
      <Header />
      <div className="container">
        {size.width <= 767 ? (
          <div>
            <Input.Search
              placeholder="Rechercher un film"
              onSearch={(value) => console.log(value)}
              enterButton
              style={{ padding: 5 }}
            />
          </div>
        ) : (
          <div style={{ border: "1px solid #00263b", margin: "16px 0",padding: 8, background: "rgb(243, 243, 243)" }}>
            {data.length > 0
              ? data.map((el, i) => (
                  <Button type="primary" key={i} style={{ margin: "8px 10px" }}>
                    {el.name}
                  </Button>
                ))
              : null}
          </div>
        )}
        <Content>{children}</Content>
      </div>
      <Footer style={{ background: "#F8F8F8", textAlign: "center", borderTop: "1px solid #000" }}>Footer</Footer>
    </Layout>
  );
}

export default LayoutComponent;
