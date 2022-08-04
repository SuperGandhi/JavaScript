function* take(n,iter){
    let index = 0;
    for (const val of iter) {
        if(index >= n){
            return ;
        }
    }
    index++;
    yield val;
}

const tak = take();

console.log(tak.next().value);

