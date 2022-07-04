let text ='I am the best man in the world    '

let index =0;

function getText(){
    document.body.innerHTML=`<h1> ${ text.slice(0,index)}</h1>`
    index++;
    if(index == text.length ){
        index =0
    }
}

getText()
setInterval(getText,1000)