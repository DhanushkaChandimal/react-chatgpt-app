import { useState } from "react";

function MessageInput({ onSend }) {

    const [text, setText] = useState("");

    const handleSend = () => {
        if(!text) return
        onSend(text)
        setText('')
    }

    return (
        <footer className="input-container">
            <input
                className="chat-input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
            />
            <button className="send-button" onClick={handleSend}>
                Send
            </button>
        </footer>
    )
}

export default MessageInput;