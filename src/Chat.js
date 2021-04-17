import React from "react";
import './Chat.css';
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined} from "@material-ui/icons";

function Chat(){
    const sendMessage = (e) => {
        e.preventDefault();
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3> Room Name</h3>
                    <p> Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    <span className="chat__name">
                        someOne</span>
                    hey guys
                    <span className="chat__timestamp">
                        13:15
                    </span>
                </p>
                <p className="chat__message">
                    hey guys
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text"/>
                    <button type="submit" onClick={sendMessage}>send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}
export  default Chat;
