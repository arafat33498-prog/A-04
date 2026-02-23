window.currentActiveFilter = 'ALL'; 

function applyFilter(filter) {
    window.currentActiveFilter = filter;
    const jobCards = document.querySelectorAll('.job-card'); 
    const emptyMessage = document.getElementById('empty-message');
    let hasJobs = false; 

    jobCards.forEach(card => {
        const badge = card.querySelector('.status-badge');
        const status = badge ? badge.innerText.trim().toUpperCase() : "";
        
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

    const btns = [document.getElementById('all'), document.getElementById('interview'), document.getElementById('rejected')];
    btns.forEach(b => b.classList.replace('btn-primary', 'btn-outline'));
    document.getElementById(filter.toLowerCase()).classList.replace('btn-outline', 'btn-primary');
}

document.getElementById('all').addEventListener('click', () => applyFilter('ALL'));
document.getElementById('interview').addEventListener('click', () => applyFilter('INTERVIEW'));
document.getElementById('rejected').addEventListener('click', () => applyFilter('REJECTED'));