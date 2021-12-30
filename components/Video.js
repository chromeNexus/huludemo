import YouTube from 'react-youtube';
import { ReactYouTubeLite } from 'react-youtube-lite';

function Video() {
    const opts = {
       height: 200,
       width: 200,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
      },
    };
    return (
        <>
            <YouTube
                videoId="MHNsRihxkBw" // "key": "MHNsRihxkBw", //'440249'//'KXw8CRapg7k'
                className=''
                opts={opts}
            />
            {/*  <ReactYouTubeLite url="https://www.youtube.com/watch?v=T9fLBBxjAgM" /> */}
        </>
        
    )
}
/* _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  } */

export default Video
