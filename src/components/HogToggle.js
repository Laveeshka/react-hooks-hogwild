function HogToggle({ showHogs, onButtonClick }) {

    const buttonText = showHogs ? "Hide Hogs" : "Show Hogs";
    const showButton = (
        <button type="text" onClick={handleClick}>{buttonText}</button>
    )

    function handleClick() {
        onButtonClick((displayHogs) => !displayHogs)
    }

    return (
        <>
            {showButton}
        </>
    )
}

export default HogToggle;