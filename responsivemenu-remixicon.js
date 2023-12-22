const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuIcon = document.querySelector('i');

menuBtn.addEventListner(click , ()=>{
	navLiks.classList.toggle('open');
	const isOpen = navLinks.classList.contains('open');
	meuIcon.setAttribute(
	'class' , isOpen ? 'one' : two
	)
	
})
