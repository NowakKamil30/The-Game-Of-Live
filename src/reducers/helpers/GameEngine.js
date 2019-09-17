class GameEngine
{
    constructor(size=10)
    {
        this.size=size<10?10:size;
    }
    newGameBoard()
    {
        const board=[];
        for(let i=0;i<this.size;i++)
        {
            const tempArray=[];
            for(let j=0;j<this.size;j++)
            {
               tempArray.push(Math.random()<0.7?true:false)
            } 
            board.push(tempArray)   
        }
        return board;
    }
    nextTurn(board)
    {
        const currentBoard=[];
        for(let i=0; this.size>i;i++)
        {
            const tempArray=[];
            for(let j=0; this.size>j;j++)
            {
                const positionAbove=j-1;
                const positionUnder=j+1;
                const positionLeft=i-1;
                const positionRight=i+1;

                const positionAbovePossible=positionAbove>=0 && positionAbove<this.size;
                const positionUnderPossible=positionUnder>=0 && positionUnder<this.size;
                const positionLeftPossible=positionLeft>=0 && positionLeft<this.size;
                const positionRightPossible=positionRight>=0 && positionRight<this.size;

                let counter=0;
                if(positionAbovePossible)
                {
                    if(board[i][positionAbove])
                    {
                        counter++;
                    }
                }
                if(positionUnderPossible)
                {
                    if(board[i][positionUnder])
                    {
                        counter++;
                    }
                }
                if(positionLeftPossible)
                {
                    if(board[positionLeft][j])
                    {
                        counter++;
                    }
                }
                if(positionRightPossible)
                {
                    if(board[positionRight][j])
                    {
                        counter++;
                    }
                }
                if(positionAbovePossible && positionLeftPossible)
                {
                    if(board[positionLeft][positionAbove])
                    {
                        counter++;
                    }
                }
                if(positionAbovePossible && positionRightPossible)
                {
                    if(board[positionRight][positionAbove])
                    {
                        counter++;
                    }
                }
                if(positionUnderPossible && positionRightPossible)
                {
                    if(board[positionRight][positionUnder])
                    {
                        counter++;
                    }
                }
                if(positionUnderPossible && positionLeftPossible)
                {
                    if(board[positionLeft][positionUnder])
                    {
                        counter++;
                    }
                }
                tempArray.push(this.checkElement(counter, board[i][j]))
            }
            currentBoard.push(tempArray);   
        }
        return currentBoard;
    }
    checkElement(counter,live)
    {
        if(counter===3 && !live)
        {
            return true;
        }
        if((counter<2 || counter>3) && live)
        {
               return false;
        }
        if((counter===2 || counter===3)&& live)
        {
                return true;
        }
        return false;
    }
    theSameArray(firstArray,secondArray)
    {
        if(firstArray.length!==secondArray.length)
        {
            return false;
        }
        for(let i=0;i<firstArray.length;i++)
        {
            for(let j=0;j<firstArray.length;j++)
            {
                if(firstArray[i][j]!==secondArray[i][j])
                {
                    return false;
                }
            }
        }
        return true
    }
}
export default GameEngine;