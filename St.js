// Пример статических данных
const servers = [
    {
        name: 'Сервер 1',
        ip: '123.45.67.89',
        playersOnline: 10,
        maxPlayers: 100
    },
    {
        name: 'Сервер 2',
        ip: '98.76.54.32',
        playersOnline: 20,
        maxPlayers: 200
    }
];

// Отображение данных на странице
document.addEventListener('DOMContentLoaded', () => {
    const serversContainer = document.getElementById('servers');

    servers.forEach(server => {
        const serverDiv = document.createElement('div');
        serverDiv.classList.add('server');
        serverDiv.innerHTML = `
            <h3>${server.name}</h3>
            <p>IP: <span class="server-ip">${server.ip}</span></p>
            <p>Игроки: <span class="players-online">${server.playersOnline}</span> / <span class="max-players">${server.maxPlayers}</span></p>
        `;
        serversContainer.appendChild(serverDiv);
    });
});
