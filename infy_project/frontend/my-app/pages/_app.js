import './globals.css';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer1';
import { useEffect,useState } from 'react';
import { WebSocketProvider } from '@/contexts/WebsocketsContext';

function MyApp({ Component, pageProps }) {
   useEffect(() => {
       console.log("fsaf");
   }, []);

   const [cart, setCart] = useState([]);
   const [reloadKey, setReloadKey] = useState(1);

   const addToCart = (item, qty, price, name) => {
       let newCart = [...cart];
       for (let index = 0; index < qty; index++) {
           newCart.push({ item, price, name });
       }
       setCart(newCart);
       setReloadKey(Math.random() / 100);
   };

   const removeFromCart = (index) => {
       let newCart = [...cart];
       newCart.splice(index, 1);
       setCart(newCart);
       setReloadKey(Math.random() / 100);
   };

   const clearCart = () => {
       setCart([]);
       setReloadKey(Math.random() / 100);
   };

   return (
    <WebSocketProvider>
        <>
           <Navbar key={reloadKey} cart={cart} />
           <Component cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} />
           <Footer />
       </>
    </WebSocketProvider>
       
   );
}

export default MyApp;