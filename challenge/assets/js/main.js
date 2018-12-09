const url = "https://api.github.com/users/cmoutella"
const ul = document.getElementById('repo-list')

//Create element
function createNode(element) {
	return document.createElement(element)
}

//Append element to it's parent
function append(parent, el) {
	return parent.appendChild(el)
}

//Get the list of user's repositories
function getRepositories(url) {
	fetch(url)
		.then(resp => resp.json())
		.then(function(data) {
			let repos = data.results
			return repos.map(function(repo) {
				let li = createNode('li')
				li.innerHTML = repo.name
				append(ul, li)
			})
		})
		.catch(function(error) {
			console.log(error)
		})
	document.querySelector('.qcx-repo').classList.toggle('qcx-repo--active')
}

//Get the list of user's favorite repositories
function getFavorites(url) {
	fetch(url)
		.then(resp => resp.json())
		.then(function(data) {
			let faves = data.results
			return faves.map(function(favorite) {
				let li = createNode('li')
				li.innerHTML = favorite.name
				append(ul, li)
			})
		})
		.catch(function(error) {
			console.log(error)
		})
	document.querySelector('.qcx-repo').classList.toggle('qcx-repo--active')
}

//Button to display list of user's repositories
document
	.getElementById('btn_repositories')
	.addEventListener('click', () =>
		getRepositories(
			'https://api.github.com/users/cmoutella/repos?&per_page=100'
		)
	)

//Button to display list of user's favorite repositories
document
	.getElementById('btn_favorites')
	.addEventListener('click', () =>
		getFavorites('https://api.github.com/users/cmoutella/starred?&per_page=100')
	)

//Show User's Data
export const fetchData = (url) => {
	let userData;
	fetch(url)
	.then(resp => resp.json())
	.then(data => (userData = data))
	.then(() => {
		document.querySelector(".qcx-card__item:nth-of-type(1)").innerHTML = 'Repositórios: ' + userData.public_repos
		document.querySelector(".qcx-card__item:nth-of-type(2)").innerHTML = 'Seguidores: ' + userData.followers
		document.querySelector(".qcx-card__item:nth-of-type(3)").innerHTML = 'Seguindo: ' + userData.following
	})
}

fetchData(url);