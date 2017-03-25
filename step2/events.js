// 引入 events 模块
var events=require('events');

// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();

// 绑定 connection 事件处理程序
eventEmitter.on('connection',function(){
  console.log('connection success');
  eventEmitter.emit('received');
});

eventEmitter.on('received',function(){
  console.log('data received');
});

eventEmitter.emit('connection');
console.log('program finish');
