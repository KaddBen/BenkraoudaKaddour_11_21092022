import React, { useState } from "react";
import housings from "../../logements.json";
import { useParams } from "react-router-dom";
import Error from "../../pages/Error/Error.js";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import LocationInfo from "../../components/LocalInfo/LocationInfo";
import UserInfo from "../../components/UserInfo/UserInfo";

const Location = () => {



  const { locationId } = useParams();
  const housing = housings.find((housing) => housing.id === locationId);
  if (housing) {
    const { title, description, location } = housing;
    const host = housing.host;
    const { name, picture } = host;
    const tags = housing.tags;
    const tagMap = tags.map((tag) => {
      return (
        <div className="tag" key={tag}>
          {tag}
        </div>
      );
    });
    const pictures = housing.pictures;
    const equipments = housing.equipments;
    const equipmentsMap = equipments.map((equipment) => {
      return <li key={equipment}>{equipment}</li>;
    });
  
    return (
      <div className="location_page">
        <Header
          bgImg="landscape_about"
          imgLocation={pictures}
          classArrowLeft="arrow_right"
          classArrowRight="arrow_left"
          array={pictures.length}
         
        />

        <div className="container">
          <LocationInfo title={title} location={location} tag={tagMap} />
          <UserInfo name={name} picture={picture} rating={housing.rating} />
        </div>

        <div className="dropdown_container">
        <div className="dropdown">
            <Dropdown
              title="Description"
              description={description}
            
            />
        </div>
       
        <div className="dropdown_equipment">
            <Dropdown
              title="Equipements"
              description={<ul id="Equipements">{equipmentsMap}</ul>}
            />
            </div>
          
        </div>
      </div>
    );
  } else {
    return <div>{<Error />}</div>;
  }
};
export default Location;
