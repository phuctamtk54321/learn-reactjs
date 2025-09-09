import React from "react";

import AlbumList from "./components/AlbumList";

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Thịnh Hành",
      thumbnaiURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/d/e/4/bde43aa51e575864730a5cabd3b40fbe.jpg",
    },
    {
      id: 2,
      name: "Rap Việt nghe là ghiền",
      thumbnaiURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/d/8/a/ad8aded71985e32997c8d09b9078dfbe.jpg",
    },
    {
      id: 3,
      name: "Nhạc Thịnh Hành",
      thumbnaiURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn thể biết</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatures;
