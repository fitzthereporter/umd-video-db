console.log("UMD Database app loaded");

// Paste your free TMDB API key here (get one at https://www.themoviedb.org/settings/api)
const TMDB_API_KEY = "bc3063428217fda0a6640d1850534411";
const TMDB_IMG_BASE = "https://image.tmdb.org/t/p/w200";

// Starter dataset — add a real image URL to "cover" to override auto-fetched art.
const movies = [
  { category: "Movie", title: "50 First Dates", year: 2004, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "American Pie", year: 1999, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "NR", cover: "" },
  { category: "Movie", title: "American Pie 2", year: 2001, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "NR", cover: "" },
  { category: "Movie", title: "The Amityville Horror", year: 2005, genre: "Horror", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { category: "Movie", title: "Barbershop", year: 2002, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Batman Begins", year: 2005, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Be Cool", year: 2005, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Beauty Shop", year: 2005, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Big Trouble in Little China", year: 1986, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Boogeyman", year: 2005, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Cabin Fever", year: 2003, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Christmas with the Kranks", year: 2004, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Click", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Coach Carter", year: 2005, genre: "Drama", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Crash", year: 2004, genre: "Drama", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Crouching Tiger, Hidden Dragon", year: 2000, genre: "Action", format: "Live Action", studio: "Sony Pictures Classics", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Da Vinci Code", year: 2006, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Desperado", year: 1995, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Dragon Wars", year: 2007, genre: "Fantasy", format: "Live Action", studio: "Freestyle Releasing", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Dude, Where's My Car?", year: 2001, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Dumb and Dumber", year: 1994, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "NR", cover: "" },
  { category: "Movie", title: "The Fifth Element", year: 1997, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Final Fantasy VII: Advent Children", year: 2004, genre: "Anime", format: "Animation", studio: "Square Enix", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Fun with Dick and Jane", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Ghost Rider", year: 2007, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Girl Next Door", year: 2004, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "NR", cover: "" },
  { category: "Movie", title: "Glory Road", year: 2006, genre: "Drama", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "Godsend", year: 2004, genre: "Thriller", format: "Live Action", studio: "Lionsgate", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Grandma's Boy", year: 2006, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "NR", cover: "" },
  { category: "Movie", title: "The Grudge", year: 2004, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Grudge 2", year: 2006, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "Unrated", cover: "" },
  { category: "Movie", title: "Harold & Kumar Go to White Castle", year: 2004, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "NR", cover: "" },
  { category: "Movie", title: "Hellboy", year: 2004, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "NR", cover: "" },
  { category: "Movie", title: "High Tension", year: 2005, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "NR", cover: "" },
  { category: "Movie", title: "The Hills Have Eyes", year: 1977, genre: "Horror", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "Hostel", year: 2006, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "NR", cover: "" },
  { category: "Movie", title: "House of the Dead", year: 2003, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "House of Wax", year: 2005, genre: "Horror", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { category: "Movie", title: "Kill Bill: Vol. 1", year: 2003, genre: "Action", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { category: "Movie", title: "Kill Bill: Vol. 2", year: 2004, genre: "Action", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { category: "Movie", title: "Kung Fu Hustle", year: 2004, genre: "Comedy", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { category: "Movie", title: "Little Man", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Men in Black", year: 1997, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Monster House", year: 2006, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Near Dark", year: 1987, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Ninja Scroll", year: 1993, genre: "Anime", format: "Animation", studio: "Manga Entertainment", rating: "NR", cover: "" },
  { category: "Movie", title: "Open Season", year: 2006, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Open Water", year: 2003, genre: "Thriller", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "The Pink Panther", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "The Punisher", year: 2004, genre: "Action", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Red Eye", year: 2005, genre: "Thriller", format: "Live Action", studio: "DreamWorks", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Rocky Balboa", year: 2006, genre: "Drama", format: "Live Action", studio: "MGM", rating: "PG", cover: "" },
  { category: "Movie", title: "RV", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Shaun of the Dead", year: 2004, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Silent Hill", year: 2006, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Sin City", year: 2005, genre: "Crime", format: "Live Action", studio: "Dimension Films", rating: "R", cover: "" },
  { category: "Movie", title: "Snatch", year: 2000, genre: "Crime", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { category: "Movie", title: "The Toxic Avenger", year: 1985, genre: "Horror", format: "Live Action", studio: "Troma", rating: "NR", cover: "" },
  { category: "Movie", title: "Transporter 2", year: 2005, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Wedding Crashers", year: 2005, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Without a Paddle", year: 2004, genre: "Comedy", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "xXx: State of the Union", year: 2005, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Star Trek: Nemesis", year: 2002, genre: "Sci-Fi", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Final Fantasy: The Spirits Within", year: 2001, genre: "Anime", format: "Animation", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Godzilla", year: 1998, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "MirrorMask", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures Classics", rating: "PG", cover: "" },
  { category: "Movie", title: "Constantine", year: 2005, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { category: "Movie", title: "Serenity", year: 2005, genre: "Sci-Fi", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Beavis and Butt-Head: The Mike Judge Collection Vol. 1", year: 2005, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { category: "Movie", title: "Untraceable", year: 2008, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Alien vs. Predator", year: 2004, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "National Treasure", year: 2004, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "The Marine", year: 2006, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Island", year: 2005, genre: "Sci-Fi", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { category: "Movie", title: "True Romance", year: 1993, genre: "Crime", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { category: "Movie", title: "Kingdom of Heaven", year: 2005, genre: "Drama", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "Layer Cake", year: 2004, genre: "Crime", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { category: "Movie", title: "The Hitchhiker's Guide to the Galaxy", year: 2005, genre: "Comedy", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "Spider-Man", year: 2002, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Spider-Man 2", year: 2004, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Anchorman: The Legend of Ron Burgundy", year: 2004, genre: "Comedy", format: "Live Action", studio: "DreamWorks", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Zoolander", year: 2001, genre: "Comedy", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Big Fish", year: 2003, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Resident Evil", year: 2002, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Resident Evil: Apocalypse", year: 2004, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Underworld", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Underworld: Evolution", year: 2006, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Van Helsing", year: 2004, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Bourne Identity", year: 2002, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Bourne Supremacy", year: 2004, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "xXx", year: 2002, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Charlie's Angels: Full Throttle", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Miss Congeniality", year: 2000, genre: "Comedy", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Terminal", year: 2004, genre: "Drama", format: "Live Action", studio: "DreamWorks", rating: "PG-13", cover: "" },
  { category: "Movie", title: "I, Robot", year: 2004, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Collateral", year: 2004, genre: "Thriller", format: "Live Action", studio: "DreamWorks", rating: "R", cover: "" },
  { category: "Movie", title: "Blade II", year: 2002, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Blade: Trinity", year: 2004, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "The Chronicles of Riddick", year: 2004, genre: "Sci-Fi", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Starship Troopers", year: 1997, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Species", year: 1995, genre: "Sci-Fi", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { category: "Movie", title: "Predator", year: 1987, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "RoboCop", year: 1987, genre: "Action", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { category: "Movie", title: "Team America: World Police", year: 2004, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "R", cover: "" },
  { category: "Movie", title: "South Park: Bigger, Longer & Uncut", year: 1999, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "R", cover: "" },
  { category: "Movie", title: "Anger Management", year: 2003, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "8 Mile", year: 2002, genre: "Drama", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Assault on Precinct 13", year: 2005, genre: "Action", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Sky Captain and the World of Tomorrow", year: 2004, genre: "Sci-Fi", format: "Live Action", studio: "Paramount", rating: "PG", cover: "" },
  { category: "Movie", title: "The Cave", year: 2005, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The 40-Year-Old Virgin", year: 2005, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Fantastic Four", year: 2005, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "War of the Worlds", year: 2005, genre: "Sci-Fi", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Land of the Dead", year: 2005, genre: "Horror", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "The Exorcism of Emily Rose", year: 2005, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Four Brothers", year: 2005, genre: "Action", format: "Live Action", studio: "Paramount", rating: "R", cover: "" },
  { category: "Movie", title: "Sky High", year: 2005, genre: "Family", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "Herbie: Fully Loaded", year: 2005, genre: "Family", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "The 6th Day", year: 2000, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Behind Enemy Lines", year: 2001, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "2 Fast 2 Furious", year: 2003, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "2012", year: 2009, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Angels & Demons", year: 2009, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Chain Reaction", year: 1996, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Donnie Darko", year: 2001, genre: "Sci-Fi", format: "Live Action", studio: "Newmarket Films", rating: "R", cover: "" },
  { category: "Movie", title: "Garfield: The Movie", year: 2004, genre: "Family", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { category: "Movie", title: "The Matrix", year: 1999, genre: "Sci-Fi", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { category: "Movie", title: "The Mummy Returns", year: 2001, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Perfect Blue", year: 1997, genre: "Anime", format: "Animation", studio: "Manga Entertainment", rating: "R", cover: "" },
  { category: "Movie", title: "Resident Evil: Degeneration", year: 2008, genre: "Anime", format: "Animation", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Speed", year: 1994, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "Live Freaky Die Freaky", year: 2006, genre: "Comedy", format: "Animation", studio: "Anchor Bay Entertainment", rating: "NR", cover: "" },
  { category: "Movie", title: "21", year: 2008, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Casino Royale", year: 2006, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "28 Days Later", year: 2002, genre: "Horror", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "30 Days of Night", year: 2007, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "7 Seconds", year: 2005, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "A Few Good Men", year: 1992, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "A Knight's Tale", year: 2001, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Across the Universe", year: 2007, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Aeon Flux: The Complete Animated Collection", year: 1995, genre: "Sci-Fi", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { category: "Movie", title: "Agent Cody Banks", year: 2003, genre: "Action", format: "Live Action", studio: "MGM", rating: "PG", cover: "" },
  { category: "Movie", title: "Ah! My Goddess: The Movie", year: 2000, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "Movie", title: "Air Force One", year: 1997, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Akira", year: 1988, genre: "Anime", format: "Animation", studio: "Funimation", rating: "R", cover: "" },
  { category: "Movie", title: "Ali", year: 2001, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Ali G Indahouse", year: 2002, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Alien", year: 1979, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "American Pie Presents: Band Camp", year: 2005, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "American Psycho", year: 2000, genre: "Thriller", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "American Wedding", year: 2003, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Anacondas: The Hunt for the Blood Orchid", year: 2004, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Appleseed", year: 2004, genre: "Anime", format: "Animation", studio: "Geneon", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Are We Done Yet?", year: 2007, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Are We There Yet?", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Armageddon", year: 1998, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Assault on Precinct 13 (1976)", year: 1976, genre: "Action", format: "Live Action", studio: "Turtle Releasing", rating: "R", cover: "" },
  { category: "Movie", title: "Baby Boy", year: 2001, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Bad Boys", year: 1995, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Bad Boys II", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Bad News Bears", year: 2005, genre: "Comedy", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Basket Case", year: 1982, genre: "Horror", format: "Live Action", studio: "Analysis Film Releasing", rating: "R", cover: "" },
  { category: "Movie", title: "Batman: The Movie", year: 1966, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "NR", cover: "" },
  { category: "Movie", title: "Beavis and Butt-Head: The Mike Judge Collection Vol. 2", year: 2005, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { category: "Movie", title: "Beavis and Butt-Head: The Mike Judge Collection Vol. 3", year: 2005, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { category: "Movie", title: "Beowulf", year: 2007, genre: "Fantasy", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Bewitched", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Big Daddy", year: 1999, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Bill and Ted's Excellent Adventure", year: 1989, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "PG", cover: "" },
  { category: "Movie", title: "Billy Madison", year: 1995, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Black Hawk Down", year: 2001, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Blade", year: 1998, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Blood: The Last Vampire", year: 2000, genre: "Anime", format: "Animation", studio: "Manga Entertainment", rating: "R", cover: "" },
  { category: "Movie", title: "Blood & Chocolate", year: 2007, genre: "Fantasy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Boat Trip", year: 2002, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Booty Call", year: 1997, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Borat", year: 2006, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "Boyz N the Hood", year: 1991, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Bratz: Rock Angelz", year: 2005, genre: "Family", format: "Animation", studio: "Lionsgate", rating: "NR", cover: "" },
  { category: "Movie", title: "Brokeback Mountain", year: 2005, genre: "Drama", format: "Live Action", studio: "Focus Features", rating: "R", cover: "" },
  { category: "Movie", title: "The Brothers Grimm", year: 2005, genre: "Fantasy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Cannibal! The Musical", year: 1993, genre: "Comedy", format: "Live Action", studio: "Troma", rating: "NR", cover: "" },
  { category: "Movie", title: "Carlito's Way: Rise to Power", year: 2005, genre: "Crime", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Casualties of War", year: 1989, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Charlie and the Chocolate Factory", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Warner Bros.", rating: "PG", cover: "" },
  { category: "Movie", title: "Charlie's Angels", year: 2000, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Cheaper by the Dozen", year: 2003, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { category: "Movie", title: "Children of the Corn", year: 1984, genre: "Horror", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Clerks", year: 1994, genre: "Comedy", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { category: "Movie", title: "Cloudy with a Chance of Meatballs", year: 2009, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Cowboy Bebop: The Movie", year: 2001, genre: "Anime", format: "Animation", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Coyote Ugly", year: 2000, genre: "Drama", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Crossover", year: 2006, genre: "Drama", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Cruel Intentions", year: 1999, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Curse of the Golden Flower", year: 2006, genre: "Action", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { category: "Movie", title: "Cursed", year: 2005, genre: "Horror", format: "Live Action", studio: "Dimension Films", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Daddy Day Camp", year: 2007, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Daddy Day Care", year: 2003, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Daft Punk: Interstella 5555", year: 2003, genre: "Sci-Fi", format: "Animation", studio: "Warner Music", rating: "NR", cover: "" },
  { category: "Movie", title: "Daredevil", year: 2003, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Dark Water", year: 2005, genre: "Horror", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Darkness Falls", year: 2003, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Date Movie", year: 2006, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Dawn of the Dead (1978)", year: 1978, genre: "Horror", format: "Live Action", studio: "United Film Distribution", rating: "R", cover: "" },
  { category: "Movie", title: "Dawn of the Dead", year: 2004, genre: "Horror", format: "Live Action", studio: "Universal", rating: "Unrated", cover: "" },
  { category: "Movie", title: "Dead and Breakfast", year: 2004, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Dead Leaves", year: 2004, genre: "Anime", format: "Animation", studio: "Genius Products", rating: "NR", cover: "" },
  { category: "Movie", title: "Death Race 2000", year: 1975, genre: "Action", format: "Live Action", studio: "New World Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Deuce Bigalow: European Gigolo", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Die Hard", year: 1988, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "District 9", year: 2009, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Dodgeball: A True Underdog Story", year: 2004, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Dogma", year: 1999, genre: "Comedy", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Domino", year: 2005, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Doom", year: 2005, genre: "Action", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Dreamscape", year: 1984, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Dukes of Hazzard", year: 2005, genre: "Comedy", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Dune", year: 1984, genre: "Sci-Fi", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Eight Below", year: 2006, genre: "Family", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "Elektra", year: 2005, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Elf", year: 2003, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "PG", cover: "" },
  { category: "Movie", title: "Gundam Wing: Endless Waltz", year: 1998, genre: "Anime", format: "Animation", studio: "Bandai", rating: "NR", cover: "" },
  { category: "Movie", title: "Enter the Dragon", year: 1973, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { category: "Movie", title: "Escaflowne: The Movie", year: 2000, genre: "Anime", format: "Animation", studio: "Bandai", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Escape from New York", year: 1981, genre: "Sci-Fi", format: "Live Action", studio: "AVCO Embassy", rating: "R", cover: "" },
  { category: "Movie", title: "Evil Dead", year: 1981, genre: "Horror", format: "Live Action", studio: "New Line Cinema", rating: "NR", cover: "" },
  { category: "Movie", title: "Evil Dead II", year: 1987, genre: "Horror", format: "Live Action", studio: "Rosebud Releasing", rating: "R", cover: "" },
  { category: "Movie", title: "Feel the Noise", year: 2007, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Fired Up", year: 2009, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "First Blood", year: 1982, genre: "Action", format: "Live Action", studio: "Orion Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "First Sunday", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Flightplan", year: 2005, genre: "Thriller", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Freddy vs. Jason", year: 2003, genre: "Horror", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Freedomland", year: 2006, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Friday", year: 1995, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Friday Night Lights", year: 2004, genre: "Drama", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "From Dusk Till Dawn", year: 1996, genre: "Horror", format: "Live Action", studio: "Dimension Films", rating: "R", cover: "" },
  { category: "Movie", title: "Ghost in the Shell", year: 1995, genre: "Anime", format: "Animation", studio: "Manga Entertainment", rating: "R", cover: "" },
  { category: "Movie", title: "Ghostbusters", year: 1984, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Glory", year: 1989, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Go", year: 1999, genre: "Crime", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Godzilla: Final Wars", year: 2004, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Gone in 60 Seconds (1974)", year: 1974, genre: "Action", format: "Live Action", studio: "Filmways", rating: "PG", cover: "" },
  { category: "Movie", title: "Gone in 60 Seconds", year: 2000, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Gridiron Gang", year: 2006, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Guess Who", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Hackers", year: 1995, genre: "Action", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Halloween", year: 1978, genre: "Horror", format: "Live Action", studio: "Compass International", rating: "R", cover: "" },
  { category: "Movie", title: "Hancock", year: 2008, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Happy Gilmore", year: 1996, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Harry Potter and the Goblet of Fire", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Harry Potter and the Prisoner of Azkaban", year: 2004, genre: "Fantasy", format: "Live Action", studio: "Warner Bros.", rating: "PG", cover: "" },
  { category: "Movie", title: "Harry Potter and the Sorcerer's Stone", year: 2001, genre: "Fantasy", format: "Live Action", studio: "Warner Bros.", rating: "PG", cover: "" },
  { category: "Movie", title: "Heavy Metal", year: 1981, genre: "Fantasy", format: "Animation", studio: "Columbia Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Hellraiser", year: 1987, genre: "Horror", format: "Live Action", studio: "New World Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Hero", year: 2002, genre: "Action", format: "Live Action", studio: "Miramax", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Higher Learning", year: 1995, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Hitch", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Hollow Man", year: 2000, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Hollow Man 2", year: 2006, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Hood of the Living Dead", year: 2005, genre: "Horror", format: "Live Action", studio: "Alternative Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Hoosiers", year: 1986, genre: "Drama", format: "Live Action", studio: "Orion Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Hostage", year: 2005, genre: "Action", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { category: "Movie", title: "Hostel: Part II", year: 2007, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "House Bunny", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "House of 1000 Corpses", year: 2003, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "House of Flying Daggers", year: 2004, genre: "Action", format: "Live Action", studio: "Sony Pictures Classics", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Hustle & Flow", year: 2005, genre: "Drama", format: "Live Action", studio: "Paramount", rating: "R", cover: "" },
  { category: "Movie", title: "Ice Age", year: 2002, genre: "Family", format: "Animation", studio: "20th Century Fox", rating: "PG", cover: "" },
  { category: "Movie", title: "Ice Age: The Meltdown", year: 2006, genre: "Family", format: "Animation", studio: "20th Century Fox", rating: "PG", cover: "" },
  { category: "Movie", title: "Idle Hands", year: 1999, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Independence Day", year: 1996, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Initial D", year: 2005, genre: "Action", format: "Live Action", studio: "Media Asia", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Into the Blue", year: 2005, genre: "Action", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Jarhead", year: 2005, genre: "Drama", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Jawbreaker", year: 1999, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Jerry Maguire", year: 1996, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Joe Dirt", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Jumanji", year: 1995, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Jumper", year: 2008, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Kalifornia", year: 1993, genre: "Thriller", format: "Live Action", studio: "Gramercy Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Karas: The Prophecy", year: 2005, genre: "Anime", format: "Animation", studio: "Funimation", rating: "NR", cover: "" },
  { category: "Movie", title: "Kick-Ass", year: 2010, genre: "Action", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "King Arthur", year: 2004, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { category: "Movie", title: "King of New York", year: 1990, genre: "Crime", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "Kiss of the Dragon", year: 2001, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "Labyrinth", year: 1986, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Lakeview Terrace", year: 2008, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Lara Croft: Tomb Raider", year: 2001, genre: "Action", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Lara Croft Tomb Raider: The Cradle of Life", year: 2003, genre: "Action", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Legend", year: 1985, genre: "Fantasy", format: "Live Action", studio: "Universal", rating: "PG", cover: "" },
  { category: "Movie", title: "Lemony Snicket's A Series of Unfortunate Events", year: 2004, genre: "Fantasy", format: "Live Action", studio: "Paramount", rating: "PG", cover: "" },
  { category: "Movie", title: "Like Mike", year: 2002, genre: "Family", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { category: "Movie", title: "Lord of War", year: 2005, genre: "Drama", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Lords of Dogtown", year: 2005, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Mad Max", year: 1979, genre: "Action", format: "Live Action", studio: "American International", rating: "R", cover: "" },
  { category: "Movie", title: "Made", year: 2001, genre: "Comedy", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Man of the House", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Man on Fire", year: 2004, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "Memoirs of a Geisha", year: 2005, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Metropolis", year: 2001, genre: "Anime", format: "Animation", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Mobile Suit Gundam SEED: The Far-Away Dawn", year: 2005, genre: "Anime", format: "Animation", studio: "Bandai", rating: "NR", cover: "" },
  { category: "Movie", title: "Mobile Suit Gundam SEED: The Empty Battlefield", year: 2004, genre: "Anime", format: "Animation", studio: "Bandai", rating: "NR", cover: "" },
  { category: "Movie", title: "Monty Python and the Holy Grail", year: 1975, genre: "Comedy", format: "Live Action", studio: "Cinema 5", rating: "PG", cover: "" },
  { category: "Movie", title: "Mr. & Mrs. Smith", year: 2005, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Mr. Deeds", year: 2002, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Napoleon Dynamite", year: 2004, genre: "Comedy", format: "Live Action", studio: "Fox Searchlight", rating: "PG", cover: "" },
  { category: "Movie", title: "National Lampoon's Animal House", year: 1978, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "National Lampoon's Van Wilder", year: 2002, genre: "Comedy", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "National Security", year: 2003, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "National Treasure: Book of Secrets", year: 2007, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "Never Die Alone", year: 2004, genre: "Crime", format: "Live Action", studio: "Fox Searchlight", rating: "R", cover: "" },
  { category: "Movie", title: "Nick & Norah's Infinite Playlist", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Not Another Teen Movie", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Office Space", year: 1999, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "Oldboy", year: 2003, genre: "Thriller", format: "Live Action", studio: "Show East", rating: "R", cover: "" },
  { category: "Movie", title: "Once Upon a Time in Mexico", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Ong Bak: The Thai Warrior", year: 2003, genre: "Action", format: "Live Action", studio: "Magnolia Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Open Season 2", year: 2009, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Paprika", year: 2006, genre: "Anime", format: "Animation", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { category: "Movie", title: "Paul Blart: Mall Cop", year: 2009, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Perfect Stranger", year: 2007, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Pineapple Express", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Pirates of the Caribbean: The Curse of the Black Pearl", year: 2003, genre: "Fantasy", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Planet of the Apes", year: 1968, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "G", cover: "" },
  { category: "Movie", title: "Princess Bride", year: 1987, genre: "Fantasy", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { category: "Movie", title: "Prom Night", year: 2008, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Pulp Fiction", year: 1994, genre: "Crime", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { category: "Movie", title: "Quarantine", year: 2008, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Red Scorpion", year: 1988, genre: "Action", format: "Live Action", studio: "Shapiro-Glickenhaus", rating: "R", cover: "" },
  { category: "Movie", title: "Reign of Fire", year: 2002, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Remember the Titans", year: 2000, genre: "Drama", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "Rent", year: 2005, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Resident Evil: Extinction", year: 2007, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Road House", year: 1989, genre: "Action", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { category: "Movie", title: "Robots", year: 2005, genre: "Family", format: "Animation", studio: "20th Century Fox", rating: "PG", cover: "" },
  { category: "Movie", title: "Rock 'n' Roll High School", year: 1979, genre: "Comedy", format: "Live Action", studio: "New World Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Ronin", year: 1998, genre: "Action", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { category: "Movie", title: "Rush Hour", year: 1998, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Rush Hour 2", year: 2001, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "PG-13", cover: "" },
  { category: "Movie", title: "S.W.A.T.", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Sahara", year: 2005, genre: "Action", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Sakura Wars: The Movie", year: 2001, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "Movie", title: "Saving Silverman", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Saw", year: 2004, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Saw II", year: 2005, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Scarface", year: 1983, genre: "Crime", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "Secondhand Lions", year: 2003, genre: "Drama", format: "Live Action", studio: "New Line Cinema", rating: "PG", cover: "" },
  { category: "Movie", title: "Secret Window", year: 2004, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Seven Pounds", year: 2008, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Shallow Hal", year: 2001, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Shaolin Soccer", year: 2001, genre: "Comedy", format: "Live Action", studio: "Miramax", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Short Circuit", year: 1986, genre: "Family", format: "Live Action", studio: "TriStar", rating: "PG", cover: "" },
  { category: "Movie", title: "SLC Punk", year: 1998, genre: "Comedy", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { category: "Movie", title: "Spawn", year: 1997, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Spider-Man 3", year: 2007, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The SpongeBob SquarePants Movie", year: 2004, genre: "Family", format: "Animation", studio: "Paramount", rating: "PG", cover: "" },
  { category: "Movie", title: "Spun", year: 2002, genre: "Drama", format: "Live Action", studio: "Newmarket Films", rating: "R", cover: "" },
  { category: "Movie", title: "Stargate", year: 1994, genre: "Sci-Fi", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Starship Troopers 3: Marauder", year: 2008, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Stealth", year: 2005, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Steamboy", year: 2005, genre: "Anime", format: "Animation", studio: "Sony Pictures Classics", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Step Brothers", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Stomp the Yard", year: 2007, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Stripes", year: 1981, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Stuart Little", year: 1999, genre: "Family", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Stuart Little 2", year: 2002, genre: "Family", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Stuart Little 3: Call of the Wild", year: 2005, genre: "Family", format: "Live Action", studio: "Sony Pictures", rating: "G", cover: "" },
  { category: "Movie", title: "Super Troopers", year: 2001, genre: "Comedy", format: "Live Action", studio: "Fox Searchlight", rating: "R", cover: "" },
  { category: "Movie", title: "Superbad", year: 2007, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Surf's Up", year: 2007, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "Suspect Zero", year: 2004, genre: "Thriller", format: "Live Action", studio: "Paramount", rating: "R", cover: "" },
  { category: "Movie", title: "The Sweetest Thing", year: 2002, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Swingers", year: 1996, genre: "Comedy", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { category: "Movie", title: "Swordfish", year: 2001, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { category: "Movie", title: "Talladega Nights: The Ballad of Ricky Bobby", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Tears of the Sun", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Tekkonkinkreet", year: 2006, genre: "Anime", format: "Animation", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { category: "Movie", title: "Terminator 2: Judgment Day", year: 1991, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Terminator 3: Rise of the Machines", year: 2003, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { category: "Movie", title: "The Animal", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Benchwarmers", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Big Hit", year: 1998, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "The Boondock Saints", year: 1999, genre: "Action", format: "Live Action", studio: "Franchise Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "The Brave One", year: 2007, genre: "Thriller", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { category: "Movie", title: "The Butterfly Effect", year: 2004, genre: "Thriller", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "The Chronicles of Riddick: Pitch Black", year: 2000, genre: "Sci-Fi", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "The Covenant", year: 2006, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Craft", year: 1996, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "The Crow", year: 1994, genre: "Action", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { category: "Movie", title: "The Dark Crystal", year: 1982, genre: "Fantasy", format: "Live Action", studio: "Universal", rating: "PG", cover: "" },
  { category: "Movie", title: "The Devil's Own", year: 1997, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "The Devil's Rejects", year: 2005, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "The Doors", year: 1991, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "The Exterminator", year: 1980, genre: "Action", format: "Live Action", studio: "Avco Embassy", rating: "R", cover: "" },
  { category: "Movie", title: "The Fast and the Furious", year: 2001, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Fog", year: 2005, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Gospel", year: 2005, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "The Great Escape", year: 1963, genre: "Action", format: "Live Action", studio: "MGM", rating: "NR", cover: "" },
  { category: "Movie", title: "The Incredibles", year: 2004, genre: "Family", format: "Animation", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "The International", year: 2009, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "The Italian Job", year: 2003, genre: "Action", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Karate Kid", year: 1984, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "The League of Extraordinary Gentlemen", year: 2003, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Legend of Zorro", year: 2005, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Movie", title: "The Longest Yard", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Mask of Zorro", year: 1998, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Messengers", year: 2007, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Nightmare Before Christmas", year: 1993, genre: "Fantasy", format: "Animation", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "The Octagon", year: 1980, genre: "Action", format: "Live Action", studio: "American Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "The One", year: 2001, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Pest", year: 1997, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Pink Panther (1963)", year: 1963, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "NR", cover: "" },
  { category: "Movie", title: "The Pursuit of Happyness", year: 2006, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Replacement Killers", year: 1998, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "The Rock", year: 1996, genre: "Action", format: "Live Action", studio: "Disney", rating: "R", cover: "" },
  { category: "Movie", title: "The Rundown", year: 2003, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Sandlot", year: 1993, genre: "Family", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { category: "Movie", title: "The Sandlot 2", year: 2005, genre: "Family", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { category: "Movie", title: "The Sisterhood of the Traveling Pants", year: 2005, genre: "Drama", format: "Live Action", studio: "Warner Bros.", rating: "PG", cover: "" },
  { category: "Movie", title: "The Taking of Pelham 123", year: 2009, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "The Terminator", year: 1984, genre: "Sci-Fi", format: "Live Action", studio: "Orion Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "The Texas Chainsaw Massacre", year: 2003, genre: "Horror", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { category: "Movie", title: "The Transporter", year: 2002, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "The Warriors", year: 1979, genre: "Action", format: "Live Action", studio: "Paramount", rating: "R", cover: "" },
  { category: "Movie", title: "There's Something About Mary", year: 1998, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "To Die For", year: 1995, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "To Live and Die in L.A.", year: 1985, genre: "Crime", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { category: "Movie", title: "Tomcats", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Total Recall", year: 1990, genre: "Sci-Fi", format: "Live Action", studio: "TriStar", rating: "R", cover: "" },
  { category: "Movie", title: "Toy Story", year: 1995, genre: "Family", format: "Animation", studio: "Disney", rating: "G", cover: "" },
  { category: "Movie", title: "Tron", year: 1982, genre: "Sci-Fi", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { category: "Movie", title: "U-571", year: 2000, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Ultimate Avengers: The Movie", year: 2006, genre: "Action", format: "Animation", studio: "Lionsgate", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Ultraviolet", year: 2006, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Underworld: Rise of the Lycans", year: 2009, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Universal Soldier", year: 1992, genre: "Action", format: "Live Action", studio: "TriStar", rating: "R", cover: "" },
  { category: "Movie", title: "Unleashed", year: 2005, genre: "Action", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { category: "Movie", title: "V for Vendetta", year: 2005, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { category: "Movie", title: "Vacancy", year: 2007, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Vampires", year: 1998, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "Vantage Point", year: 2008, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Waiting...", year: 2005, genre: "Comedy", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { category: "Movie", title: "Walk Hard: The Dewey Cox Story", year: 2007, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "We Own the Night", year: 2007, genre: "Crime", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "When a Stranger Calls", year: 2006, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "White Chicks", year: 2004, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Wild Things", year: 1998, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { category: "Movie", title: "X2: X-Men United", year: 2003, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "X-Men", year: 2000, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "X-Men: The Last Stand", year: 2006, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Year One", year: 2009, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "You Don't Mess with the Zohan", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "You Got Served", year: 2004, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { category: "Movie", title: "Young Guns", year: 1988, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { category: "Movie", title: "Zathura", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "TV", title: "Aqua Teen Hunger Force: Volume 4", year: 2005, genre: "Comedy", format: "Animation", studio: "Adult Swim", rating: "NR", cover: "" },
  { category: "TV", title: "Astro Boy: Volume 1 - Astro Boy Blasts Off!", year: 2004, genre: "Anime", format: "Animation", studio: "Sony Pictures", rating: "NR", cover: "" },
  { category: "TV", title: "Best of He-Man & The Masters of the Universe, Vol. 1", year: 2005, genre: "Animation", format: "Animation", studio: "BCI Eclipse", rating: "NR", cover: "" },
  { category: "TV", title: "Best of He-Man & The Masters of the Universe, Vol. 2", year: 2005, genre: "Animation", format: "Animation", studio: "BCI Eclipse", rating: "NR", cover: "" },
  { category: "TV", title: "Chappelle's Show: Season 1, Volume 1", year: 2004, genre: "Comedy", format: "Live Action", studio: "Comedy Central", rating: "NR", cover: "" },
  { category: "TV", title: "Cowboy Bebop, Vol. 1", year: 2000, genre: "Anime", format: "Animation", studio: "Bandai", rating: "NR", cover: "" },
  { category: "TV", title: "Creature Comforts: Season 1", year: 2007, genre: "Comedy", format: "Animation", studio: "DreamWorks", rating: "NR", cover: "" },
  { category: "TV", title: "Da Ali G Show: The Complete First Season, Disc 1", year: 2003, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "TV", title: "Da Ali G Show: The Complete First Season, Disc 2", year: 2003, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "TV", title: "Da Ali G Show: The Complete Second Season, Disc 1", year: 2004, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "TV", title: "Da Ali G Show: The Complete Second Season, Disc 2", year: 2004, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "TV", title: "Entourage: Season 1, Disc 1", year: 2004, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "TV", title: "Entourage: Season 1, Disc 2", year: 2004, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "TV", title: "Family Guy: Blue Harvest", year: 2007, genre: "Comedy", format: "Animation", studio: "20th Century Fox", rating: "NR", cover: "" },
  { category: "TV", title: "Family Guy, Vol. 1: Seasons 1 & 2", year: 2003, genre: "Comedy", format: "Animation", studio: "20th Century Fox", rating: "NR", cover: "" },
  { category: "TV", title: "Family Guy, Vol. Two: Season 3", year: 2004, genre: "Comedy", format: "Animation", studio: "20th Century Fox", rating: "NR", cover: "" },
  { category: "TV", title: "Ghost in the Shell: Stand Alone Complex, Season 1 - Vol. 1", year: 2003, genre: "Anime", format: "Animation", studio: "Bandai", rating: "NR", cover: "" },
  { category: "TV", title: "Good Times: Season 1", year: 1974, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "NR", cover: "" },
  { category: "TV", title: "Gungrave: Volume 1", year: 2004, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "Hellsing, Vol. 1: Impure Souls", year: 2002, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "Ikki Tousen: Legendary Fighter, Vol. 1", year: 2005, genre: "Anime", format: "Animation", studio: "Media Blasters", rating: "NR", cover: "" },
  { category: "TV", title: "Last Exile, Vol. 1", year: 2004, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "Lost: The Series Pilot, Parts I and II", year: 2004, genre: "Drama", format: "Live Action", studio: "ABC", rating: "NR", cover: "" },
  { category: "TV", title: "Paranoia Agent, Vol. 1", year: 2005, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "R.O.D the TV, Vol. 1", year: 2005, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "Ren & Stimpy: The First and Second Seasons, Vol. 1", year: 1991, genre: "Animation", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { category: "TV", title: "Ricky Gervais' Extras: Episodes 1-6", year: 2005, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "TV", title: "S-Cry-Ed, Vol. 1: The Lost Ground", year: 2003, genre: "Anime", format: "Animation", studio: "Bandai", rating: "NR", cover: "" },
  { category: "TV", title: "Samurai Champloo: Episodes 1 & 2", year: 2004, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "Samurai Champloo, Volume 2", year: 2004, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "Samurai Champloo, Volume 3", year: 2005, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "Samurai Champloo, Volume 4", year: 2005, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "Sanford and Son: Season 1", year: 1972, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "NR", cover: "" },
  { category: "TV", title: "South Park: When Technology Attacks", year: 2003, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { category: "TV", title: "Spider-Man: The New Animated Series - The Mutant Menace", year: 2003, genre: "Action", format: "Animation", studio: "Sony Pictures", rating: "NR", cover: "" },
  { category: "TV", title: "SpongeBob SquarePants: The 1st Season, Volume 1", year: 1999, genre: "Family", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { category: "TV", title: "Stargate Atlantis: Pilot Episode", year: 2004, genre: "Sci-Fi", format: "Live Action", studio: "MGM", rating: "NR", cover: "" },
  { category: "TV", title: "Tenjho Tenge, Volume 1: Episodes 1 & 2", year: 2005, genre: "Anime", format: "Animation", studio: "Media Blasters", rating: "NR", cover: "" },
  { category: "TV", title: "The Boondocks", year: 2005, genre: "Comedy", format: "Animation", studio: "Sony Pictures", rating: "NR", cover: "" },
  { category: "TV", title: "The Twilight Zone: Nightmare at 20,000 Feet", year: 1963, genre: "Sci-Fi", format: "Live Action", studio: "CBS", rating: "NR", cover: "" },
  { category: "TV", title: "Trigun, Vol. 1", year: 2000, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { category: "TV", title: "Viewtiful Joe, Vol. 1", year: 2005, genre: "Anime", format: "Animation", studio: "Media Blasters", rating: "NR", cover: "" },
  { category: "TV", title: "Viva La Bam, Volume 1", year: 2003, genre: "Comedy", format: "Live Action", studio: "MTV", rating: "NR", cover: "" },
  { category: "TV", title: "Viva La Bam, Volume 2", year: 2004, genre: "Comedy", format: "Live Action", studio: "MTV", rating: "NR", cover: "" },
  { category: "TV", title: "Viva La Bam, Volume 3", year: 2004, genre: "Comedy", format: "Live Action", studio: "MTV", rating: "NR", cover: "" },
  { category: "TV", title: "Viva La Bam, Volume 4", year: 2005, genre: "Comedy", format: "Live Action", studio: "MTV", rating: "NR", cover: "" },
  { category: "TV", title: "Wildboyz, Volume 1", year: 2004, genre: "Comedy", format: "Live Action", studio: "MTV", rating: "NR", cover: "" },
  { category: "TV", title: "Wildboyz, Volume 2", year: 2005, genre: "Comedy", format: "Live Action", studio: "MTV", rating: "NR", cover: "" },
  { category: "TV", title: "Rob and Big, Volume 1", year: 2006, genre: "Comedy", format: "Live Action", studio: "MTV", rating: "NR", cover: "" },
  { category: "TV", title: "Rob and Big, Volume 2", year: 2007, genre: "Comedy", format: "Live Action", studio: "MTV", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "50 Cent: The Massacre", year: 2005, genre: "Music", format: "Live Action", studio: "Interscope", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "50 Cent: Refuse 2 Die", year: 2008, genre: "Music", format: "Live Action", studio: "Interscope", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Audioslave: Live in Cuba", year: 2005, genre: "Music", format: "Live Action", studio: "Epic Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Beck: Guero", year: 2005, genre: "Music", format: "Live Action", studio: "Interscope", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Snoop Dogg: The Puff Puff Pass Tour", year: 2007, genre: "Music", format: "Live Action", studio: "Doggystyle Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Blink-182: Greatest Hits", year: 2005, genre: "Music", format: "Live Action", studio: "Geffen Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Bob Marley: The Legend Live", year: 2005, genre: "Music", format: "Live Action", studio: "Island Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Busta Rhymes: Everything Remains Raw", year: 2005, genre: "Music", format: "Live Action", studio: "Geffen Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Coheed and Cambria: Live at the Starland Ballroom", year: 2005, genre: "Music", format: "Live Action", studio: "Equal Vision Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Deftones: Live in Hawaii", year: 2005, genre: "Music", format: "Live Action", studio: "Maverick Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Depeche Mode: One Night in Paris - The Exciter Tour 2001", year: 2001, genre: "Music", format: "Live Action", studio: "Mute Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Depeche Mode: Devotional", year: 1993, genre: "Music", format: "Live Action", studio: "Mute Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Depeche Mode: Playing the Angel", year: 2006, genre: "Music", format: "Live Action", studio: "Mute Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Depeche Mode: 101", year: 1989, genre: "Music", format: "Live Action", studio: "Mute Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Epitaph Presents: Epitaph Tour 2005", year: 2005, genre: "Music", format: "Live Action", studio: "Epitaph Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Foo Fighters: Everywhere But Home", year: 2003, genre: "Music", format: "Live Action", studio: "RCA Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Godsmack: Live", year: 2003, genre: "Music", format: "Live Action", studio: "Republic Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Good Charlotte: Live at Brixton Academy", year: 2003, genre: "Music", format: "Live Action", studio: "Epic Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Green Day: Bullet in a Bible", year: 2005, genre: "Music", format: "Live Action", studio: "Reprise Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "INXS: Live Baby Live", year: 1991, genre: "Music", format: "Live Action", studio: "Atlantic Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Iron Maiden: Number of the Beast Classic Album", year: 2001, genre: "Music", format: "Live Action", studio: "EMI", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Journey: Live in Houston 1981 - Escape Tour", year: 1981, genre: "Music", format: "Live Action", studio: "Columbia Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Judas Priest: Live Vengeance 82", year: 1982, genre: "Music", format: "Live Action", studio: "Columbia Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Limp Bizkit: Greatest Videoz", year: 2005, genre: "Music", format: "Live Action", studio: "Interscope", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Marilyn Manson: God, Guns and Government World Tour", year: 2004, genre: "Music", format: "Live Action", studio: "Nothing Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Metallica: Classic Album", year: 2001, genre: "Music", format: "Live Action", studio: "Elektra Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Michael Jackson: Number Ones", year: 2003, genre: "Music", format: "Live Action", studio: "Epic Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Michael Jackson: This Is It", year: 2009, genre: "Music", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { category: "Concert/Music", title: "My Chemical Romance: Life on the Murder Scene", year: 2006, genre: "Music", format: "Live Action", studio: "Reprise Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Nirvana: Nevermind Classic Album", year: 2005, genre: "Music", format: "Live Action", studio: "Geffen Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Outkast: The Videos", year: 2005, genre: "Music", format: "Live Action", studio: "Arista Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Pink Floyd: The Dark Side of the Moon", year: 2003, genre: "Music", format: "Live Action", studio: "EMI", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Prince: Rave Un2 the Year 2000", year: 2000, genre: "Music", format: "Live Action", studio: "NPG Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Puddle of Mudd: Striking That Familiar Chord", year: 2005, genre: "Music", format: "Live Action", studio: "Geffen Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Queen: The Making of A Night at the Opera", year: 2005, genre: "Music", format: "Live Action", studio: "EMI", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Red Hot Chili Peppers: Live at Slane Castle", year: 2003, genre: "Music", format: "Live Action", studio: "Warner Bros. Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Rob Zombie: Hellbilly Deluxe", year: 2003, genre: "Music", format: "Live Action", studio: "Geffen Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Scissor Sisters: We Are and So Are You", year: 2005, genre: "Music", format: "Live Action", studio: "Universal Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "The Offspring: Complete Music Video Collection", year: 2005, genre: "Music", format: "Live Action", studio: "Columbia Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "The Up in Smoke Tour", year: 2000, genre: "Music", format: "Live Action", studio: "Eve Productions", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "The Who: The Kids Are Alright", year: 1979, genre: "Music", format: "Live Action", studio: "New World Pictures", rating: "PG", cover: "" },
  { category: "Concert/Music", title: "Tupac: Live at the House of Blues", year: 2005, genre: "Music", format: "Live Action", studio: "Amaru Entertainment", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Tupac Shakur: Thug Angel (The Life of an Outlaw)", year: 2002, genre: "Music", format: "Live Action", studio: "QD3 Entertainment", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "U2: Rattle and Hum", year: 1988, genre: "Music", format: "Live Action", studio: "Paramount", rating: "PG", cover: "" },
  { category: "Concert/Music", title: "U2: The Joshua Tree", year: 1999, genre: "Music", format: "Live Action", studio: "Island Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Usher: Rhythm City Volume One - Caught Up", year: 2004, genre: "Music", format: "Live Action", studio: "Arista Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Zakk Wylde's Black Label Society: Booze, Broozed, and Broken-Boned", year: 2004, genre: "Music", format: "Live Action", studio: "Spitfire Records", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Beef", year: 2003, genre: "Music", format: "Live Action", studio: "QD3 Entertainment", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Beef II", year: 2004, genre: "Music", format: "Live Action", studio: "QD3 Entertainment", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Freshest Kids: A History of the B-Boy", year: 2002, genre: "Music", format: "Live Action", studio: "QD3 Entertainment", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Punk: Attitude", year: 2005, genre: "Music", format: "Live Action", studio: "Sony Pictures", rating: "NR", cover: "" },
  { category: "Concert/Music", title: "Rhyme & Reason", year: 1997, genre: "Music", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { category: "Concert/Music", title: "MC: Why We Do It", year: 2005, genre: "Music", format: "Live Action", studio: "Image Entertainment", rating: "NR", cover: "" },
  { category: "Sports", title: "101 Greatest Premiership Moments", year: 2004, genre: "Sports", format: "Live Action", studio: "Sky Sports", rating: "NR", cover: "" },
  { category: "Sports", title: "250 Classic Goals", year: 2005, genre: "Sports", format: "Live Action", studio: "Sky Sports", rating: "NR", cover: "" },
  { category: "Sports", title: "Another 250 Classic Goals", year: 2005, genre: "Sports", format: "Live Action", studio: "Sky Sports", rating: "NR", cover: "" },
  { category: "Sports", title: "250 Great Premiership Goals", year: 2005, genre: "Sports", format: "Live Action", studio: "Sky Sports", rating: "NR", cover: "" },
  { category: "Sports", title: "All the Goals of the 2006 World Cup", year: 2006, genre: "Sports", format: "Live Action", studio: "FIFA", rating: "NR", cover: "" },
  { category: "Sports", title: "The Best of Super Speeders", year: 2005, genre: "Sports", format: "Live Action", studio: "Genius Products", rating: "NR", cover: "" },
  { category: "Sports", title: "Gracie Jiu-Jitsu in Action", year: 2004, genre: "Sports", format: "Live Action", studio: "Panther Productions", rating: "NR", cover: "" },
  { category: "Sports", title: "In Just One Play: The Big-Play Men of the NFL", year: 2005, genre: "Sports", format: "Live Action", studio: "NFL Films", rating: "NR", cover: "" },
  { category: "Sports", title: "NBA Furious Finishes", year: 2005, genre: "Sports", format: "Live Action", studio: "NBA Entertainment", rating: "NR", cover: "" },
  { category: "Sports", title: "NBA Hardwood Classics: Michael Jordan - His Airness", year: 2005, genre: "Sports", format: "Live Action", studio: "NBA Entertainment", rating: "NR", cover: "" },
  { category: "Sports", title: "Pride Fighting Presents: Hardcore Knockouts, Volume 1", year: 2005, genre: "Sports", format: "Live Action", studio: "Pride FC", rating: "NR", cover: "" },
  { category: "Sports", title: "Super Speedway", year: 1997, genre: "Sports", format: "Live Action", studio: "IMAX", rating: "NR", cover: "" },
  { category: "Sports", title: "The Backyard", year: 2002, genre: "Sports", format: "Live Action", studio: "Slowdown Productions", rating: "NR", cover: "" },
  { category: "Sports", title: "The Best of Rumble on the Rock", year: 2005, genre: "Sports", format: "Live Action", studio: "Rumble Sports", rating: "NR", cover: "" },
  { category: "Sports", title: "WWE: 20 Years Too Soon - The Superstar Billy Graham Story", year: 2006, genre: "Sports", format: "Live Action", studio: "WWE Home Video", rating: "NR", cover: "" },
  { category: "Sports", title: "WWE: Bret \"Hit Man\" Hart", year: 2005, genre: "Sports", format: "Live Action", studio: "WWE Home Video", rating: "NR", cover: "" },
  { category: "Sports", title: "WWE: From the Vault - Shawn Michaels", year: 2005, genre: "Sports", format: "Live Action", studio: "WWE Home Video", rating: "NR", cover: "" },
  { category: "Sports", title: "WWE: Hard Knocks - The Chris Benoit Story", year: 2004, genre: "Sports", format: "Live Action", studio: "WWE Home Video", rating: "NR", cover: "" },
  { category: "Sports", title: "WWE: Jake the Snake Roberts - Pick Your Poison", year: 2006, genre: "Sports", format: "Live Action", studio: "WWE Home Video", rating: "NR", cover: "" },
  { category: "Sports", title: "WWE: The Self Destruction of the Ultimate Warrior", year: 2005, genre: "Sports", format: "Live Action", studio: "WWE Home Video", rating: "NR", cover: "" },
  { category: "Sports", title: "WWE: Tombstone - The History of the Undertaker", year: 2005, genre: "Sports", format: "Live Action", studio: "WWE Home Video", rating: "NR", cover: "" },
  { category: "Sports", title: "As If! ...An All Girl Snowboard Film", year: 2002, genre: "Sports", format: "Live Action", studio: "Whiskey Militia", rating: "NR", cover: "" },
  { category: "Sports", title: "First Descent", year: 2005, genre: "Sports", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { category: "Sports", title: "The Endless Summer", year: 1966, genre: "Sports", format: "Live Action", studio: "Bruce Brown Films", rating: "NR", cover: "" },
  { category: "Sports", title: "Magic of Flight (IMAX)", year: 2007, genre: "Sports", format: "Live Action", studio: "IMAX", rating: "NR", cover: "" },
  { category: "Sports", title: "DC Shoes Presents: The DC Video", year: 2003, genre: "Sports", format: "Live Action", studio: "DC Shoes", rating: "NR", cover: "" },
  { category: "Sports", title: "Tony Hawk Presents: The End", year: 2003, genre: "Sports", format: "Live Action", studio: "Birdhouse Projects", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Chris Rock: Bigger & Blacker", year: 1999, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Chris Rock: Never Scared", year: 2004, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Dave Chappelle: For What It's Worth", year: 2004, genre: "Comedy", format: "Live Action", studio: "Sundance Channel", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Jamie Foxx: I Might Need Security", year: 2002, genre: "Comedy", format: "Live Action", studio: "HBO", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Larry the Cable Guy: Git-R-Done", year: 2004, genre: "Comedy", format: "Live Action", studio: "Warner Bros.", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Laffapalooza! Vol. 1", year: 2006, genre: "Comedy", format: "Live Action", studio: "Image Entertainment", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Richard Pryor: Live on the Sunset Strip", year: 1982, genre: "Comedy", format: "Live Action", studio: "Columbia Pictures", rating: "R", cover: "" },
  { category: "Stand-up", title: "Saturday Night Live: The Best of Chris Farley", year: 1998, genre: "Comedy", format: "Live Action", studio: "NBC", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Saturday Night Live: The Best of Mike Myers", year: 2004, genre: "Comedy", format: "Live Action", studio: "NBC", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Saturday Night Live: The Best of Will Ferrell, Vol. 1", year: 2002, genre: "Comedy", format: "Live Action", studio: "NBC", rating: "NR", cover: "" },
  { category: "Stand-up", title: "Saturday Night Live: The Best of Will Ferrell, Vol. 2", year: 2004, genre: "Comedy", format: "Live Action", studio: "NBC", rating: "NR", cover: "" }
];

var OWNED_KEY = "umdOwnedCollection";
var WATCHED_KEY = "umdWatchedCollection";
var WISHLIST_KEY = "umdWishlistCollection";
var VIEW_KEY = "umdViewMode";
var COVER_CACHE_KEY = "umdCoverCacheV3";

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

function simplifyShowTitle(title) {
  var splitIndex = title.search(/[:,]/);
  if (splitIndex === -1) return null;
  var base = title.slice(0, splitIndex).trim();
  var rest = title.slice(splitIndex + 1);
  if (/vol|volume|season|disc|part|episode|\d/i.test(rest)) {
    return base;
  }
  return null;
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

  function searchMovieByTitle(title, withYear) {
    var url = "https://api.themoviedb.org/3/search/movie?api_key=" + encodeURIComponent(TMDB_API_KEY) +
      "&query=" + encodeURIComponent(title) + (withYear ? "&year=" + movie.year : "");
    return fetch(url).then(function (res) { return res.json(); }).then(function (data) {
      return data.results && data.results[0] && data.results[0].poster_path;
    });
  }

  function searchTVByTitle(title) {
    var url = "https://api.themoviedb.org/3/search/tv?api_key=" + encodeURIComponent(TMDB_API_KEY) +
      "&query=" + encodeURIComponent(title);
    return fetch(url).then(function (res) { return res.json(); }).then(function (data) {
      return data.results && data.results[0] && data.results[0].poster_path;
    });
  }

  var simplified = simplifyShowTitle(movie.title);

  // Only Movie/Stand-up/TV categories have any chance of a poster on TMDB.
  // Concert/Music and Sports content isn't catalogued there at all.
  var attempt;
  if (movie.category === "TV") {
    attempt = searchTVByTitle(movie.title)
      .then(function (p) { return p || searchMovieByTitle(movie.title, true); })
      .then(function (p) { return p || searchMovieByTitle(movie.title, false); })
      .then(function (p) { return p || (simplified ? searchTVByTitle(simplified) : null); })
      .then(function (p) { return p || (simplified ? searchMovieByTitle(simplified, false) : null); });
  } else if (movie.category === "Concert/Music" || movie.category === "Sports") {
    attempt = Promise.resolve(null);
  } else {
    attempt = searchMovieByTitle(movie.title, true).then(function (p) { return p || searchMovieByTitle(movie.title, false); });
  }

  return attempt
    .then(function (posterPath) {
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

function hasImdbEntry(movie) {
  return movie.category === "Movie" || movie.category === "TV" || movie.category === "Stand-up";
}

function ebaySearchUrl(movie) {
  return "https://www.ebay.com/sch/i.html?_nkw=" + encodeURIComponent(movie.title + " UMD");
}

function cleanTitleForSearch(title) {
  var t = title;
  // Strip trailing parenthetical annotations like (1976), (Unrated), (IMAX) —
  // the exact year gets added back separately from the movie's year field.
  t = t.replace(/\s*\([^)]*\)\s*$/, "");
  // Strip volume/season/disc/part/episode qualifiers after a colon or comma
  var idx = t.search(/[:,]/);
  if (idx !== -1) {
    var rest = t.slice(idx + 1);
    if (/vol|volume|season|disc|part|episode/i.test(rest)) {
      t = t.slice(0, idx);
    }
  }
  return t.trim();
}

function youtubeTrailerUrl(movie) {
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(cleanTitleForSearch(movie.title) + " " + movie.year + " trailer");
}

function sortMovies(list, sortBy) {
  var sorted = list.slice();
  switch (sortBy) {
    case "titleAsc":
      sorted.sort(function (a, b) { return a.title.localeCompare(b.title); });
      break;
    case "titleDesc":
      sorted.sort(function (a, b) { return b.title.localeCompare(a.title); });
      break;
    case "yearNewest":
      sorted.sort(function (a, b) { return b.year - a.year || a.title.localeCompare(b.title); });
      break;
    case "yearOldest":
      sorted.sort(function (a, b) { return a.year - b.year || a.title.localeCompare(b.title); });
      break;
    case "genreAsc":
      sorted.sort(function (a, b) { return a.genre.localeCompare(b.genre) || a.title.localeCompare(b.title); });
      break;
    case "studioAsc":
      sorted.sort(function (a, b) { return a.studio.localeCompare(b.studio) || a.title.localeCompare(b.title); });
      break;
    case "categoryAsc":
      sorted.sort(function (a, b) { return a.category.localeCompare(b.category) || a.title.localeCompare(b.title); });
      break;
    case "formatAsc":
      sorted.sort(function (a, b) { return a.format.localeCompare(b.format) || a.title.localeCompare(b.title); });
      break;
    default:
      break;
  }
  return sorted;
}

function getUnique(key) {
  var values = movies.map(function (m) { return m[key]; });
  return Array.from(new Set(values)).sort();
}

function populateFilters() {
  var categorySelect = document.getElementById("categoryFilter");
  var yearSelect = document.getElementById("yearFilter");
  var studioSelect = document.getElementById("studioFilter");
  var genreSelect = document.getElementById("genreFilter");

  getUnique("category").forEach(function (category) {
    var opt = document.createElement("option");
    opt.value = category;
    opt.textContent = category;
    categorySelect.appendChild(opt);
  });

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

function placeholderClass(movie) {
  if (movie.category === "Sports") {
    return /wwe|wrestl/i.test(movie.title) ? "placeholder-wrestling" : "placeholder-sports";
  }
  if (movie.category === "Concert/Music") return "placeholder-music";
  return "placeholder-default";
}

function placeholderEmoji(movie) {
  if (movie.category === "Sports") {
    return /wwe|wrestl/i.test(movie.title) ? "🥊" : "⚽🏀🏈";
  }
  if (movie.category === "Concert/Music") return "🎶";
  if (movie.category === "TV") return "📺";
  if (movie.category === "Stand-up") return "🎤";
  return "🎬";
}

function buildCardHtml(movie, isOwned, isWatched, isWishlist) {
  var id = movieId(movie);
  var coverHtml = movie.cover
    ? '<img class="cover" data-cover-id="' + id + '" src="' + movie.cover + '" alt="' + movie.title + ' cover">'
    : '<div class="cover cover-placeholder ' + placeholderClass(movie) + '" data-cover-id="' + id + '">' +
      '<span class="placeholder-emoji">' + placeholderEmoji(movie) + '</span>' +
      '<span class="placeholder-title">' + movie.title + '</span>' +
      '</div>';

  var imdbHtml = hasImdbEntry(movie)
    ? '<a class="imdb-btn" href="' + imdbSearchUrl(movie) + '" target="_blank" rel="noopener">IMDb Entry</a>'
    : "";
  var ebayHtml = '<a class="ebay-btn" href="' + ebaySearchUrl(movie) + '" target="_blank" rel="noopener">Find on eBay</a>';
  var trailerHtml = '<a class="trailer-btn" href="' + youtubeTrailerUrl(movie) + '" target="_blank" rel="noopener">YouTube Trailer</a>';

  return (
    coverHtml +
    '<div class="movie-info">' +
    "<h3>" + movie.title + " (" + movie.year + ")</h3>" +
    "<p>" + movie.genre + " &middot; " + movie.format + " &middot; " + movie.studio + " &middot; Rated " + movie.rating + "</p>" +
    '<div class="checks-row">' +
    '<label class="toggle-item toggle-owned"><input type="checkbox" class="owned-checkbox" data-id="' + id + '"' + (isOwned ? " checked" : "") + '><span class="toggle-circle"></span><span class="toggle-label">Owned</span></label>' +
    '<label class="toggle-item toggle-watched"><input type="checkbox" class="watched-checkbox" data-id="' + id + '"' + (isWatched ? " checked" : "") + '><span class="toggle-circle"></span><span class="toggle-label">Watched</span></label>' +
    '<label class="toggle-item toggle-wishlist"><input type="checkbox" class="wishlist-checkbox" data-id="' + id + '"' + (isWishlist ? " checked" : "") + '><span class="toggle-circle"></span><span class="toggle-label">Wishlist</span></label>' +
    "</div>" +
    '<div class="links-row">' + imdbHtml + ebayHtml + trailerHtml + "</div>" +
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
  var wishlist = getSet(WISHLIST_KEY);

  list.forEach(function (movie) {
    var id = movieId(movie);
    var card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = buildCardHtml(movie, owned.has(id), watched.has(id), wishlist.has(id));

    card.querySelector(".owned-checkbox").addEventListener("change", function () {
      toggleInSet(OWNED_KEY, id);
    });
    card.querySelector(".watched-checkbox").addEventListener("change", function () {
      toggleInSet(WATCHED_KEY, id);
    });
    card.querySelector(".wishlist-checkbox").addEventListener("change", function () {
      toggleInSet(WISHLIST_KEY, id);
    });

    container.appendChild(card);

    // If there's no manually-set cover, try to fetch one from TMDB and swap it in.
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
  var category = document.getElementById("categoryFilter").value;
  var year = document.getElementById("yearFilter").value;
  var studio = document.getElementById("studioFilter").value;
  var genre = document.getElementById("genreFilter").value;
  var format = document.getElementById("formatFilter").value;
  var sortBy = document.getElementById("sortFilter").value;
  var onlyOwned = document.getElementById("ownedFilter").checked;
  var onlyWatched = document.getElementById("watchedFilter").checked;
  var onlyWishlist = document.getElementById("wishlistFilter").checked;

  return (
    searchTerm === "" &&
    category === "all" &&
    year === "all" &&
    studio === "all" &&
    genre === "all" &&
    format === "all" &&
    sortBy === "none" &&
    !onlyOwned &&
    !onlyWatched &&
    !onlyWishlist
  );
}

function applyFilters() {
  if (isDefaultState()) {
    renderMovies(getRandomPicks(10), "Showing 10 random picks out of " + movies.length + " total — search or filter to browse everything");
    return;
  }

  var searchTerm = document.getElementById("searchInput").value.toLowerCase();
  var category = document.getElementById("categoryFilter").value;
  var year = document.getElementById("yearFilter").value;
  var studio = document.getElementById("studioFilter").value;
  var genre = document.getElementById("genreFilter").value;
  var format = document.getElementById("formatFilter").value;
  var sortBy = document.getElementById("sortFilter").value;
  var onlyOwned = document.getElementById("ownedFilter").checked;
  var onlyWatched = document.getElementById("watchedFilter").checked;
  var onlyWishlist = document.getElementById("wishlistFilter").checked;
  var owned = getSet(OWNED_KEY);
  var watched = getSet(WATCHED_KEY);
  var wishlist = getSet(WISHLIST_KEY);

  var filtered = movies.filter(function (m) {
    return (
      m.title.toLowerCase().indexOf(searchTerm) !== -1 &&
      (category === "all" || m.category === category) &&
      (year === "all" || String(m.year) === year) &&
      (studio === "all" || m.studio === studio) &&
      (genre === "all" || m.genre === genre) &&
      (format === "all" || m.format === format) &&
      (!onlyOwned || owned.has(movieId(m))) &&
      (!onlyWatched || watched.has(movieId(m))) &&
      (!onlyWishlist || wishlist.has(movieId(m)))
    );
  });

  filtered = sortMovies(filtered, sortBy === "none" ? "titleAsc" : sortBy);

  renderMovies(filtered, filtered.length + " result" + (filtered.length === 1 ? "" : "s"));
}

function showAllMovies() {
  document.getElementById("searchInput").value = "";
  document.getElementById("categoryFilter").value = "all";
  document.getElementById("yearFilter").value = "all";
  document.getElementById("studioFilter").value = "all";
  document.getElementById("genreFilter").value = "all";
  document.getElementById("formatFilter").value = "all";
  document.getElementById("ownedFilter").checked = false;
  document.getElementById("watchedFilter").checked = false;
  document.getElementById("wishlistFilter").checked = false;

  var sortBy = document.getElementById("sortFilter").value;
  var sorted = sortMovies(movies, sortBy === "none" ? "titleAsc" : sortBy);
  renderMovies(sorted, "All " + sorted.length + " Movies");
}

function csvEscape(value) {
  var str = String(value == null ? "" : value);
  if (/[",\n]/.test(str)) {
    str = '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function exportCollection() {
  var owned = getSet(OWNED_KEY);
  var watched = getSet(WATCHED_KEY);
  var wishlist = getSet(WISHLIST_KEY);

  var trackedMovies = movies.filter(function (m) {
    var id = movieId(m);
    return owned.has(id) || watched.has(id) || wishlist.has(id);
  });

  if (trackedMovies.length === 0) {
    alert("Nothing to export yet — check a few Owned, Watched, or Wishlist circles first.");
    return;
  }

  trackedMovies.sort(function (a, b) { return a.title.localeCompare(b.title); });

  var header = ["Title", "Year", "Category", "Genre", "Format", "Studio", "Rating", "Owned", "Watched", "Wishlist", "eBay Search Link"];
  var rows = [header];

  trackedMovies.forEach(function (m) {
    var id = movieId(m);
    rows.push([
      m.title, m.year, m.category, m.genre, m.format, m.studio, m.rating,
      owned.has(id) ? "Yes" : "No",
      watched.has(id) ? "Yes" : "No",
      wishlist.has(id) ? "Yes" : "No",
      ebaySearchUrl(m)
    ]);
  });

  var csvContent = rows.map(function (row) {
    return row.map(csvEscape).join(",");
  }).join("\r\n");

  var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = url;
  link.download = "umd-collection.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function parseCSV(text) {
  var lines = text.split(/\r\n|\n/).filter(function (l) { return l.trim() !== ""; });
  return lines.map(function (line) {
    var result = [];
    var cur = "";
    var inQuotes = false;
    for (var i = 0; i < line.length; i++) {
      var ch = line[i];
      if (inQuotes) {
        if (ch === '"') {
          if (line[i + 1] === '"') { cur += '"'; i++; }
          else { inQuotes = false; }
        } else {
          cur += ch;
        }
      } else {
        if (ch === '"') { inQuotes = true; }
        else if (ch === ",") { result.push(cur); cur = ""; }
        else { cur += ch; }
      }
    }
    result.push(cur);
    return result;
  });
}

function importCollectionFromCSV(file) {
  var reader = new FileReader();
  reader.onload = function (e) {
    try {
      var rows = parseCSV(e.target.result);
      if (rows.length < 2) {
        alert("That file doesn't look like a collection export — no rows found.");
        return;
      }

      var header = rows[0].map(function (h) { return h.trim().toLowerCase(); });
      var titleIdx = header.indexOf("title");
      var yearIdx = header.indexOf("year");
      var ownedIdx = header.indexOf("owned");
      var watchedIdx = header.indexOf("watched");
      var wishlistIdx = header.indexOf("wishlist");

      if (titleIdx === -1 || yearIdx === -1) {
        alert("Couldn't find \"Title\" and \"Year\" columns in that file. Make sure you're uploading a CSV exported from this app.");
        return;
      }

      function isTrue(val) {
        if (!val) return false;
        var v = val.trim().toLowerCase();
        return v === "yes" || v === "true" || v === "1";
      }

      var owned = getSet(OWNED_KEY);
      var watched = getSet(WATCHED_KEY);
      var wishlist = getSet(WISHLIST_KEY);
      var matchedCount = 0;
      var notFound = [];

      for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        if (!row[titleIdx]) continue;
        var title = row[titleIdx].trim();
        var year = row[yearIdx] ? row[yearIdx].trim() : "";

        var match = movies.filter(function (m) {
          return m.title === title && String(m.year) === String(year);
        })[0];
        if (!match) {
          match = movies.filter(function (m) { return m.title === title; })[0];
        }

        if (match) {
          var id = movieId(match);
          if (ownedIdx !== -1 && isTrue(row[ownedIdx])) owned.add(id);
          if (watchedIdx !== -1 && isTrue(row[watchedIdx])) watched.add(id);
          if (wishlistIdx !== -1 && isTrue(row[wishlistIdx])) wishlist.add(id);
          matchedCount++;
        } else {
          notFound.push(title);
        }
      }

      saveSet(OWNED_KEY, owned);
      saveSet(WATCHED_KEY, watched);
      saveSet(WISHLIST_KEY, wishlist);
      applyFilters();

      var message = "Imported status for " + matchedCount + " title" + (matchedCount === 1 ? "" : "s") + ".";
      if (notFound.length > 0) {
        message += "\n\n" + notFound.length + " title(s) in the file weren't found in this database:\n" +
          notFound.slice(0, 10).join(", ") + (notFound.length > 10 ? ", ..." : "");
      }
      alert(message);
    } catch (err) {
      alert("There was a problem reading that file. Make sure it's a CSV exported from this app's \"Export Collection\" button.");
    }
  };
  reader.readAsText(file);
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

  var savedView = localStorage.getItem(VIEW_KEY) || "grid";
  setView(savedView);

  renderMovies(getRandomPicks(10), "Showing 10 random picks out of " + movies.length + " total — search or filter to browse everything");

  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("categoryFilter").addEventListener("change", applyFilters);
  document.getElementById("yearFilter").addEventListener("change", applyFilters);
  document.getElementById("studioFilter").addEventListener("change", applyFilters);
  document.getElementById("genreFilter").addEventListener("change", applyFilters);
  document.getElementById("formatFilter").addEventListener("change", applyFilters);
  document.getElementById("sortFilter").addEventListener("change", applyFilters);
  document.getElementById("ownedFilter").addEventListener("change", applyFilters);
  document.getElementById("watchedFilter").addEventListener("change", applyFilters);
  document.getElementById("wishlistFilter").addEventListener("change", applyFilters);
  document.getElementById("showAllBtn").addEventListener("click", showAllMovies);
  document.getElementById("exportWishlistBtn").addEventListener("click", exportCollection);
  document.getElementById("importWishlistInput").addEventListener("change", function (e) {
    if (e.target.files && e.target.files[0]) {
      importCollectionFromCSV(e.target.files[0]);
      e.target.value = "";
    }
  });
  document.getElementById("listViewBtn").addEventListener("click", function () { setView("list"); });
  document.getElementById("gridViewBtn").addEventListener("click", function () { setView("grid"); });
});
