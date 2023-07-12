import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

const Button = () => {
  const { type } = useParams();

  console.log(useParams());
  return (
    <>
      <StyledButton special={type}>{type}</StyledButton>
      <Link to="/">Go back</Link>
    </>
  );
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 15px;
  margin: 30px;
  background-color: ${(props) =>
    props.special === "special" ? "purple" : "grey"};
  color: ${(props) => (props.special === "special" ? "white" : "black")};
`;
export default Button;
