function Message(props) {
  const { message } = props;
  
  // Check if message length is greater than 10
  if (message.length > 10) {
    return <p>Too long</p>;
  }
  
  // Otherwise render the message
  return <p>{message}</p>;
}

export default Message;