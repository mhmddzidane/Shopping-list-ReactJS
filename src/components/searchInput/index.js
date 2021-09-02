import PropTypes from 'prop-types'
import Styles from './searchInput.module.css'

const SearchInput = (props) => {
    return(
        <form className={Styles.form} onSubmit={props.onSubmit}>
          <input 
            className={Styles.input} 
            type="text" 
            placeholder="List" 
            onChange={props.onChange} 
            value={props.value}>
          </input>
          <button className={Styles.addButton} type="submit">Add</button>
        </form>
    )
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    vale : PropTypes.string
}

export default SearchInput