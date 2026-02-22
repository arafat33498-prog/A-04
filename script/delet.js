const trashButtons = document.querySelectorAll('.trash-btn');
const totalDisplayElement = document.getElementById('total'); 


trashButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
        
        const card = this.closest('.job-card'); 

        if (card) {
           
            card.remove();

          
            let currentTotal = parseInt(totalDisplayElement.innerText);
            if (currentTotal > 0) {
                currentTotal--;
                totalDisplayElement.innerText = currentTotal;
            }
            refreshXofY();
        }
    });
});


function refreshXofY() {
    
    const interviewBtn = document.getElementById('interview');
    const rejectedBtn = document.getElementById('rejected');
    
    let activeTab = 'ALL';
    if (interviewBtn.classList.contains('btn-primary')) activeTab = 'INTERVIEW';
    if (rejectedBtn.classList.contains('btn-primary')) activeTab = 'REJECTED';
    
    
    if (typeof updateAvailableJobsText === "function") {
        updateAvailableJobsText(activeTab);
    }
}