const playlistId = localStorage.getItem('playlistId');

// Lista de reproducción: IDs de YouTube
const playlists = {
    1: [ 
        { id: "d1ZAJ0frpw8", title: "Preacher Man",artist: "Kanye West", cover: "cover1.jpg" },
        { id: "MN8MuRSC1nw", title: "Mind Forward",artist: "Kanye West", cover: "cover1.jpg" },
        { id: "nvanxG8oveU", title: "Close To You",artist: "Kanye West", cover: "cover1.jpg" },
        { id: "mrSR4Ia0wPk", title: "Circles",artist: "Kanye West", cover: "cover1.jpg" },
        { id: "qOZg8n-05Pg", title: "Bully",artist: "Kanye West", cover: "cover1.jpg" },
        { id: "VQzGNYVH8B8", title: "Besame Mama",artist: "Kanye West", cover: "cover1.jpg" },
        { id: "sgViZ9xCJ4o", title: "Beauty And The Beast",artist: "Kanye West", cover: "cover1.jpg" },
        { id: "Nv2-0Jw4iN8", title: "Showtime",artist: "Kanye West", cover: "cover1.jpg" },
        { id: "T6fP6owzeg0", title: "Highs And Lows",artist: "Kanye West", cover: "cover1.jpg" },
        { id: "nthUqHmQDtw", title: "Melrose",artist: "Kanye West", cover: "cover1.jpg" }
    ],
    2: [ 
        { id: "brhJLXwzTUQ", title: "Stars",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "lqv0pggwk1U", title: "Keys To My Life",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "uINLWGwYJT4", title: "Paid",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "MQLiFKmHICM", title: "Back To Me",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "yEYpPWJfwb4", title: "Vultures",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "BqV0ClaRMN0", title: "Fuk Sumn",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "eJCIRdOrLqA", title: "Field Trip",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "JZE89-_xEkA", title: "Lifestyle",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "cr9J_9I8sQU", title: "Drunk",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "KTcdglGiFBk", title: "So Good",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "Hh4JLqbOvzM", title: "So Called Friends",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "06xlXARouL0", title: "River",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "gV7-R7obf8M", title: "Everybody",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "oFK8bdAZY3A", title: "Burn",artist: "Kanye West", cover: "cover2.jpg" },
        { id: "87DiVOyXbc0", title: "King",artist: "Kanye West", cover: "cover2.jpg" }
    ],
    3: [ 
        { id: "y9G-V-i-Tnw", title: "True Love",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "7a9Wx9Z1Qbc", title: "Broken Road",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "Knydegz0os0", title: "Get Lost",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "Oa2DcReCB6w", title: "Too Easy",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "QjhQDFPR0Fg", title: "Flowers",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "Z1TIPPJglTk", title: "Security",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "bGEHj0QaAAQ", title: "We Did It Kid",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "l3Cz0iT3rPk", title: "Pablo",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "2ZOcI-qkR8Q", title: "Mr Miyagi",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "tWW89_PJb9Y", title: "Louie Bags",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "lXCANnVSkMo", title: "Happy",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "SD4aV-6jepg", title: "530",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "hBiwBqrzZl8", title: "Eazy",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "gDntWafq0LA", title: "First Time In A long Time",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "c850yN8OKyk", title: "City of Gods",artist: "Kanye West", cover: "cover3.jpg" },
        { id: "0S7mC8SXqQk", title: "Lord Lift Me Up",artist: "Kanye West", cover: "cover3.jpg" },
    ],
    4: [ 
        { id: "E-0LfI5CpCw", title: "Donda",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "-a6QGNJWi1Q", title: "With Child",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "T9pjTMMnkSQ", title: "12000 Acres",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "A2Ee6gWEhys", title: "24",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "6NhF-1o9LBg", title: " I Know God Breathed On This",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "7yfrmsAePaU", title: "In God's Country",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "y7Lx7oPxRcM", title: "Future Sounds pt. 2",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "qkkUiTQVeDQ", title: "Off The Grid",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "RibNIsz9tRk", title: "Eternal Life",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "lEJdDcIGPJo", title: "Praise God",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "FHwEaf3IvJs", title: "Our King",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "-lwZBE12PvQ", title: "Heaven And Earth",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "a9alT92eAxo", title: "Life Of The Party",artist: "Kanye West", cover: "cover4.jpg" },
        { id: "pIbQfKbG2GY", title: "South Carolina",artist: "Kanye West", cover: "cover4.jpg" }
    ],
    5: [ 
        { id: "hblY2rbh-08", title: "Chakras",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "moIZTPCA-jA", title: "Calm",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "jzOVuUQxuWE", title: "The Storm",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "wpvOpvzv8Xw", title: "Alien",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "3ENBtQyHR3w", title: "Last Name ",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "7eTQlErsOlY", title: "We Got Love",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "_elwfi2Hamk", title: "City In The Sky",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "X44DOQYVVHU", title: "Spread Your Wings",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "xagShPRVgR8", title: "Bye Bye Baby",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "LBfYq4l4JzU", title: "On God",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "4fPiqzRlNc0", title: "Cash to Burn",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover5.jpg" },
        { id: "KBOCZqu2YIw", title: "End Of It",artist: "Kanye West", cover: "cover5.jpg" }
    ],
    6: [ 
        { id: "", title: "",artist: "Kanye West", cover: "cover6.jpg" }
    ],
    7: [ 
        { id: "", title: "",artist: "Kanye West", cover: "cover7.jpg" }
    ],
    8: [ 
        { id: "", title: "",artist: "Kanye West", cover: "cover8.jpg" }
    ],
    9: [ 
        { id: "", title: "",artist: "Kanye West", cover: "cover9.jpg" }
    ],
    10: [ 
        { id: "", title: "",artist: "Kanye West", cover: "cover10.jpg" }
    ],
    11: [ 
        { id: "", title: "",artist: "Kanye West", cover: "cover11.jpg" }
    ],
    12: [ 
        { id: "3P2apa6bNjc", title: "Broken Road",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "1PPIkbobT14", title: "Can U Be",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "0XALXiI82QU", title: "LA Monster",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" },
        { id: "", title: "",artist: "Kanye West", cover: "cover12.jpg" }
    ],
    13: [ 
        { id: "flQ0q8clrWw", title: "P0P 0UT",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" },
        { id: "", title: "",artist: "Playboi Carti", cover: "cover13.jpg" }
    ],
    14: [ 
        { id: "", title: "",artist: "Playboi Carti", cover: "cover14.jpg" }
    ],
    15: [ 
        { id: "", title: "",artist: "Playboi Carti", cover: "cover15.jpg" }
    ],
    16: [ 
        { id: "3KGePoG7L_s", title: "Nigara Falls",artist: "Playboi Carti", cover: "cover16.jpg" },
        { id: "h6pOudC8xCQ", title: "Thought I Was Dead",artist: "Playboi Carti", cover: "cover16.jpg" }
    ],
    17: [ 
        { id: "", title: "",artist: "Tyler, The Creator", cover: "cover17.jpg" }
    ],
    18: [ 
        { id: "", title: "",artist: "Tyler, The Creator", cover: "cover18.jpg" }
    ],
    19: [ 
        { id: "", title: "",artist: "Travis Scott", cover: "cover19.jpg" }
    ],
    20: [ 
        { id: "", title: "",artist: "Juice WRLD", cover: "cover20.jpg" }
    ],
    21: [ 
        { id: "", title: "",artist: "The Weeknd", cover: "cover21.jpg" }
    ],
    22: [ 
        { id: "", title: "",artist: "Kendrick Lamar", cover: "cover22.jpg" }
    ]
};

let currentSongIndex = 0;
let player;
let isDragging = false;
let isPlaying = false;

// Inicializa la API de YouTube
function onYouTubeIframeAPIReady() {
    if (playlists[playlistId]) {
        player = new YT.Player("youtube-player", {
            height: "0", // Oculta el video
            width: "0",
            videoId: playlists[playlistId][currentSongIndex].id, 
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange
            },
        });
    } else {
        alert("Playlist no encontrada.");
    }
}

// Cuando el reproductor está listo
function onPlayerReady(event) {
    updateSongTitle();
    updateDuration();

    document.getElementById("play-button").onclick = () => togglePlayPause();
    document.getElementById("prev-button").onclick = () => playPrevSong();
    document.getElementById("next-button").onclick = () => playNextSong();

    const progressBar = document.getElementById("progress-bar");
    progressBar.addEventListener("input", () => {
        isDragging = true;
        const duration = player.getDuration();
        const newTime = (progressBar.value / 100) * duration;
        document.getElementById("current-time").textContent = formatTime(newTime);
    });

    progressBar.addEventListener("change", () => {
        isDragging = false;
        const duration = player.getDuration();
        const newTime = (progressBar.value / 100) * duration;
        player.seekTo(newTime, true);
    });
}

// Función para alternar entre Reproducir y Pausar
function togglePlayPause() {
    if (isPlaying) {
        player.pauseVideo();
        document.getElementById("play-button").textContent = "▶️ Reproducir";
    } else {
        player.playVideo();
        document.getElementById("play-button").textContent = "⏸️ Pausar";
    }
    isPlaying = !isPlaying;
}

// Actualiza el título de la canción
function updateSongTitle() {
    if (playlists[playlistId] && playlists[playlistId][currentSongIndex]) {
        document.getElementById("song-title").textContent = playlists[playlistId][currentSongIndex].title;
    }

    if (playlists[playlistId] && playlists[playlistId][currentSongIndex]) {
        document.getElementById("artist").textContent = playlists[playlistId][currentSongIndex].artist;
    }

    const coverImage = playlists[playlistId][currentSongIndex].cover;
        document.getElementById("cover").src = coverImage;
}

// Reproduce la canción anterior
function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlists[playlistId].length) % playlists[playlistId].length;
    player.loadVideoById(playlists[playlistId][currentSongIndex].id);
    updateSongTitle();
    updateDuration();
}

// Reproduce la siguiente canción
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlists[playlistId].length;
    player.loadVideoById(playlists[playlistId][currentSongIndex].id);
    updateSongTitle();
    updateDuration();
}

// Maneja los estados del reproductor
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        playNextSong(); // Reproduce la siguiente canción al terminar
    }
    if (event.data === YT.PlayerState.PLAYING && !isDragging) {
        updateProgressBar();
    }
}

// Actualiza la barra de progreso
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const currentTime = player.getCurrentTime();
    const duration = player.getDuration();

    if (!isDragging) {
        progressBar.value = (currentTime / duration) * 100;
        document.getElementById("current-time").textContent = formatTime(currentTime);
        document.getElementById("duration").textContent = formatTime(duration);
    }

    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        requestAnimationFrame(updateProgressBar);
    }
}

// Actualiza la duración de la canción
function updateDuration() {
    const duration = player.getDuration();
    document.getElementById("duration").textContent = formatTime(duration);
}

// Formatea el tiempo (segundos a mm:ss)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Mostrar las canciones de la playlist seleccionada
function showPlaylist() {
    const playlistContainer = document.getElementById("playlist");
    playlistContainer.innerHTML = ""; // Limpiar la lista antes de agregar las canciones

    // Verifica que la playlistId esté definida y que exista en la lista de playlists
    if (playlists[playlistId]) {
        playlists[playlistId].forEach((song, index) => {
            // Crear el elemento <li> para cada canción
            const listItem = document.createElement("li");
            listItem.textContent = song.title;

            // Agregar un evento para reproducir la canción al hacer clic
            listItem.onclick = () => {
                currentSongIndex = index;
                player.loadVideoById(playlists[playlistId][currentSongIndex].id);
                updateSongTitle();  // Actualizar el título y cover
                updateDuration();   // Actualizar la duración
            };

            // Agregar el <li> a la lista
            playlistContainer.appendChild(listItem);
        });
    }
}

// Llamar la función `showPlaylist` cuando la página cargue
window.onload = () => {
    showPlaylist();  // Mostrar las canciones al cargar la página
};

// Modo claro/oscuro
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = 
        document.body.dataset.theme === 'light' ? 'dark' : 'light';
});

// Control de velocidad
function changeSpeed(speed) {
    player.setPlaybackRate(speed);
}

// Soporte de teclado
document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlayPause();
            break;
        case 'ArrowRight':
            playNextSong();
            break;
        case 'ArrowLeft':
            playPrevSong();
            break;
        case 'ArrowUp':
            volumeSlider.value = Math.min(100, parseInt(volumeSlider.value) + 10);
            volumeSlider.dispatchEvent(new Event('input'));
            break;
        case 'ArrowDown':
            volumeSlider.value = Math.max(0, parseInt(volumeSlider.value) - 10);
            volumeSlider.dispatchEvent(new Event('input'));
            break;
    }
});

// Animación de vinilo
const cover = document.getElementById('cover');
function toggleVinylAnimation(playing) {
    cover.classList.toggle('vinyl', playing);
    cover.style.animationPlayState = playing ? 'running' : 'paused';
}

// Modificar la función togglePlayPause
function togglePlayPause() {
    if (isPlaying) {
        player.pauseVideo();
        document.getElementById("play-button").textContent = "▶️ Reproducir";
        toggleVinylAnimation(false);
    } else {
        player.playVideo();
        document.getElementById("play-button").textContent = "⏸️ Pausar";
        toggleVinylAnimation(true);
    }
    isPlaying = !isPlaying;
}


