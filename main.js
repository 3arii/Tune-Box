
window.onload = () => {
  const song_img_el = document.getElementById("song-image");
  const song_title_el = document.getElementById("song-title");
  const song_artist_el = document.getElementById("song-artist");
  const song_next_up_el = document.getElementById("song-next-up");

  const play_btn = document.getElementById("play-btn");
  const play_btn_icon = document.getElementById("play-icon");
  const prev_btn = document.getElementById("prev-btn");
  const next_btn = document.getElementById("next-btn");

  const audio_player = document.getElementById("music-player");

  let current_Song_index;
  let next_song_index;

  let songs = [
    {
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      song_path: "music/Nirvana - Smells Like   Teen  Spirit (Official Music Video).mp3",
      img_path: "images/song1-image.jpeg"
    },
    {
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      song_path: "music/Led Zeppelin - Stairway To  Heaven (Official Audio).mp3",
      img_path: "images/song2-image.jpeg"
    }
  ]

  play_btn.addEventListener("click", TogglePlaySong);
  next_btn.addEventListener("click", () => ChangeSong());
  prev_btn.addEventListener("click", () => ChangeSong(false));

  InitPlayer();

  function InitPlayer() {
    current_Song_index = 0;
    next_song_index = current_Song_index + 1;
    UpdatePlayer();
  }

  function UpdatePlayer() {
    let song = songs[current_song_index];

    song_img_el.style = "background-image: url('" + song.img_path + "')";
    song.title_el.innerText = song.title;
    song.song_artist_el.innerText = song.artist;

    song_next_up_el.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;

    audio_player.src = song.song_path;
  }

  function TogglePlaySong() {
    if (audio_player.paused) {
      audio_player.play();
      play_btn_icon.classList.remove("fa-play");
      play_btn_icon.classList.add("fa-pause");
    } else {
      audio_player.pause();
      play_btn_icon.classList.add("fa-play");
      play_btn_icon.classList.remove("fa-pause");
    }
  }

  function ChangeSong(next = True) {
    if (next) {
      current_Song_index++;
      next_song_index = current_song_index + 1;

      if (current_Song_index > songs.length - 1) {
        current_Song_index = 0;
        next_song_index = current_Song_index + 1;
      }

      if (next_song_index > songs.lenght - 1) {
        next_song_index = 0;
      }
    } else {
      current_Song_index--;
      next_song_index = current_Song_index + 1;

      if (current_Song_index < 0) {
        current_Song_index = songs.length - 1;
        next_song_index = 0;
      }
    }

    UpdatePlayer();
    TogglePlaySong();
  }
}