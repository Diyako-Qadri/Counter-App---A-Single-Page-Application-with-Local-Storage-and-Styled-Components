
import styled from "styled-components";

type DisplayProps = {
    updateFunction: number,
}

const StyledDisplay = styled.div`
    background: #e8e8e8;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
    padding: 44px;
    text-align: center;
    max-width: 100%;
    font-size: 8rem;   
`

const Display = ({updateFunction}:DisplayProps) => {

    return (
        <StyledDisplay >
            {updateFunction} 
        </StyledDisplay>
    )
};

export default Display
