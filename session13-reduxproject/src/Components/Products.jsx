import React from 'react'
import { useDispatch } from 'react-redux'

const Products = () => {
    const data = [
        { id: 1, name: "laptop", price: 99999, category: 'electronics' },
        { id: 2, name: "mobile", price: 5555, category: 'electronics' },
        { id: 3, name: "charger", price: 999, category: 'electronics' },
        { id: 4, name: "headphones", price: 99, category: 'electronics' },
    ]

    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch({ type: "ADD_ITEM", payload: item })

    }
    return (
        <div>
            <table>
                <thead>
                    <tr><th>ID</th><th>name</th><th>price</th><th>category</th></tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td><button onClick={() => handleClick(item)}>addToCart</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products