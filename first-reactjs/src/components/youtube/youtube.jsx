import React from "react";

function YoutubeItem(props) {
  return (
    <section className={`you-item ${props.class}`}>
      <figure className="images">
        <img src={props.img} alt="" />
      </figure>
      <div className="you-content">
        <figure className="you-avatar">
          <img src={props.avatar} alt="" />
        </figure>
        <div className="you-info">
          <h3 className="you-title">{props.title}</h3>
          <p className="you-name">{props.name}</p>
        </div>
      </div>
    </section>
  );
}

export default YoutubeItem;
