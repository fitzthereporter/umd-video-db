console.log("UMD Database app loaded");

// Paste your free TMDB API key here (get one at https://www.themoviedb.org/settings/api)
const TMDB_API_KEY = "";
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
  { title: "xXx: State of the Union", year: 2005, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Star Trek: Nemesis", year: 2002, genre: "Sci-Fi", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "Final Fantasy: The Spirits Within", year: 2001, genre: "Anime", format: "Animation", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Godzilla", year: 1998, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "MirrorMask", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures Classics", rating: "PG", cover: "" },
  { title: "Constantine", year: 2005, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { title: "Serenity", year: 2005, genre: "Sci-Fi", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "Beavis and Butt-Head: The Mike Judge Collection Vol. 1", year: 2005, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { title: "Untraceable", year: 2008, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Alien vs. Predator", year: 2004, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "National Treasure", year: 2004, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "The Marine", year: 2006, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "The Island", year: 2005, genre: "Sci-Fi", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { title: "True Romance", year: 1993, genre: "Crime", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { title: "Kingdom of Heaven", year: 2005, genre: "Drama", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "Layer Cake", year: 2004, genre: "Crime", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { title: "The Hitchhiker's Guide to the Galaxy", year: 2005, genre: "Comedy", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "Spider-Man", year: 2002, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Spider-Man 2", year: 2004, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Anchorman: The Legend of Ron Burgundy", year: 2004, genre: "Comedy", format: "Live Action", studio: "DreamWorks", rating: "PG-13", cover: "" },
  { title: "Zoolander", year: 2001, genre: "Comedy", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "Big Fish", year: 2003, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Resident Evil", year: 2002, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Resident Evil: Apocalypse", year: 2004, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Underworld", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Underworld: Evolution", year: 2006, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Van Helsing", year: 2004, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "The Bourne Identity", year: 2002, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "The Bourne Supremacy", year: 2004, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "xXx", year: 2002, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Charlie's Angels: Full Throttle", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Miss Congeniality", year: 2000, genre: "Comedy", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { title: "The Terminal", year: 2004, genre: "Drama", format: "Live Action", studio: "DreamWorks", rating: "PG-13", cover: "" },
  { title: "I, Robot", year: 2004, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Collateral", year: 2004, genre: "Thriller", format: "Live Action", studio: "DreamWorks", rating: "R", cover: "" },
  { title: "Blade II", year: 2002, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "Blade: Trinity", year: 2004, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "The Chronicles of Riddick", year: 2004, genre: "Sci-Fi", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "Starship Troopers", year: 1997, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Species", year: 1995, genre: "Sci-Fi", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { title: "Predator", year: 1987, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "RoboCop", year: 1987, genre: "Action", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { title: "Team America: World Police", year: 2004, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "R", cover: "" },
  { title: "South Park: Bigger, Longer & Uncut", year: 1999, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "R", cover: "" },
  { title: "Anger Management", year: 2003, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "8 Mile", year: 2002, genre: "Drama", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Assault on Precinct 13", year: 2005, genre: "Action", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Sky Captain and the World of Tomorrow", year: 2004, genre: "Sci-Fi", format: "Live Action", studio: "Paramount", rating: "PG", cover: "" },
  { title: "The Cave", year: 2005, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The 40-Year-Old Virgin", year: 2005, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Fantastic Four", year: 2005, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "War of the Worlds", year: 2005, genre: "Sci-Fi", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "Land of the Dead", year: 2005, genre: "Horror", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "The Exorcism of Emily Rose", year: 2005, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Four Brothers", year: 2005, genre: "Action", format: "Live Action", studio: "Paramount", rating: "R", cover: "" },
  { title: "Sky High", year: 2005, genre: "Family", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "Herbie: Fully Loaded", year: 2005, genre: "Family", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "The 6th Day", year: 2000, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Behind Enemy Lines", year: 2001, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "21", year: 2008, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Casino Royale", year: 2006, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "28 Days Later", year: 2002, genre: "Horror", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "30 Days of Night", year: 2007, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "7 Seconds", year: 2005, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "A Few Good Men", year: 1992, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "A Knight's Tale", year: 2001, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Across the Universe", year: 2007, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Aeon Flux: The Complete Animated Collection", year: 1995, genre: "Sci-Fi", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { title: "Agent Cody Banks", year: 2003, genre: "Action", format: "Live Action", studio: "MGM", rating: "PG", cover: "" },
  { title: "Ah! My Goddess: The Movie", year: 2000, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { title: "Air Force One", year: 1997, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Akira", year: 1988, genre: "Anime", format: "Animation", studio: "Funimation", rating: "R", cover: "" },
  { title: "Ali", year: 2001, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Ali G Indahouse", year: 2002, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Alien", year: 1979, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "American Pie Presents: Band Camp", year: 2005, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "American Psycho", year: 2000, genre: "Thriller", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "American Wedding", year: 2003, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Anacondas: The Hunt for the Blood Orchid", year: 2004, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Appleseed", year: 2004, genre: "Anime", format: "Animation", studio: "Geneon", rating: "PG-13", cover: "" },
  { title: "Are We Done Yet?", year: 2007, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Are We There Yet?", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Armageddon", year: 1998, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { title: "Assault on Precinct 13 (1976)", year: 1976, genre: "Action", format: "Live Action", studio: "Turtle Releasing", rating: "R", cover: "" },
  { title: "Baby Boy", year: 2001, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Bad Boys", year: 1995, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Bad Boys II", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Bad News Bears", year: 2005, genre: "Comedy", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "Basket Case", year: 1982, genre: "Horror", format: "Live Action", studio: "Analysis Film Releasing", rating: "R", cover: "" },
  { title: "Batman: The Movie", year: 1966, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "NR", cover: "" },
  { title: "Beavis and Butt-Head: The Mike Judge Collection Vol. 2", year: 2005, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { title: "Beavis and Butt-Head: The Mike Judge Collection Vol. 3", year: 2005, genre: "Comedy", format: "Animation", studio: "Paramount", rating: "NR", cover: "" },
  { title: "Beowulf", year: 2007, genre: "Fantasy", format: "Animation", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "Bewitched", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Big Daddy", year: 1999, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Bill and Ted's Excellent Adventure", year: 1989, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "PG", cover: "" },
  { title: "Billy Madison", year: 1995, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "Black Hawk Down", year: 2001, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Blade", year: 1998, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "Blood: The Last Vampire", year: 2000, genre: "Anime", format: "Animation", studio: "Manga Entertainment", rating: "R", cover: "" },
  { title: "Blood & Chocolate", year: 2007, genre: "Fantasy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { title: "Boat Trip", year: 2002, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "Booty Call", year: 1997, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Borat", year: 2006, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "Boyz N the Hood", year: 1991, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Bratz: Rock Angelz", year: 2005, genre: "Family", format: "Animation", studio: "Lionsgate", rating: "NR", cover: "" },
  { title: "Brokeback Mountain", year: 2005, genre: "Drama", format: "Live Action", studio: "Focus Features", rating: "R", cover: "" },
  { title: "The Brothers Grimm", year: 2005, genre: "Fantasy", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { title: "Cannibal! The Musical", year: 1993, genre: "Comedy", format: "Live Action", studio: "Troma", rating: "NR", cover: "" },
  { title: "Carlito's Way: Rise to Power", year: 2005, genre: "Crime", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Casualties of War", year: 1989, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Charlie and the Chocolate Factory", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Warner Bros.", rating: "PG", cover: "" },
  { title: "Charlie's Angels", year: 2000, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Cheaper by the Dozen", year: 2003, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { title: "Children of the Corn", year: 1984, genre: "Horror", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "Clerks", year: 1994, genre: "Comedy", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { title: "Cloudy with a Chance of Meatballs", year: 2009, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Cowboy Bebop: The Movie", year: 2001, genre: "Anime", format: "Animation", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Coyote Ugly", year: 2000, genre: "Drama", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { title: "Crossover", year: 2006, genre: "Drama", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { title: "Cruel Intentions", year: 1999, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Curse of the Golden Flower", year: 2006, genre: "Action", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { title: "Cursed", year: 2005, genre: "Horror", format: "Live Action", studio: "Dimension Films", rating: "PG-13", cover: "" },
  { title: "Daddy Day Camp", year: 2007, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Daddy Day Care", year: 2003, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Daft Punk: Interstella 5555", year: 2003, genre: "Sci-Fi", format: "Animation", studio: "Warner Music", rating: "NR", cover: "" },
  { title: "Daredevil", year: 2003, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Dark Water", year: 2005, genre: "Horror", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { title: "Darkness Falls", year: 2003, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Date Movie", year: 2006, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Dawn of the Dead (1978)", year: 1978, genre: "Horror", format: "Live Action", studio: "United Film Distribution", rating: "R", cover: "" },
  { title: "Dawn of the Dead", year: 2004, genre: "Horror", format: "Live Action", studio: "Universal", rating: "Unrated", cover: "" },
  { title: "Dead and Breakfast", year: 2004, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Dead Leaves", year: 2004, genre: "Anime", format: "Animation", studio: "Genius Products", rating: "NR", cover: "" },
  { title: "Death Race 2000", year: 1975, genre: "Action", format: "Live Action", studio: "New World Pictures", rating: "R", cover: "" },
  { title: "Deuce Bigalow: European Gigolo", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Die Hard", year: 1988, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "District 9", year: 2009, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Dodgeball: A True Underdog Story", year: 2004, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Dogma", year: 1999, genre: "Comedy", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Domino", year: 2005, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "Doom", year: 2005, genre: "Action", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Dreamscape", year: 1984, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Dukes of Hazzard", year: 2005, genre: "Comedy", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { title: "Dune", year: 1984, genre: "Sci-Fi", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "Eight Below", year: 2006, genre: "Family", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "Elektra", year: 2005, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Elf", year: 2003, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "PG", cover: "" },
  { title: "Gundam Wing: Endless Waltz", year: 1998, genre: "Anime", format: "Animation", studio: "Bandai", rating: "NR", cover: "" },
  { title: "Enter the Dragon", year: 1973, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { title: "Escaflowne: The Movie", year: 2000, genre: "Anime", format: "Animation", studio: "Bandai", rating: "PG-13", cover: "" },
  { title: "Escape from New York", year: 1981, genre: "Sci-Fi", format: "Live Action", studio: "AVCO Embassy", rating: "R", cover: "" },
  { title: "Evil Dead", year: 1981, genre: "Horror", format: "Live Action", studio: "New Line Cinema", rating: "NR", cover: "" },
  { title: "Evil Dead II", year: 1987, genre: "Horror", format: "Live Action", studio: "Rosebud Releasing", rating: "R", cover: "" },
  { title: "Feel the Noise", year: 2007, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Fired Up", year: 2009, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "First Blood", year: 1982, genre: "Action", format: "Live Action", studio: "Orion Pictures", rating: "R", cover: "" },
  { title: "First Sunday", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Flightplan", year: 2005, genre: "Thriller", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { title: "Freddy vs. Jason", year: 2003, genre: "Horror", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "Freedomland", year: 2006, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Friday", year: 1995, genre: "Comedy", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "Friday Night Lights", year: 2004, genre: "Drama", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "From Dusk Till Dawn", year: 1996, genre: "Horror", format: "Live Action", studio: "Dimension Films", rating: "R", cover: "" },
  { title: "Ghost in the Shell", year: 1995, genre: "Anime", format: "Animation", studio: "Manga Entertainment", rating: "R", cover: "" },
  { title: "Ghostbusters", year: 1984, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Glory", year: 1989, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Go", year: 1999, genre: "Crime", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Godzilla: Final Wars", year: 2004, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Gone in 60 Seconds (1974)", year: 1974, genre: "Action", format: "Live Action", studio: "Filmways", rating: "PG", cover: "" },
  { title: "Gone in 60 Seconds", year: 2000, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { title: "Gridiron Gang", year: 2006, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Guess Who", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Hackers", year: 1995, genre: "Action", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { title: "Halloween", year: 1978, genre: "Horror", format: "Live Action", studio: "Compass International", rating: "R", cover: "" },
  { title: "Hancock", year: 2008, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Happy Gilmore", year: 1996, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "Harry Potter and the Goblet of Fire", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Warner Bros.", rating: "PG-13", cover: "" },
  { title: "Harry Potter and the Prisoner of Azkaban", year: 2004, genre: "Fantasy", format: "Live Action", studio: "Warner Bros.", rating: "PG", cover: "" },
  { title: "Harry Potter and the Sorcerer's Stone", year: 2001, genre: "Fantasy", format: "Live Action", studio: "Warner Bros.", rating: "PG", cover: "" },
  { title: "Heavy Metal", year: 1981, genre: "Fantasy", format: "Animation", studio: "Columbia Pictures", rating: "R", cover: "" },
  { title: "Hellraiser", year: 1987, genre: "Horror", format: "Live Action", studio: "New World Pictures", rating: "R", cover: "" },
  { title: "Hero", year: 2002, genre: "Action", format: "Live Action", studio: "Miramax", rating: "PG-13", cover: "" },
  { title: "Higher Learning", year: 1995, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Hitch", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Hollow Man", year: 2000, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Hollow Man 2", year: 2006, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Hood of the Living Dead", year: 2005, genre: "Horror", format: "Live Action", studio: "Alternative Cinema", rating: "R", cover: "" },
  { title: "Hoosiers", year: 1986, genre: "Drama", format: "Live Action", studio: "Orion Pictures", rating: "PG", cover: "" },
  { title: "Hostage", year: 2005, genre: "Action", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { title: "Hostel: Part II", year: 2007, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "House Bunny", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "House of 1000 Corpses", year: 2003, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "House of Flying Daggers", year: 2004, genre: "Action", format: "Live Action", studio: "Sony Pictures Classics", rating: "PG-13", cover: "" },
  { title: "Hustle & Flow", year: 2005, genre: "Drama", format: "Live Action", studio: "Paramount", rating: "R", cover: "" },
  { title: "Ice Age", year: 2002, genre: "Family", format: "Animation", studio: "20th Century Fox", rating: "PG", cover: "" },
  { title: "Ice Age: The Meltdown", year: 2006, genre: "Family", format: "Animation", studio: "20th Century Fox", rating: "PG", cover: "" },
  { title: "Idle Hands", year: 1999, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Independence Day", year: 1996, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Initial D", year: 2005, genre: "Action", format: "Live Action", studio: "Media Asia", rating: "PG-13", cover: "" },
  { title: "Into the Blue", year: 2005, genre: "Action", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { title: "Jarhead", year: 2005, genre: "Drama", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Jawbreaker", year: 1999, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Jerry Maguire", year: 1996, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Joe Dirt", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Jumanji", year: 1995, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Jumper", year: 2008, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Kalifornia", year: 1993, genre: "Thriller", format: "Live Action", studio: "Gramercy Pictures", rating: "R", cover: "" },
  { title: "Karas: The Prophecy", year: 2005, genre: "Anime", format: "Animation", studio: "Funimation", rating: "NR", cover: "" },
  { title: "Kick-Ass", year: 2010, genre: "Action", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "King Arthur", year: 2004, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { title: "King of New York", year: 1990, genre: "Crime", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "Kiss of the Dragon", year: 2001, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "Labyrinth", year: 1986, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Lakeview Terrace", year: 2008, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Lara Croft: Tomb Raider", year: 2001, genre: "Action", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "Lara Croft Tomb Raider: The Cradle of Life", year: 2003, genre: "Action", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "Legend", year: 1985, genre: "Fantasy", format: "Live Action", studio: "Universal", rating: "PG", cover: "" },
  { title: "Lemony Snicket's A Series of Unfortunate Events", year: 2004, genre: "Fantasy", format: "Live Action", studio: "Paramount", rating: "PG", cover: "" },
  { title: "Like Mike", year: 2002, genre: "Family", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { title: "Lord of War", year: 2005, genre: "Drama", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Lords of Dogtown", year: 2005, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Mad Max", year: 1979, genre: "Action", format: "Live Action", studio: "American International", rating: "R", cover: "" },
  { title: "Made", year: 2001, genre: "Comedy", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Man of the House", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Man on Fire", year: 2004, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "Memoirs of a Geisha", year: 2005, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Metropolis", year: 2001, genre: "Anime", format: "Animation", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Mobile Suit Gundam SEED: The Far-Away Dawn", year: 2005, genre: "Anime", format: "Animation", studio: "Bandai", rating: "NR", cover: "" },
  { title: "Mobile Suit Gundam SEED: The Empty Battlefield", year: 2004, genre: "Anime", format: "Animation", studio: "Bandai", rating: "NR", cover: "" },
  { title: "Monty Python and the Holy Grail", year: 1975, genre: "Comedy", format: "Live Action", studio: "Cinema 5", rating: "PG", cover: "" },
  { title: "Mr. & Mrs. Smith", year: 2005, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Mr. Deeds", year: 2002, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Napoleon Dynamite", year: 2004, genre: "Comedy", format: "Live Action", studio: "Fox Searchlight", rating: "PG", cover: "" },
  { title: "National Lampoon's Animal House", year: 1978, genre: "Comedy", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "National Lampoon's Van Wilder", year: 2002, genre: "Comedy", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "National Security", year: 2003, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "National Treasure: Book of Secrets", year: 2007, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "Never Die Alone", year: 2004, genre: "Crime", format: "Live Action", studio: "Fox Searchlight", rating: "R", cover: "" },
  { title: "Nick & Norah's Infinite Playlist", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Not Another Teen Movie", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Office Space", year: 1999, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "Oldboy", year: 2003, genre: "Thriller", format: "Live Action", studio: "Show East", rating: "R", cover: "" },
  { title: "Once Upon a Time in Mexico", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Ong Bak: The Thai Warrior", year: 2003, genre: "Action", format: "Live Action", studio: "Magnolia Pictures", rating: "R", cover: "" },
  { title: "Open Season 2", year: 2009, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Paprika", year: 2006, genre: "Anime", format: "Animation", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { title: "Paul Blart: Mall Cop", year: 2009, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Perfect Stranger", year: 2007, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Pineapple Express", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Pirates of the Caribbean: The Curse of the Black Pearl", year: 2003, genre: "Fantasy", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { title: "Planet of the Apes", year: 1968, genre: "Sci-Fi", format: "Live Action", studio: "20th Century Fox", rating: "G", cover: "" },
  { title: "Princess Bride", year: 1987, genre: "Fantasy", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { title: "Prom Night", year: 2008, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Pulp Fiction", year: 1994, genre: "Crime", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { title: "Quarantine", year: 2008, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Red Scorpion", year: 1988, genre: "Action", format: "Live Action", studio: "Shapiro-Glickenhaus", rating: "R", cover: "" },
  { title: "Reign of Fire", year: 2002, genre: "Action", format: "Live Action", studio: "Disney", rating: "PG-13", cover: "" },
  { title: "Remember the Titans", year: 2000, genre: "Drama", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "Rent", year: 2005, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Resident Evil: Extinction", year: 2007, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Road House", year: 1989, genre: "Action", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { title: "Robots", year: 2005, genre: "Family", format: "Animation", studio: "20th Century Fox", rating: "PG", cover: "" },
  { title: "Rock 'n' Roll High School", year: 1979, genre: "Comedy", format: "Live Action", studio: "New World Pictures", rating: "PG", cover: "" },
  { title: "Ronin", year: 1998, genre: "Action", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { title: "Rush Hour", year: 1998, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "PG-13", cover: "" },
  { title: "Rush Hour 2", year: 2001, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "PG-13", cover: "" },
  { title: "S.W.A.T.", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Sahara", year: 2005, genre: "Action", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "Sakura Wars: The Movie", year: 2001, genre: "Anime", format: "Animation", studio: "Geneon", rating: "NR", cover: "" },
  { title: "Saving Silverman", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Saw", year: 2004, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Saw II", year: 2005, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Scarface", year: 1983, genre: "Crime", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "Secondhand Lions", year: 2003, genre: "Drama", format: "Live Action", studio: "New Line Cinema", rating: "PG", cover: "" },
  { title: "Secret Window", year: 2004, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Seven Pounds", year: 2008, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Shallow Hal", year: 2001, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Shaolin Soccer", year: 2001, genre: "Comedy", format: "Live Action", studio: "Miramax", rating: "PG-13", cover: "" },
  { title: "Short Circuit", year: 1986, genre: "Family", format: "Live Action", studio: "TriStar", rating: "PG", cover: "" },
  { title: "SLC Punk", year: 1998, genre: "Comedy", format: "Live Action", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { title: "Spawn", year: 1997, genre: "Action", format: "Live Action", studio: "New Line Cinema", rating: "PG-13", cover: "" },
  { title: "Spider-Man 3", year: 2007, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The SpongeBob SquarePants Movie", year: 2004, genre: "Family", format: "Animation", studio: "Paramount", rating: "PG", cover: "" },
  { title: "Spun", year: 2002, genre: "Drama", format: "Live Action", studio: "Newmarket Films", rating: "R", cover: "" },
  { title: "Stargate", year: 1994, genre: "Sci-Fi", format: "Live Action", studio: "MGM", rating: "PG-13", cover: "" },
  { title: "Starship Troopers 3: Marauder", year: 2008, genre: "Sci-Fi", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Stealth", year: 2005, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Steamboy", year: 2004, genre: "Anime", format: "Animation", studio: "Sony Pictures Classics", rating: "PG-13", cover: "" },
  { title: "Step Brothers", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Stomp the Yard", year: 2007, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Stripes", year: 1981, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Stuart Little", year: 1999, genre: "Family", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Stuart Little 2", year: 2002, genre: "Family", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Stuart Little 3: Call of the Wild", year: 2005, genre: "Family", format: "Live Action", studio: "Sony Pictures", rating: "G", cover: "" },
  { title: "Super Troopers", year: 2001, genre: "Comedy", format: "Live Action", studio: "Fox Searchlight", rating: "R", cover: "" },
  { title: "Superbad", year: 2007, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Surf's Up", year: 2007, genre: "Family", format: "Animation", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "Suspect Zero", year: 2004, genre: "Thriller", format: "Live Action", studio: "Paramount", rating: "R", cover: "" },
  { title: "The Sweetest Thing", year: 2002, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Swingers", year: 1996, genre: "Comedy", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { title: "Swordfish", year: 2001, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { title: "Talladega Nights: The Ballad of Ricky Bobby", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Tears of the Sun", year: 2003, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Tekkonkinkreet", year: 2006, genre: "Anime", format: "Animation", studio: "Sony Pictures Classics", rating: "R", cover: "" },
  { title: "Terminator 2: Judgment Day", year: 1991, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Terminator 3: Rise of the Machines", year: 2003, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { title: "The Animal", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Benchwarmers", year: 2006, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Big Hit", year: 1998, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "The Boondock Saints", year: 1999, genre: "Action", format: "Live Action", studio: "Franchise Pictures", rating: "R", cover: "" },
  { title: "The Brave One", year: 2007, genre: "Thriller", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { title: "The Butterfly Effect", year: 2004, genre: "Thriller", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "The Chronicles of Riddick: Pitch Black", year: 2000, genre: "Sci-Fi", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "The Covenant", year: 2006, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Craft", year: 1996, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "The Crow", year: 1994, genre: "Action", format: "Live Action", studio: "Miramax", rating: "R", cover: "" },
  { title: "The Dark Crystal", year: 1982, genre: "Fantasy", format: "Live Action", studio: "Universal", rating: "PG", cover: "" },
  { title: "The Devil's Own", year: 1997, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "The Devil's Rejects", year: 2005, genre: "Horror", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "The Doors", year: 1991, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "The Exterminator", year: 1980, genre: "Action", format: "Live Action", studio: "Avco Embassy", rating: "R", cover: "" },
  { title: "The Fast and the Furious", year: 2001, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "The Fog", year: 2005, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Gospel", year: 2005, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "The Great Escape", year: 1963, genre: "Action", format: "Live Action", studio: "MGM", rating: "NR", cover: "" },
  { title: "The Incredibles", year: 2004, genre: "Family", format: "Animation", studio: "Disney", rating: "PG", cover: "" },
  { title: "The International", year: 2009, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "The Italian Job", year: 2003, genre: "Action", format: "Live Action", studio: "Paramount", rating: "PG-13", cover: "" },
  { title: "The Karate Kid", year: 1984, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "The League of Extraordinary Gentlemen", year: 2003, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "The Legend of Zorro", year: 2005, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" },
  { title: "The Longest Yard", year: 2005, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Mask of Zorro", year: 1998, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Messengers", year: 2007, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Nightmare Before Christmas", year: 1993, genre: "Fantasy", format: "Animation", studio: "Disney", rating: "PG", cover: "" },
  { title: "The Octagon", year: 1980, genre: "Action", format: "Live Action", studio: "American Cinema", rating: "R", cover: "" },
  { title: "The One", year: 2001, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Pest", year: 1997, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Pink Panther (1963)", year: 1963, genre: "Comedy", format: "Live Action", studio: "MGM", rating: "NR", cover: "" },
  { title: "The Pursuit of Happyness", year: 2006, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "The Replacement Killers", year: 1998, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "The Rock", year: 1996, genre: "Action", format: "Live Action", studio: "Disney", rating: "R", cover: "" },
  { title: "The Rundown", year: 2003, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "The Sandlot", year: 1993, genre: "Family", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { title: "The Sandlot 2", year: 2005, genre: "Family", format: "Live Action", studio: "20th Century Fox", rating: "PG", cover: "" },
  { title: "The Sisterhood of the Traveling Pants", year: 2005, genre: "Drama", format: "Live Action", studio: "Warner Bros.", rating: "PG", cover: "" },
  { title: "The Taking of Pelham 123", year: 2009, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "The Terminator", year: 1984, genre: "Sci-Fi", format: "Live Action", studio: "Orion Pictures", rating: "R", cover: "" },
  { title: "The Texas Chainsaw Massacre", year: 2003, genre: "Horror", format: "Live Action", studio: "New Line Cinema", rating: "R", cover: "" },
  { title: "The Transporter", year: 2002, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "The Warriors", year: 1979, genre: "Action", format: "Live Action", studio: "Paramount", rating: "R", cover: "" },
  { title: "There's Something About Mary", year: 1998, genre: "Comedy", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "To Die For", year: 1995, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "To Live and Die in L.A.", year: 1985, genre: "Crime", format: "Live Action", studio: "MGM", rating: "R", cover: "" },
  { title: "Tomcats", year: 2001, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Total Recall", year: 1990, genre: "Sci-Fi", format: "Live Action", studio: "TriStar", rating: "R", cover: "" },
  { title: "Toy Story", year: 1995, genre: "Family", format: "Animation", studio: "Disney", rating: "G", cover: "" },
  { title: "Tron", year: 1982, genre: "Sci-Fi", format: "Live Action", studio: "Disney", rating: "PG", cover: "" },
  { title: "U-571", year: 2000, genre: "Action", format: "Live Action", studio: "Universal", rating: "PG-13", cover: "" },
  { title: "Ultimate Avengers: The Movie", year: 2006, genre: "Action", format: "Animation", studio: "Lionsgate", rating: "PG-13", cover: "" },
  { title: "Ultraviolet", year: 2006, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Underworld: Rise of the Lycans", year: 2009, genre: "Action", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Universal Soldier", year: 1992, genre: "Action", format: "Live Action", studio: "TriStar", rating: "R", cover: "" },
  { title: "Unleashed", year: 2005, genre: "Action", format: "Live Action", studio: "Universal", rating: "R", cover: "" },
  { title: "V for Vendetta", year: 2005, genre: "Action", format: "Live Action", studio: "Warner Bros.", rating: "R", cover: "" },
  { title: "Vacancy", year: 2007, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Vampires", year: 1998, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "Vantage Point", year: 2008, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Waiting...", year: 2005, genre: "Comedy", format: "Live Action", studio: "Lionsgate", rating: "R", cover: "" },
  { title: "Walk Hard: The Dewey Cox Story", year: 2007, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "We Own the Night", year: 2007, genre: "Crime", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "When a Stranger Calls", year: 2006, genre: "Horror", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "White Chicks", year: 2004, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Wild Things", year: 1998, genre: "Thriller", format: "Live Action", studio: "Sony Pictures", rating: "R", cover: "" },
  { title: "X2: X-Men United", year: 2003, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "X-Men", year: 2000, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "X-Men: The Last Stand", year: 2006, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "PG-13", cover: "" },
  { title: "Year One", year: 2009, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "You Don't Mess with the Zohan", year: 2008, genre: "Comedy", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "You Got Served", year: 2004, genre: "Drama", format: "Live Action", studio: "Sony Pictures", rating: "PG-13", cover: "" },
  { title: "Young Guns", year: 1988, genre: "Action", format: "Live Action", studio: "20th Century Fox", rating: "R", cover: "" },
  { title: "Zathura", year: 2005, genre: "Fantasy", format: "Live Action", studio: "Sony Pictures", rating: "PG", cover: "" }
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
