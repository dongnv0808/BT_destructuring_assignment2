function detectCollision(objects, point) {
    let {x, y} = point
    //find

    // for of

    let reusult = "";
    for(let element of objects){
        if (x >= element.x && x <= element.x + element.width &&
            y >= element.y && y <= element.y + element.height){
                reusult = element;
            }
    }
    return reusult;
}
  
    const myObjects = [
        {x:  10, y: 20, width: 30, height: 30},
    
        {x: -40, y: 20, width: 30, height: 30},
    
        {x:   0, y:  0, width: 10, height:  5}
    ]
  
console.log(detectCollision(myObjects, {x: 4, y: 2}))