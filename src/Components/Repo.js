import React from 'react';

/* eslint-disable */
const Repo = props => (
  <p>  
    <a href={props.url} target="_blank">{props.name}</a>
    <span>{props.description}</span>
  </p>
);
/* eslint-enable */

export default Repo;