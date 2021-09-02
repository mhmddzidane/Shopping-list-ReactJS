import PropTypes from 'prop-types'
import styles from './info.module.css'

const Info = ({todosLength, totalCounts, onDelete}) => {
    return(
        <div className={styles.info}>

          <div className={styles.infoTotal}>
            <p>{`Total List: ${todosLength}`}</p>
          </div>

          <div className={styles.infoTotal}>
            <p>{`Total Counts: ${totalCounts}`}</p>
          </div>

          <button className={styles.deleteAllButton} onClick={onDelete}>
            Delete all
          </button>

        </div>
    )
}

Info.propTypes = {
    todosLength: PropTypes.number,
    totalCounts: PropTypes.func,
    onDelete: PropTypes.func
}

export default Info