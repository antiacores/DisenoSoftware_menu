import React, { useState, useEffect } from 'react';

export const Menu = ({ onAddToOrder }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api-menu-9b5g.onrender.com/menu");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error al obtener los datos", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mx-auto">
            <h1 className="text-2xl font-bold text-center mb-6">Menú</h1>
            {loading ? (
                <p className="text-center">Cargando...</p>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item) => (
                        <li key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-md border border-gray-300 flex flex-col items-center">
                            <h2 className="text-lg font-bold text-center mb-2">{item.name} - ${item.price}</h2>
                            <p className="text-center text-gray-500 mb-4">{item.description}</p>
                            <button 
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full"
                                onClick={() => onAddToOrder(item)} // Llama a la función pasada como prop
                            >
                                Agregar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};