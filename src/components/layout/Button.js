import '../../styles/Button.css'

function Button(props) {

    return (
        <button onClick={props.click} className='btn' id={props.id}>{props.cta}</button>
    )
}

export default Button