import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";



const likedStorage = new Set()


export default function Pet({ pet }) {
    const [liked,setLiked] = useState(likedStorage.has(pet.id))

    if(liked){
        likedStorage.add(pet.id)
    }else{
        likedStorage.delete(pet.id)
    }

  return (
    <>
      <article>
        <img
          src={pet.image.url}
          alt={pet.name}
        />
        <div className="body row">
          <h2>{`${pet.name.slice(0,12)}..`}</h2>
          <p>
          
          {liked ? <FaRegHeart role="button" className="filled" onClick={()=> setLiked(!liked)} /> : <FaRegHeart role="button" onClick={()=> setLiked(!liked)} /> }

         </p>
        </div>
        <footer>
          <Link to={`/pet/detail/${pet.id}`} state={pet} className="btn btn--link">read more</Link>
        </footer>
      </article>
    </>
  );
}
