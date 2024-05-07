import React from "react";

export default function Card(props) {
  return (
    <div className={props.classCard}>
      <span className={props.classIcon}>{props.icon}</span>
      <h1 className={props.classText}>{props.title}</h1>
      {!props.subTile ? <h1>{props.subTitle}</h1> : null}
    </div>
  );
}
