import '../../styles/Button.css';

function Button(props) {

    return (
        <button onClick={props.click} className={props.class} id={props.id}>{props.cta}</button>
    )
}

export default Button
