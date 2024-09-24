import React from "react";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.ambang}>
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div className={style.input}>
          <div className={style.email}>
            <ForwardToInboxIcon className={style.icon} />
            <input type="email" placeholder="Enter your email address" />
          </div>
          <button>
            <a href="">Subscribe to Newsletter</a>
          </button>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.about}>
          <h3>SHOP.CO</h3>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div></div>
        </div>
        <div className={style.grid}>
          <div className={style.list}>
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Works</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
            </ul>
          </div>
          <div className={style.list}>
            <h3>HELP</h3>
            <ul>
              <li>
                <a href="">Customer Suppor</a>
              </li>
              <li>
                <a href="">Delivery Details</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className={style.list}>
            <h3>FAQ</h3>
            <ul>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Manage Deliveries</a>
              </li>
              <li>
                <a href="">Orders</a>
              </li>
              <li>
                <a href="">Payments</a>
              </li>
            </ul>
          </div>
          <div className={style.list}>
            <h3>RESOURCES</h3>
            <ul>
              <li>
                <a href="">Free eBooks</a>
              </li>
              <li>
                <a href="">Development Tutorial</a>
              </li>
              <li>
                <a href="">How to - Blog</a>
              </li>
              <li>
                <a href="">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
