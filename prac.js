'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'InstanceCounter' class below.
 *
 */

class InstanceCounter {
    static count=0;
    constructor(){
        this.instanceId=++InstanceCounter.count;
        console.log('hello');
    }
    getInstanceCount(){
        console.log('hello');
        return count;
    }
        
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let numberOfInstances = parseInt(readLine().trim());
    
    let m1 = new InstanceCounter();
    
    let methods = Object.getOwnPropertyNames(Object.getPrototypeOf(m1));
    let variables = Object.keys(m1);
    methods = methods.concat(variables);
    
    if(JSON.stringify(methods) !== JSON.stringify(['constructor'])) {
        ws.write("InstanceCounter should only have method constructor.");
        ws.end();
        return 0;
    }
    
    for(let i=0;i<numberOfInstances-1;i++){
        let newInstance = new InstanceCounter();
    }
    
    
    ws.write(InstanceCounter.getInstanceCount()+'\n');
    ws.end();
}
