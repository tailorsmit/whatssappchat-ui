import React from 'react';
import './SidebarChat.css';
import {Avatar} from "@material-ui/core";

function SidebarChat({addNewChat}) {

    const createChat = () => {
        const roomname = prompt("please enter name for chat");
        if(roomname){
            //do some stuff
        }
    }
    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat__info'>
                <h2>Room Name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>add new chat</h2>
        </div>
    )
}

export default SidebarChat;
