var ctr = 0;

function callback(){
    console.log(ctr+1);
    ctr++;
}


setInterval( callback,1000)