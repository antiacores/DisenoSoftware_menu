import React from 'react';

export const PaymentConfirmation = ({ onConfirm }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mx-auto">
            <h1 className="text-2xl font-bold text-center mb-6">Pago Confirmado</h1>
            <p className="text-center mb-4">Gracias por su compra. Su orden ha sido pagada con éxito.</p>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition mt-4"
                onClick={onConfirm}
            >
                Regresar al Menú
            </button>
        </div>
    );
};