import React,{useState} from 'react';
import landscape from './img/landscape_about.png'
import {Collapse} from "react-collapse"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdArrowBackIosNew }  from 'react-icons/md';



const About = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    return (
        <div>
        < div className='landscape'>
       <img src={landscape}></img>    
       </div>
       <div div className='list_container'>
        <button  onClick={() => setOpen1(!open1)}
        aria-controls="Fiabilité"
        aria-expanded={open1} className="blue">
             <span>Fiabilité</span>
            <MdArrowBackIosNew className={' ' + (open1 ? 'arrow_icon rotate':'arrow_icon')} />
        </button>  
        <Collapse  isOpened={open1}>
        <p id ="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale.
         Les photos sont conformes aux logements, et toutes les informations
        sont régulièrement vérifiées  par nos équipes.
        </p> 
        </Collapse>
        <button  onClick={() => setOpen2(!open2)}
        aria-controls="Respect"
        aria-expanded={open2} className="blue">
             <span>Respect</span>
            <MdArrowBackIosNew className={' ' + (open2 ? 'arrow_icon rotate':'arrow_icon')} />
        </button>  
        <Collapse  isOpened={open2}>
        <p id ="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa.
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera 
        une exclusion de notre plateforme.
        </p> 
        </Collapse>
        <button  onClick={() => setOpen3(!open3)}
        aria-controls="Service"
        aria-expanded={open3} className="blue">
             <span>Service</span>
            <MdArrowBackIosNew className={' ' + (open3 ? 'arrow_icon rotate':'arrow_icon')} />
        </button>  
        <Collapse  isOpened={open3}>
        <p id ="Service">
        Nos équipes se tiennent à votre disposition pour vous fournir 
        une expérience parfaite. N'hésitez pas à nous contacter si vous 
        avez la moindre question.
        </p> 
        </Collapse>
        <button  onClick={() => setOpen4(!open4)}
        aria-controls="Responsabilité"
        aria-expanded={open4} className="blue">
             <span>Responsabilité</span>
            <MdArrowBackIosNew className={' ' + (open4 ? 'arrow_icon rotate':'arrow_icon')} />
        </button>  
        <Collapse  isOpened={open4}>
        <p id ="Responsabilité">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes 
        que pour les voyageurs, chaque logement correspond aux critères 
        de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
        cela permet à nos équipes de vérifier que les standards sont bien respectés.
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </p> 
        </Collapse>
        </div>
       </div>
    )
}

export default About;