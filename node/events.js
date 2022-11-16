const EmitEvent=require("events");
let eventEmitter = new EmitEvent();
// on = trigger action
eventEmitter.on('theFirstEventListener', (msg) => {
   console.log(msg); 
});

eventEmitter.emit('theFirstEventListener',"voila! the first event ocurred");


// find fibonacci numbers
// clicking on new video - on new video
// 