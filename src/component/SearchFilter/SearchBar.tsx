import React, { useEffect, useRef, useState } from 'react';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {

    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
       if(inputRef.current) {
           inputRef.current.focus();
       }
    }, [onSearch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Recherche..."
            />
        </>

    )
}

export default SearchBar;