function explain_callback(name,age,task){
    console.log('Hello ',name);
    console.log('Your age ',age);
    task();
    console.log('\n');

}

function washHand(){
    console.log("Wash hand with soap");
}

function takeShower(){
    console.log("Take Shower");
}

function facebokking(){
    console.log("Scroll facebook");
}


explain_callback('A',23,washHand);
explain_callback('AA',21,takeShower);
explain_callback('AAA',25,facebokking);