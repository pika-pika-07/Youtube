const GOOGLE_API_KEY = "AIzaSyCZxvNGjt8Rm_9hEck3MUaL6Nx46iBTvGo";
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";
export const YOUTUBE_VIDEOS_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}`;

export const OFFSET_LIVE_CHAT = 25;
