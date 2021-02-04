import React from 'react';
import GifGridItem from './GifGridItem';
import {useFetchGif} from '../hooks/useFetchGif'

export const GifGrid = ({category}) => {
    const {loading, data} = useFetchGif(category); 
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                
                    {

                        loading ? 'estamos cargando datos...': 

                        data.map( img => (
                                < GifGridItem  
                                    key={img.id}
                                    {...img}
                                />
                            )
                        )
                    }
            </div>
        </>
    )
}
