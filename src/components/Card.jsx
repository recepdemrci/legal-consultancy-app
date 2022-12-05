import React from 'react';

function Card(props) {
  return (
    <div class={"card-fluid " + props.name}>
      <div class="card-body">
        {props.title ? <h4 class="card-title">{props.title}</h4> : null}
        {props.line ? <hr class="hr line"/> : null}        
        {props.body}
      </div>
    </div>
  );
}

export default Card;