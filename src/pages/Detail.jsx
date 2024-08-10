import { Link, useLocation,Navigate} from "react-router-dom";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import "../../public/css/detail.css";
import getEnergyLevel from "../utils/getEnergyLevel";


export default function Detail() {
  const {state} = useLocation()
  

  useEffect(()=>{
    document.title = `Showing ${state.name} details`
  })


  if(!state){
      return <Navigate to="/pet" replace={true}/>
  }


  return (
    <>

      <div className="container detail">
       <Link className="btn btn--link btn--no-underline" to="/pet">
       <FaHome aria-hidden="true"/>
       </Link>

        <header className="detail__header">
          <img
            src={state.image.url}
            alt={state.name}
          />

          <h1>Abyssinian</h1>
        </header>

        <main>
          <ul className="detail__list">
            <li>
              <p>Origin</p>
              <span>{state.origin}</span>
            </li>
            <li>
              <p>Temperament</p>
              <span>{state.temperament}</span>
            </li>
            <li>
              <p>Lifespan</p>
              <span>{state.life_span} years</span>
            </li>
            <li>
              <p>Energy Level</p>
              <span>{getEnergyLevel(state.energy_level)}</span>
            </li>
            <li>
              <p>Weight</p>
              <span>{state.weight.imperial} lbs</span>
            </li>
            <li>
              <p>
                Read more at
                <a rel="noopener noreferrer" target="_blank" href={state.wikipedia_url}> Wikipedia</a>
              </p>
            </li>
          </ul>
          <h3>description</h3>
          <p>
            {state.description}
          </p>
        </main>
      </div>
    </>
  );
}
