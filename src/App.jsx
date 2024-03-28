import { useState, useEffect } from "react";
import Header from "./components/Header";
import Betta from "./components/Betta";
import { db } from "../data/db";


function App() {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    const MAX_ITEMS = 5;
    const MIN_ITEMS = 1;

    useEffect( () => {
        setData(db);
    }, []);

    function addToCart(item) {

        const itemExists = cart.findIndex( element => element.id === item.id);

        if(itemExists >= 0) {
            if(cart[itemExists].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity++;
            setCart(updatedCart);
        } else {
            item.quantity = 1
            setCart([...cart, item])
        }

        console.log("Producto agregado");
    }

    function removeFromCart(id) {

        setCart(prevCart => prevCart.filter(post => post.id !== id));

    };

    function increaseQuantity(id) {

        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item;
        });
        setCart(updatedCart);
    }
    function decraseQuantity(id) {

        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item;
        });
        setCart(updatedCart);
    }    

    return (
        <>

            <Header 
                cart = {cart}
                removeFromCart= {removeFromCart}
                increaseQuantity = {increaseQuantity}
                decraseQuantity = {decraseQuantity}

            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">

                {data.map( (post) => (
                    
                    <Betta 
                        key={post.id}
                        post={post}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                ))}

                    
                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">AcuStore - Todos los derechos Reservados</p>
                </div>
            </footer>

        </>
    )
}

export default App
