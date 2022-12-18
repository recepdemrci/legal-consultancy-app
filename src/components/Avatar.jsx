import React from 'react';

function Avatar(props) {
  return (
    <img className="img-fluid rounded-circle"
      src={props.image}
      alt="avatar_img"
    />
  );
}

export default Avatar;