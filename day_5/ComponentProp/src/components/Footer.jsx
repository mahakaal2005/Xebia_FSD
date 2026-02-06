import "./Footer.css"

export default function Footer(props){
    return(
        <footer className="Footer">
            <p className="Footer para">{props.text}</p>
            <p className="Footer para">{props.year[1]}</p>
            <p className="Footer para">{props.company.name}</p>
            <p className="Footer para">{props.company.location}</p>
        </footer>
    )
}