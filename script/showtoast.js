function showToast(){
    var x=document.getElementById("toast");
    x.classList.add("show");
    setTimeout(function(){
      x.classList.remove("show");
    },3000);
  };
  
  window.onscroll = function() {myFunction()};
  
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
   