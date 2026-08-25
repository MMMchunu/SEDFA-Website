const entitycategoriesButton = document.querySelector('#entityCategories-button');
const entitycategoriesDialog = document.querySelector('#entityCategories-dialog');

entitycategoriesButton.addEventListener('click', ()=> {
	document.body.classList.add('no-scroll');
	entitycategoriesDialog.showModal();
	
});

