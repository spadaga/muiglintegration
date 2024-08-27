import React, { useEffect } from 'react'
import SearchBoxWithAutocomplete from './SearchBoxWithAutocomplete ';

const SearchContainer = () => {
    const [options, setOptions] = React.useState([]);


    // Fetch JSON data
    useEffect(() => {
        console.log("get json")
        fetch('/data/pcs.json')
            .then((response) => response.json())
            .then((data) => {
                setOptions(data.map(item => ({
                    title: item.PCNAME,
                    id: item.PCID,
                })));
            });
    }, []);

    return (
        <div>
            <SearchBoxWithAutocomplete label="PC" options={options} />
        </div>
    )
}

export default SearchContainer
