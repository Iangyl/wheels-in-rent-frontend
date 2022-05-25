import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';

const LottiePlayer = ({src, style}) => {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={style}
    />
  )
}

export default LottiePlayer
