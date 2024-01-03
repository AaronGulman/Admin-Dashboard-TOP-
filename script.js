let gitHub = document.getElementById('gitHub');

gitHub.addEventListener('click' , () =>{
	let gitHubIcon = document.createElement('img')
	gitHubIcon.src='./assets/github-mark-white.png';
	gitHubIcon.setAttribute('class','icon')
	gitHubIcon.style.opacity = '0';
	gitHub.parentNode.appendChild(gitHubIcon);
	gitHubIcon.style.transition = 'opacity ease-out 1s';
	gitHubIcon.offsetHeight;
	gitHubIcon.style.opacity = '1';
	gitHub.remove();
})