function MessageBubble({ text, role }) {
    const styles = role === 'user'
        ? 'bubble user'
        : 'bubble assistant'
  return (
    <div className={styles}>
        {text}
    </div>
  );
}

export default MessageBubble;
