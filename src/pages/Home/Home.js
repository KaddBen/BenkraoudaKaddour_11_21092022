import React from "react";
import housings from "../../logements.json";
import Article from "../../components/Article/Article";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="home_container">
      <Header
        bgImg="landscape_home"
        classimg="logo_background"
        content="Chez vous,partout et ailleurs"
        classArrowLeft="hidden"
        classArrowRight="hidden"
      />

      <div className="location_section">
        {housings.map((housing) => {
          return (
            <Article
              id={housing.id}
              cover={housing.cover}
              title={housing.title}
              key={housing.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
