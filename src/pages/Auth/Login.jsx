import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">

        <div className="card-body">

          <h2 className="text-3xl font-bold text-center">
            Login
          </h2>

          <form
            onSubmit={handleLogin}
            className="space-y-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            <button className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            Continue With Google
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;