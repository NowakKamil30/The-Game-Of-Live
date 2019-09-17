import {BOADR_SIZE,START_GAME,GAME,SHOW_TOP_MENU} from "./types";

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
export const showTopMenu=()=>(
    {
        type: SHOW_TOP_MENU
    }
)