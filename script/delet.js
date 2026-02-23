document.querySelectorAll('.trash-btn').forEach((btn) => {
    btn.addEventListener('click', function() {
        const card = this.closest('.job-card'); 
        if (card) {
            card.remove();
            const totalDisplay = document.getElementById('total');
            let currentTotal = parseInt(totalDisplay.innerText);
            if (currentTotal > 0) {
                totalDisplay.innerText = --currentTotal;
            }
            
            
            if (window.currentActiveFilter === 'ALL') {
                document.getElementById('job-stat-text').innerText = `${currentTotal} jobs`;
            } else {
                if (typeof updateAvailableJobsText === "function") updateAvailableJobsText(window.currentActiveFilter);
            }
            if (typeof applyFilter === "function") applyFilter(window.currentActiveFilter);
        }
    });
});