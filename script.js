const channels = [
    { name: "T Sports", category: "Sports" },
    { name: "Toffee Live", category: "Entertainment" },
    { name: "Global News", category: "News" }
];

function renderChannels(list = channels) {
    const container = document.getElementById('channel-container');
    container.innerHTML = list.map(c => `
        <div class="card" onclick="playChannel('${c.name}')">
            <h3>${c.name}</h3>
            <p>${c.category}</p>
            <button>Play</button>
        </div>
    `).join('');
}

function filterChannels() {
    const query = document.getElementById('search').value.toLowerCase();
    const filtered = channels.filter(c => c.name.toLowerCase().includes(query));
    renderChannels(filtered);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    if(pageId === 'home') document.getElementById('home-page').classList.remove('hidden');
    if(pageId === 'dev') document.getElementById('dev-page').classList.remove('hidden');
}

function playChannel(name) {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('player-page').classList.remove('hidden');
    document.getElementById('current-channel-name').innerText = name;
}

renderChannels();
