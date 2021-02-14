import React from "react";

const DetailSection = ({ title, info, type }) => {
  if (!info) return null;
  return (
    <div className="detail-section">
      <h3 className="detail-section-header">{title}</h3>
      {type === "img" ? (
        <img src={info} alt={title}/>
      ) : type === "link" ? (
        <a href={info}>{info}</a>
      ) : (
        <div>{info}</div>
      )}
    </div>
  );
};
export default DetailSection;
