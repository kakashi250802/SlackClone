import styled from 'styled-components';
import {Button} from '@material-ui/core'
import {auth,provider} from "../../apis/firebase"
export const Login = () => {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(err => {
            alert(err.message);
        })
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" alt="" />
                <h1> Sign in to the DƯƠNG'S WEB</h1>
                <p>clone slack by Dương</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}
const LoginContainer= styled.div`
    background: #e4e2e2;
    display: grid;
    place-items: center;
    height: 100vh;
    `

const LoginInnerContainer= styled.div`
    padding:100px;
    text-align: center;
    background-color:white;
    border-radius:10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.012),0 1px 2px rgba(0, 0, 0, 0.24);
    >img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    >button {
        margin-top: 50px;
        text-transform: inherit !important;
        background: #0a8d48 !important;
        color: white;
    }
`