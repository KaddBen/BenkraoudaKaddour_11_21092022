import React, { useState } from "react";
import housings from "../../logements.json";
import { useParams } from "react-router-dom";
import Error from "../../pages/Error/Error.js";
import Header from "../../components/Header/Header";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import Collapses from "../../components/Collapse/Collapse.js";
import LocationInfo from "../../components/LocalInfo/LocationInfo";
import UserInfo from "../../components/UserInfo/UserInfo";

const Location = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(1);

  const { locationId } = useParams();
  const housing = housings.find((housing) => housing.id === locationId);
  if (housing) {
    const { title, description, location } = housing;
    const host = housing.host;
    const { name, picture } = host;
    const tags = housing.tags;
    const tagMap = tags.map((tag) => {
      return <div className="tag">{tag}</div>;
    });
    const pictures = housing.pictures;
    const equipments = housing.equipments;
    const equipmentsMap = equipments.map((equipment) => {
      return <li>{equipment}</li>;
    });
    const decrease = () => {
      setCount1(count1 + 1);
      setCount2(count2 + 1);
      if (count1 === parseInt(pictures.length - 1)) {
        setCount1(count1 - (pictures.length - 1));
        setCount2(count2 - (pictures.length - 1));
      }
    };

    const increase = () => {
      setCount1(count1 - 1);//count1 - 1
      setCount2(count2 - 1);//count2 - 1
      if (count1 === 0) {
        setCount1(count1 + (pictures.length - 1));
        setCount2(count2 + (pictures.length - 1));
      }
    };
    return (
      <div className="location_page">
        <Header
          bgImg="landscape_about"
          imgLocation={pictures[count1]}
          classArrowLeft="arrow_right"
          classArrowRight="arrow_left"
          array={pictures.length}
          count={count2}
          functionarrowLeft={decrease}
          functionArrowRight={increase}
        />

        <div className="container">
          <LocationInfo title={title} location={location} tag={tagMap} />
          <UserInfo name={name} picture={picture} rating={housing.rating} />
        </div>

        <div className="dropdown_container">
          <div className="dropdown">
            <Dropdown
              setstate={() => setOpen1(!open1)}
              state={open1}
              title="Description"
            />
            <Collapses
              title="Description"
              description={description}
              state={open1}
            />
          </div>
          <div className="dropdown_equipment">
            <Dropdown
              setstate={() => setOpen2(!open2)}
              state={open2}
              title="Equipements"
            />
            <Collapses
              title="Equipements"
              description={<ul id="Equipements">{equipmentsMap}</ul>}
              state={open2}
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
