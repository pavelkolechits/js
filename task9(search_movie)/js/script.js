let xhr = new XMLHttpRequest();
let input = document.querySelector('#input');
let select = document.querySelector('#select');

function creatDiv(parrentTag, classNewDiv) {
	let childDiv = document.createElement('div');
	let parrentDiv = document.querySelector(parrentTag);
	parrentDiv.append(childDiv);
	childDiv.classList.add(classNewDiv);
}

creatDiv('.container', 'movie');

let arrPosters;
let arrImd = [];

function addPoster() {
	for (let i = 0; i < arr.length; i++) {
		creatDiv('.movie', 'film');
		let img = document.createElement('img');
		let div = document.createElement('div');
		arrPosters = document.querySelectorAll('.film');
		let obj = { [arr[i].Title]: arr[i].imdbID };

		arrImd.push(obj);
		arrPosters[i].append(img);
		arrPosters[i].append(div);
		img.src = arr[i].Poster;
		div.innerHTML = `<span class="type">${arr[i].Type}</span><span class="title">${arr[i].Title}</span><button class="plot">Details</button><span class="year">${arr[i].Year}</span>`;
		img.classList.add('poster');
		div.classList.add('info');
	}
}

let arr;
function searchMovie() {
	let movie;
	let type = select.value;
	movie = input.value;

	xhr.open('get', `http:www.omdbapi.com/?s=${movie}&type=${type}&plot=short&apikey=f19c5d9a&page=1`);
	xhr.send();

	xhr.onload = function () {
		arr = JSON.parse(xhr.response).Search;
		document.querySelector('.movie').innerHTML = '';
		addPoster();
		console.log(JSON.parse(xhr.response));
	};
}
let arr2;
let imdbID;
input.value = '';
function getDetails() {
	let xhr2 = new XMLHttpRequest();
	xhr2.open('get', `http:www.omdbapi.com/?i=${imdbID}&plot=full&apikey=f19c5d9a`);
	xhr2.send();
	xhr2.onload = function () {
		arr2 = JSON.parse(xhr2.response);
		console.log(arr2.Poster);

		let imgPoster = document.createElement('img');
		show.append(imgPoster);
		imgPoster.src = arr2.Poster;
		imgPoster.classList.add('detailsposter');
		creatDiv('.mod', 'detailsinfo');
		let modInner = document.querySelector('.detailsinfo');
		                
	};
}
let show = document.querySelector('#showInfo');
let switchDetails = true;
let titleFilm;
function showDetails() {
	if (switchDetails == false) {
		show.classList.add('plotfull');
		show.classList.remove('mod');
		switchDetails = true;
	}
	if (event.target.innerHTML == 'Details') {
		if (switchDetails) {
			titleFilm = event.path[1].childNodes[1].innerHTML;
			arrImd.forEach((item) => {
				for (let key in item) {
					if (key == titleFilm) {
						imdbID = item[key];
					}
				}
			});
			getDetails();

			show.classList.remove('plotfull');
			show.classList.add('mod');
			switchDetails = false;
			show.innerHTML = '';
		}
	}
}

document.addEventListener('click', showDetails);
