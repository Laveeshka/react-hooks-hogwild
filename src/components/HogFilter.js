function HogFilter({ isGreased, setIsGreased }) {
    
    function handleChange(){
        setIsGreased((wasGreased) => !wasGreased);
        console.log(isGreased);
    }

    return (
        <label>
            <input type="checkbox" name="greased" checked={isGreased} onChange={handleChange}></input>
            Show only greased hogs
        </label>
    )
}

export default HogFilter;