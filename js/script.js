const sidebarToggleBtn = document.querySelector('#menu__toggle');
const menuIcon = document.querySelector('.sidebar');

sidebarToggleBtn.addEventListener('click', function(e){
    menuIcon.classList.toggle('sidebar--mobile-active');
        console.log(e.target)
})