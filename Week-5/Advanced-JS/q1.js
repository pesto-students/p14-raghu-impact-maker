function GeneratorFunction(Array){
    for(let i of Array){
        yield Symbol(i);
    }
}

const iterator = GeneratorFunction(["hello", "world", "javascript"]);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next()).value;