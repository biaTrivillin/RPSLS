function GameWarning ({title, elementOne, action, elementTwo}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{elementOne} {action} {elementTwo}</p>
        </div>
    )
}

export default GameWarning
