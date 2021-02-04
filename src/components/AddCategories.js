import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function AddCategories({setCategories}) {
    const [inputValue, setInputValue]= useState();
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue){
            setCategories(cats=>[inputValue,...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange}></input>
        </form>
    )
}

AddCategories.propTypes = {
    setCategories : PropTypes.func.isRequired
}
