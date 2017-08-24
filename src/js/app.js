const loadPage = function () {
    console.log("Hello");
    loadSongs();
}

const itunes = {
    tay: "https://itunes.apple.com/search?term=taylor+swift&entity=song&limit=250"
};
const songLayout = `<li class="collection-item avatar">
                        <img src="__img__" alt="" class="circle">
                        <div class="row">
                            <span class="title ">__title__</span>
                            <span>__collection__</span>
                            <span href="#!" class="secondary-content">__id__</span>
                        </div>
                    </li>`;
const playlist = $("#taysongs");
const loadSongs = function () {
    $.getJSON(itunes.tay, function (response) {
        const tracks = response.results;
        console.log(tracks);
        tracks.forEach(function (track) {
            const addNewSong = songLayout.replace("__img__", track.artworkUrl30)
                .replace("__title__", track.trackName)
                .replace("__collection__", track.collectionName)
                .replace("__id__", track.trackId);
            playlist.append(addNewSong);
        });
    })
};


$(document).ready(loadPage);
