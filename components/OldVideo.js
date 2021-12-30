import YouTube from 'react-youtube';

function Video() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
        <div>
            <YouTube
                videoId='KXw8CRapg7k'              // defaults -> null
                //id={string}                       // defaults -> null
                className=''                // defaults -> null
               // containerClassName={string}       // defaults -> ''
                opts={opts}                       // defaults -> {}
               // onReady={func}                    // defaults -> noop
             //   onPlay={func}                     // defaults -> noop
             //   onPause={func}                    // defaults -> noop
             //   onEnd={func}                      // defaults -> noop
            //    onError={func}                    // defaults -> noop
            //    onStateChange={func}              // defaults -> noop
             //   onPlaybackRateChange={func}       // defaults -> noop
             //   onPlaybackQualityChange={func}    // defaults -> noop
            />
        </div>
    )
}
/* _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  } */

export default Video
