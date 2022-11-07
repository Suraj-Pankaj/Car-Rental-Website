// var app = angular.module("myApp", []);
// let email, password;
// app.controller("myCtrl", function ($scope) {
//   email = $scope.email;
//   password = $scope.password;
// });

// function validate() {
//   console.log(email, password);
//   if (!email) {
//     alert("Invalid email");
//     return;
//   }

//   if (password?.length < 6) {
//     alert("Password should be of atleast 6 characters");
//     return;
//   }
// }

$(document).ready( function() {
 
  $("div").hover( function() {
      $(".name").slideToggle("slow");
    });

});

$(document).ready(function() {
  $("div").hover( function() {
    $('.cardone').animate({
      'boxShadowX': '30px',
      'boxShadowY':'30px',
      'boxShadowBlur': '20px'
  });
})
});  

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click',()=>{
  navList.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
  rightNav.classList.toggle('v-class-resp');
})

$(document).ready( function() {
 
  $("button").mouseenter( function() {
      $("#btn-cap").animate({fontSize: '3em'}, "slow");;
    });

});
$(document).ready( function() {
 
  $("button").mouseleave( function() {
      $("#btn-cap").animate({fontSize: '2em'}, "slow");;
    });

});



