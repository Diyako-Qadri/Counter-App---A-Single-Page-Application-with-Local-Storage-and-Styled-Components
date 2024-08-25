import { SetStateAction, useState } from 'react';
import styled from 'styled-components';

type LogInProps = {
  updateFunction: (userName: string | null) => void;
};

const StyledLogIn = styled.div`
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  text-align: center;

  .login-container {
    background: #fff;
    border-radius: 10px;
    max-width: 700px;
    padding: 24px;
  }
  input {
    padding: 12px;
    border-radius: 5px;
  }

  button {
    background: #333;
    display: block;
    padding: 16px;
    margin: 24px auto;
    color: #fff;
    border-radius: 10px;
    transition: all 0.35s;

    &:hover {
      background: #fff;
      color: #333;
    }
  }
`;
const LogIn = ({ updateFunction }: LogInProps) => {
  const [enteredUserName, setEnteredUserName] = useState<string | null>(null);

  const handleChange = (event: {
    target: { value: SetStateAction<string | null> };
  }) => {
    setEnteredUserName(event.target.value);
    console.log(enteredUserName);
  };

  const handleClick = () => {
    updateFunction(enteredUserName);
    localStorage.setItem('savedUserName', JSON.stringify(enteredUserName));
  };

  return (
    <StyledLogIn>
      <div className="login-container">
        <h2>You must log in to use this site</h2>
        <h4>Enter a username</h4>
        <input onChange={handleChange} placeholder="Enter your user name" />
        <button onClick={handleClick}>Submit</button>
      </div>
    </StyledLogIn>
  );
};

export default LogIn;
