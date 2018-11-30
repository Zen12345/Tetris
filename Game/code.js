var grid = document.getElementById('grid');
setInterval(overflow, 1)
var body = document.getElementsByTagName("body")[0];
function overflow() {
    if((window.fullScreen) ||
   (window.innerWidth == screen.width )|| (screen.availHeight || screen.height-50) <= window.innerHeight) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'scroll'
}
}
var tArray = [];
var storedBlocksRows = []
var storedBlocksColumns = []
var collide = 0;
var leftTime;
var rightTime;
var leftTimeDelay;
var rightTimeDelay;
var blockCounter;
var randInt1;
var randInt;
//still dont know why first spawn is diff from subsequent so I create another func just for first spawn
setTimeout(tBlockSpawn, 4000)
var countDown = document.getElementById('Countdown')
var count = setInterval(countingDown, 1000) 

var u = 3
function countingDown() {
    if (u > 0) {
    countDown.innerHTML = u + ''
    u-= 1
    } else {
        countDown.innerHTML = ''
        clearInterval(count)
    }
}

function tBlockSpawn () {
        
        var i = 0;
        var newBody;
        
        collide = 0;
        keyCounter = 1
       
    
        tArray = [];
        do {
            randInt1 = Math.floor(Math.random() * 7 + 1)
        } while (randInt1 == blockCounter) 
        tBlockShow()
        while (i< 4) {
            newBody = document.createElement('div');
            newBody.className = 'block';
            document.getElementById('grid').appendChild(newBody);
            tArray.push(newBody)
            i += 1
            
        } do {
            randInt = Math.floor(Math.random() * 7 + 1)
        } while (randInt == randInt1) 
        
        if (randInt == 1) {
            for(var c = 0; c < tArray.length; c++) {
                tArray[c].style.backgroundColor = 'purple'
            }
            tArray[0].style.gridArea = '3 / 5 / span 1 / span 1'
            tArray[1].style.gridArea = '3 / 4 / span 1 / span 1'
            tArray[2].style.gridArea = '2 / 5 / span 1 / span 1'
            tArray[3].style.gridArea = '3 / 6 / span 1 / span 1' 
            blockCounter = 1
            
        } else if (randInt == 2) {
            for(var c = 0; c < tArray.length; c++) {
                tArray[c].style.backgroundColor = 'cyan'
            }
            tArray[0].style.gridArea = '3 / 4 / span 1 / span 1'
            tArray[1].style.gridArea = '3 / 5 / span 1 / span 1'
            tArray[2].style.gridArea = '3 / 6 / span 1 / span 1'
            tArray[3].style.gridArea = '3 / 7 / span 1 / span 1'
            blockCounter = 2
        } else if (randInt == 3) {
            for(var c = 0; c < tArray.length; c++) {
                tArray[c].style.backgroundColor = 'blue'
            }
            tArray[0].style.gridArea = '3 / 5 / span 1 / span 1'
            tArray[1].style.gridArea = '3 / 4 / span 1 / span 1'
            tArray[2].style.gridArea = '3 / 6 / span 1 / span 1'
            tArray[3].style.gridArea = '2 / 4 / span 1 / span 1'
            blockCounter = 3
        } else if (randInt == 4) {
            for(var c = 0; c < tArray.length; c++) {
                tArray[c].style.backgroundColor = 'yellow'
            }
            tArray[0].style.gridArea = '2 / 5 / span 1 / span 1'
            tArray[1].style.gridArea = '3 / 5 / span 1 / span 1'
            tArray[2].style.gridArea = '2 / 6 / span 1 / span 1'
            tArray[3].style.gridArea = '3 / 6 / span 1 / span 1'
            blockCounter = 4
        } else if (randInt == 5) {
            for(var c = 0; c < tArray.length; c++) {
                tArray[c].style.backgroundColor = 'orange'
            }
            tArray[0].style.gridArea = '3 / 5 / span 1 / span 1'
            tArray[1].style.gridArea = '3 / 4 / span 1 / span 1'
            tArray[2].style.gridArea = '3 / 6 / span 1 / span 1'
            tArray[3].style.gridArea = '2 / 6 / span 1 / span 1'
            blockCounter = 5
        } else if (randInt == 6) {
            for(var c = 0; c < tArray.length; c++) {
                tArray[c].style.backgroundColor = 'green'
            }
            tArray[0].style.gridArea = '3 / 5 / span 1 / span 1'
            tArray[1].style.gridArea = '3 / 4 / span 1 / span 1'
            tArray[2].style.gridArea = '2 / 5 / span 1 / span 1'
            tArray[3].style.gridArea = '2 / 6 / span 1 / span 1'
            blockCounter = 6
        } else if (randInt == 7) {
            for(var c = 0; c < tArray.length; c++) {
                tArray[c].style.backgroundColor = 'red'
            }
            tArray[0].style.gridArea = '3 / 5 / span 1 / span 1'
            tArray[1].style.gridArea = '3 / 6 / span 1 / span 1'
            tArray[2].style.gridArea = '2 / 5 / span 1 / span 1'
            tArray[3].style.gridArea = '2 / 4 / span 1 / span 1'
            blockCounter = 7
        } randInt = randInt1
    }
var check;
function tBlockDelay() {
    var y = 0
    while (y < tArray.length) {
        
        storedBlocksRows.push(tArray[y].style.gridRowStart)
        storedBlocksColumns.push(tArray[y].style.gridColumnStart)
        
        y += 1
        
    }
    var i = 2
    var winCheck = []
    while (i < 22) {
        var add = (storedBlocksRows.filter(function(x){ return x == i + ''; }).length) 
        
        winCheck.push(add)
        
        i+= 1
    } 
    storedBlocksRows.splice(-4, 4)
    storedBlocksColumns.splice(-4, 4)
    
    if (winCheck.indexOf(10) > -1) {
        document.removeEventListener('keydown', direction)
        document.removeEventListener('keyup', normalSpeed)
        tBlock();
        check = 0
        setTimeout(tBlockDelay2, 500)
        var f = 0
        while (f < tArray.length) {
            tArray[f].style.display = 'none'
            f += 1
        }
        clearInterval(interval)
        clearInterval(fasterInterval)
        
        
    } else {
        tBlock()
    }
}

function tBlockDelay2() {
    var f = 0
    while (f < tArray.length) {
        tArray[f].style.display = 'block'
        f+= 1
    }
    interval = setInterval(bothFunc, 1000)
    
    document.addEventListener('keydown', direction)
    document.addEventListener('keyup', normalSpeed)

}
function tBlock() {
    
    var i = 0;
    var newBody;
    var y = 0;
    collide = 0;
    keyCounter = 1
    while (y < tArray.length) {
        
        storedBlocksRows.push(tArray[y].style.gridRowStart)
        storedBlocksColumns.push(tArray[y].style.gridColumnStart)
        tArray[y].className = 'storedblock'
        tArray[y].classList.add('animation')
        y += 1
        g += 1
    }

    tArray = [];
    
    while (i< 4) {
        newBody = document.createElement('div');
        newBody.className = 'block';
        document.getElementById('grid').appendChild(newBody);
        tArray.push(newBody)
        i += 1
        
    } 
    do {
        randInt1 = Math.floor(Math.random() * 7 + 1)
    } while (randInt1 == blockCounterShow) 
    tBlockShow()
    if (randInt == 1) {
        for(var c = 0; c < tArray.length; c++) {
            tArray[c].style.backgroundColor = 'purple'
        }
        tArray[0].style.gridArea = '2 / 5 / span 1 / span 1'
        tArray[1].style.gridArea = '2 / 4 / span 1 / span 1'
        tArray[2].style.gridArea = '1 / 5 / span 1 / span 1'
        tArray[3].style.gridArea = '2 / 6 / span 1 / span 1' 
        blockCounter = 1
        
    } else if (randInt == 2) {
        for(var c = 0; c < tArray.length; c++) {
            tArray[c].style.backgroundColor = 'cyan'
        }
        tArray[0].style.gridArea = '2 / 4 / span 1 / span 1'
        tArray[1].style.gridArea = '2 / 5 / span 1 / span 1'
        tArray[2].style.gridArea = '2 / 6 / span 1 / span 1'
        tArray[3].style.gridArea = '2 / 7 / span 1 / span 1'
        blockCounter = 2
    } else if (randInt == 3) {
        for(var c = 0; c < tArray.length; c++) {
            tArray[c].style.backgroundColor = 'blue'
        }
        tArray[0].style.gridArea = '2 / 5 / span 1 / span 1'
        tArray[1].style.gridArea = '2 / 4 / span 1 / span 1'
        tArray[2].style.gridArea = '2 / 6 / span 1 / span 1'
        tArray[3].style.gridArea = '1 / 4 / span 1 / span 1'
        blockCounter = 3
    } else if (randInt == 4) {
        for(var c = 0; c < tArray.length; c++) {
            tArray[c].style.backgroundColor = 'yellow'
        }
        tArray[0].style.gridArea = '2 / 5 / span 1 / span 1'
        tArray[1].style.gridArea = '1 / 5 / span 1 / span 1'
        tArray[2].style.gridArea = '1 / 6 / span 1 / span 1'
        tArray[3].style.gridArea = '2 / 6 / span 1 / span 1'
        blockCounter = 4
    } else if (randInt == 5) {
        for(var c = 0; c < tArray.length; c++) {
            tArray[c].style.backgroundColor = 'orange'
        }
        tArray[0].style.gridArea = '2 / 5 / span 1 / span 1'
        tArray[1].style.gridArea = '2 / 4 / span 1 / span 1'
        tArray[2].style.gridArea = '2 / 6 / span 1 / span 1'
        tArray[3].style.gridArea = '1 / 6 / span 1 / span 1'
        blockCounter = 5
    } else if (randInt == 6) {
        for(var c = 0; c < tArray.length; c++) {
            tArray[c].style.backgroundColor = 'green'
        }
        tArray[0].style.gridArea = '2 / 5 / span 1 / span 1'
        tArray[1].style.gridArea = '2 / 4 / span 1 / span 1'
        tArray[2].style.gridArea = '1 / 5 / span 1 / span 1'
        tArray[3].style.gridArea = '1 / 6 / span 1 / span 1'
        blockCounter = 6
    } else if (randInt == 7) {
        for(var c = 0; c < tArray.length; c++) {
            tArray[c].style.backgroundColor = 'red'
        }
        tArray[0].style.gridArea = '2 / 5 / span 1 / span 1'
        tArray[1].style.gridArea = '2 / 6 / span 1 / span 1'
        tArray[2].style.gridArea = '1 / 5 / span 1 / span 1'
        tArray[3].style.gridArea = '1 / 4 / span 1 / span 1'
        blockCounter = 7
    } randInt = randInt1
}
var newBody;
var tArrayShow = []
var i = 0
    while (i< 4) {
        newBody = document.createElement('div');
        newBody.className = 'block';
        document.getElementById('grid').appendChild(newBody);
        tArrayShow.push(newBody)
        i += 1
        
    } 
function tBlockShow() {
    
    if (randInt1 == 1) {
        for(var c = 0; c < tArrayShow.length; c++) {
            tArrayShow[c].style.backgroundColor = 'purple'
        }
        tArrayShow[0].style.gridArea = '6 / 14 / span 1 / span 1'
        tArrayShow[1].style.gridArea = '6 / 13 / span 1 / span 1'
        tArrayShow[2].style.gridArea = '5 / 14 / span 1 / span 1'
        tArrayShow[3].style.gridArea = '6 / 15 / span 1 / span 1' 
        blockCounterShow = 1
        
    } else if (randInt1 == 2) {
        for(var c = 0; c < tArrayShow.length; c++) {
            tArrayShow[c].style.backgroundColor = 'cyan'
        }
        tArrayShow[0].style.gridArea = '5 / 13 / span 1 / span 1'
        tArrayShow[1].style.gridArea = '5 / 14 / span 1 / span 1'
        tArrayShow[2].style.gridArea = '5 / 15 / span 1 / span 1'
        tArrayShow[3].style.gridArea = '5 / 16 / span 1 / span 1'
        blockCounterShow = 2
    } else if (randInt1 == 3) {
        for(var c = 0; c < tArrayShow.length; c++) {
            tArrayShow[c].style.backgroundColor = 'blue'
        }
        tArrayShow[0].style.gridArea = '6 / 14 / span 1 / span 1'
        tArrayShow[1].style.gridArea = '6 / 13 / span 1 / span 1'
        tArrayShow[2].style.gridArea = '6 / 15 / span 1 / span 1'
        tArrayShow[3].style.gridArea = '5 / 13 / span 1 / span 1'
        blockCounterShow = 3
    } else if (randInt1 == 4) {
        for(var c = 0; c < tArrayShow.length; c++) {
            tArrayShow[c].style.backgroundColor = 'yellow'
        }
        tArrayShow[0].style.gridArea = '6 / 14 / span 1 / span 1'
        tArrayShow[1].style.gridArea = '5 / 14 / span 1 / span 1'
        tArrayShow[2].style.gridArea = '5 / 15 / span 1 / span 1'
        tArrayShow[3].style.gridArea = '6 / 15 / span 1 / span 1'
        blockCounterShow = 4
    } else if (randInt1 == 5) {
        for(var c = 0; c < tArrayShow.length; c++) {
            tArrayShow[c].style.backgroundColor = 'orange'
        }
        tArrayShow[0].style.gridArea = '6 / 14 / span 1 / span 1'
        tArrayShow[1].style.gridArea = '6 / 13 / span 1 / span 1'
        tArrayShow[2].style.gridArea = '6 / 15 / span 1 / span 1'
        tArrayShow[3].style.gridArea = '5 / 15 / span 1 / span 1'
        blockCounterShow = 5
    } else if (randInt1 == 6) {
        for(var c = 0; c < tArrayShow.length; c++) {
            tArrayShow[c].style.backgroundColor = 'green'
        }
        tArrayShow[0].style.gridArea = '6 / 14 / span 1 / span 1'
        tArrayShow[1].style.gridArea = '6 / 13 / span 1 / span 1'
        tArrayShow[2].style.gridArea = '5 / 14 / span 1 / span 1'
        tArrayShow[3].style.gridArea = '5 / 15 / span 1 / span 1'
        blockCounterShow = 6
    } else if (randInt1 == 7) {
        for(var c = 0; c < tArrayShow.length; c++) {
            tArrayShow[c].style.backgroundColor = 'red'
        }
        tArrayShow[0].style.gridArea = '6 / 14 / span 1 / span 1'
        tArrayShow[1].style.gridArea = '6 / 15 / span 1 / span 1'
        tArrayShow[2].style.gridArea = '5 / 14 / span 1 / span 1'
        tArrayShow[3].style.gridArea = '5 / 13 / span 1 / span 1'
        blockCounterShow = 7
    } 
}
//Shapes
var position =[]
position[0] = '1 / 1 / span 1 / span 1'
position[1] = '1 / 2 / span 1 / span 1'
position[2] = '1 / 3 / span 1 / span 1'
position[3] = '2 / 1 / span 1 / span 1'
position[4] = '2 / 2 / span 1 / span 1'
position[5] = '2 / 3 / span 1 / span 1'
position[6] = '3 / 1 / span 1 / span 1'
position[7] = '3 / 2 / span 1 / span 1'
position[8] = '3 / 3 / span 1 / span 1'
var t1 = [
    0, 1, 0,
    1, 2, 1,
    0, 0, 0
]
var t2 = [
    0, 1, 0,
    0, 2, 1,
    0, 1, 0
]
var t3 = [
    0, 0, 0,
    1, 2, 1,
    0, 1, 0
]
var t4 = [
    0, 1, 0,
    1, 2, 0,
    0, 1, 0
]
var j1 = [
    1, 0, 0,
    1, 2, 1,
    0, 0, 0
]
var j2 = [
    0, 1, 1,
    0, 2, 0,
    0, 1, 0
]
var j3 = [
    0, 0, 0,
    1, 2, 1,
    0, 0, 1
]
var j4 = [
    0, 1, 0,
    0, 2, 0,
    1, 1, 0
]
var l1 = [
    0, 0, 1,
    1, 2, 1,
    0, 0, 0
]
var l2 = [
    0, 1, 0,
    0, 2, 0,
    0, 1, 1
]
var l3 = [
    0, 0, 0,
    1, 2, 1,
    1, 0, 0
]
var l4 = [
    1, 1, 0,
    0, 2, 0,
    0, 1, 0
]
var s1 = [
    0, 1, 1,
    1, 2, 0,
    0, 0, 0
]
var s2 = [
    0, 1, 0,
    0, 2, 1,
    0, 0, 1
]
var s3 = [
    0, 0, 0,
    0, 2, 1,
    1, 1, 0
]
var s4 = [
    1, 0, 0,
    1, 2, 0,
    0, 1, 0
]
var z1 = [
    1, 1, 0,
    0, 2, 1,
    0, 0, 0
]
var z2 = [
    0, 0, 1,
    0, 2, 1,
    0, 1, 0
]
var z3 = [
    0, 0, 0,
    1, 2, 0,
    0, 1, 1
]
var z4 = [
    0, 1, 0,
    1, 2, 0,
    1, 0, 0
]
var arrayCheck = document.getElementsByClassName('rotatecheck')
var keyCounter = 1;
function rotateBlock() {
    var t = [t1, t2, t3, t4]
    var j = [j1, j2, j3, j4]
    var l = [l1, l2, l3, l4]
    var s = [s1, s2, s3, s4]
    var z = [z1, z2, z3, z4]
    if (blockCounter == 1) {
        rotate(t[keyCounter]);
    } else if (blockCounter == 2) {
        rotatel(keyCounter)
    } else if (blockCounter == 3) {
        rotate(j[keyCounter])
    } else if (blockCounter == 4) {
        return 
    } else if (blockCounter == 5) {
        rotate(l[keyCounter])
    } else if (blockCounter == 6) {
        rotate(s[keyCounter])
    } else if (blockCounter == 7) {
        rotate(z[keyCounter])
    }

    
}
function rotatel(lmap) {
    
    var refCoordColumn = Number(tArray[0].style.gridColumnStart)
    var refCoordRow = Number(tArray[0].style.gridRowStart)
    var i = 1
    var f = 1
    for (var g = 0; g < 4; g++) {
        arrayCheck[g].style.gridArea = tArray[g].style.gridArea
    } 
    if (lmap == 2 && refCoordColumn == 10){
        var w = 0
        var newCoordColumn = refCoordColumn - 1
        while (w < arrayCheck.length) {
            var left = (Number(arrayCheck[w].style.gridColumnStart))
                left -= 1
                arrayCheck[w].style.gridColumnStart = left + ''
                w +=1
            
        }
    } else if (lmap == 0 && refCoordColumn == 10){
        var w = 0
        var newCoordColumn = refCoordColumn - 2
        while (w < arrayCheck.length) {
            var left = (Number(arrayCheck[w].style.gridColumnStart))
                left -= 2
                arrayCheck[w].style.gridColumnStart = left + ''
                w +=1
        }
    } else if (lmap == 0 && refCoordColumn == 9){
        var w = 0
        var newCoordColumn = refCoordColumn - 1
        while (w < arrayCheck.length) {
            var left = (Number(arrayCheck[w].style.gridColumnStart))
                left -= 1
                arrayCheck[w].style.gridColumnStart = left + ''
                w +=1
        }
    } else if (lmap == 2 && refCoordColumn == 1){
        var w = 0
        var newCoordColumn = refCoordColumn + 2
        while (w < arrayCheck.length) {
            var right = (Number(arrayCheck[w].style.gridColumnStart))
                right += 2
                arrayCheck[w].style.gridColumnStart = right + ''
                w +=1
        }
    } else if (lmap == 2 && refCoordColumn == 2){
        var w = 0
        var newCoordColumn = refCoordColumn + 1
        while (w < arrayCheck.length) {
            var right = (Number(arrayCheck[w].style.gridColumnStart))
                right += 1
                arrayCheck[w].style.gridColumnStart = right + ''
                w +=1
        }
    } else if (lmap == 0 && refCoordColumn == 1){
        var w = 0
        var newCoordColumn = refCoordColumn + 1
        while (w < arrayCheck.length) {
            var right = (Number(arrayCheck[w].style.gridColumnStart))
                right += 1
                arrayCheck[w].style.gridColumnStart = right + ''
                w +=1
        }
    } else {
        var newCoordColumn = refCoordColumn
    }
    
    if (lmap == 0) {
        var newRow = refCoordRow - 2
        var newColumn = newCoordColumn - 1
        arrayCheck[0].style.gridRowStart = newRow + ''
        arrayCheck[0].style.gridColumnStart = newColumn + ''
        while (i < tArray.length) {
            arrayCheck[i].style.gridRowStart = newRow + '';
            arrayCheck[i].style.gridColumnStart = newColumn + f + ''
            f += 1
            i += 1
           
        }
    
    } else if (lmap == 1) {
        var newRow = refCoordRow - 1
        var newColumn = newCoordColumn + 2
        arrayCheck[0].style.gridRowStart = newRow + ''
        arrayCheck[0].style.gridColumnStart = newColumn + ''
        while (i < tArray.length) {
            arrayCheck[i].style.gridRowStart = newRow + f + '';
            arrayCheck[i].style.gridColumnStart = newColumn + ''
            f += 1
            i += 1
            
        }
    
    } else if (lmap == 2) {
        var newRow = refCoordRow + 2
        var newColumn = newCoordColumn + 1
        arrayCheck[0].style.gridRowStart = newRow + ''
        arrayCheck[0].style.gridColumnStart = newColumn + ''
        while (i < tArray.length) {
            arrayCheck[i].style.gridRowStart = newRow + '';
            arrayCheck[i].style.gridColumnStart = newColumn - f + '';
            f += 1
            i += 1
           
        }
    
    } else if (lmap == 3) {
        var newRow = refCoordRow + 1
        var newColumn = newCoordColumn - 2
        arrayCheck[0].style.gridRowStart = newRow + ''
        arrayCheck[0].style.gridColumnStart = newColumn + ''
        while (i < tArray.length) {
            arrayCheck[i].style.gridRowStart = newRow - f + '';
            arrayCheck[i].style.gridColumnStart = newColumn + ''
            f += 1
            i += 1
            
        }
    
        
    } 
    
  
    var z = 0
    var y = 0
        
        while (z < storedBlocksColumns.length) {
            while (y < arrayCheck.length) {
                    if(storedBlocksColumns[z] == arrayCheck[y].style.gridColumnStart && storedBlocksRows[z] == arrayCheck[y].style.gridRowStart) {
                        
                        return
                    }
                y += 1
                    
            } y= 0
            z += 1 
        } 
        var d = 0
        while (d < arrayCheck.length) {
            if(Number(arrayCheck[d].style.gridColumnStart) > 10 || Number(arrayCheck[d].style.gridRowStart) > 21 || Number(arrayCheck[d].style.gridColumnStart) < 0) {
                return
            } d += 1
        }
        
        var j = 0
        var e = 0
        while (e < arrayCheck.length) {
            while (j < arrayCheck.length) {
                if( e != j) {
                    if(arrayCheck[j].style.gridArea == arrayCheck[e].style.gridArea) {
                        return
                    }
                } j += 1
                
            } j= 0
            e += 1
            
        }
        if (lmap == 2 && refCoordColumn == 10){
            var w = 0
            var newCoordColumn = refCoordColumn - 1
            while (w < tArray.length) {
                var left = (Number(tArray[w].style.gridColumnStart))
                    left -= 1
                    tArray[w].style.gridColumnStart = left + ''
                    w +=1
            }
        } else if (lmap == 0 && refCoordColumn == 10){
            var w = 0
            var newCoordColumn = refCoordColumn - 2
            while (w < tArray.length) {
                var left = (Number(tArray[w].style.gridColumnStart))
                    left -= 2
                    tArray[w].style.gridColumnStart = left + ''
                    w +=1
            }
        } else if (lmap == 0 && refCoordColumn == 9){
            var w = 0
            var newCoordColumn = refCoordColumn - 1
            while (w < tArray.length) {
                var left = (Number(tArray[w].style.gridColumnStart))
                    left -= 1
                    tArray[w].style.gridColumnStart = left + ''
                    w +=1
            }
        } else if (lmap == 2 && refCoordColumn == 1){
            var w = 0
            var newCoordColumn = refCoordColumn + 2
            while (w < tArray.length) {
                var right = (Number(tArray[w].style.gridColumnStart))
                    right += 2
                    tArray[w].style.gridColumnStart = right + ''
                    w +=1
            }
        } else if (lmap == 2 && refCoordColumn == 2){
            var w = 0
            var newCoordColumn = refCoordColumn + 1
            while (w < tArray.length) {
                var right = (Number(tArray[w].style.gridColumnStart))
                    right += 1
                    tArray[w].style.gridColumnStart = right + ''
                    w +=1
            }
        } else if (lmap == 0 && refCoordColumn == 1){
            var w = 0
            var newCoordColumn = refCoordColumn + 1
            while (w < tArray.length) {
                var right = (Number(tArray[w].style.gridColumnStart))
                    right += 1
                    tArray[w].style.gridColumnStart = right + ''
                    w +=1
            } 
        } else {
            var newCoordColumn = refCoordColumn
        }
    var i = 1
    var f = 1
    if (lmap == 0) {
        var newRow = refCoordRow - 2
        var newColumn = newCoordColumn - 1
        tArray[0].style.gridRowStart = newRow + ''
        tArray[0].style.gridColumnStart = newColumn + ''
        while (i < tArray.length) {
            tArray[i].style.gridRowStart = newRow + '';
            tArray[i].style.gridColumnStart = newColumn + f + ''
            f += 1
            i += 1
           
        }
    
    } else if (lmap == 1) {
        var newRow = refCoordRow - 1
        var newColumn = newCoordColumn + 2
        tArray[0].style.gridRowStart = newRow + ''
        tArray[0].style.gridColumnStart = newColumn + ''
        while (i < tArray.length) {
            tArray[i].style.gridRowStart = newRow + f + '';
            tArray[i].style.gridColumnStart = newColumn + ''
            f += 1
            i += 1
            
        }
    
    } else if (lmap == 2) {
        var newRow = refCoordRow + 2
        var newColumn = newCoordColumn + 1
        tArray[0].style.gridRowStart = newRow + ''
        tArray[0].style.gridColumnStart = newColumn + ''
        while (i < tArray.length) {
            tArray[i].style.gridRowStart = newRow + '';
            tArray[i].style.gridColumnStart = newColumn - f + '';
            f += 1
            i += 1
           
        }
    
    } else if (lmap == 3) {
        var newRow = refCoordRow + 1
        var newColumn = newCoordColumn - 2
        tArray[0].style.gridRowStart = newRow + ''
        tArray[0].style.gridColumnStart = newColumn + ''
        while (i < tArray.length) {
            tArray[i].style.gridRowStart = newRow - f + '';
            tArray[i].style.gridColumnStart = newColumn + ''
            f += 1
            i += 1
            
        }
    
    } 
    if (keyCounter < 3) {
        keyCounter += 1
    } else if (keyCounter == 3) {
        keyCounter = 0
    }
}

function rotate(map) {
    
    checkRotate()
    if (rotateCheck == 1) {
        rotateRight()
    } else if (rotateCheck == 2) {
        rotateLeft()
    } else if (rotateCheck == 3) {
        return
    }

    for (var g = 0; g < 4; g++) {
        arrayCheck[g].style.gridArea = tArray[g].style.gridArea
    }
    
    var h = 0
    var i = 1
    var v = 0
    var s = 1
    
    var coordColumn = Number(tArray[0].style.gridColumnStart) - 2
    var coordRow = Number(tArray[0].style.gridRowStart) - 2
    var coordColumnCheck = Number(arrayCheck[0].style.gridColumnStart) - 2
    var coordRowCheck = Number(arrayCheck[0].style.gridRowStart) - 2
    while (v < map.length) {
        if (map[v] === 1) {
            
            arrayCheck[s].style.gridArea =  position[v]
            var tArrayColumnCheck = Number(arrayCheck[s].style.gridColumnStart) + coordColumnCheck
            var tArrayRowCheck = Number(arrayCheck[s].style.gridRowStart) + coordRowCheck
            arrayCheck[s].style.gridColumnStart = tArrayColumnCheck + ''
            arrayCheck[s].style.gridRowStart = tArrayRowCheck + ''
             s += 1
            } v +=1
        }
    var z = 0;
    var y = 0;
    while (z < storedBlocksColumns.length) {
        while (y < arrayCheck.length) {
            
                if(storedBlocksColumns[z] == arrayCheck[y].style.gridColumnStart && storedBlocksRows[z] == arrayCheck[y].style.gridRowStart || Number(arrayCheck[y].style.gridColumnStart) > 10) {
                    return
                }
             y += 1
            
        } y= 0
        z += 1
    }
    var f = 0
    var e = 0
    while (e < arrayCheck.length) {
        while (f < arrayCheck.length) {
            if( e != f) {
                if(arrayCheck[f].style.gridArea == arrayCheck[e].style.gridArea) {
                    return
                }
            } f += 1
            
        } f= 0
        e += 1
    }
    
    while (h < map.length) {
        if (map[h] === 1) {
            tArray[i].style.gridArea =  position[h]
            var tArrayColumn = Number(tArray[i].style.gridColumnStart) + coordColumn
            var tArrayRow = Number(tArray[i].style.gridRowStart) + coordRow
            tArray[i].style.gridColumnStart = tArrayColumn + ''
            tArray[i].style.gridRowStart = tArrayRow + ''
            i += 1
        } h += 1
    }if (keyCounter < 3) {
        keyCounter += 1
    } else if (keyCounter == 3) {
        keyCounter = 0
    }
    
    
}

//Check if block is beside the sides
var rotateCheck;
function checkRotate() {
    blockTouch()
    if (rotateCollisionCheck == 1){
        rotateCheck = 3 //\/
    }
    else if (tArray[0].style.gridColumnStart == '1') {
        rotateCheck = 1 //left side
    } else if (tArray[0].style.gridColumnStart == '10') {
        rotateCheck = 2 //right side
    }  else {
        rotateCheck = 0
    }
} 

//Another function to check if tArray[0] is touching block or floor
var rotateCollisionCheck;
function blockTouch() {
    
    rotateCollisionCheck = 0
    
    var blockRow = tArray[0].style.gridRowStart
    if (blockRow == '21') {
    rotateCollisionCheck = 1
    
}
}
//Another function for moveright/left 
function rotateRight() {
    var y = 0
    var x = 0
    var i = 0
    var inputCollide = 0
    while(x < tArray.length) {
        while(i < storedBlocksRows.length) {
            if (tArray[x].style.gridRowStart == storedBlocksRows[i]) {
                if(Number(tArray[x].style.gridColumnStart) == (Number(storedBlocksColumns[i]) - 1)) {
                    inputCollide = 1;
                    
                }        
            }i +=1
            
        } i = 0
        x += 1
    }
    while (y < tArray.length) {
        if (tArray[y].style.gridColumnStart == '10' || inputCollide == 1) {
            return
        } y += 1
    }
    var y = 0
    while (y < tArray.length) {
        var right = (Number(tArray[y].style.gridColumnStart))
            right += 1
            tArray[y].style.gridColumnStart = right + ''
            y +=1
    }
}

function rotateLeft() {
    var y = 0
    var x = 0
    var i = 0
    var inputCollide = 0
    while(x < tArray.length) {
        while(i < storedBlocksRows.length) {
            if (tArray[x].style.gridRowStart == storedBlocksRows[i]) {
                if(Number(tArray[x].style.gridColumnStart) == (Number(storedBlocksColumns[i]) + 1)) {
                    inputCollide = 1;
                    
                }        
            }i +=1
            
        } i = 0
        x += 1
    }
    while (y < tArray.length) {
        if (tArray[y].style.gridColumnStart == '1' || inputCollide == 1) {
            return
        } y += 1
    }
    var y = 0
    while (y < tArray.length) {
        var left = (Number(tArray[y].style.gridColumnStart))
            left -= 1
            tArray[y].style.gridColumnStart = left + ''
            y +=1
    }
}
//Interval for next 2 functions
var interval = setInterval(bothFunc, 1000)
function bothFunc() {
    collision();
    moveDown();
}
//Restart
function restart() {
    
    location.reload(true)
    
}
//Check collision with other blocks
var stop;
var lose = document.getElementById('Lose')
function collision() {
    var y = 0
    var i = 0
    var c = 0
    var g = 0
    //Lose 
    while (g < tArray.length) {
        while (c< storedBlocksRows.length) {
            if(tArray[g].style.gridRowStart == storedBlocksRows[c] && tArray[g].style.gridColumnStart == storedBlocksColumns[c] && tArray[0].style.gridRowStart == '3') {
            collide = 1
            stop = 1
            document.removeEventListener('keydown', direction)
            document.removeEventListener('keyup', normalSpeed)
            clearInterval(interval)
            clearInterval(fasterInterval)
            lose.style.display = 'block'
            return
            
            } c += 1
        } c= 0
        g += 1
    }
    //Check collision with other blocks
    while(y < tArray.length) {
        while(i < storedBlocksRows.length) {
            if (tArray[y].style.gridColumnStart == storedBlocksColumns[i]) {
                
                if(Number(tArray[y].style.gridRowStart) == (Number(storedBlocksRows[i]) - 1)) {
                    collide = 1;
                    
                }        
            }i +=1
            
        } i = 0
        y += 1
        
    }
}
//Auto move down

function moveDown(){
    var y = 0
    if (stop == 1) {
        return
    }
    while (y < tArray.length) {
        if (tArray[y].style.gridRowStart == '21' || collide === 1) {
            
            tBlockDelay();
            checkWinAnimation();
            setTimeout(checkWin, 500)
        } y += 1
    }
    
    y = 0
    while ( y < tArray.length) {
        var down = (Number(tArray[y].style.gridRowStart))
        down += 1
        tArray[y].style.gridRowStart = down
        
    
        y += 1
    }
}
var storedBlocks = document.getElementsByClassName('storedblock') 
var animation = document.getElementsByClassName('animation')
function checkWin() {
    var i = 2
    
    while (i < 22) {
        var winCheck = storedBlocksRows.filter(function(x){ return x == i + ''; }).length;
        if (winCheck == 10) {
            var y = -1
            
            while (storedBlocksRows.indexOf(i + '') != -1) {
                
                y = storedBlocksRows.indexOf(i + '', y + 1)
                
                storedBlocksRows[y] = ''
                storedBlocksColumns[y] = ''
                storedBlocks[y].style.gridArea = '1 / 1 / span 1 / span 1';
                storedBlocks[y].style.display = 'none'
                
                
            } var g = 0
            while (g < storedBlocksRows.length){
                if (Number(storedBlocksRows[g]) < i && storedBlocksRows[g]) {
                    storedBlocksRows[g] = Number(storedBlocksRows[g]) + 1 + ''
                    
                    storedBlocks[g].style.gridRowStart = Number(storedBlocks[g].style.gridRowStart) + 1 + ''
                } 
            g +=1
            }
        } i+= 1
    }   
}
var scoreNum = document.getElementById('scoreNumber')
var linesNum = document.getElementById('linesNumber')
var scoreNumber = 0
var linesNumber = 0
function checkWinAnimation() {
    var i = 2
    var q = 0
    while (i < 22) {
        var winCheck = storedBlocksRows.filter(function(x){ return x == i + ''; }).length;
        if (winCheck == 10) {
            var y = -1
            q += 1
            while (storedBlocksRows.indexOf(i + '', y + 1) != -1) {
                
                y = storedBlocksRows.indexOf(i + '', y + 1)
                
                
                storedBlocks[y].style.transition = 'background-color 0.2s'
                storedBlocks[y].style.backgroundColor = 'white'
                storedBlocks[y].style.transition = 'opacity 0.5s'
                storedBlocks[y].style.opacity = '0'
                
                
                
            
            }
        } i+= 1
    }   if (q == 1) {
        console.log('hello')
        scoreNumber = Number(scoreNumber) + 40 + ''
        scoreNum.innerHTML = scoreNumber
        linesNumber = Number(linesNumber) + 1 + ''
        linesNum.innerHTML = linesNumber
    } else if (q == 2) {
        scoreNumber = Number(scoreNumber) + 100 + ''
        scoreNum.innerHTML = scoreNumber
        linesNumber = Number(linesNumber) + 2 + ''
        linesNum.innerHTML = linesNumber
    } else if (q == 3) {
        scoreNumber = Number(scoreNumber) + 300 + ''
        scoreNum.innerHTML = scoreNumber
        linesNumber = Number(linesNumber) + 3 + ''
        linesNum.innerHTML = linesNumber
    } else if (q == 4) {
        scoreNumber = Number(scoreNumber) + 1200 + ''
        scoreNum.innerHTML = scoreNumber
        linesNumber = Number(linesNumber) + 4 + ''
        linesNum.innerHTML = linesNumber
    } q = 0
}

//Key inputs and stuff
function moveLeft() {
    var y = 0
    var x = 0
    var i = 0
    var inputCollide = 0
    while(x < tArray.length) {
        while(i < storedBlocksRows.length) {
            if (tArray[x].style.gridRowStart == storedBlocksRows[i]) {
                if(Number(tArray[x].style.gridColumnStart) == (Number(storedBlocksColumns[i]) + 1)) {
                    inputCollide = 1;
                    
                }        
            }i +=1
            
        } i = 0
        x += 1
    }
    while (y < tArray.length) {
        if (tArray[y].style.gridColumnStart == '1' || inputCollide == 1) {
            return
        } y += 1
    }
    var y = 0
    while (y < tArray.length) {
        var left = (Number(tArray[y].style.gridColumnStart))
            left -= 1
            tArray[y].style.gridColumnStart = left
            y +=1
        
    } if (g == 0) {
        leftTimeDelay = setTimeout(moveLeft, 200)
        g = 1
    } else {
        leftTime = setTimeout(moveLeft, 70)
    }
    
}
function moveRight() {
    var y = 0
    var x = 0
    var i = 0
    var inputCollide = 0
    while(x < tArray.length) {
        while(i < storedBlocksRows.length) {
            if (tArray[x].style.gridRowStart == storedBlocksRows[i]) {
                if(Number(tArray[x].style.gridColumnStart) == (Number(storedBlocksColumns[i]) - 1)) {
                    inputCollide = 1;
                    
                }        
            }i +=1
            
        } i = 0
        x += 1
    }
    while (y < tArray.length) {
        if (tArray[y].style.gridColumnStart == '10' || inputCollide == 1) {
            return
        } y += 1
    }
    var y = 0
    while (y < tArray.length) {
        var left = (Number(tArray[y].style.gridColumnStart))
            left += 1
            tArray[y].style.gridColumnStart = left
            y +=1
    } if (g == 0) {
        rightTimeDelay = setTimeout(moveRight, 200)
        g = 1
    } else {
        rightTime = setTimeout(moveRight, 70)
    }
}




var l = 0
var r = 0 
var d = 0
var g = 0
var fasterInterval;
//direction stuff
document.addEventListener('keydown', direction)
function direction(key) {
    if (key.which == '37' && r == 0) {//left
        if (l == 0) {
            moveLeft()
            l = 1
            
        }
    } else if (key.which == '39' && l == 0) { //right
        if (r == 0) {
            moveRight()
            r = 1
        }
    } else if (key.which == '40') { //down
        if (d == 0 || check == 0) {
            clearInterval(interval)
            fasterInterval = setInterval(bothFunc, 100)
            d = 1
            check = 1
        }
        
    } else if (key.which == '38') { //up
        rotateBlock()
    }
}
document.addEventListener('keyup', normalSpeed)
function normalSpeed(key) {
    if (key.which == '37' && l == 1) {//left
        l = 0
        g = 0
        clearTimeout(leftTime)
        clearTimeout(leftTimeDelay)
    } else if (key.which == '39' && r == 1) { //right
        r = 0
        g = 0
        clearTimeout(rightTime)
        clearTimeout(rightTimeDelay)
    } else if (key.which == '40' && check == 1) {
        d = 0
        clearInterval(fasterInterval)
        interval = setInterval(bothFunc, 1000)
    }
}
//disable scrolling
document.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);