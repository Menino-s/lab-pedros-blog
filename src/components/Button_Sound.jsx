import { Link } from 'react-router-dom'
import { useRef } from "react";

const Button = ({ children }) => {

    const audioRefHover = useRef(new Audio("/songs/buttonrollover.wav"))
    const audioRefClick = useRef(new Audio("/songs/buttonclick.wav"))

    const ClickAudio = () => {
    audioRefClick.current.currentTime = 0;
    audioRefClick.current.volume = 0.2;
    audioRefClick.current.play().catch((error) => {
      console.log(error);
    });
  };

    const hoverAudio = () => {
    audioRefHover.current.currentTime = 0;
    audioRefHover.current.volume = 0.2;
    audioRefHover.current.play().catch((error) => {
      console.log(error);
    });
  };

    const stopHoverAudio = () => {
    audioRefHover.current.pause();
  };

    return (
        <>
            <div onMouseEnter={hoverAudio} onMouseLeave={stopHoverAudio} onClick={ClickAudio}>{children}</div>
        </>
    )
}

export default Button;