export class Playlist {
    constructor(name) {
        this.name = name;
        this.songs = [];
        this.duration = 0;
    }

    addSong(song) {
        this.songs.push(song);
        this.duration += Number(song.duration);
    }

    deleteSong(index) {
        this.duration -= this.songs[index].duration;
        console.log(`${this.songs[index]}`);
        return this.songs.splice(index, index)
    }

    getSong(index) {
        return this.songs[index];
    }

    getDuration() {
        let min = Math.floor(this.duration / 60);
        return `${min} min`;
    }

    showSongs() {
        this.songs.forEach((song, index) => {
            console.log(`    #${index + 1}. ${song}`);
        });
    }
}

export class Song {
    constructor(title, duration) {
        this.title = title;
        this.duration = Number(duration);
    }

    addAuthor(author) {
        this.author = author;
    }

    getDuration() {
        let min = Math.floor(this.duration / 60);
        let sec = this.duration % 60;
        return `${min}:${sec}`;
    }

    getTitle() {
        return this.title;
    }

    toString() {
        return `${this.title}`;
    }
}