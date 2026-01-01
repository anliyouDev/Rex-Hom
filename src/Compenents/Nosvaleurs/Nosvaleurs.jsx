import React, { useState } from 'react'
import "./Nosvaleurs.scss";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import {images} from "../../autres/data.js"
const Nosvaleurs = () => {
  const [activeItem,setActivteItem] = useState("un")
  const updateActiveItem = (valeur)=>{
    setActivteItem(valeur);
  }
  return (
    <div className='sous-conteneur-valeurs'>
       <div className="grid">
        <div className="gauche">
          <div className="conteneur-images">
            <img src={images.homen10} alt="" />
          </div>
        </div>
        <div className="droite">
          <span className="titre">Nos valeurs</span>
          <h2 className="sous-titre">Ce en quoi nous croyons</h2>
          <p className="desc-valeurs">
              Nous garantissons un nouveau de qualité inégalé, un 
              mangnifique et spacieux appartement pour vous et votre famille.
          </p>
          <div className="liste-valeurs">
              <div className={activeItem=== "un" ? "item active" : "item"} onClick={()=>updateActiveItem("un")}>
                  <div className="head">
                      <IoShieldCheckmarkSharp className='valeur-icon'/>
                      <span>Qualité</span>
                      <FaChevronDown className='valeur-icon'/>  
                  </div>
                  <p className="description">
                     Nous garantissons un nouveau de qualité inégalé, un 
                     mangnifique et spacieux appartement pour vous et votre famille.
                  </p>
              </div>
               <div className={activeItem=== "deux" ? "item active" : "item"} onClick={()=>updateActiveItem("deux")}>
                  <div className="head">
                      <MdVisibility className='valeur-icon'/>
                      <span>Visibilité</span>
                      <FaChevronDown className='valeur-icon'/>  
                  </div>
                  <p className="description">
                     Nous garantissons un nouveau de qualité inégalé, un 
                     mangnifique et spacieux appartement pour vous et votre famille.
                  </p>
              </div>
               <div className={activeItem=== "trois" ? "item active" : "item"} onClick={()=>updateActiveItem("trois")}>
                  <div className="head">
                      <FaCarSide className='valeur-icon'/>
                      <span>Satisfaction</span>
                      <FaChevronDown className='valeur-icon'/>  
                  </div>
                  <p className="description">
                     Nous garantissons un nouveau de qualité inégalé, un 
                     mangnifique et spacieux appartement pour vous et votre famille.
                  </p>
              </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Nosvaleurs