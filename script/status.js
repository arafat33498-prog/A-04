const badges = document.querySelectorAll('.status-badge');
const interviewBtns = document.querySelectorAll('.int-button');
const rejectedBtns = document.querySelectorAll('.rjt-button'); 


interviewBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
     
        const targetBadge = badges[index];


        targetBadge.innerText = 'INTERVIEW';


        targetBadge.classList.remove('badge-primary');
        targetBadge.classList.add('badge-success');
        
     
        targetBadge.style.backgroundColor = '#e6fffa'; 
        targetBadge.style.color = '#047857';
    });
});

rejectedBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const targetBadge = badges[index];

        
        targetBadge.innerText = 'REJECTED';

        
        targetBadge.classList.remove('badge-primary');
        targetBadge.classList.add('badge-error');

    
        targetBadge.style.backgroundColor = '#fff5f5';
        targetBadge.style.color = '#e53e3e';
    });
});