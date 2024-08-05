document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link');
    const coinBalance = document.getElementById('coinBalance');
    
    let currentBalance = 0;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const coins = parseInt(this.dataset.coins, 10);
            currentBalance += coins;
            
            coinBalance.textContent = currentBalance.toLocaleString();
            
        });
        function saveProfile() {
            const name = document.getElementById('nameInput').value;
            const profilePicFile = document.getElementById('profilePicInput').files[0];
             if (name) {
            localStorage.setItem('userName', name);
            }
             if (profilePicFile) {
             const reader = new FileReader();
            reader.onload = function(e) {
            localStorage.setItem('profilePic', e.target.result);
            window.location.href = 'hamster-combat.html';
            }
            reader.readAsDataURL(profilePicFile);
            } else {
            window.location.href = 'hamster-combat.html';
            }
            }
            
    });
});
