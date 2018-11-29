import React, { Component } from "react";

const NoResults = () => {
  return (
    <div className="products">
      <div className="no-results">
        <img
          src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
          alt="Empty Tree"
        />
        <h2>Xin lỗi, không tìm kiêm thấy sản phầm nào</h2>
        <p>Bạn vui lòng thử lại</p>
      </div>
    </div>
  );
};

export default NoResults;
