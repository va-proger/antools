
const btns = document.querySelectorAll('.btn');
const modalsOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
			el.classList.remove('modal--visibality');
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visibality');
		modalsOverlay.classList.add('modal-overlay--visibality');

	});
});
modalsOverlay.addEventListener('click', (e) => {
	if (e.target == modalsOverlay) {
		modalsOverlay.classList.remove('modal-overlay--visibality');
		modals.forEach((el) => {
			el.classList.remove('modal--visibality');
		});
	}


});
const closeModal = document.querySelectorAll('.modal--close');
closeModal.forEach((el) => {
	el.addEventListener('click', (e) => {
		let close = e.currentTarget.getAttribute('data-close');
		if (close == 'close') {
			modalsOverlay.classList.remove('modal-overlay--visibality');
			modals.forEach((el) => {
				el.classList.remove('modal--visibality');
			});
		}
	});

});