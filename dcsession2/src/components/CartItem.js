function CartItem({ item, removeFromCart }) {
  return (
    <div>
      <h3>
        {item.name} : price{item.price}
      </h3>
      <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
    </div>
  );
}

export default CartItem;
