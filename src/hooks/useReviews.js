import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews , setReviews] = useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data.slice(3)));
    },[]);

    return [reviews , setReviews];
}
export default useReviews;