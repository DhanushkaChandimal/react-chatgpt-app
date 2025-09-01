import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import ChatWindow from './components/ChatWindow'
import MessageInput from './components/MessageInput'

function App() {
  const [messages, setMessages] = useState([])
  const chats = ['Chat 1', 'Help with something', 'Cake receipe']

  const handleSend = (text) => {
    setMessages(prev => [...prev, { role: 'user', text}])
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
