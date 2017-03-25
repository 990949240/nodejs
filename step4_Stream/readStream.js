var fs=require('fs');
var data='';

var readStream=fs.createReadStream('export.txt');

readStream.setEncoding('UTF8');

readStream.on('data',function(chunk){
  data+=chunk;
});

readStream.on('end',function(){
  console.log('-------------------------------------');
  console.log(data);
  console.log('-------------------------------------');
})

readStream.on('error',function(error){
  console.error(error);
})

console.log('program finish');
