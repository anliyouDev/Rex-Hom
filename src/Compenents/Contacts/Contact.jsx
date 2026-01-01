import React from 'react'
import './Contact.scss'
import { images } from '../../autres/data.js'

const Contact = () => {
  return (
    <div className='sous-conteneur-contact'> 
        <span className="titre">Contact</span>
        <h2 className='sous-titre'>Envoyer nous un message</h2>
        <div className="grid">
            <div className="gauche">
                <form action="">
                    <div className="nom">
                        <label htmlFor="">Nom</label>
                        <input type="text" name="" id="" />
                    </div>
                     <div className="email">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="message">
                        <label htmlFor="">Message</label>
                        <textarea rows={5}></textarea>
                    </div>
                    <button type='submit'>Enovyer</button>
                </form>
            </div>
            
            <div className="droite">
                <div className="conteneur-image">
                    <div className="image-un">
                        <img src={images.homeng20} alt="Nouvelle image ici" />
                    </div>
                        <img src={images.homesng21} alt="Nouvelle image ici" className='image-deux' />
                        <img src={images.homeng22} alt="Nouvelle image ici"  className='image-trois'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact