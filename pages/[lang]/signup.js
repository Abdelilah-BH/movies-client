import Signup from '../../components/forms/signup';

export default function Register() {
  return (
    <div className="container-form-auth">
      <div className="header-auth p-c">
        <img src="https://img.icons8.com/doodle/64/000000/popcorn.png" />
        <span style={{ fontSize: 20, color: "#00263b", fontFamily: "roboto" }}>Sign up</span>
      </div>
      <div>
        <Signup />
      </div>
    </div>);
}

Register.getInitialProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
