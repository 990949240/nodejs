var fs=require('fs');

fs.readFile('event',function(err,data){
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
console.log('program finish');
