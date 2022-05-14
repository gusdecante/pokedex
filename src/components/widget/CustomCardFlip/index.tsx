import React from "react";

import ReactCardFlip, { ReactFlipCardProps } from "react-card-flip";

const CustomCardFlip: React.FC<ReactFlipCardProps> = ({
  children,
  isFlipped,
}) => {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {children}
    </ReactCardFlip>
  );
};

export default CustomCardFlip;
