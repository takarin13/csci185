const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getAlbums(term) {
    const container = document.querySelector("#albums");
    container.innerHTML = "";
    const url = `${baseURL}?q=${term}&type=album&q=1`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    for (let i = 0; i < 10; i++) {
        console.log(data[i])
        // console.log(data);
        // console.log(data[i].spotify_url);
        // console.log(data[i].album.name);
        // console.log(data[i].album.image_url);
        const snippet = `
    
        <section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
            <div>
                <img src="${data[i].image_url}">
                    <h2>'${data[i].name}'</h2>
                    <div class="footer">
                        <a href="${data[i].spotify_url}" target="_blank">
                            view on spotify
                        </a>
                    </div>
            </div>
        </section>
    `
        if (data.length == 0) {
            container.innerHTML = "No albums were returned."
        }
        else {
            container.innerHTML += snippet;
        }
    }
}

function playTrack(trackId){
    const template = `
    <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator"
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `;
    document.querySelector("#artist").innerHTML = template;
}

async function getTracks(term) {
    const container = document.querySelector("#tracks");
    container.innerHTML = "";
    const url = `${baseURL}?q=${term}&type=track&q=1`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    for (let i = 0; i < 5; i++) {
        // console.log(data);
        // console.log(data[i].album.name);
        // console.log(data[i].image_url);
        // console.log(data[i].album.name);

        const snippet = `
        <section id="tracks" onclick="playTrack('${data[i].id}')">
            <section class="track-item preview">
                <img src="${data[i].album.image_url}">
                <i class="fas fa-play play-track" aria-hidden="true"></i>
                <div class="label">
                    <h2>${data[i].album.name}</h2>
                    <p>
                        ${data[i].artist.name}
                    </p>
                </div>
            </section>
        </section>
        `

        if (data.length == 0) {
            container.innerHTML = "No albums were returned."
        }
        else {
            container.innerHTML += snippet;
        }
    }

}

async function getArtist(term) {
    const url = `${baseURL}?q=${term}&type=artist&limit=1`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    console.log(data);
    console.log(data[0].name);
    console.log(data[0].image_url);
    console.log(data[0].spotify_url);


    const snippet = `
        <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
            <div>
                <img src="${data[0].image_url}">
                    <h2>${data[0].name}</h2>
                    <div class="footer">
                        <a href="${data[0].spotify_url}" target="_blank">
                            view on spotify
                        </a>
                    </div>
            </div>
        </section>`;

    const container = document.querySelector("#artist");
    container.innerHTML = snippet;
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}