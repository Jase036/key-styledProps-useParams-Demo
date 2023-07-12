import { Link } from "react-router-dom";

const Home = () => {
  const variable = "special";
  return (
    <>
      <p>What type of button would you like?</p>
      <Link to={`/type/${variable}/vanilla/`}> Special </Link>
      <Link to="/type/normal"> Normal </Link>
    </>
  );
};

export default Home;
