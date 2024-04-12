import React from "react";
import { Link } from "react-router-dom";
import "./text.css";

const TextEnd = () => {
  return (
    <div className="text_end">
      <div className="text_end_text">
        <div className="text_end_title">НОМЕР УСПЕШНО ЗАБРОНИРОВАН</div>
        <div className="text_end_desc">
          <Link to='/'>ГЛАВНАЯ</Link>
        </div>
      </div>
    </div>
  );
};

export default TextEnd;
