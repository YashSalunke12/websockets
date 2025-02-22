import { useEffect, useRef, useState } from "react";
import "./App.css"

const App = () => {
  const [socket, setSocket] = useState();

  const inputRef = useRef();
  const sendMessage = () => {
    if(!socket) {
      return;
    }
    // @ts-ignore
    socket.send(inputRef.current.value);
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");

    setSocket(ws);
    ws.onmessage = (event) => {
      alert(event.data);
    }
  }, [])
  return (
    <div>
      <input type="text" ref={inputRef} placeholder='message...'  />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App