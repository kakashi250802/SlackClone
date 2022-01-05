import React from 'react'
import  styled  from 'styled-components';
import {db} from '../../apis/firebase.js'
import {useCollection} from "react-firebase-hooks/firestore"
import { useDispatch } from 'react-redux';
import { enterRoom } from "../../features/appSlice.js";
function SidebarOption(props) {
    const dispatch = useDispatch();
    const addChannel = () =>{
        const channelName= prompt('Please enter the channel name');
        if (channelName){
            db.collection('room').add({
                name: channelName,
            })
        }
    }
    const selectChannel = () =>{
        if(props.id){
            dispatch(enterRoom({
                roomId: props.id
            }))
        }
    }
    return (
        <SidebarOptionContainer
            onClick={ props.addChannelOption ? addChannel : selectChannel }
        >
            {props.Icon && <props.Icon fontSize="small" style={{padding:10 }} />}
            {props.Icon ?(
                <h3>{props.title}</h3>
            ):(
                <SidebarOptionChannel>
                    <span>#</span> {props.title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>


    )
}

export default SidebarOption
const SidebarOptionContainer= styled.div`
    display:flex;
    font-size:12px;
    align-items:center;
    padding-left:2px;
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }
    > h3 {
        font-weight: 500;
        >span {
            padding: 15px;
        }
    }
`
const SidebarOptionChannel= styled.h3`
padding: 10px 0;
font-weight: 300;

`   