import {useState} from "react"
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import {db} from '../../apis/firebase'
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "../../apis/firebase"
function ChatInput({channelName, channelId,chatRef}){
    const [user] = useAuthState(auth);
    const [input,setInput] = useState("")
    const sendMessage =(e)=>{
        e.preventDefault()
        if(!channelId){
            return false;
        }
        
        db.collection('room').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage: user.photoURL,      
        })
        chatRef.current.scrollIntoView({
            behavior:"smooth"
        })
        setInput("");
    }
    return (
        <ChatInputContainer>
        <form>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            placeholder={`Message #${channelName}`}
            />
            <button type="submit" onClick={sendMessage}><SendIcon></SendIcon></button>
        </form>
        </ChatInputContainer>
    )
}

export default ChatInput
const ChatInputContainer = styled.div`
    border-radius: 20px;
    position: relative;
    > form {
        display:flex;
        align-items: center;
        margin: 0 auto;
        justify-content: center;
        position:fixed;
        bottom: 30px;
        width:80%;
        > input {
            flex: 0.9;
            border:1px solid gray;
            padding:20px;
            outline:none;
            border-radius:10px;
        }
        > button {
            margin:0 12px;
            outline: none;
            border: 0;
            background: transparent;
            color: var(--slack-color);
            cursor: pointer;
            transition: all 0.3s ease 0.1s;
            :hover{
                color: rgba(158, 117, 235,0.9);
            }
        }
    }

`
