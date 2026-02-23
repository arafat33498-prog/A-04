
const interviewBtns = document.querySelectorAll('.int-button');
const rejectedBtns = document.querySelectorAll('.rjt-button');

interviewBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const badges = document.querySelectorAll('.status-badge');
        badges[index].innerText = 'INTERVIEW';
        badges[index].style.backgroundColor = '#e6fffa'; 
        badges[index].style.color = '#047857';

        if (typeof applyFilter === "function") applyFilter(window.currentActiveFilter);
        if (typeof updateAvailableJobsText === "function") updateAvailableJobsText(window.currentActiveFilter);
    });
});

rejectedBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const badges = document.querySelectorAll('.status-badge');
        badges[index].innerText = 'REJECTED';
        badges[index].style.backgroundColor = '#fff5f5';
        badges[index].style.color = '#e53e3e';

        if (typeof applyFilter === "function") applyFilter(window.currentActiveFilter);
        if (typeof updateAvailableJobsText === "function") updateAvailableJobsText(window.currentActiveFilter);
    });
});