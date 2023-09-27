const projectData = [
  {
    id: 1,
    title: 'Image Drag & Drop App',
    description: 'A site that shows a number of images with different tags, allows only users who have access to log in and be able to drag and drop the images at preferred location and having the grid items to be re-arranged. Also has "filter by tags" feature that lets users narrow down the number of displayed images to their input tags. Default email is "user@example.com" & password is "1Password".',
    img: 'image-site.jpg',
    liveUrl: 'https://sabb-image-app.netlify.app/',
    githubUrl: 'https://github.com/sabbCodes/ImageSite',
    isLive: true,
  },
  {
    id: 2,
    title: 'MovieBox App',
    description: 'A movie discovery App that loads top-rated movies from the TMDB API. Shows individual movie details in a separate component. Plays YouTube trailer of movies. Allows users to search and discover movies by title. Shows a spinner when loading data. In case of error while fetching data from API, it renders the error to the screen.',
    img: 'moviebox.jpg',
    liveUrl: 'https://sabb-movie-site.netlify.app/',
    githubUrl: 'https://github.com/sabbCodes/MovieBox',
    isLive: true,
  },
  {
    id: 3,
    title: 'Tenzies Game',
    description: 'A React game app where user rolls dices to hold a value after every roll and wins when every dice have the same value. Has a feature to display number of rolls it takes to win the game. Alerts user when they hold dices with different values. Animated such that the dices roll when Roll Dice button is clicked. Designed to have real dice faces instead of just showing numbers. Loads a confetti animation upon winning the game. Shows popup notification when user wins the game.',
    img: 'tenzies.jpg',
    liveUrl: 'https://sabb-tenzies-game.netlify.app/',
    githubUrl: 'https://github.com/sabbCodes/Tenzies-Game-App',
    isLive: true,
  },
  {
    id: 4,
    title: 'Mumeen Dasboard',
    description: 'A chrome extension dashboard that sets background image to random muslim images and shows random Quran verses and their translations. Also show weather status based on user location.',
    img: 'mumeen-dashboard.png',
    githubUrl: 'https://github.com/sabbCodes/Mumeen-Dashboard',
    isLive: false,
  },
  ];

export default projectData;