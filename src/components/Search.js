import {AiOutlineClose} from "react-icons/ai";

const Search = ({formSubmit, text, inputChange}) => {
  return (
    <div className='search-form'>
      <form onSubmit={formSubmit}>
        <input className="search-form__input" type="text" name="search" value={text} onChange={(e) => inputChange(e)} placeholder="I'm looking for..." />
        <button className="search-form__clear"><AiOutlineClose /></button>
        <button className="search-form__button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
