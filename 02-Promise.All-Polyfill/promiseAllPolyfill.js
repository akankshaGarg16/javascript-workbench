function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((promise,index) => {
            Promise.resolve(promise)
            .then(value => {
                results[index] = value;
                completed++;
                if(completed === promises.length){
                    resolve(results);
                }
            })
            .catch(reject)
        });
    })
}

const p1 = Promise.resolve(10);
const p2 = new Promise((resolve,reject) => {
    // setTimeout(() => resolve(20),1000)
    setTimeout(() => reject('Error occoured'),1000)
});
const p3 = Promise.resolve(30);

myPromiseAll([p1,p2,p3])
.then(console.log);