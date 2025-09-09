import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album(props) {
  return (
    <div className="album">
      <div className="album-thumbnai">
        <img src={props.album.thumbnaiURL} alt={props.album.name} />
      </div>
      <p className="album-name">{props.album.name}</p>
    </div>
  );
}

export default Album;
