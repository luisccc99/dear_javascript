// Store collections of songs into an album
class Album {
    constructor(name, released, ...artists) {
        this.name = name;
        this.artists = [...artists];
        this.songs = [];
        this.released = released;
        this.duration = 0;
    }

    addSong(song) {
        this.songs.push(song);
        this.duration += song.duration;
    }

    addArtist(artist) {
        this.artists.push(artist);
    }
}

class Song {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
        this.authors = [];
    }

    addAuthor(author) {
        this.authors.push(author);
    }
}

class Artist {
    constructor(name, monthlyListeners) {
        this.name = name;
        this.monthlyListeners = monthlyListeners;
    }
}

// ejemplo del album hot space de queen 

let queen = new Artist("Queen", 35_284_675);
let davidBowie = new Artist("David Bowie", 15_313_635)
const songs = [
    new Song("Staying Power", 252),
    new Song("Dancer", 229),
    new Song("Back Chat", 275),
    new Song("Body Language", 272),
    new Song("Action This Day", 213),
    new Song("Put Out The Fire", 199),
    new Song("Life Is Real (Song for Lennon)", 213),
    new Song("Calling All Girls", 352),
    new Song("Las Palabras De Amor", 272),
    new Song("Cool Cat", 209),
    new Song("Under Pressure", 247)];

let hotSpace = new Album("Hot Space", 1982, queen);

songs.forEach(song => {
    song.addAuthor(queen)
    if (song.title == "Under Pressure") {
        song.addAuthor(davidBowie)
    }
    hotSpace.addSong(song);
});

console.log(hotSpace);