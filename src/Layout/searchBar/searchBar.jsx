import './searchBar.sass' 

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

        <div className="select-wrapper">
          <select id="genre"> 
            <option value="volvo">Genre</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="select-wrapper">
          <select id="genre"> 
            <option value="volvo">Price</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="select-wrapper">
          <select id="genre"> 
            <option value="volvo">Type</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="select-wrapper">
          <select id="genre"> 
            <option value="volvo">Age Rating</option>
            <option value="saab">13+</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        
        <div className="checkbox"> 
          <div className="checkbox-wrapper"> 
            <input type="checkbox" name="" id="PS4" /> 
            <label htmlFor="PS4"> ps4 </label>
          </div>
          
          <div className="checkbox-wrapper">
            <input type="checkbox" name="" id="PS5" />
            <label htmlFor="PS5"> PS5 </label>
          </div> 
        </div>

        <div className="checkbox"> 
          <div className="checkbox-wrapper"> 
            <input type="checkbox" name="" id="release" /> 
            <label htmlFor="release"> Released </label>
          </div>
          
          <div className="checkbox-wrapper">
            <input type="checkbox" name="" id="soon" />
            <label htmlFor="soon"> Coming soon </label>
          </div> 
        </div>

        <div className="checkbox"> 
          <div className="checkbox-wrapper"> 
            <input type="checkbox" name="" id="VR" /> 
            <label htmlFor="VR"> VR </label>
          </div> 
        </div>
        
        <div className="result"> 
          716 items
        </div>
        
      </form>
      
    </div>
  )
}

export default SearchBar