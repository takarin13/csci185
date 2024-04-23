const containerEl = document.querySelector("#output_container");

async function showSong() {
    const searchTerm = document.querySelector("#term").value;
    //"New Order";
    const url = `https://www.apitutor.org/spotify/simple/one/v1/search?q=${searchTerm}&type=track`;
    console.log(url);
    const response = await fetch(url);
    const song = await response.json();
    console.log(song);

    // your code goes here. Figure out how to output something like this to the screen,
    // but with the song data returned from the server...
    const songTemplate = `<section class="song">
        <h2>${song.name}</h2>
        <img src="${song.album.image_url}">
        <p>${song.artist.name}</p>
        <audio controls src="${song.preview_url}"></audio>
    </section>`;    
    containerEl.insertAdjacentHTML('beforeend', songTemplate);
}

function clearContainer() {
    containerEl.innerHTML = "";
}
