var navItem = document.querySelectorAll('.tab-nav li');
var navDeco = document.querySelector('.tab-nav li.bgbox');
var tabPanel = document.querySelectorAll('.tab-panel');

for (var i = 0; i < navItem.length; i++) {
	navItem[i].addEventListener('click', function () {
		/* (이벤트 이름, 실행 해당 함수) */
        var clickIndex = this.dataset.index;
        navDeco.style.left = clickIndex * 120 + 'px';
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('.current').classList.remove('current');
        tabPanel[clickIndex].classList.add('current');   
	});   
}