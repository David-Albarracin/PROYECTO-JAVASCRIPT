import './../app/main/header.js'
import './../app/main/sidebar.js'
import './../app/main/content.js'

import './../app/components/addComponent.js'
import './../app/components/assignationComponent.js'
import './../app/components/delComponent.js'
import './../app/components/editComponent.js'
import './../app/components/searchComponent.js'
import './../app/components/tableComponent.js'



// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.stopPropagation();
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})


// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');
const logo = document.querySelector('#imgLogo');
const content = document.querySelector('#content');

if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-';
        logo.src = "./img/logo.png";
       
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
        logo.src = "./img/logoWhite.png";
	})
}
toggleSidebar.addEventListener('click', function (e) {
	e.stopPropagation();
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
            logo.src = "./img/logo.png";
			content.classList.add('content-record')
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
            logo.src = "./img/logoWhite.png";
            content.classList.remove('content-record');
		})
	}
})
sidebar.addEventListener('mouseleave', function (e) {
	e.stopPropagation();
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
            logo.src = "./img/logo.png";
            content.classList.add('content-record');
		})
	}
})
sidebar.addEventListener('mouseenter', function (e) {
	e.stopPropagation();
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
            logo.src = "./img/logoWhite.png";
            content.classList.remove('content-record');
		})
	}
})
// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');
imgProfile.addEventListener('click', function (e) {
	e.stopPropagation();
	dropdownProfile.classList.toggle('show');
})


// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');
allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		e.stopPropagation();
		menuLink.classList.toggle('show');
	})
})
window.addEventListener('click', function (e) {
	e.stopPropagation();
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})
// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');
allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})