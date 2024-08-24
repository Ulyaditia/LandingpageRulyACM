const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);

	// Jika scroll lebih dari 0 (scroll ke bawah), tambahkan class 'scrolled' ke navlist
    if (window.scrollY > 0) {
        navlist.classList.add("tes");
        logo.classList.add("text-white");
    } else {
        navlist.classList.remove("tes");
		logo.classList.remove("text-white");

    }
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let logo = document.querySelector('.text-logo');
// let navlist1 = document.querySelector('#tes');
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};
window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};
const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})
// Add this to your existing script.js

document.addEventListener('DOMContentLoaded', function () {
  const serviceBoxes = document.querySelectorAll('.sub-box');

  serviceBoxes.forEach((box) => {
    box.addEventListener('click', function () {
      serviceBoxes.forEach((box) => box.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
	const clientCards = document.querySelectorAll(".client-card");
  
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add("show");
		}
	  });
	});
  
	clientCards.forEach(card => {
	  observer.observe(card);
	});
  });
  function scrollToService() {
    document.getElementById('service').scrollIntoView({ behavior: 'smooth' });
  }

// <--klien-->

// layanan
document.addEventListener('DOMContentLoaded', function() {
	const sections = document.querySelectorAll('.scrollspy-example');
  
	window.addEventListener('scroll', function() {
	  sections.forEach((section) => {
		const sectionTop = section.getBoundingClientRect().top;
		const sectionHeight = section.offsetHeight;
  
		if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
		  section.classList.add('visible');
		}
	  });
	});
  });

//   scroll //
document.querySelector('a[href="#home"]').addEventListener('click', function(event) {
	event.preventDefault();
	document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
  });
  


  
sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'bottom'})
sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

