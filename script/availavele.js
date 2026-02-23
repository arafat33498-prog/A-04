const allCards = document.querySelectorAll('.job-card'); 
const jobStatText = document.getElementById('job-stat-text'); 
const totalJobsValue = document.getElementById('total').innerText;

const allBtn = document.getElementById('all');
const interviewBtn = document.getElementById('interview');
const rejectedBtn = document.getElementById('rejected');

let currentActiveTab = 'ALL'; // এটা যোগ করা হয়েছে (না হলে error দেবে)

function updateAvailableJobsText(filterName) {
    const currentFilter = filterName.toUpperCase();
    let visibleCount = 0;

    allCards.forEach(card => {
        const badge = card.querySelector('.status-badge');
        const status = badge.innerText.trim().toUpperCase();

        if (currentFilter === 'ALL' || status === currentFilter) {
            visibleCount++;
        }
    });

    if (currentFilter === 'ALL') {
        jobStatText.innerText = `${totalJobsValue} jobs`;   // ✅ ঠিক করা হয়েছে
    } else {
        jobStatText.innerText = `${visibleCount} of ${totalJobsValue} jobs`;  // ✅ ঠিক করা হয়েছে
    }
}

allBtn.addEventListener('click', () => {
    currentActiveTab = 'ALL';
    updateAvailableJobsText('ALL');
});

interviewBtn.addEventListener('click', () => {
    currentActiveTab = 'INTERVIEW';
    updateAvailableJobsText('INTERVIEW');
});

rejectedBtn.addEventListener('click', () => {
    currentActiveTab = 'REJECTED';
    updateAvailableJobsText('REJECTED');
});

const statusButtons = document.querySelectorAll('.int-button, .rjt-button');

statusButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => updateAvailableJobsText(currentActiveTab), 50);
    });
});