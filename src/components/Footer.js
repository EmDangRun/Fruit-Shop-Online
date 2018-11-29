import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a
          target="_blank"
        >
          Sản phầm của nhóm 8 - KTPM5
        </a>
        <span> / </span>
        <a target="_blank">
          Cần hỗ trợ?
        </a>
        <span> / </span>
        <a  target="_blank">
          Say Hi on Facebook
        </a>
        <span> / </span>
        <a  target="_blank">
          Đọc Blog
        </a>
      </p>
      <p>
        &copy; 2018 <strong>Veggy</strong> - Của hàng trái cây
      </p>
    </footer>
  );
};

export default Footer;
