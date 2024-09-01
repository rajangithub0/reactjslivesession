import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const items = useSelector(state => state.CartReducer.items);
    // console.log(items);

    const dispatch = useDispatch()
    const handleClick = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })

    }
    return (
        <div>
            <h1>My Cart</h1>

            {
                items.length > 0 ? <table>
                    <thead>
                        <tr><th>ID</th><th>name</th><th>price</th><th>category</th><th>op</th></tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td><button onClick={() => handleClick(item.id)}>removefromcart</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> :
                    <h3>no item in cart</h3>
            }



        </div>

    )
}

export default Cart