const textOnlyNumber=(text,maxLength)=>{
    let currentText="";
    let length;
    if(text.length<maxLength)
    {
        length=text.length;
    }
    else
    {
        length=maxLength;
    }
    for(let i=0; i<length;i++)
    {
        if(text[i]==="0" || text[i]==="1" || text[i]==="2" || text[i]==="3" ||
        text[i]==="4" || text[i]==="5" || text[i]==="6"||  text[i]==="7" ||
        text[i]==="8" || text[i]==="9")
        {
            currentText+=text[i];
        }
    }
    return currentText;
}



export default textOnlyNumber;