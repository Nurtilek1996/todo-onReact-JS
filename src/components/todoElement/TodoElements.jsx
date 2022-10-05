import './TodoElements.css'

const TodoElements = (props) => {

const onDelete = () => {
props.deleteTask(props.id)
}

const onEdit = () => {
  alert ('Edited')
}

    return (
        <div className="todo-elem">
          <div>
            <input type='checkbox' checked={props.status}/>
  <span className={props.status === true ? 'text-line-through': ''}>{props.text}</span>
          </div>
  
  <div>
    <button onClick={onEdit}>Edit</button>
    <button onClick={onDelete}>Delete</button>
  </div>
</div>
    )
}

export default TodoElements