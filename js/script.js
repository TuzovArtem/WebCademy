const sidebarToggleBtn = document.querySelector('#menu__toggle');
const menuIcon = document.querySelector('.sidebar');
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.hidden-card');
const widgetTitles = document.querySelectorAll('.widget__title');
const widgets = document.querySelectorAll('.widget');


sidebarToggleBtn.addEventListener('click', function(e){
    menuIcon.classList.toggle('sidebar--mobile-active');
        console.log(e.target)
})

btnShowMoreCards.addEventListener('click', function(e){
    hiddenCards.forEach( function(item){
        item.classList.remove('hidden-card')
    })
})


widgets.forEach(function(widget){
    widget.addEventListener('click', function(e){
        if(e.target.classList.contains('widget__title') ){
            e.target.classList.toggle('widget__title--active');
            widget.querySelector('.widget__body').classList.toggle('widget__body--hidden')
        }
    });
});

// Location - Кнопка любая

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

checkBoxAny.addEventListener('change', function(){
    
    if(checkBoxAny.checked){
        topLocationCheckboxes.forEach(function(item){
        item.checked = false;
    })
    checkBoxAny.checked = true;
    } 
})
topLocationCheckboxes.forEach(function(item) {
        item.addEventListener('change', function(){
            checkBoxAny.checked = false;
        })
    })

//Widget show more

const showMoreWidgetButton = document.querySelector('.widget__show-hidden');
const moreWidgets = document.querySelectorAll('.checkbox--hidden');

    showMoreWidgetButton.addEventListener('click', function(e){
        console.log(e.target);
        moreWidgets.forEach(function(item){
            item.classList.remove('checkbox--hidden');
        })
    })