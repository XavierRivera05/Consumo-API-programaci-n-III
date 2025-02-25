document.getElementById('fetchButton').addEventListener('click', async () => {
    const apiKey = 'TU_API_KEY';
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=5`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }

        const data = await response.json();
        const gameContainer = document.getElementById('gameContainer');
        gameContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos juegos

        data.results.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card'; // Clase para aplicar estilos CSS
            gameCard.innerHTML = `
                <h3>${game.name}</h3>
                <p>Fecha de lanzamiento: ${game.released}</p>
                <img src="${game.background_image}" alt="${game.name}" width="200">
            `;
            gameContainer.appendChild(gameCard);
        });

    } catch (error) {
        console.error(error);
        document.getElementById('gameContainer').innerHTML = 'No se pudieron cargar los juegos.';
    }
});