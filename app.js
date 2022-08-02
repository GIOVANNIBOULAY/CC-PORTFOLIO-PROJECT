// ACCORDION DROP-DOWN INFO EVENT

const accordion = document.getElementsByClassName('project')

for ( i = 0; i < accordion.length; i++ ) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}


//  PROGRAMMING DAYS ELAPSED 

const start = new Date("April 24, 2022");
let end = new Date();
let diff = 0;
days = 1000 * 60 * 60 * 24;
elapsed = document.getElementById('days');

diff = end - start;

elapsed.innerHTML = Math.floor(diff / days);
