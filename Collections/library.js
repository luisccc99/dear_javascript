import { Playlist, Song } from './collections.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')({ signit: true });

let mainActions =
    'Esta es tu libreria, selecciona una de las siguientes opciones:' +
    '\n  1) Mostrar playlists.\n  2) Crear nueva playlist.\n' +
    '  3) Salir\n¿Qué quieres hacer? ';

const playlists = [];

while (true) {
    process.stdout.write(mainActions);
    let action = prompt()
    if (action == '3') {
        console.log("bye!");
        break;
    }
    switch (action) {
        case '1':
            showPlaylists();
            break;
        case '2':
            createPlaylist();
            break;
        default:
            break;
    }
}

function showPlaylists() {
    if (playlists.length == 0) {
        console.log("\n¡Todavia no has creado una playlist!");
    } else {
        console.log("\nEstas son tus playlists: ");
        playlists.forEach((playlist, index) => {
            console.log(`${index + 1}. ${playlist.name}`);
        })
        console.log("#) Mostrar Playlist (indice)");
        console.log("0 o Enter) Volver");
        let index = Number(prompt())
        console.log(index);
        while (isNaN(index)) {
            console.log("Opción no valida");
            index = prompt();
        }
        if (index > 0 && index <= playlists.length) {
            showPlaylist(index - 1);
        } else if (index == 0) {
            return;
        } else {
            showPlaylists();
        }
    }
    console.log();
}

function createPlaylist() {
    console.log("\n¿Cuál será el nombre de la playlist?");
    let name = prompt();
    console.log(`\nCreando playlist ${name} ...`);
    let playlist = new Playlist(name);
    playlists.push(playlist);
    console.log(`Playlist ${name} ha sido creada.\n`);
    console.log("¿Quieres añadir una canción\n\t1.Sí\t2.No");
    let addRolita = prompt();
    if (addRolita == '1') {
        addSong(playlist);
    }
}

function addSong(playlist) {
    console.log("¿Cuál es el nombre de la canción?");
    let title = prompt()
    console.log("¿Cuál es la duración de la canción (en segundos)?");
    let duration = Number(prompt());
    while (isNaN(duration)) {
        console.log("Ingresa solo valores numericos");
        duration = prompt();
    }
    console.log("¿Quién la canta?");
    let artist = prompt();
    let song = new Song(title, duration);
    song.addAuthor(artist);
    playlist.addSong(song);
    console.log("¿Quieres añadir otra canción\n\t1.Sí\t2.No");
    let addRolita = prompt();
    if (addRolita == '1') {
        addSong(playlist);
    }
}

function showPlaylist(index) {
    let playlist = playlists[index];
    console.log();
    console.log(`${playlist.name} • ${playlist.getDuration()}`);
    playlist.songs.forEach((current, index) => {
        console.log(`\t🎵 ${index + 1} ${current} ${current.getDuration()}`);
    });
    console.log("1) Agregar canción\n2) Eliminar Canción\n3) Cambiar nombre a la playlist\n4) Volver");
    let action = prompt()
    if (action == '1') {
        addSong(playlist)
        showPlaylist(index);
    } else if (action == '2' && playlist.songs.length > 0) {
        console.log("Ingresa el número de la canción a eliminar.");
        let index = Number(prompt());
        while (isNaN(index) || index > playlist.songs.length) {
            console.log("Ingresa valores validos");
            index = prompt();
        }
        let deletedSong = playlist.songs.splice(index - 1, 1);
        console.log(`${deletedSong} eliminado`);
    } else if (action == '3') {
        console.log("¿Cuál será el nuevo nombre?");
        let name = Number(prompt());
        playlist.name = name;
        console.log("Playlist actualizada");
        showPlaylist(index);
    } else if (action == '4') {
        showPlaylists();
    } else {
        showPlaylist(index);
    }

}

