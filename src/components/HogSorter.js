function HogSorter({ setSelectedSortValue }) {

    function handleChange(event){
        console.log(event.target.value);
        setSelectedSortValue(event.target.value);
    }

    return (
        <select name="hog-sorter" id="hog-sorter" onChange={handleChange}>
            <option value="default">Sort by</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    )
}

export default HogSorter;