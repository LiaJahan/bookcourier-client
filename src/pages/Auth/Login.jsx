import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const { loginUser, googleLogin } =
    useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);

      toast.success("Login successful");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();

      const userInfo = {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        role: "user",
        createdAt: new Date(),
      };

      await axiosPublic.post(
        "/users",
        userInfo
      );

      toast.success("Login successful");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
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