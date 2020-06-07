import { Menu } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";

export default function MenuSubCategory({ data }) {
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu onClick={handleClick} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline">
      {data.map((el, i) => (
        <Menu.Item key={i}>
          <Link href="/" as="/">
            <a>{el.name}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

MenuSubCategory.propTypes = {
  data: PropTypes.array,
};
