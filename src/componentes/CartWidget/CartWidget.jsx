import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../src/assets/carrito.png";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carro de compra" />
            <p>10</p>
        </div>
    )
}

export default CartWidget
