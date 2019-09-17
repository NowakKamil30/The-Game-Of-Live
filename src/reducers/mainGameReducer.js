import {BOADR_SIZE,START_GAME,GAME} from "../action/types";
import textOnlyNumber from "./helpers/textOnlyNumber";
import GameEngine from "./helpers/GameEngine"


const INITIAL_STATE={boardSize:"",start:false,board:[]};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case BOADR_SIZE:
            const payload=textOnlyNumber(action.payload)
            document.documentElement.style.setProperty('--size',payload);
            if(!state.start)
            {
                return {...state, boardSize: payload};
            }
            return state;
        case START_GAME:
            return {...state,start: !action.payload};
        case GAME:
            const gameEngine= new GameEngine(state.boardSize);
            let board=state.board;
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