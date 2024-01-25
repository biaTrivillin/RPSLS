import '../../styles/Button.css'

function Button(props) {
    return (
        <button className='btn' id={props.id}>{props.cta}</button>
    )
}

export default Button