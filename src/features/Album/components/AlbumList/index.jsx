import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./style.scss";
AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList(props) {
  return (
    <ul className="album-list">
      {props.albumList.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
