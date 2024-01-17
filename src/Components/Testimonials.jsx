import React from "react";
import styled from "styled-components";
import AvatarImage from "../Assets/AvatarImage.jpg";

function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, iste provident? Illo doloribus esse voluptas iure
            deserunt, sit eos ut!
          </p>
          <div className="info">
            <img src={AvatarImage} alt="" />
            <div className="details">
              <h4>sooloth</h4>
              <span>CEO - VS-software</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, iste provident? Illo doloribus esse voluptas iure
            deserunt, sit eos ut!
          </p>
          <div className="info">
            <img src={AvatarImage} alt="" />
            <div className="details">
              <h4>sooloth</h4>
              <span>CEO - VS-software</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, iste provident? Illo doloribus esse voluptas iure
            deserunt, sit eos ut!
          </p>
          <div className="info">
            <img src={AvatarImage} alt="" />
            <div className="details">
              <h4>sooloth</h4>
              <span>CEO - VS-software</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      align-items: center;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      p {
        font-size: 0.7rem;
        align-items: center;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          height: 3rem;
          border-radius: 3rem;
        }
        .detail {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
export default Testimonials;
