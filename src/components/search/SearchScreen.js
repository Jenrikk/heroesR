import {useMemo} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import {useForm} from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q=''} = queryString.parse(location.search);

  const initialForm = {searchText: ''};
  const [ formValues, handleInputChange, reset ] = useForm( initialForm );
  //desestructuramos formValues xq es el q devuelve el initialForm
  const {searchText} = formValues;

  const heroes = useMemo(() => getHeroesByName(q),[q]); 

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <>
        <h1>Search Screen</h1>
        <hr />

        <div className="row">
          <div className="col-6 col-sm-4 col-md-4">
            <h4>Buscar</h4>
            <hr />

            <form onSubmit={handleSearch}>

              <input 
                type="text"
                autoComplete="off"
                placeholder="Buscar heroe"
                className="form-control"
                name="searchText"
                value={searchText}
                onChange={handleInputChange}
              />

              <button 
                className="btn btn-outline-primary mt-1"
                type="submit">Buscar</button>

            </form>

          </div>

          <div className="col-6 col-sm-8 col-md-8">
            <h4>Resultados</h4>
            <hr />
            {
              (q === '') && <div className="alert alert-info">Busca un heroe</div>
            }

            <div className="row">
            {

              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero}/>
              ))
            }
            </div>
          </div>
        </div>
    </>
  )
}

export default SearchScreen