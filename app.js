

var block;
var valuechoose = false;
var sizepieces;
var mainimage;
var counter;
var moves;
var timeover = false;
var movecount =0;
(function(){
  if ($(window).width() <= 600) {
    $('table').style['margin-left'] = '187px'
    $('.contents h4').style[' font-size'] = '73px'
  }
  // var b=['./images/london-bridge.jpg','./images/lotus.JPG','./images/agra.jpg']
  // var a = Math.floor(Math.random()*3);
  //   mainimage = b[a]
  // document.getElementById('setimage').src=mainimage
  breakimage('./1234.jpg',3)
})();
function breakimage(images,sizepiece){
   mainimage=images
   move=0;
  //  document.getElementById('moves').innerHTML = '';
  //  document.getElementById('setimage').src=mainimage
  var percentage = 100 / (sizepiece - 1);
     sizepieces=sizepiece * sizepiece
     let tbody = document.getElementById('tbody');
    tbody.innerHTML=''
  for (var i = 0; i < sizepieces; i++) {
    if(i== 0 && sizepiece==3 || i==3 && sizepiece==3 || i==6 && sizepiece==3||i== 0 && sizepiece==4 || i==4&& sizepiece==4 || i==8 && sizepiece==4||i==12 && sizepiece==4){
    block = document.createElement('tr');
    block.setAttribute("id", `tr${i}`)
    let head = document.getElementById('tbody');
    head.appendChild(block);
    }
      var xpos = (percentage * ( i % sizepiece)) + '%';
      var ypos = (percentage * Math.floor(i / sizepiece)) + '%';
      var stylevalue = {
          'background-image': 'url('+ images + ')',
          'background-size': (sizepiece * 100) + '%',
          'background-position': xpos + ' ' + ypos,
          'width': 400 / sizepiece,
          'height': 400 / sizepiece
      };
      let td = document.createElement('td');
      td.setAttribute("id", `td${i}`)
      td.setAttribute("value", `${i}`)
      td.setAttribute("style", `background-image: url(${images});background-size:${ (sizepiece * 100)}%;background-position: ${xpos} ${ypos};width: ${400 / sizepiece};height:${ 400 / sizepiece}`)
      block.appendChild(td);
  }
  setramdom()
  loadtd()
   counter=0;
   moves=0;
}

function setramdom(){
  var s=[]
  for(var i=0;i<sizepieces;i++){
    var value = Math.floor((Math.random() * 8) + 1);
    if(value != i){  
      var style=document.getElementById(`td${value}`).getAttribute('style')
      let value1=document.getElementById(`td${value}`).getAttribute('value')
      // console.log("main data",style,value1)
      document.getElementById(`td${value}`).style=document.getElementById(`td${i}`).getAttribute('style');
      document.getElementById(`td${value}`).setAttribute('value',`${document.getElementById(`td${i}`).getAttribute('value')}`)
      document.getElementById(`td${i}`).style=style;
      document.getElementById(`td${i}`).setAttribute('value',`${value1}`);
    }
  }
}
function loadtd(){
const buttons = document.getElementsByTagName('td');
const buttonsCount = buttons.length;
for (let i = 0; i < buttonsCount; i += 1) {
  score = 0
  buttons[i].addEventListener('click', function () {
    id1 = this.id;
    movecount++;
    if(movecount == 1){
        setup()
    }
    if (!valuechoose) {
      choose = document.getElementById(`${id1}`)
      if (choose !== '') {
        backupitem = id1;
        // console.log("main choose a", backupitem,choose)
        document.getElementById(`${backupitem}`).style.border = "1px solid black";
        valuechoose = true;
      } else {
        alert("please choose right one");
      }
    } else {
      if (choose !== '') {
        // console.log("after inside")
        var dem3 = document.getElementById(`${id1}`);
        // console.log("main choose a", id1,dem3)
        var style=choose.getAttribute('style')
        var value=choose.getAttribute('value')
        // console.log("choose",choose,document.getElementById(`${id1}`),choose.getAttribute('style'))
        document.getElementById(`${backupitem}`).style=dem3.getAttribute('style');
        document.getElementById(`${backupitem}`).setAttribute('value',`${dem3.getAttribute('value')}`)
        document.getElementById(`${id1}`).style=style;
        document.getElementById(`${id1}`).setAttribute('value',`${value}`);
        // console.log(dem3.getAttribute('style'));
       
     moves=moves+1;
    //  document.getElementById('moves').innerHTML = moves;
        document.getElementById(`${backupitem}`).style.border = "";
      }
       check()
      valuechoose = false;
    }

  })
}
}
function check(){
  var predata;
 var  s=[];
  for(var i=0;i<sizepieces;i++){
     var data = document.getElementById(`td${i}`).getAttribute('value'); 
     s.push(data)
    }
     var sorted=s.every((ele,i)=>{
      return ele == i;
    })
    if(sorted){
      setTimeout(()=>{
        document.getElementById("left-text").style.display = 'block'
   
        if ($(window).width() <= 600) {
          $('#img-popup').animate({ fontSize: '30px' }, 'slow')
      } else {
          $('#img-popup').animate({ fontSize: '90px' }, 'slow')
      }
      displayLeftText()
      Animation()

      },100)

       timeover = true
      document.getElementsByTagName("audio")[0].play()
      // return
    }    
  }

  function displayLeftText() {
  let leftText = document.getElementById("left-content")
  let text = "HAPPY SILVER JUBILEE"

   for(let i=0; i<text.length ;i++){
     setTimeout(()=>{
      let span = document.createElement('span')
      span.innerHTML = text[i]
      span.fadeIn = true
      leftText.appendChild(span)
      if(text.length-1 == i){
        // document.getElementById("right-text").style.display = 'block'
        $(`#right-text`).fadeIn();
      }
     
     },500*i)
   }
  }
  const buttons1 = document.getElementsByClassName('gametype');
  const buttonsCount1 = buttons1.length;
  for (let i = 0; i < buttonsCount1; i += 1) {
  buttons1[i].addEventListener('click', function() {
    typename =this.id;
    switch(typename){
        case 'easy':
          breakimage(mainimage,3)
             break;
        case 'hard':
          breakimage(mainimage,4)
             break;
        
    }
  })
}

function setup(){
  function convertsSeconds(s){
var min= Math.floor(s/60);
var sec= s%60;
return min+':'+sec;
}

setInterval(time, 1000);
function time(){
//       counter++;
//       if(timeover){
//         return
//       }
// var total=document.getElementById("timer").value=convertsSeconds(counter);
//    document.getElementById("timer").innerHTML=total;
}
}



function Animation(){
  let count =0
  let main = document.getElementsByTagName('body')
  let color = ['', 'red', 'bule', 'yellow', 'green']
  let flowers= ['','https://img.icons8.com/color/48//spring.png','https://img.icons8.com/ultraviolet/48/000000/spring.png','https://img.icons8.com/color/48/000000/flower.png']
    setInterval(() => {
        if(count == 200){
          $(".paper_animation").remove();
          count =0;
        }
        count++
        let element= document.createElement("div");
        element.setAttribute('class', 'paper_animation');
        let ch = Math.floor(Math.random() * 3) + 1;
        let left = Math.floor(Math.random() * 90) + 1;
        element.setAttribute('style', `background-image:url(${flowers[ch]});left: ${left}%`);
        main[0].prepend(element);
    }, 100);
}
  // helper functions



// }

///////////////////////////////////////////////////////////////logic for cutting 
// var percentage = 100 / (sizepiece - 1);//sizepiece is for no of row and col to cutting
  // for (var i = 0; i < sizepiece * sizepiece; i++) {
  //     var xpos = (percentage * (i % sizepiece)) + '%';
  //     var ypos = (percentage * Math.floor(i / sizepiece)) + '%';
  //     var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
          // 'background-image': 'url(' + images + ')',//images is path of image
  //         'background-size': (sizepiece * 100) + '%',
  //         'background-position': xpos + ' ' + ypos,
  //         'width': 400 / sizepiece,
  //         'height': 400 / sizepiece
  //     });
  // }
