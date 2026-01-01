import React from 'react'
import "./Produits.scss";
import {images} from "../../autres/data.js"
import { color } from 'framer-motion';
const Produits = () => {
  return (
    <div className="sous-conteneur-produits">
      <span className='titre'>Les meilleurs Offres</span>
      <h2 className="sous-titre">Résidences les plus populaires</h2>
      <div className="conteneur-slide">
        <div className="suivi-slide">
            <div className="carte-article">
                <img src={images.home1} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home3} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home4} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home5} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home6} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home7} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home8} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
        </div>
        <div className="suivi-slide">
            <div className="carte-article">
                <img src={images.home1} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home3} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home4} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home5} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home6} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home7} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
             <div className="carte-article">
                <img src={images.home8} alt=" Images Home 1" />
                <div className="details">
                    <span className="prix">
                        <span>$</span>1000
                    </span>
                    <h4 className='nom'>Rize de Sana</h4>
                    <p className="desc">Un magasin et spacieux appartement pour vous  et votre famille</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Produits
