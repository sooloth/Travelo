import React from "react";
import styled from "styled-components";
import service1 from "../Assets/service1.png";
import service2 from "../Assets/service2.png";
import service3 from "../Assets/service3.png";
import service4 from "../Assets/service4.png";
function Services() {
  const data = [
    {
      icon: service1,
      title: "Get best prices",
      subtitle:
        "play through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subtitle:
        "We have all to curated hotels that have all the precaution for a covid safe envi",
    },
    {
      icon: service3,
      title: "flexible payment",
      subtitle:
        "Enjoy the flexible payment through our app and get rewards on every payment",
    },
    {
      icon: service4,
      title: "find the best places near you",
      subtitle:
        "Find the best hotels and places to visit near you in a single click",
    },
  ];
  return (
    <Section id="services">
      {data.map((service) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h4>{service.title}</h4>
            <p className="paragraph">{service.subtitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0 4rem;
  display: grid;
  margin: 0.1rem 0.4rem;
  line-height: 1rem;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 1rem;
    padding: 0.3rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.5rem;
      }
    }
    .paragraph {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export default Services;
