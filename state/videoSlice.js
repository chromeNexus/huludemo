import { createSlice } from '@reduxjs/toolkit';

/* initial value */
export const videoSlice = createSlice({
    /* name matches name in store file ex. video: videoReducer */
  name: 'video',
    initialState: {
      selectedVideo: null,
      playerIsOpen: false,
      
  },
  
    /* mutate value (either generic value ) ex. true false... or object(action.payload) */
    reducers: {
        /* videoID */
        selectVideo: (state, action) => { 
            state.selectedVideo = action.payload;
        },

        /* 
        playerIsOpen true or false

        openPlayer: (state, action) => {
            state.playerIsOpen = action.payload;
        },
 */
        openVideoPlayer: (state) => {
            state.playerIsOpen = true;
        },
        
        closeVideoPlayer: (state) => {
            state.playerIsOpen = false;
        }
  },
});

export const { selectVideo, openVideoPlayer, closeVideoPlayer } = videoSlice.actions;

/* selectors  */
export const selectedVideo = (state) => state.video.selectedVideo;
export const selectedOpenView  = (state) => state.video.playerIsOpen;

export default videoSlice.reducer;
