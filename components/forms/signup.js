import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { Register_action } from '../../redux/action/user';

export default function SignupForm() {
  const dispatch = useDispatch();

  const handleRegister = values => {
    dispatch(Register_action({ username: values.first_name, email: values.email, password: values.password }));
  };

  return (
    <Form layout="vertical" onFinish={handleRegister}>
      <Form.Item  hasFeedback name="first_name" rules={[{ required: true, message: "S'il vous plais tapez votre nom!" }]}
        label={<span >Nom</span>}>
        <Input size="large" allowClear />
      </Form.Item>
      <Form.Item  hasFeedback name="last_name" rules={[{ required: true, message: "S'il vous plais tapez votre prenom!" }]}
        label={<span >Prenom</span>}>
        <Input size="large" allowClear />
      </Form.Item>
      <Form.Item  hasFeedback name="email" rules={[{ required: true, message: "S'il vous plais tapez votre email!" }]} label={<span  >Email</span>}>
        <Input type="email" size="large" allowClear />
      </Form.Item>
      <Form.Item
        label={<span >Mot de passe</span>}
        name="password"
        hasFeedback
        rules={[{ required: true, message: "S'il vous plais tapez votre mot de passe!" }]}
      >
        <Input.Password size="large" allowClear />
      </Form.Item>
      <Form.Item
        label={<span >Confirmer mot de passe</span>}
        name="confirm_password"
        hasFeedback
        rules={[{ required: true, message: "S'il vous plais tapez votre mot de passe!" }]}
      >
        <Input.Password size="large" allowClear />
      </Form.Item>
      <Form.Item>
        <Button size="large" block type="primary" danger htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}
