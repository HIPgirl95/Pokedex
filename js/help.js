let p = new Promise((resolve, reject) => {
    setTimeout (() => resolve('We did it!'), 3000);
})

p.then((result) => console.log(result));
console.log('Baby is awake');
