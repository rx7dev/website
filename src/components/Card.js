import React from "react";

const Card = ({ name, url, role, content, date, image, code }) => {
  return (
    <div className="container">
      <div className="card tc bg-white shadow-5">
        <div className="row">
          <div class="col-sm">
            <a href={url} rel="noreferrer" target="_blank">
              <img alt={name} src={image} />
            </a>
          </div>

          <div class="col-sm">
            <div class="row">
              <div class="col-sm">
                <p>{name}</p>
              </div>
            </div>
            <p>{role}</p>
            <p>{content}</p>
            <p>{date}</p>
          </div>
          <div class="col-sm">
            <div className="btn-link">
              <span>
                <a href={code} rel="noreferrer" target="_blank">
                  Source Code
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
