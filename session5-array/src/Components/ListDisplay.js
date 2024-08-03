import { useState } from "react";

function ListDisplay() {
    const data = [
        {
            id: 1,
            name: 'headphone',
            price: 499
        },
        {
            id: 2,
            name: "mobile",
            price: 10500
        },
        {
            id: 3,
            name: "laptop",
            price: 50500
        }
    ]

    const [products, setProducts] = useState(data)

    const handleclick = () => {
        setProducts([...products, { id: 4, name: "pen", price: 250 }])
    }

    return (
        <div>
            <table className="mt-3 table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>price</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className={(product.price > 9999) ? "table-danger" : "table-secondary"}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
                <button className="btn btn-primary" onClick={handleclick}>Add New Prodcut</button>
            </table>
        </div>
    );
}

export default ListDisplay;