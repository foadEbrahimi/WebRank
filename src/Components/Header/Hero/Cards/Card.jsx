import React from 'react';

export default function Card({
  classIcon,
  classCard,
  classText,
  title,
  icon,
  subTile,
  subTitle,
  byImg = false,
}) {
  return (
    <div className={classCard}>
      {byImg ? (
        <img className={classIcon} src={icon} alt="" />
      ) : (
        <span className={classIcon}>{icon}</span>
      )}
      <h1 className={classText}>{title}</h1>
      {!subTile ? <h1>{subTitle}</h1> : null}
    </div>
  );
}
