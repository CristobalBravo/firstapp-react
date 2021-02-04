import React, {useState} from 'react';
import AddCategories from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // const handdleAdd = () =>{
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return  (
                <>
                    <h2>GifExpertApp</h2>
                    <hr/>
                    <AddCategories setCategories = {setCategories} />
                    <ol>
                        {
                            categories.map( category =>
                                <GifGrid  
                                key={category}
                                category={category}
                                />
                            )
                        }
                    </ol>
                </>
            );
}

