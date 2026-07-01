import React, { useState, useEffect, useRef } from 'react';
import audioFile from '../../public/music/musicbackgroundlamb.mp3';


function MusicBackground() {
  const audioRef = useRef(new Audio(audioFile));
  const [tocando, setTocando] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.4;

    const Tryplay = () => {
      audio.play()
        .then(() => {
          setTocando(true);
        })
        .catch(() => {
          console.log("Autoplay bloqueado pelo navegador. Aguardando primeira interação...");
        });
    };

    Tryplay();

    const startOnClick = () => {
      if (!tocando) {
        audio.play()
          .then(() => {
            setTocando(true);
            removerOuvintes();
          })
          .catch(erro => console.log("Erro ao tocar:", erro));
      }
    };

    const removerOuvintes = () => {
      window.removeEventListener('click', startOnClick);
      window.removeEventListener('touchstart', startOnClick);
    };

    window.addEventListener('click', startOnClick);
    window.addEventListener('touchstart', startOnClick);

    return () => removerOuvintes();
  }, []);

  const changeSong = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (tocando) {
      audio.pause();
      setTocando(false);
    } else {
      audio.play().then(() => setTocando(true));
    }
  };

  return (
    <button 
      onClick={changeSong}
      style={sytleGreen}
      aria-label={tocando ? "Music Off" : "Music On"}
    >
      <span style={styleGlass} />
      {tocando ? 'Music On' : 'Music Off'}
    </button>
  );
}

const sytleGreen = {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  zIndex: 9999,
  padding: '12px 24px',
  borderRadius: '50px',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  
  background: 'linear-gradient(135deg, rgba(225, 0, 0, 0.2) 0%, rgba(225, 0, 0, 0.2) 100%)',
  
  backdropFilter: 'blur(60px)',
  WebkitBackdropFilter: 'blur(60px)',
  
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '0.5px',
  cursor: 'pointer',
  overflow: 'hidden',
  textShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
  
  boxShadow: '0 8px 32px 0 rgba(34, 197, 94, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.15)',
  
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const styleGlass = {
  position: 'absolute',
  top: '0',
  left: '5%',
  width: '90%',
  height: '40%',
  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
  borderRadius: '40px 40px 10px 10px',
  pointerEvents: 'none',
};

export default MusicBackground;