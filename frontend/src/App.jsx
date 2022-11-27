import { useState, useEffect } from 'react'
import './App.css'
import io from 'socket.io-client';
import Chat from './components/Chat';
import { getRoomChat } from './redux/actions/chatActions';
import { useDispatch, useSelector } from 'react-redux';

const socket = io.connect("http://localhost:8000")

function App() {

  const [userName, setUserName] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  const dispatch = useDispatch()

  const joinRoom = ()=>{
    if( userName !=="" && room!==""){
      socket.emit("join_room", room)
      setShowChat(true)
    }
    dispatch(getRoomChat(room))
  }
  const {chats} = useSelector((state)=> state)
  console.log({chats})

  // useEffect(()=>{
  //   if(room){
  //   }
  // },[room])

  return (
    <div className="App">
    {!showChat ? (
      <div className='joinChatContainer'>
      <h1>Join a chat</h1>
      
      <input type='text' placeholder='John' onChange={(e)=>setUserName(e.target.value)}/>
      <input type='text' placeholder='Room ID...' onChange={(e)=>setRoom(e.target.value)}/>
      <button onClick={joinRoom}>Join A Room</button>
      </div>)
       : (
        <Chat socket={socket} userName={userName} room={room}/>
       )}
    </div>
  )
}

export default App
