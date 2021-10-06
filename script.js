function myMove() {
    let id = null;
    const elem = document.getElementById("myImage");   
    let pos = 0;
 
    id = setInterval(frame, 15);
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
 
    id1 = setInterval(frame1, 30);
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
    let pos = 0;
 
    id2 = setInterval(frame2, 28);
    function frame2() {
      if (pos == 1550) {
        clearInterval(id1);
      } else {
        pos++;  
        elem2.style.left = pos + "px"; 
      }
    }
  }
  function myMove3() {
    let id3 = null;
    const elem3 = document.getElementById("cloud3");   
    let pos = 0;
 
    id2 = setInterval(frame3, 27);
    function frame3() {
      if (pos == 1550) {
        clearInterval(id1);
      } else {
        pos++;  
        elem3.style.left = pos + "px"; 
      }
    }
  }
  function myMove4() {
    let id4 = null;
    const elem4 = document.getElementById("cloud4");   
    let pos = 0;
 
    id4 = setInterval(frame4, 31);
    function frame4() {
      if (pos == 1550) {
        clearInterval(id4);
      } else {
        pos++;  
        elem4.style.left = pos + "px"; 
      }
    }
  }
  function myMove5() {
    let id5 = null;
    const elem5 = document.getElementById("cloud5");   
    let pos = 0;
 
    id5 = setInterval(frame5, 29);
    function frame5() {
      if (pos == 1550) {
        clearInterval(id5);
      } else {
        pos++;  
        elem5.style.left = pos + "px"; 
      }
    }
  }
  function myMove6() {
    let id6 = null;
    const elem6 = document.getElementById("cloud6");   
    let pos = 0;
 
    id6 = setInterval(frame6,40);
    function frame6() {
      if (pos == 1550) {
        clearInterval(id6);
      } else {
        pos++;  
        elem6.style.left = pos + "px"; 
      }
    }
  }
function myMove7() {
    let id7 = null;
    const elem7 = document.getElementById("cloud7");   
    let pos = 0;
    id7 = setInterval(frame7, 35);
    function frame7() {
      if (pos == 1550) {
        clearInterval(id7);
      } else {
        pos+= 0.7;
        elem7.style.left = pos + "px";
        elem7.style.bottom = pos + "px"; 
      }
    }
  }
  myMove()
  myMove1()
  myMove2()
  myMove3()
  myMove4()
  myMove5()
  myMove6()
  myMove7()
