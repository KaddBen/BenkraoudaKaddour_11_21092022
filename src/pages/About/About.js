import React, { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import Collapses from "../../components/Collapse/Collapse.js";
import Header from "../../components/Header/Header";

const About = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div>
      <Header
       bgImg="landscape_about"
        classArrowLeft="hidden"
        classArrowRight="hidden"
        classimg="about_img"
      />
      <div className="list_container">
        <div className="dropdown_about">
          <Dropdown
            title="Fiabilité"
            state={open1}
            setstate={() => setOpen1(!open1)}
          />
          <Collapses
            title="Fiabilité"
            description="Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes"
            state={open1}
          />
        </div>

        <div className="dropdown_about">
          <Dropdown
            title="Respect"
            state={open2}
            setstate={() => setOpen2(!open2)}
          />
          <Collapses
            title="Respect"
            description=" La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            state={open2}
          />
        </div>

        <div className="dropdown_about">
          <Dropdown
            title="Service"
            state={open3}
            setstate={() => setOpen3(!open3)}
          />
          <Collapses
            title="Service"
            description=" Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            state={open3}
          />
        </div>

        <div className="dropdown_about">
          <Dropdown
            title="Sécurité"
            state={open4}
            setstate={() => setOpen4(!open4)}
          />
          <Collapses
            title="Service"
            description=" La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            state={open4}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
