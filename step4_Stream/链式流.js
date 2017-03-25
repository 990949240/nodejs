var fs=require('fs');
var zlib=require('zlib');
fs.createReadStream('export.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('export.txt.gz'));
  console.log('compressed success');

var Gunzip=zlib.createGunzip();
Gunzip.on('error',function(error){
  console.log(error);
});
fs.createReadStream('export.txt.gz')
  .pipe(Gunzip)
  .pipe(fs.createWriteStream('解压的export.txt'));
  console.log('uncompress success');
