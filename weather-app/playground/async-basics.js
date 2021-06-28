console.log('Starting the app');

setTimeout(()=>{
    console.log('In the delay of 2 sec');
},2000);

setTimeout(()=>{
    console.log('In the delay of 0 sec');
},0);

console.log('Finishing up');