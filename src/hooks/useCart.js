import { useEffect, useState } from "react"

const useCart = () => {
    const [carts ,setcarts] = useState([])

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setcarts(data))
    },[])

    return [carts , setcarts];
}
export default useCart;