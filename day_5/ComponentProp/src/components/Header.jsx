import "./Header.css"

export default function Header(props){
    return(
    <header className="Header">
        <h1 className="Header H1">{props.title}</h1>

        <nav>
            <a href="#" className="NavLink">Home</a>
            <a href="#" className="NavLink">About</a>
            <a href="#" className="NavLink">Contact</a>
        </nav>
    </header>
    )
}