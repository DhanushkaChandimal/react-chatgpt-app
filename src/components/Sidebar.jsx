function Sidebar({ chats }) {
  return (
    <aside className="sidebar">
        <h2>Chats</h2>
        <ul>
            {chats.map((chat, index)=> (
                <li key={index}>{chat}</li>
            ))}
        </ul>
    </aside>
  );
}

export default Sidebar;
