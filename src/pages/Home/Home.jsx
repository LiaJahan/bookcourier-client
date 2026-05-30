// const Home = () => {
//   return <h1>Home Page</h1>;
// };

// export default Home;

import useRole from "../../hooks/useRole";

const Home = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Role: {role}</h2>
    </div>
  );
};

export default Home;