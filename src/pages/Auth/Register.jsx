import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const { createUser, updateUserProfile } =
    useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      const formData = new FormData();

      formData.append("image", image);

      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;

      const imageResponse = await fetch(
        imageUploadUrl,
        {
          method: "POST",
          body: formData,
        }
      );

      const imageData =
        await imageResponse.json();

      const photoURL =
        imageData.data.display_url;

      const result = await createUser(
        email,
        password
      );

      await updateUserProfile(
        name,
        photoURL
      );

      const userInfo = {
        name,
        email,
        photoURL,
        role: "user",
        createdAt: new Date(),
      };

      await axiosPublic.post(
        "/users",
        userInfo
      );

      console.log(result.user);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">
            Register
          </h2>

          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
            />

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

            <input
              type="file"
              name="image"
              className="file-input file-input-bordered w-full"
              required
            />

            <button className="btn btn-primary w-full">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;