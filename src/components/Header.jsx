import { useMemo, removeFromCart } from 'react';

const Header = ({ cart, removeFromCart, increaseQuantity, decraseQuantity }) => {

    const cartTotal = useMemo( () => cart.reduce( (total, item) => total + (item.quantity * item.price), 0), [cart]);
    const isEmpty = useMemo( () => cart.length === 0, [cart]);


    return (

        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html" className="header__contenedor-logo">
                            <img className="img-fluid" src="./img/betta_logo.svg" alt="imagen logo" />
                            <h1 className="header__logo">Acu<span>Store</span></h1>
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="./img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">

                                {isEmpty ? (
                                    <p className="text-center">El carrito esta vacio</p>

                                ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(post => (
                                                    <tr key={post.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`./img/${post.image}.png`} alt={`Imagen ${post.name}`} />
                                                        </td>
                                                        <td>{post.name}</td>
                                                        <td className="fw-bold">
                                                            {post.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={ () => decraseQuantity(post.id)}
                                                            >
                                                                -
                                                            </button>
                                                            {post.quantity}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseQuantity(post.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(post.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>

                                        <p className="text-end">Total pagar: <span className="fw-bold">{cartTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span></p>
                                        <button className="btn btn-dark w-100 mt-3 p-2" >Vaciar Carrito</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header