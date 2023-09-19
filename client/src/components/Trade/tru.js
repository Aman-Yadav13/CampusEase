import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
const Tru = () => {
  return (
    <Wrapper>
      <h2>
        <p className="h">If u wanna sell your belongings here you go!</p>
      </h2>

      <br></br>
      <br></br>
      <div class="pro">
        <h2>Products u can Buy!</h2>
      </div>
      <div class="procontainer">
        <div class="p">
          <img src="images/c1.jpg" alt="prod1"></img>
          <div class="des">
            <span>DELL</span>
            <h5>Laptop</h5>
            <h4>50000</h4>
          </div>
        </div>
        <div class="p">
          <img src="images/r2.jpeg" alt="prod1"></img>
          <div class="des">
            <span>Adidas</span>
            <h5>Bucket</h5>
            <h4>400</h4>
          </div>
        </div>
        <div class="p">
          <img src="images/r2.jpeg" alt="prod1"></img>
          <div class="des">
            <span>Adidas</span>
            <h5>MATTRESS</h5>
            <h4>1500</h4>
          </div>
        </div>
        <div class="p">
          <img src="images/r2.jpeg" alt="prod1"></img>
          <div class="des">
            <span>JBl</span>
            <h5>Earphones</h5>
            <h4>200</h4>
          </div>
        </div>
        <div class="p">
          <img src="images/r2.jpeg" alt="prod1"></img>
          <div class="des">
            <span>Boat</span>
            <h5>Headphones</h5>
            <h4>$2000</h4>
          </div>
        </div>
        <div class="p">
          <img src="images/r2.jpeg" alt="prod1"></img>
          <div class="des">
            <span>Real ME</span>
            <h5>15gb</h5>
            <h4>20000</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
 img {
     width: 30rem;
     height:30rem;
     border-radius:20px;
   }
   .procontainer{
     justify-content:space-between;
     display:flex;
     padding-top:10px;
     flex-wrap:wrap;
     box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
 }
 .pro{
     text-align:center;
 }
 h4{
   color:blue;
 }
 h5{
   font-weight:700;
   color:black;
 }
 .h{
  padding:34px 34px;
  font-weight:600px;
  margin:15px 200px;
 .p{
     width=23%;
     min-width:250px;
     padding:20px 42px;
     border: 2px solid #cce7d0;
     border-radius:25px;
     cursor:pointer;
     margin:15px 8px;
     transition:0.2s ease;
     position:relative;
     box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
 
 }
 
   `;
export default Tru;
