const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const navLinks = document.querySelectorAll('.nav__link')
const body = document.querySelector('body')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('sticky-body')

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			navBtn.classList.remove('is-active')
			navMobile.classList.remove('nav-mobile--active')
		})
	})
}

navBtn.addEventListener('click', handleNav,)


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()


