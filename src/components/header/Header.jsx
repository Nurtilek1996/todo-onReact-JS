import './Header.css'

const Header = (props) => {
    return (
          <div className="wrapper">
    To Do List ({props.arrResult} / {props.arrLength})
    </div>
    )
  
}
export default Header