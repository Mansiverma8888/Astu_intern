import React, { useState } from "react";
import "./styles.css";
import "../global.css";
import arrowDown from "../assets/arrow-down.png";
import arrowUp from "../assets/arrow-up.png";
import cloudicon from "../assets/cloud.png";

import noteicon from "../assets/note.png";
import receipticon from "../assets/receipt.png";
import settingsicon from "../assets/settings.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function toggleSubMenu() {
    setIsOpen(!isOpen);
  }
  function toggleSubMenu2() {
    setIsOpen2(!isOpen2);
  }

  return (
    <div className="sidebar">
        <div className="flexFE_Row SiteName">
            <span className="Cash">CASH</span>
            <span className="Wise">WISE</span>
        </div>

        <div className="flexCenter_Row subheader">
            <div className="G flexCenterCenter">
                G
            </div>
            <div className="">
                <div className="entry">Entry Name</div>
                <div className="entry">Add Website</div>
            </div>
            <img src={settingsicon} className="iconssettings"/>
        </div>
      <ul>
        <li>
        <div className="flexFE_Row">
            <img src={noteicon} className="icons"/>
          <a href="#">Document Generation</a>
        </div>
        </li>
        <li>
          <div href="#" onClick={toggleSubMenu} className="flexFE_Row">
            <img src={cloudicon} className="icons"/>
            <div>Document Storage</div>
            {isOpen ? <img src={arrowUp} alt="arrow-up" /> : <img src={arrowDown} alt="arrow-down" />}
          </div>
          {isOpen && (
            <ul className="sublist">
            </ul>
          )}
        </li>
        <li>
          <div onClick={toggleSubMenu2} className="flexFE_Row">
          <img src={receipticon} className="icons"/>
            <div>Invoice Management</div>
            {isOpen2 ? <img src={arrowUp} alt="arrow-up" /> : <img src={arrowDown} alt="arrow-down" />}
          </div>
          {isOpen2 && (
            <ul className="sublist">
              <li>
                <a href="#">New Invoice</a>
              </li>
              <li>
                <a href="#">Invoice Summary</a>
              </li>
              <li>
                <a href="#">Client List</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
