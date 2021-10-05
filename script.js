function myMove() {
    let id = null;
    const elem = document.getElementById("myImage");   
    let pos = 0;
 
    id = setInterval(frame, 7);
    function frame() {
      if (pos == 1550) {
        clearInterval(id);
      } else {
        pos++;  
        elem.style.left = pos + "px"; 
      }
    }
  }
  function myMove1() {
    let id1 = null;
    const elem1 = document.getElementById("cloud1");   
    let pos = 0;
 
    id1 = setInterval(frame1, 15);
    function frame1() {
      if (pos == 1550) {
        clearInterval(id1);
      } else {
        pos++;  
        elem1.style.left = pos + "px"; 
      }
    }
  }
  function myMove2() {
    let id2 = null;
    const elem2 = document.getElementById("cloud2");   
    let pos2 = 0;
 
    id1 = setInterval(frame1, 15);
    function frame1() {
      if (pos1 == 1550) {
        clearInterval(id1);
      } else {
        pos1++;  
        elem1.style.left = pos1 + "px"; 
      }
    }
  }
  myMove()
  myMove1()