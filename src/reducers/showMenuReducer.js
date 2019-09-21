import {SHOW_TOP_MENU} from "../action/types";
const INITIAL_STATE={showTopMenu:false}

export default(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case SHOW_TOP_MENU:
        let show=false;
        if(action.positionY<=200)
        {
            show=true;
        }
        return {...state,showTopMenu:show}
        default:
        return state;
    }
}