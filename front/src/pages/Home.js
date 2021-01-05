import React from 'react'
import electro from '../electromenager.jpg'
import pc from '../pc.jpg'
import phone from '../phone.jpg'
import tablette from '../tablette.jpg'
import accessoires from '../acessoires.jpg'
import photocopier from '../photocopier.jpg'
import homecinema from '../homecinema.jpg'
import tv from '../tv.jpg'
import recepteur from '../recepteur.jpg'
import CarouselPage from './CarousalPage'
import CarouselLogo from './CarouselLogo'
import Nouveautes from './nouveautes'
const Home = () => {
   
    return (
      <div style={{marginTop:"110px"}}>
       <CarouselPage />
      <div className='offres'>
        <div className='container mt-5'>
        <h2>NOS OFFRES</h2>
        <div className='row text-center' >
          <div className='col-sm-6 col-md-4 my-2 translate '>
            <img src={electro} className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2 translate '>
            <img src={pc} className=' img-thumbnail image'  />
    
          </div>
          <div className=' col-sm-6 col-md-4 my-2 translate'>
            <img src={phone}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2 translate'>
            <img src={tablette}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2 translate'>
            <img src={accessoires}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2 translate'>
            <img src={photocopier}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2 translate'>
            <img src={homecinema}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4 my-2 translate'>
            <img src={recepteur}  className=' img-thumbnail image'  />
          </div>
          <div className=' col-sm-6 col-md-4  my-2 translate'>
            <img src={tv}  className=' img-thumbnail image '  />
          </div>
        </div>
        </div>
      </div>
      <CarouselLogo/>
      <Nouveautes/>
      <div className='container Livraisons mt-5'>
      <div className='row'>
         <div className='col-sm-6 col-md-4 '>
           <div className='contenu '>
            <div className='cercle m-5'>
              <i class="fa fa-ambulance" aria-hidden='true'/>
            </div>
            <div class='text'>
              <h4 className='domicile'>Livraison à domicile</h4>
              <p>Votre commande livrée chez vous </p>
            </div>
           </div>
         </div>
         <div className='col-sm-6 col-md-4 '>
         <div className='contenu '>
            <div className='cercle m-5'>
              <i class="fa fa-volume-control-phone" aria-hidden='true'/>
            </div>
            <div class='text'>
              <h4 className='domicile'>Service client</h4>
              <p>Nous sommes disponibles pour répondre à vos questions </p>
            </div>
           </div>
        </div>
         <div className='col-sm-6 col-md-4 '>
         <div className='contenu '>
            <div className='cercle m-5'>
              <i class="fa fa-clock-o" aria-hidden='true'/>
            </div>
            <div class='text'>
              <h4 className='domicile'>Horaire</h4>
              <p>Ouvert du lundi au samedi de 8h00 à 19h30</p>
            </div>
           </div>
        </div>
      </div>
      </div>
      <div className='contact mt-5'>
      <div className='container'>
        <div className='row'>
        <div className='col-sm-6 col-md-4 '>
           <div className='logo'>
           <i className="fas fa-dice" style={{fontSize:50}}></i>
           <br/>
           <label>MyHouse</label>
           </div>
        </div>
        <div className='col-sm-6 col-md-4 '>
           <div className='logo'>
             <p style={{fontWeight:400,fontSize:18}}>myhouse@gmail.com</p>
             <p style={{fontWeight:400,fontSize:18}}>(+216)53502987</p>
           </div>
        </div>
        <div className='col-sm-6 col-md-4 '>
        <div className='logo'>
          <ul className='social'>
          <li><i class="fab fa-facebook"></i></li>
          <li><i class="fab fa-twitter" ></i></li>
          <li><i class="fab fa-instagram"></i></li> 
          <li><i class="fab fa-youtube" ></i></li> 
          </ul>
        </div>
        </div>
        </div>
        </div>
        <div className='copie '>
          <div class='container right'>
          <p class="_blank" href="#" target="_blank">
                    © 2020 - MyHouse
          </p>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Home
