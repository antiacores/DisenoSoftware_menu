import React from 'react';

export const Cart = ({ items, onBackToMenu, onPay }) => {
    const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mx-auto">
            <h1 className="text-2xl font-bold text-center mb-6">Carrito</h1>
            <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition mb-4"
                onClick={onBackToMenu}
            >
                Volver al menú
            </button>
            <ul>
                {items.map(item => (
                    <li key={item.name} className="flex justify-between mb-2">
                        <span>({item.quantity}) {item.name} - ${item.price} = ${item.price * item.quantity}</span>
                    </li>
                ))}
            </ul>
            <div className="text-right font-bold mt-4">
                Total: ${totalAmount}
            </div>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition mt-4"
                onClick={onPay}
            >
                Pagar
            </button>
        </div>
    );
};