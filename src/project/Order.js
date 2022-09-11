import React from "react";
import styled from "styled-components";
import deskBg from "./order-summary-component-main/images/pattern-background-desktop.svg";
import hero from "./order-summary-component-main/images/illustration-hero.svg";
import music from "./order-summary-component-main/images/icon-music.svg";
import "./style.css";

const Order = () => {
  return (
    <Wrapper>
      <Container>
        <div className="card">
          <img src={hero} alt="heroImg" />
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="plan">
            <img src={music} alt="" />
            <div className="plan-info">
              <h3>Annual Plan</h3>
              <p>$59.99/year</p>
            </div>
            <button>Change</button>
          </div>
          <div className="order-btns">
            <button className="pay">Proceed to Payment</button>
            <button className="cancel">Cancel Order</button>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: hsl(221, 94%, 93%);
`;
const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(${deskBg});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card {
    background-color: #fff;
    max-width: 300px;
    border-radius: 12px;
    text-align: center;
    h1 {
      font-size: 20px;
      font-weight: bolder;
      margin-top: 30px;
    }
    img {
      width: 100%;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
    p {
      color: hsl(224, 23%, 55%);
      font-size: 12px;
      margin-left: 30px;
      margin-right: 30px;
      line-height: 20px;
    }
    .plan {
      img {
        width: 18%;
      }
      button {
        background: none;
        border: none;
        text-decoration: underline;
        color: hsl(245, 75%, 52%);
        font-weight: bold;
        font-size: 10px;
        cursor: pointer;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 32px;
      margin-right: 32px;
      .plan-info {
        margin-left: 20px;
        h3 {
          margin-left: -52px;
          font-size: 13px;
        }
        p {
          margin-left: -28px;
          margin-top: -8px;
        }
      }
    }
    .order-btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .pay {
        border: none;
        padding-left: 82px;
        padding-right: 82px;
        border-radius: 8px;
        color: #fff;
        background-color: hsl(245, 75%, 52%);
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 10px;
        margin-top: 30px;
        margin-bottom: 20px;
        box-shadow: 1px 4px 18px 5px hsl(227, 63%, 92%);
        cursor: pointer;
      }
      .cancel {
        background: none;
        border: none;
        margin-bottom: 30px;
        font-size: 10px;
        color: hsl(224, 23%, 55%);
        cursor: pointer;
      }
    }
  }
`;

export default Order;
