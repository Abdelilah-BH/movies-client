import { Layout, Button, Menu, Drawer, Row, Col, Input } from "antd";
import { MenuOutlined, HeartOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useState } from "react";
import { destroyCookie } from "nookies";
import Router from "next/router";
import { useWindowSize } from "../../helper";

const { Header } = Layout;

function HeaderComponent() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { user, categories } = useSelector((state) => state);
  const onCloseDrawer = () => setVisibleMenu(false);
  const onClickMenuDrawer = () => setVisibleMenu(!visibleMenu);
  const handleLogout = () => {
    destroyCookie(null, "token");
    Router.push("/login");
  };
  const size = useWindowSize();
  return (
    <Row>
      <Header className="header">
        <Col md={8} className="menu">
          {size.width <= 767 ? (
            <>
              <Button type="link" onClick={onClickMenuDrawer} className="btn-menu">
                <MenuOutlined style={{ fontSize: "26px" }} />
              </Button>
              <Drawer
                placement="top"
                closable={false}
                onClose={onCloseDrawer}
                visible={visibleMenu}
                style={{ zIndex: 1, paddingTop: 40, height: "auto" }}
                bodyStyle={{ padding: "20px 0px 0px" }}
              >
                <Menu mode="inline">
                  {categories.data.map((el, i) => (
                    <Menu.Item key={i} style={{ textAlign: "center" }}>
                      {el.name}
                    </Menu.Item>
                  ))}
                </Menu>
              </Drawer>
            </>
          ) : null}
          <div className="logo-content">
            <Link href="/" as="/">
              <a>
                <img src="/film.png" className="logo" />
              </a>
            </Link>
          </div>
        </Col>
        {size.width > 767 ? (
          <Col md={8}>
            <Input.Search
              placeholder="Rechercher un film"
              onSearch={(value) => console.log(value)}
              enterButton
              style={{ padding: 5 }}
            />
          </Col>
        ) : null}
        <Col md={8} className="p-r">
          {!user.isAuth ? (
            <div>
              <Link href="/login" as="/login">
                <a>
                  <Button type="primary" style={{ marginRight: 5 }}>
                    Sign in
                  </Button>
                </a>
              </Link>
            </div>
          ) : (
            <>
              <Button type="link" className="btn-menu">
                <HeartOutlined style={{ fontSize: "26px", color: "#eb2f96" }} />
              </Button>
              <Button type="primary" danger style={{ marginRight: 5 }} onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Col>
      </Header>
    </Row>
  );
}

export default HeaderComponent;
