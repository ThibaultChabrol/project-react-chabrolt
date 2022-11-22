import React from 'react';
const Search = () => {
    const [data, setData] = React.useState([]);

    return (
        <div>
            <input type="text" name="searchBar" id="searchBar" placeholder="taper le nom d'un aliment (en anglais)"/>
        </div>
    );
};

export default Search;