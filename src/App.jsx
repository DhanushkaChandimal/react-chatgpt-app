import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'
import {responses} from './data/responses'

function App() {
  const [messages, setMessages] = useState([])
  const [chats, setChats] = useState([])

  const handleSend = (text) => {
    setMessages(prev => [...prev, { role: 'user', text}])
    const index = Math.floor(Math.random() * responses.length)
    setMessages(prev => [...prev, { role: 'assistant', text: responses[index]}])
    chats.length == 0 ? setChats([text]) : null
  }

  return (
    <div className='app-container'>
      <Sidebar chats = {chats}/>
      <div className='chat-area'>
        <ChatWindow messages={messages}/>
        <MessageInput onSend={handleSend}/>
      </div>
    </div>
  )
}

export default App
