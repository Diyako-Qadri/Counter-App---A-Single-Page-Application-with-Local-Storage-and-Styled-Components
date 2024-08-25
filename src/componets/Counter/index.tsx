import styled from 'styled-components';
import screens from '../../utils/breakpoints';
type HandleClickProps = {
  handleIncrement: () => void;
  handleDecrement: () => void;
};

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 calc(20% - 24px);
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  padding: 20px;
  max-width: 100%;
  @media screen and (${screens.md}) {
    gap: 60px;
    margin-top: 30px;
  }
`;

const StyledCountUp = styled.div`
  background-color: #03db03;
  border-radius: 10px;
  text-align: center;
  font-size: 10rem;
  width: 70%;
  max-width: 500px;
  cursor: pointer;
`;

const StyledCountDown = styled.div`
  background-color: #fc2121;
  text-align: center;
  border-radius: 10px;
  font-size: 10rem;
  width: 70%;
  max-width: 500px;
  cursor: pointer;
`;

const Counter = ({ handleIncrement, handleDecrement }: HandleClickProps) => {
  return (
    <StyledDiv>
      <StyledCountUp onClick={handleIncrement}>+</StyledCountUp>
      <StyledCountDown onClick={handleDecrement}>-</StyledCountDown>
    </StyledDiv>
  );
};

export default Counter;
