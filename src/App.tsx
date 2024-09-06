import styled from 'styled-components';
import Header from './componets/Header';
import Display from './componets/Display';
import Counter from './componets/Counter';
import { useState, useEffect } from 'react';
import LogIn from './componets/LogIn';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(100%);
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  margin: 0;
`;

function App() {
  const [display, setDisplay] = useState<number>(0);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem('savedUserName');
    if (savedName) {
      const parsedName = JSON.parse(savedName);
      setUserName(parsedName);

      const savedDisplayNumber = localStorage.getItem(
        `displayNumber_${parsedName}`
      );
      if (savedDisplayNumber) {
        setDisplay(JSON.parse(savedDisplayNumber));
      }
    }
  }, []);

  useEffect(() => {
    if (userName) {
      localStorage.setItem(
        `displayNumber_${userName}`,
        JSON.stringify(display)
      );
    }
  }, [display, userName]);

  const handleIncrement = (): void => {
    setDisplay(prev => prev + 1);
  };

  const handleDecrement = (): void => {
    setDisplay(prev => prev - 1);
  };

  return (
    <StyledDiv>
      {!userName && <LogIn updateFunction={setUserName} />}
      {userName && (
        <>
          <Header />
    
          <Display updateFunction={display} />
          <Counter
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </>
      )}
    </StyledDiv>
  );
}

export default App;
