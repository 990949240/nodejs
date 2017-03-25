var fs=require('fs');

// 创建一个读取流
var readStream=fs.createReadStream('import.txt');

// 创建一个写入流
var writeStream=fs.createWriteStream('export.txt');

//我以为：读取流读完文件后 会调用 写入流 然后给写入流传了什么东西
readStream.pipe(writeStream);

console.log("program finish");
