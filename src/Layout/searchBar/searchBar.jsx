import './searchBar.sass'

import Dropdown from '../../components/dropdown/dropdown'

const SearchBar = (props) => {

  return ( 
    <div className='searchbar'>
      <h2 className="title"> All PS5 games</h2>
      <div className='select-wrapper'>
        <select id="datasort" >
          <option value="volvo">New to Old</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
     

      <form className="searchbar__filter">
        <Dropdown />
        <Dropdown />
        <Dropdown /> 
        <div className="result"> 
          716 items
        </div>
        
      </form>
      
    </div>
  )
}

export default SearchBar