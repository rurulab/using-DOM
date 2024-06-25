const accordion = document.querySelectorAll('.content-container');

accordion.forEach(function (elem) {
  elem.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});

// const accordion = document.getElementsByClassName('content-container');

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//   });
// }
