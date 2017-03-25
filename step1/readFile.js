var fs=require('fs');

fs.readFile('server.js',function(err,data){
  if(err){
    return err;
  }else{
    console.log(data.toString());
  }
});

console.log('program end');
