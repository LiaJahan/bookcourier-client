import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useRole = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] =
    useState(true);

  useEffect(() => {
    if (!user?.email) {
      setRole(null);
      setRoleLoading(false);
      return;
    }

    axiosPublic
      .get(`/users/role/${user.email}`)
      .then((res) => {
        setRole(res.data.role);
        setRoleLoading(false);
      })
      .catch(() => {
        setRoleLoading(false);
      });
  }, [user, axiosPublic]);

  return { role, roleLoading };
};

export default useRole;