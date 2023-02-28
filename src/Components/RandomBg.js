import React from 'react'

const RandomBg = (Prospect) => {
  console.log(Prospect);

  const color = ['#2e0142', '#666666', '#5a8100', '#7b0000']
  const rand_color = color[Math.floor(Math.random() * color.length)]

  return (props) => {
    return (
      <div style={{ backgroundColor: rand_color }}>
        <Prospect />
      </div>
    );
  };
};

export default RandomBg