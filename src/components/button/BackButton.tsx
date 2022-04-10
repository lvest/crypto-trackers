import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  cursor: pointer;
`;

function BackButton() {
  const navigate = useNavigate();

  return <Wrapper onClick={() => navigate(-1)}> &larr;</Wrapper>;
}

export default BackButton;
