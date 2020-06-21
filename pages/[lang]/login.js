import Login from '../../components/forms/login';

export default function Singin() {
  return (
    <div className="container-form-auth">
      <div className="header-auth p-c">
        <img src="https://img.icons8.com/doodle/64/000000/popcorn.png" />
        <span style={{ fontSize: 20, color: "#00263b", fontFamily: "roboto" }}>Login</span>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}


Singin.getInitialProps = async () => {
  return {};
};