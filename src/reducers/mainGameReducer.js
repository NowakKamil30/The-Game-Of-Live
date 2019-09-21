import {BOADR_SIZE,
        START_GAME,
        GAME,
        RESET_GAME,
        MOBILE} from "../action/types";
import textOnlyNumber from "./helpers/textOnlyNumber";
import GameEngine from "./helpers/GameEngine"


const INITIAL_STATE={boardSize:"",start:false,board:[],mobile:false};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case MOBILE:
            return {...state,mobile:action.mobile}

        case BOADR_SIZE:
            let payload=textOnlyNumber(action.payload,2);
            if(action.payload>50 && state.mobile)
            {
                payload=50;
            }
            if(!state.start)
            {
                return {...state, boardSize: payload};
            }
            return state;
        case START_GAME:
            const {boardSize}=state;
            document.documentElement.style.setProperty('--size',boardSize<10?10:boardSize);
            return {...state,boardSize:boardSize<10?10:boardSize,start: !action.payload};
        case RESET_GAME:
            return INITIAL_STATE;
        case GAME:
            const gameEngine= new GameEngine(state.boardSize);
            let board= state.board;
            if(board.length===0 && state.start)
            {
                board=gameEngine.newGameBoard();
            }
            else if(state.start)
            {
                board=gameEngine.nextTurn(board); 
                if(gameEngine.theSameArray(board,state.board))
                {
                    return{...state,start:false,board:[]}
                }   
            }
            return {...state,board: board};    
        default:
            return state;
    }
}