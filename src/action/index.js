import {BOADR_SIZE,
        START_GAME,
        GAME,
        SHOW_TOP_MENU,
        RESET_GAME,
        MOBILE} from "./types";

export const borderSizeChange=size=>(
    {
        type:BOADR_SIZE,
        payload: size
    }
)
export const startGame=(start)=>(
    {
        type:START_GAME,
        payload: start
    }
)
export const game=()=>(
    {
        type: GAME,
    }
)
export const showTopMenu=(positionY)=>(
    {
        type: SHOW_TOP_MENU,
        positionY:positionY
    }
)
export const resetGame=()=>(
    {
        type:RESET_GAME
    }
)
export const screenSize=(width)=>(
    {
        type: MOBILE,
        mobile: width<=1024?true:false
    }
)