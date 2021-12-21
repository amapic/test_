
import React from 'react';
import Image from 'next/image'
import { Count_annee, Graph_masse_distance,  Graph_radial,DessinSystemeSolaire } from '../component_planet/graph_planet';
import { Total_planete } from '../component_planet/chiffre'
import { Navbar, NavItem } from '../component/navbar/navbar'
import { Svg } from '../component_planet/creation_svg'
import 'bootstrap/dist/css/bootstrap.css';


const style: {} = {
  color: 'black'
};

// icon_up={<CaretIcon_up />} icon_down={<CaretIcon_down />}

export default function Dashboard() {


  return (

    <div className="wrapper">
      <React.StrictMode>
        <div id="content">

          <Navbar  >
            <NavItem  >
            </NavItem>
          </Navbar>

          <div className="container features mt-2">
            <div className="row gx-2">
              <div className="col-10">
                <div className="border border-dark rounded p-3 mb-5">
                <h3 className="feature-title text-center">Historique</h3>
                <span style={{zIndex:-1}}>En 1995, la première exoplanète est découverte par Michel Mayor à l'observatoire de Haute Provence
                  Depuis , de nombreuses autres planète plus petites et plus éloignées de leurs étoiles, donc plus facile à repérées, ont été trouvées.
                  </span>
                  <br></br>
                  <h3 className="feature-title text-center">Masse et période de révolution</h3>
                  <Graph_masse_distance />

                  <span style={{zIndex:-1}}>De plus en plus de planète sont trouvées au fil des ans grâce à de nouveau instrument.</span>
                  
                  <h3 className="feature-title text-center">Planètes découvertes par an</h3>
                  {/* <img src="images/column-1.jpg" className="img-fluid"> */}
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis.</p> */}
                  <Count_annee />
                  {/* <svg id="cups" width="100" height="130" viewBox="0 0 75 47" xmlns="http://www.w3.org/2000/svg">

                    <path id="simple-cup" fill="#f00" d="M0.385262674,5.94224634 C0.385262674,6.34224634 -0.28516339,17.7539308 4.32901017,31.1532061 C5.32901017,32.3532061 6.09230991,37.8915223 7.49230991,42.9915223 C10.3923099,53.5915223 9.99336758,58.192 9.99336758,58.192 C9.99336758,58.192 9.99336758,59.1351801 9.99336758,62.192 L9.99336758,63.3762725 L14.9773381,65.692 C20.0773381,67.792 34,67.592 38.6,65.692 L44.0054662,63.992 L44.0054662,62.192 C44.0054662,60.3070603 44.0054662,61.2485521 44.0054662,59.5616903 C44.0054662,59.6227531 44.0054662,58.192 44.0054662,58.192 C44.0054662,58.192 44.0054662,56.0357788 44.0054662,56.0368563 C44.0054662,56.1443976 44.1584889,52.1913962 44.1513903,52.2148862 C44.18043,52.2064969 44.4505642,49.3217527 44.4611476,49.3039416 C44.0054662,46.9651447 46.7678097,39.091534 47.5678097,38.791534 C48.3678097,38.591534 52.8,37.6017328 55.4,37.0017328 C62.3288017,36.7364795 68.4691682,30.4573789 68.4691682,26.851942 C68.4691682,25.0527911 68.4691682,20.2992257 66.1171925,17.7539308 C63.4665746,14.8148385 60.3572838,14.0704885 56.6937477,14.2033611 C54.2179046,14.2931572 54.2497766,12.7733674 54.0497766,12.5733674 C53.8497766,12.4733674 54.0497766,12.5733674 54.0497766,10.8407045 L53.3480457,6.66187369 L51.3120843,4.64051206 C49.8120843,3.64051206 47.4776665,2.98869271 44.6776665,2.18869271 C38.2776665,0.488692712 20.1046423,0.0299756608 12.7046423,1.42997566 C7.00464234,2.42997566 0.385262674,4.74224634 0.385262674,5.94224634 Z M64.7915417,22.8695184 C64.7915417,25.8695184 65.5001114,27.9159065 60.6340924,31.7563748 C59.5900982,32.5803392 64.003575,30.2804794 62.903575,30.7804794 C60.903575,31.8804794 53.6,32.676872 52.3920534,31.7563748 C51.5537443,31.1057778 51.0837569,29.8430422 50.9820915,27.9681678 C51.2625331,24.5690682 52.1351692,22.0569251 53.6,20.4317385 C57.4,16.0317385 64.7915417,19.1695184 64.7915417,22.8695184 Z" fill-rule="nonzero" fill="#070707" />
                    <path opacity="0" id="fancy-cup" fill="#0f0" d="M0,6.792 C0,7.192 0.9,8.492 1.9,9.592 C2.9,10.792 4.9,15.892 6.3,20.992 C9.2,31.592 12.4,36.492 17.5,38.192 C21.6,39.592 21.7,39.792 18.8,42.192 L16.5,43.992 L19.5,45.292 C24.6,47.392 37,47.592 41.6,45.692 L45.5,44.092 L43.1,42.092 C41,40.392 40.9,39.892 42.1,39.092 C42.8,38.592 44.2,38.192 45.1,38.192 C47,38.192 52.4,33.492 53.2,31.192 C53.6,29.892 53.9,29.892 55.3,30.992 C57.5,32.892 59.1,31.592 58.4,28.592 C58,26.992 58.3,26.092 59.1,25.792 C59.9,25.592 62.6,24.792 65.2,24.192 C70.7,22.692 75,18.992 75,15.492 C75,13.692 74.1,12.692 71.3,11.592 C68,10.192 67.3,10.192 63.7,11.592 C61.4,12.492 59.5,12.992 59.3,12.792 C59.1,12.692 59.9,11.292 61,9.892 L63.1,7.292 L60.5,5.592 C59,4.592 55.5,3.192 52.7,2.392 C46.3,0.692 21.5,-0.108 14.1,1.292 C8.4,2.292 0,5.592 0,6.792 Z M70,15.592 C70,18.592 65.7,22.192 62.3,22.192 C61,22.192 59,22.692 57.9,23.192 C55.9,24.292 55.5,23.592 56.6,20.792 C56.9,19.892 57.6,19.492 58.1,19.792 C58.6,20.092 60.5,18.692 62.2,16.792 C66,12.392 70,11.892 70,15.592 Z" fill-rule="nonzero" fill="#070707" />

                  </svg> */}
                  {/* <Svg /> */}
                  {/* <Graph_rayon_moyen /> */}

                  <h3 className="feature-title text-center">Masse et période de révolution</h3>
                  <br></br>
                  Aujourd'hui des systèmes solaires contenant jusqu'à 8 planètes sont connus.
                  <br></br>
                  <DessinSystemeSolaire />
                </div>
              </div>

              <div className="col-2">
                <div className="container features">
                  <div className="row gy-2">
                    <div className="border border-dark rounded p-3">
                      <h3 className='text-center titre_col_droite'>Planète<br></br>découverte</h3>
                      {/* <Total_planete /> */}
                    </div>
                    <div className="border border-dark rounded p-3">

                      <h3 className='text-center titre_col_droite'>Planète<br></br>habitable</h3>
                      <h4><div className='text-center mx-0'>20</div></h4>
                    </div>
                    <div className="border border-dark rounded p-3">

                      <h3 className='text-center titre_col_droite'>Type de <br></br>planète</h3>

                      <Graph_radial />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </React.StrictMode>
    </div>
  )
}


