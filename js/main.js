/*
var navItems = document.querySelectorAll('.tab-nav li');
var navDeco = document.querySelector('.tab-nav span');
var tabPanel = document.querySelectorAll('.tab-panel');

for(var i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener('click', function (e) {
		navDeco.style.left = (120 * e.currentTarget.dataset.index) + 'px';
		document.querySelector('.active').classList.remove('active');
		document.querySelector('.current').classList.remove('current');
		tabPanel[e.currentTarget.dataset.index].classList.add('current');
		e.currentTarget.classList.add('active');
	});	
}
*/
var navItems = $('.tab-nav li'),
    navDeco = $('.tab-nav span'),
    tabPanel = $('.tab-panel');

navItems.click(function(){
    var idx = $(this).data('index');
    navDeco.css('left', 120 * idx + 'px');
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.current').removeClass('current');
    tabPanel.eq(idx).addClass('current');
});
