window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}

const activePage  = window.location.pathname
const navLinks = document.querySelectorAll('a').forEach(link =>{
	if(link.href.includes(`${activePage}`)){
		link.classList.add('active')
	}
})



const container = document.querySelector(".container")
const grid= document.querySelector(".grid")
const text = document.querySelector(".headtext")
const loader = document.querySelector(".loading")
const description= document.querySelector(".description")
function showloader(){
loader.classList.add('show')
}
function  hideloader(){
	loader.classList.add('hide')
	}
const APIURL = `https://shark-app-3o25u.ondigitalocean.app/api/thingsgallery?populate=*`;
async function thingsGallery(){
	showloader()
    const resp = await fetch(APIURL);
    const repsData =  await resp.json();
   
hideloader()

description.textContent = `${repsData.data.attributes.description}`
    text.textContent = `${repsData.data.attributes.name}`

    repsData.data.attributes.images.data.forEach((img, id) =>{
const IMAGEURL = img.attributes.url

const image = document.createElement('img')
const wrapper = document.createElement('div')
image.classList.add(`img${id +1}`)
image.src =  IMAGEURL 
image.style= " box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
wrapper.append(image)
grid.append(wrapper)

// let element = document.createElement("div");
// element.className ="grid";
// document.body.appendChild(element)

    });

    return repsData;
        
}
     thingsGallery();

