import { useEffect, useState } from "react";
import { getGifByCategory } from "../helpers/GetGiftByCategory";

export const useFetchGif = (category) =>{

    const [state, setstate] = useState({
        data : [],
        loading : true
    });

    useEffect(()=>{
        getGifByCategory(category)
            .then( imgs =>{
                setTimeout(() => {
                    setstate({
                        data : imgs,
                        loading : false           
                    })
                }, 3000);
            });
    }, [category])

    return state;
}