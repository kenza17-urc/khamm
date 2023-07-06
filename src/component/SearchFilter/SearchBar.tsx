import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }:SearchBarProps) => {

    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchTerm);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Recherche..." />
            <input type="submit" value="Search" />
        </form>
    )
}

export default SearchBar;