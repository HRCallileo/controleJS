function getSong() {
    let container = document.createElement("tr");
    container.innerHTML = `
    <th>${title}</th> 
    <th>${album}</th> 
    <th>${artist}</th> 
    <th>${year}</th> 
    <th>${poster}</th> 
    <th>Retirer</th>
    `;

return container;
}


fetch(new Request("song.json")) 
    .then((playlist) => (playlist.json()))
    .then((playlist) => {
    const song = playlist.results
    let tableBody = document.getElementById('tableBody');
    for(i of song) {
        tableBody.append(getSong(i))
    }
});
