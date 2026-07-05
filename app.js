console.log("UMD Database app loaded");

// Paste your free TMDB API key here (get one at https://www.themoviedb.org/settings/api)
const TMDB_API_KEY = "bc3063428217fda0a6640d1850534411";
const TMDB_IMG_BASE = "https://image.tmdb.org/t/p/w200";

// Starter dataset — add a real image URL to "cover" to override auto-fetched art.
const movies = [
  { title: "50 First Dates", year: 2004, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "American Pie", year: 1999, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "NR", cover: "" },
  { title: "American Pie 2", year: 2001, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "NR", cover: "" },
  { title: "The Amityville Horror", year: 2005, genre: "Horror", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { title: "Barbershop", year: 2002, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { title: "Batman Begins", year: 2005, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { title: "Be Cool", year: 2005, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { title: "Beauty Shop", year: 2005, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { title: "Big Trouble in Little China", year: 1986, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Boogeyman", year: 2005, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Cabin Fever", year: 2003, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Christmas with the Kranks", year: 2004, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Click", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Coach Carter", year: 2005, genre: "Drama", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "Crash", year: 2004, genre: "Drama", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Crouching Tiger, Hidden Dragon", year: 2000, genre: "Action", format: "Live Action", studio: "Sony Pictures Classics", rating: "PG-13", cover: "" },
  { title: "The Da Vinci Code", year: 2006, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Desperado", year: 1995, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Dragon Wars", year: 2007, genre: "Fantasy", format: "Live Action", studio: "Freestyle Releasing", rating: "PG-13", cover: "" },
  { title: "Dude, Where's My Car?", year: 2001, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Dumb and Dumber", year: 1994, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "NR", cover: "" },
  { title: "The Fifth Element", year: 1997, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Final Fantasy VII: Advent Children", year: 2004, genre: "Anime", format: "Animation", studio: "Square Enix", rating: "PG-13", cover: "" },
  { title: "Fun with Dick and Jane", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Ghost Rider", year: 2007, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Girl Next Door", year: 2004, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "NR", cover: "" },
  { title: "Glory Road", year: 2006, genre: "Drama", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "Godsend", year: 2004, genre: "Thriller", format: "Live Action", studio: "Lionsgate", rating: "PG-13", cover: "" },
  { title: "Grandma's Boy", year: 2006, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "NR", cover: "" },
  { title: "The Grudge", year: 2004, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Grudge 2", year: 2006, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "Unrated", cover: "" },
  { title: "Harold & Kumar Go to White Castle", year: 2004, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "NR", cover: "" },
  { title: "Hellboy", year: 2004, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "NR", cover: "" },
  { title: "High Tension", year: 2005, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "NR", cover: "" },
  { title: "The Hills Have Eyes", year: 1977, genre: "Horror", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "Hostel", year: 2006, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "NR", cover: "" },
  { title: "House of the Dead", year: 2003, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "House of Wax", year: 2005, genre: "Horror", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { title: "Kill Bill: Vol. 1", year: 2003, genre: "Action", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { title: "Kill Bill: Vol. 2", year: 2004, genre: "Action", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { title: "Kung Fu Hustle", year: 2004, genre: "Comedy", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { title: "Little Man", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Men in Black", year: 1997, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Monster House", year: 2006, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Near Dark", year: 1987, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Ninja Scroll", year: 1993, genre: "Anime", format: "Animation", studio: "Manga Entertainment", rating: "NR", cover: "" },
  { title: "Open Season", year: 2006, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Open Water", year: 2003, genre: "Thriller", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "The Pink Panther", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "The Punisher", year: 2004, genre: "Action", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Red Eye", year: 2005, genre: "Thriller", format: "Live Action", studio: "DreamWorks", rating: "PG-13", cover: "" },
  { title: "Rocky Balboa", year: 2006, genre: "Drama", format: "Live Action", studio: "MGM", rating: "PG", cover: "" },
  { title: "RV", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Shaun of the Dead", year: 2004, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Silent Hill", year: 2006, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Sin City", year: 2005, genre: "Crime", format: "Live Action", studio: "Dimension Films", rating: "R", cover: "" },
  { title: "Snatch", year: 2000, genre: "Crime", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { title: "The Toxic Avenger", year: 1985, genre: "Horror", format: "Live Action", studio: "Troma", rating: "NR", cover: "" },
  { title: "Transporter 2", year: 2005, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Wedding Crashers", year: 2005, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "Without a Paddle", year: 2004, genre: "Comedy", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "xXx: State of the Union", year: 2005, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" }
];

var OWNED_KEY = "umdOwnedCollection";
var WATCHED_KEY = "umdWatchedCollection";
var VIEW_KEY = "umdViewMode";
var COVER_CACHE_KEY = "umdCoverCache";

function movieId(m) {
  return m.title + "-" + m.year;
}

function getSet(storageKey) {
  var raw = localStorage.getItem(storageKey);
  return new Set(raw ? JSON.parse(raw) : []);
}

function saveSet(storageKey, set) {
  localStorage.setItem(storageKey, JSON.stringify(Array.from(set)));
}

function toggleInSet(storageKey, id) {
  var set = getSet(storageKey);
  if (set.has(id)) {
    set.delete(id);
  } else {
    set.add(id);
  }
  saveSet(storageKey, set);
  applyFilters();
}

function getCoverCache() {
  var raw = localStorage.getItem(COVER_CACHE_KEY);
  return raw ? JSON.parse(raw) : {};
}

function saveCoverCache(cache) {
  localStorage.setItem(COVER_CACHE_KEY, JSON.stringify(cache));
}

function fetchCoverFromTMDB(movie) {
  var cache = getCoverCache();
  var id = movieId(movie);

  if (Object.prototype.hasOwnProperty.call(cache, id)) {
    return Promise.resolve(cache[id]);
  }
  if (!TMDB_API_KEY) {
    return Promise.resolve(null);
  }

  var url = "https://api.themoviedb.org/3/search/movie?api_key=" + encodeURIComponent(TMDB_API_KEY) +
    "&query=" + encodeURIComponent(movie.title) + "&year=" + movie.year;

  return fetch(url)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      var posterPath = data.results && data.results[0] && data.results[0].poster_path;
      var coverUrl = posterPath ? TMDB_IMG_BASE + posterPath : null;
      cache[id] = coverUrl;
      saveCoverCache(cache);
      return coverUrl;
    })
    .catch(function () {
      return null;
    });
}

function imdbSearchUrl(movie) {
  return "https://www.imdb.com/find/?q=" + encodeURIComponent(movie.title + " " + movie.year) + "&s=tt&ttype=ft";
}

function getUnique(key) {
  var values = movies.map(function (m) { return m[key]; });
  return Array.from(new Set(values)).sort();
}

function populateFilters() {
  var yearSelect = document.getElementById("yearFilter");
  var studioSelect = document.getElementById("studioFilter");
  var genreSelect = document.getElementById("genreFilter");

  var years = getUnique("year").sort(function (a, b) { return b - a; });
  years.forEach(function (year) {
    var opt = document.createElement("option");
    opt.value = year;
    opt.textContent = year;
    yearSelect.appendChild(opt);
  });

  getUnique("studio").forEach(function (studio) {
    var opt = document.createElement("option");
    opt.value = studio;
    opt.textContent = studio;
    studioSelect.appendChild(opt);
  });

  getUnique("genre").forEach(function (genre) {
    var opt = document.createElement("option");
    opt.value = genre;
    opt.textContent = genre;
    genreSelect.appendChild(opt);
  });
}

function buildCardHtml(movie, isOwned, isWatched) {
  var id = movieId(movie);
  var coverHtml = movie.cover
    ? '<img class="cover" data-cover-id="' + id + '" src="' + movie.cover + '" alt="' + movie.title + ' cover">'
    : '<div class="cover cover-placeholder" data-cover-id="' + id + '">' + movie.title + "</div>";

  return (
    coverHtml +
    '<div class="movie-info">' +
    "<h3>" + movie.title + " (" + movie.year + ")</h3>" +
    "<p>" + movie.genre + " &middot; " + movie.format + " &middot; " + movie.studio + " &middot; Rated " + movie.rating + "</p>" +
    '<div class="checks-row">' +
    '<label class="check-toggle"><input type="checkbox" class="owned-checkbox" data-id="' + id + '"' + (isOwned ? " checked" : "") + "> Owned</label>" +
    '<label class="check-toggle"><input type="checkbox" class="watched-checkbox" data-id="' + id + '"' + (isWatched ? " checked" : "") + "> Watched</label>" +
    "</div>" +
    '<a class="imdb-btn" href="' + imdbSearchUrl(movie) + '" target="_blank" rel="noopener">IMDb Entry</a>' +
    "</div>"
  );
}

function renderMovies(list, heading) {
  var container = document.getElementById("results");
  container.innerHTML = "";

  var headingEl = document.getElementById("resultsHeading");
  headingEl.textContent = heading || "";

  if (list.length === 0) {
    container.innerHTML = "<p class='empty-message'>No movies match your search.</p>";
    return;
  }

  var owned = getSet(OWNED_KEY);
  var watched = getSet(WATCHED_KEY);

  list.forEach(function (movie) {
    var id = movieId(movie);
    var card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = buildCardHtml(movie, owned.has(id), watched.has(id));

    card.querySelector(".owned-checkbox").addEventListener("change", function () {
      toggleInSet(OWNED_KEY, id);
    });
    card.querySelector(".watched-checkbox").addEventListener("change", function () {
      toggleInSet(WATCHED_KEY, id);
    });

    container.appendChild(card);

    if (!movie.cover) {
      fetchCoverFromTMDB(movie).then(function (coverUrl) {
        if (!coverUrl) return;
        var el = card.querySelector('[data-cover-id="' + id + '"]');
        if (!el) return;
        var img = document.createElement("img");
        img.className = "cover";
        img.setAttribute("data-cover-id", id);
        img.src = coverUrl;
        img.alt = movie.title + " cover";
        el.replaceWith(img);
      });
    }
  });
}

function getRandomPicks(count) {
  var shuffled = movies.slice().sort(function () { return Math.random() - 0.5; });
  return shuffled.slice(0, count);
}

function isDefaultState() {
  var searchTerm = document.getElementById("searchInput").value.trim();
  var year = document.getElementById("yearFilter").value;
  var studio = document.getElementById("studioFilter").value;
  var genre = document.getElementById("genreFilter").value;
  var format = document.getElementById("formatFilter").value;
  var onlyOwned = document.getElementById("ownedFilter").checked;
  var onlyWatched = document.getElementById("watchedFilter").checked;

  return (
    searchTerm === "" &&
    year === "all" &&
    studio === "all" &&
    genre === "all" &&
    format === "all" &&
    !onlyOwned &&
    !onlyWatched
  );
}

function applyFilters() {
  if (isDefaultState()) {
    renderMovies(getRandomPicks(8), "Random Picks — search or filter to browse everything");
    return;
  }

  var searchTerm = document.getElementById("searchInput").value.toLowerCase();
  var year = document.getElementById("yearFilter").value;
  var studio = document.getElementById("studioFilter").value;
  var genre = document.getElementById("genreFilter").value;
  var format = document.getElementById("formatFilter").value;
  var onlyOwned = document.getElementById("ownedFilter").checked;
  var onlyWatched = document.getElementById("watchedFilter").checked;
  var owned = getSet(OWNED_KEY);
  var watched = getSet(WATCHED_KEY);

  var filtered = movies.filter(function (m) {
    return (
      m.title.toLowerCase().indexOf(searchTerm) !== -1 &&
      (year === "all" || String(m.year) === year) &&
      (studio === "all" || m.studio === studio) &&
      (genre === "all" || m.genre === genre) &&
      (format === "all" || m.format === format) &&
      (!onlyOwned || owned.has(movieId(m))) &&
      (!onlyWatched || watched.has(movieId(m)))
    );
  });

  renderMovies(filtered, filtered.length + " result" + (filtered.length === 1 ? "" : "s"));
}

function showAllMovies() {
  document.getElementById("searchInput").value = "";
  document.getElementById("yearFilter").value = "all";
  document.getElementById("studioFilter").value = "all";
  document.getElementById("genreFilter").value = "all";
  document.getElementById("formatFilter").value = "all";
  document.getElementById("ownedFilter").checked = false;
  document.getElementById("watchedFilter").checked = false;

  var sorted = movies.slice().sort(function (a, b) { return a.title.localeCompare(b.title); });
  renderMovies(sorted, "All " + sorted.length + " Movies");
}

function setView(mode) {
  var container = document.getElementById("results");
  container.classList.remove("list-view", "grid-view");
  container.classList.add(mode === "grid" ? "grid-view" : "list-view");
  localStorage.setItem(VIEW_KEY, mode);
  document.getElementById("listViewBtn").classList.toggle("active", mode === "list");
  document.getElementById("gridViewBtn").classList.toggle("active", mode === "grid");
}

document.addEventListener("DOMContentLoaded", function () {
  populateFilters();

  var savedView = localStorage.getItem(VIEW_KEY) || "list";
  setView(savedView);

  renderMovies(getRandomPicks(8), "Random Picks — search or filter to browse everything");

  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("yearFilter").addEventListener("change", applyFilters);
  document.getElementById("studioFilter").addEventListener("change", applyFilters);
  document.getElementById("genreFilter").addEventListener("change", applyFilters);
  document.getElementById("formatFilter").addEventListener("change", applyFilters);
  document.getElementById("ownedFilter").addEventListener("change", applyFilters);
  document.getElementById("watchedFilter").addEventListener("change", applyFilters);
  document.getElementById("showAllBtn").addEventListener("click", showAllMovies);
  document.getElementById("listViewBtn").addEventListener("click", function () { setView("list"); });
  document.getElementById("gridViewBtn").addEventListener("click", function () { setView("grid"); });
});
