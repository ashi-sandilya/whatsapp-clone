//rfce for code (download es7 from extensions)

import React, {useEffect, useState} from 'react';
import { Avatar , IconButton } from '@material-ui/core';
import {  SearchOutlined } from '@material-ui/icons';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon  from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Sidebar.css';
import db from './firebase';
import SidebarChat from './SidebarChat';
import { useStateValue } from './StateProvider';

function Sidebar(){

    const [rooms, setRooms] = useState([]);
    const [{ user },dispatch] = useStateValue();

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => setRooms(
                snapshot.docs.map((doc) =>({
                id: doc.id,
                data: doc.data(),
                }))
            )
        );


    }, []);


    return (
        <div className='Sidebar'>
            <div className='Sidebar_header'>
            <Avatar src={user?.photoURL} />
                <div className ='Sidebar_headerRight'>
                <IconButton>
                  <DonutLargeIcon />
                </IconButton>
                <IconButton>
                  <ChatIcon />
                  </IconButton>
                <IconButton>
                  <MoreVertIcon /> 
                </IconButton> 
                </div>
            </div>
            <div className='Sidebar_search'>
                <div className='Sidebar_searchContainer'>
                    <SearchOutlined />
                    <input placeholder=" Search on start new chat" type="text" />

                </div>
            </div>
            <div className='Sidebar_chats'>
                <SidebarChat addNewChat />
                {rooms.map((room) => (
                    <SidebarChat key={room.id} 
                    id={room.id}
                    name={room.data.name} />
                ))}
                
            </div>
        </div>
    );
} 

export default Sidebar;