import { useEffect, useState } from "react";

function UseCase2() {
    const [products, setProdcuts] = useState([])
    const fetchData = async () => {
        try {
            const resp = await fetch('https://dummyjson.com/products')
            const json = await resp.json()
            console.log(json);
            setProdcuts(json.products)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="row">
            <h3>products components</h3>
            {
                products.map(product => (
                    <div key={product.id} className="col-md-4">
                        <h3>Title:{product.title}</h3>
                        <p>Desp:{product.description}</p>
                        <h4>Category:{product.category}</h4>
                        <img src={product.thumbnail} alt={product.title} />

                    </div>
                ))}
        </div>
    );
}

export default UseCase2;