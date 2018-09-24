const init = function () {
	let clickMeButton = document.createElement('button');
	clickMeButton.id = 'btn';
	clickMeButton.innerHTML = 0;

	clickMeButton.addEventListener("click", () => {
		/* This changes the button's label */
		btn.innerHTML = parseInt(btn.innerHTML) + 1;
	});

	document.body.appendChild(clickMeButton);

};
init();