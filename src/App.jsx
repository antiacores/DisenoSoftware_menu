import React, { useState } from 'react';
import { Menu } from "./components/Menu";
import { Cart } from './components/Cart';
import { PaymentConfirmation } from './components/PaymentConfirmation';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleAddToOrder = (item) => {
        const existingItem = cartItems.find(i => i.name === item.name);
        if (existingItem) {
            setCartItems(cartItems.map(i => 
                i.name === item.name ? { ...i, quantity: existingItem.quantity + 1 } : i
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const handleBackToMenu = () => {
        setShowCart(false);
    };

    const handlePay = () => {
        const orderSummary = cartItems.map(item => `(${item.quantity}) ${item.name} - $${item.price * item.quantity}`).join('\n');
        alert(`Orden pagada:\n${orderSummary}`);
        
        // Guardar la orden en JSON
        localStorage.setItem('order', JSON.stringify(cartItems));
        
        // Vaciar el carrito
        setCartItems([]);
        
        // Mostrar la pantalla de confirmación
        setShowConfirmation(true);
        setShowCart(false);
    };

    const handleConfirm = () => {
        setShowConfirmation(false);
    };

    return (
        <div className="min-h-screen bg-red-950 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold underline">RESTAURANTE</h1>
            {/* Botón para ver carrito solo en la pantalla del menú */}
            {!showCart && !showConfirmation && (
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition absolute top-4 right-4 z-10"
                    onClick={() => setShowCart(true)}
                >
                    Ver carrito ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                </button>
            )}
            {/* Renderizar componentes según el estado */}
            {showConfirmation ? (
                <PaymentConfirmation onConfirm={handleConfirm} />
            ) : !showCart ? (
                <Menu onAddToOrder={handleAddToOrder} />
            ) : (
                <Cart items={cartItems} onBackToMenu={handleBackToMenu} onPay={handlePay} />
            )}
        </div>
    );
}

export default App;

/* 
EASTER EGG: ¿qué sucede si se pasa una lista vacía como segundo argumento en useEffect?
significa que el efecto solo se ejecutará una vez.
*/