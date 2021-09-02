import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './todos.module.css'

import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const Todos = (props) => {
    return(
        <div className={styles.todos}>
            {props.todos.map((todo, index, arr) => {
              return (
                <div 
                    key={index} 
                    // className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`}
                    className={classnames(styles.todo, {
                        [styles.todoDivider]: !(arr.length === index + 1)
                    })}
                >

                  {todo.title}

                  <div className={styles.todoIconWrapper}>
                    <div className={styles.todoCount}>{todo.count}</div>

                    <button className={styles.todoActionButton} onClick={() => props.onSubstraction(index)}>
                      <img src={minusIcon} alt="minus icon"></img>
                    </button>

                    <button className={styles.todoActionButton} onClick={() => props.onAddition(index)}>
                      <img src={plusIcon} alt="plus icon"></img>
                    </button>
                  </div>

                </div>
              )
            } )}
          </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onSubstraction: PropTypes.func,
    onAddition: PropTypes.func
}

export default Todos