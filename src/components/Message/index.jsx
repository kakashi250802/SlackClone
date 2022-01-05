import styled from 'styled-components';
export const Message = ({message,timestamp,user,userImage}) => {
    return (
        <MessageContainer>
            <img src={userImage} alt="" />
            <MessageInfo>
                <h4>
                    {user} <span>{new Date(timestamp?.toDate()).toLocaleString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}
const MessageContainer = styled.div`
    display:flex;
    align-items:center;
    padding: 20px;
    >img {
        height:50px;
        border-radius: 8px;
    }
`
const MessageInfo = styled.div`
    padding-left: 10px;
    >h4 >span{
       color:gray;
       font-weight:300; 
       font-size:10px;
       margin-left: 10px;
    }
`
