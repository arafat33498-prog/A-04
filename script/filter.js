const jobCards = document.querySelectorAll('.job-card'); 
const btnAll = document.getElementById('all');
const btnInterview = document.getElementById('interview');
const btnRejected = document.getElementById('rejected');
const emptyMessage = document.getElementById('empty-message'); 

function applyFilter(filter) {
    let hasJobs = false; 

    jobCards.forEach(card => {
        const status = card.querySelector('.status-badge').innerText.trim().toUpperCase();
        
        if (filter === 'ALL' || status === filter) {
            card.style.display = 'block';
            hasJobs = true; 
        } else {
            card.style.display = 'none';
        }
    });

    
    if (hasJobs) {
        emptyMessage.classList.add('hidden'); 
        emptyMessage.classList.remove('flex');
    } else {
        emptyMessage.classList.remove('hidden'); 
        emptyMessage.classList.add('flex');      
    }

    [btnAll, btnInterview, btnRejected].forEach(b => b.classList.replace('btn-primary', 'btn-outline'));
    document.getElementById(filter.toLowerCase()).classList.replace('btn-outline', 'btn-primary');
}


btnAll.addEventListener('click', () => applyFilter('ALL'));
btnInterview.addEventListener('click', () => applyFilter('INTERVIEW'));
btnRejected.addEventListener('click', () => applyFilter('REJECTED'));