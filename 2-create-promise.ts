
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {

    // Blocking

    // let i = 0;
    // while(i < 1000000000) { i++;}

    // return '🐷 billion loops done';


    // Async blocking

    // return new Promise((resolve, reject) => {

    //     let i = 0;
    //     while(i < 1000000000) { i++;}
 
    //     resolve('🐷 billion loops done');
    // })


    // Non-blocking

    return Promise.resolve().then(v =>  {
        let i = 0;
        while(i < 1000000000) { i++; }
        return '🐷 billion loops done';
    })

}

log('🥪 Synchronous 1');


codeBlocker().then(log)


log('🥪 Synchronous 2');
