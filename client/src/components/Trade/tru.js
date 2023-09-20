import styled from "styled-components";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Laptop from "../../images/laptop.jpg";
import Phone from "../../images/phone.jpg";
import Bucket from "../../images/bucket.jpg";
import Earphones from "../../images/earphones.jpg";
import Mattrice from "../../images/mattrice.jpg";
import Headphones from "../../images/headphones.jpg";

const Tru = () => {
  return (
    <>
      <h2 className="heading2">
        <p className="h">If u wanna sell your belongings here you go!</p>
      </h2>

      <br></br>
      <br></br>
      <div class="pro">
        <h2>Products u can Buy!</h2>
      </div>
      <div class="procontainer">
        <div class="p">
          <img src={Laptop} alt="prod1"></img>
          <div class="des">
            <span>DELL</span>
            <h5>Laptop</h5>
            <h4>50000</h4>
          </div>
        </div>
        <div class="p">
          <img src={Bucket} alt="prod1"></img>
          <div class="des">
            <span>Adidas</span>
            <h5>Bucket</h5>
            <h4>400</h4>
          </div>
        </div>
        <div class="p">
          <img src={Mattrice} alt="prod1"></img>
          <div class="des">
            <span>Adidas</span>
            <h5>MATTRESS</h5>
            <h4>1500</h4>
          </div>
        </div>
        <div class="p">
          <img src={Earphones} alt="prod1"></img>
          <div class="des">
            <span>JBl</span>
            <h5>Earphones</h5>
            <h4>200</h4>
          </div>
        </div>
        <div class="p">
          <img src={Headphones} alt="prod1"></img>
          <div class="des">
            <span>Boat</span>
            <h5>Headphones</h5>
            <h4>$2000</h4>
          </div>
        </div>
        <div class="p">
          <img src={Phone} alt="prod1"></img>
          <div class="des">
            <span>Real ME</span>
            <h5>15gb</h5>
            <h4>20007</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tru;
