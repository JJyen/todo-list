import { Link } from "react-router-dom"
import styled from 'styled-components';

export const Home = () => {
    return(
        <>
        <HomeContainer>
            <p>TodoList</p>
                <Link to='todos'>
                    <button>작성하기</button>
                </Link>
        </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
width: 500px;
height: 500px;
margin: auto;
margin-top: 12%;
display: flex;
flex-direction: column;
align-items: center;

    p {
        font-size: 70px;
        font-weight: 700;
    }

    button {
        width: 300px;
        height: 70px;
        border-radius: 15px;
        border: 2px solid #B4B4B4;
        font-size: 20px;
        font-weight: 550;
    }
`
