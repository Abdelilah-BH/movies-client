import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { FacebookFilled, GoogleSquareFilled, UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Login_action, Register_facebook } from "../../redux/action/user";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(Login_action({ identifier: values.identifier, password: values.password }));
  };

  const handleLoginWithFacebook = () => dispatch(Register_facebook());
  return (
    <Form layout="vertical" name="basic" onFinish={handleSubmit}>
      <Form.Item  name="identifier" label={<span >Email</span>}>
        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>
      <Form.Item
        label={<span >Mot de passe</span>}
        name="password"
        rules={[{ required: true, message: "S'il vous plais tapez votre mot de passe!" }]}
      >
        <Input.Password size="large" prefix={<LockOutlined className="site-form-item-icon" />} />
      </Form.Item>
      <Row gutter={16}>
        <Col xs={16}>
          <Form.Item>
            <Checkbox >Remember me</Checkbox>
          </Form.Item>
        </Col>
        <Col xs={8} style={{ textAlign: "right" }}>
          <Form.Item>
            <Link href="/signup" as="/signup">
              <a >Forget mot de passe</a>
            </Link>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button size="large" block type="danger" htmlType="submit">
          Sgin in
        </Button>
        <Link href="/signup" as="/signup">
          <a >Sign up</a>
        </Link>
      </Form.Item>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item>
            <Button icon={<FacebookFilled />} block size="large" className="c-w btn-facebook" onClick={handleLoginWithFacebook}>
              Facebook
            </Button>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item>
            <Button icon={<GoogleSquareFilled />} className="c-w btn-google" block size="large">
              Google
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
