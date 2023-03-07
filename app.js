function convertTmdbToImdb() {
  // Get the TMDB ID input value
  var tmdbId = document.getElementById("tmdb-id").value;

  // TODO: Convert TMDB ID to IMDb URL

  // Set the IMDb URL input value
  document.getElementById("imdb-url").value = "";
}

function convertImdbToTmdb() {
  // Get the IMDb URL input value
  var imdbUrl = document.getElementById("imdb-url").value;

  // TODO: Convert IMDb URL to TMDB ID

  // Set the TMDB ID input value
  document.getElementById("tmdb-id").value = "";
}

function convertBulkTmdbToImdb() {
  // Get the TMDB IDs input value
  var tmdbIds = document.getElementById("bulk-tmdb-ids").value.split("\n");

  // TODO: Convert TMDB IDs to IMDb URLs

  // Set the IMDb URLs input value
  document.getElementById("bulk-imdb-urls").value = "";
}
