// document.getElementById("body1").addEventListener("scroll", abc);
function abc() {
    var tag1=document.getElementById("na1");
    var tag2=document.getElementById("na2");
    var tag3=document.getElementById("na3");
    var tag4=document.getElementById("na4");
    var tag5=document.getElementById("na5");
    var tag=document.getElementsByClassName("active")
    if(scrollY>0){
        document.getElementById("headerId").style.transition = "0.6s";
        // document.getElementById("headerId").style.backgroundColor = "red";
        document.getElementById("headerId").classList.add("headerbg");
        document.getElementById("logo").style.backgroundImage= "url('img/savelife-light-white.svg')";
        // document.getElementById("headerId").style.height="10vh";
        tag1.style.setProperty('--tagAfterBackColor','white');
        tag2.style.setProperty('--tagAfterBackColor','white');
        tag3.style.setProperty('--tagAfterBackColor','white');
        tag4.style.setProperty('--tagAfterBackColor','white');
        tag5.style.setProperty('--tagAfterBackColor','white');
        tag.style.setProperty('--tagAfterBackColor','white');
    }
    else{
        // document.getElementById("headerId").style.transition = "2s";
        // document.getElementById("headerId").style.backgroundColor = "transparent";
        document.getElementById("headerId").classList.remove("headerbg");
        // document.getElementById("headerId").style.height="0vh";
        document.getElementById("logo").style.backgroundImage= "url('img/savelife-red.svg')";
        tag1.style.setProperty('--tagAfterBackColor','red');
        tag2.style.setProperty('--tagAfterBackColor','red');
        tag3.style.setProperty('--tagAfterBackColor','red');
        tag4.style.setProperty('--tagAfterBackColor','red');
        tag5.style.setProperty('--tagAfterBackColor','red');
        tag.style.setProperty('--tagAfterBackColor','red');
    }
}
// const animatedDiv = document.querySelector('.animated-div');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Add the 'in-view' class to trigger the animation
//       entry.target.classList.add('in-view');
//       // Disconnect the observer to prevent the animation from triggering again
//       observer.disconnect();
//     }
//   });
// });

// // Observe the animatedDiv element
// observer.observe(animatedDiv);
// window.addEventListener("scroll", function() {
//     var animatedDiv = document.querySelector(".animated-div");
//     var bounding = animatedDiv.getBoundingClientRect();
//     if (
//       bounding.top >= 0 &&
//       bounding.left >= 0 &&
//       bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
//       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//     ) {
//       animatedDiv.classList.add("in-view");
//     } else {
//       animatedDiv.classList.remove("in-view");
//     }
//   });
// console.log(scrollY);
// function def(){
//     document.getElementById("main").style.backgroundColor="white";
// }
window.addEventListener("scroll", reveal);
function reveal(){
  var reveals=document.querySelectorAll('.reveal');
  for(var i=0; i<reveals.length; i++){
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=50;
    if(revealtop<windowheight-revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}
window.addEventListener("scroll", rvlfrmrght);
function rvlfrmrght(){
  var reveals=document.querySelectorAll('.rvlfrmrght');
  for(var i=0; i<reveals.length; i++){
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=50;
    if(revealtop<windowheight-revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}
window.addEventListener("scroll", rvlfrmlft);
function rvlfrmlft(){
  var reveals=document.querySelectorAll('.rvlfrmlft');
  for(var i=0; i<reveals.length; i++){
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=50;
    if(revealtop<windowheight-revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}