var buf1=new Buffer('hello world','utf-8');
console.log(buf1.toString(false,0));

var buf2=new Buffer(2555);
len=buf2.write('王成龙');
console.log(len);
