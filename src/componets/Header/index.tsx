import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #cac292;
  padding: 24px;
  text-align: center;
  font-size: 24px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>Lets count!</div>
    </StyledHeader>
  );
};

export default Header;
