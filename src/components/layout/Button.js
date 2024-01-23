import '../../styles/Button.css'

function Button(props) {
    return (
        <button className='btn'>{props.cta}</button>
    )
}

export default Button