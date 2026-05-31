import { useContext } from "react";

import { AuthContext } from "../../../providers/AuthProvider";
import useRole from "../../../hooks/useRole";

const MyProfile = () => {
  const { user, updateUserProfile } =
    useContext(AuthContext);

  const { role } = useRole();

  const handleUpdateProfile = async (
    e
  ) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photoURL =
      form.photoURL.value;

    try {
      await updateUserProfile(
        name,
        photoURL
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold mb-8">
          My Profile
        </h2>

        <div className="card bg-base-100 shadow-xl">

          <div className="card-body items-center text-center">

            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="Profile"
                />

              </div>
            </div>

            <h2 className="text-2xl font-bold mt-4">
              {user?.displayName ||
                "No Name"}
            </h2>

            <p className="text-base-content/70">
              {user?.email}
            </p>

            <div className="divider"></div>

            <div className="grid md:grid-cols-2 gap-6 w-full">

              <div className="bg-base-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">
                  Account Role
                </h3>

                <p className="badge badge-primary badge-lg">
                  {role || "user"}
                </p>
              </div>

              <div className="bg-base-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">
                  Account Status
                </h3>

                <p className="badge badge-success badge-lg">
                  Active
                </p>
              </div>

            </div>

            <button
              className="btn btn-primary mt-6"
              onClick={() =>
                document
                  .getElementById(
                    "edit_profile_modal"
                  )
                  .showModal()
              }
            >
              Edit Profile
            </button>

          </div>

        </div>

      </div>

      <dialog
        id="edit_profile_modal"
        className="modal"
      >
        <div className="modal-box">

          <h3 className="font-bold text-xl mb-4">
            Edit Profile
          </h3>

          <form
            onSubmit={
              handleUpdateProfile
            }
            className="space-y-4"
          >

            <input
              type="text"
              name="name"
              defaultValue={
                user?.displayName
              }
              placeholder="Name"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="photoURL"
              defaultValue={
                user?.photoURL
              }
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />

            <button className="btn btn-primary w-full">
              Update Profile
            </button>

          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">
                Close
              </button>
            </form>
          </div>

        </div>
      </dialog>
    </>
  );
};

export default MyProfile;