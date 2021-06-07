function loop(n){
    var text = '';
    var i;
    for (i = 1; i <= n; i++) {
    text += i + '\n';
    }
    console.log(text);
}

loop(10);