import {SHOW_TOP_MENU} from "../action/types";
const INITIAL_STATE={showTopMenu:false}

export default(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case SHOW_TOP_MENU:
        return {...state}
        default:
        return state;
    }
}