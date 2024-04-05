function loadingBar(percent){
    const barMaxLength = 100;

    if(percent != barMaxLength){
        console.log(`${percent}% ${loadingBarVisualizer(percent)}`);
        console.log('Still loading...');
    }else{
        console.log(`${percent}% Complete!`);
        console.log(`${loadingBarVisualizer(percent)}`);
    }

    function loadingBarVisualizer(progress){
        const symbol = '%';
        let progressBar = '';

        progressBar = symbol.repeat(progress/10);
        progressBar = progressBar.padEnd(barMaxLength / 10, '.');

        return `[${progressBar}]`;
    }
}

console.log(loadingBar(30));
console.log(loadingBar(50));
console.log(loadingBar(100));