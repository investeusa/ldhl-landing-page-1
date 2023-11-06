// components/Management.js
"use client";
import React, { useEffect, useState } from 'react';

const Management = () => {
    const [userData, setUserData] = useState({});
    const [locationData, setLocationData] = useState({});

    useEffect(() => {
        // Fazer chamadas às APIs para obter dados do usuário e localização
        fetch('/api/identify')
            .then((response) => response.json())
            .then((data) => setUserData(data));

        fetch('/api/location')
            .then((response) => response.json())
            .then((data) => setLocationData(data));
    }, []);

    return (
        <div>
            <h1>Tela de Gerenciamento</h1>
            <div>
                <h2>Informações do Usuário:</h2>
                <p>Agente do Usuário: {userData.userAgent}</p>
                <p>Endereço IP: {userData.userIP}</p>
            </div>
            <div>
                <h2>Informações de Localização:</h2>
                <p>País: {locationData.country}</p>
            </div>
        </div>
    );
};

export default Management;
