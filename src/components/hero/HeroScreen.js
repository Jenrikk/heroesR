import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {

  // const params = useParams();
  const {heroeId} = useParams();
  // console.log(params.heroeId);
  console.log(heroeId);

  const navigate = useNavigate();


  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  if (!hero){
    return <Navigate to='/' />
  }

  const imagePath = `/assets/${hero.id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={hero.superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero}</h3>
        <ul className="list-group">
          <li className="list-group-flush"> <b>Alter ego: </b> {hero.alter_ego} </li>
          <li className="list-group-flush"> <b>Publisher: </b> {hero.publisher} </li>
          <li className="list-group-flush"> <b>First Appearance: </b> {hero.first_appearance} </li>

          <h5>Characters</h5>
          <p>{hero.characters}</p>

          <button className="btn btn-outline-info" onClick={handleReturn}
          >Regresar</button>
        </ul>
      </div>
    </div>
  )
}

export default HeroScreen
