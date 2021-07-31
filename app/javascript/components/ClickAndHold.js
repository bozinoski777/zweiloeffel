// var mousedownID = -1;  //Global ID of mouse down interval
// let coun = 0;
// function mousedown(event) {
//   if(mousedownID==-1)  //Prevent multimple loops!
//      mousedownID = setInterval(whilemousedown, 100 /*execute every 100ms*/);


// }
// function mouseup(event) {
//    if(mousedownID!=-1) {  //Only stop if exists
//      clearInterval(mousedownID);
//      mousedownID=-1;
//    }

// }
// function whilemousedown() {
//    /*here put your code*/
//    coun += 1;
//    console.log(coun);
// }
// //Assign events
// document.addEventListener("mousedown", mousedown);
// document.addEventListener("mouseup", mouseup);
// //Also clear the interval when user leaves the window with mouse
// document.addEventListener("mouseout", mouseup);
