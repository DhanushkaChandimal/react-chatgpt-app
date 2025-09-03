function Sidebar({ chats }) {
  return (
    <aside className="sidebar">
        <h2>Chats</h2>
        <ul>
            {chats.map((chat, index)=> (
                <li className="nav-chat" key={index}>{chat}</li>
            ))}
        </ul>
    </aside>
  );
}

export default Sidebar;
