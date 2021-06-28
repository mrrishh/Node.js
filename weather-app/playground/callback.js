var getUser = (id,callback)=>{
    var user = {
        id:id,
        name:'Rishabh'
    }
    console.log('In getUser');
    setTimeout(()=>{
        callback(user);
    },3000);
    console.log('In getUser..');
}

var res = getUser(21, (userObject)=>{
    console.log(userObject);
});

console.log('Finished');