
const Betta = ({post, addToCart }) => {

    const { image, name, description, price } = post



    return (

        <div className="col-md-6 col-lg-4 my-4 align-items-center card__producto">
            <div>

                <img className="img-fluid my-4" src={`./img/${image}.png`} alt={`Imagen ${name}`} />

                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>

            </div>
            <button
                type="button"
                className="btn btn-dark w-100"
                onClick={() => addToCart(post)}
            >Agregar al Carrito</button>

        </div>
    )
}

export default Betta