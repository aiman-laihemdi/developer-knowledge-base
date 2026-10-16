// function initi(){
//     console.log(1);
//     console.log(2);
//     console.log(3);
// }

// function testOne(){

// }

// function tetTwo(){

// }

// function debuggerOutput(text){
//     let debuggerLogRef = document.getElementById('debugger_log');
//     debuggerLogRef.innerHTML += text;
// }



// let count = 0;

// function init(){
//     debuggerOutput('A');
//     debuggerOutput('A');
//     testOne();
//     debuggerOutput('A');
//     debuggerOutput('A');
// }

// function testOne(){
//     debuggerOutput('B');
//     debuggerOutput('B');
//     testTwo();
//     debuggerOutput('B');
//     debuggerOutput('B');
// }

// function testTwo(){
//     debuggerOutput('C');
//     debuggerOutput('C');
//     debuggerOutput('C');
// }

// function debuggerOutput(text){
//     count++;
//     let debuggerLogRef = document.getElementById('debugger_log');
//     debuggerLogRef.innerHTML += " " + text + count;
// }



let count = 0;

function init(){
    testOne();
    debuggerOutput('init');
    testOne();
    testTwo('testTwo');
    testOne();
}

function testOne(){
    debuggerOutput('testOne');
}

function testTwo(text){
    debuggerOutput(text);
    testOne();
}

function debuggerOutput(text){
    count++;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = text + count;
}