const $ = document.querySelector.bind(document),
	$$ = document.querySelectorAll.bind(document);
if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	document.body.innerHTML =
		"<div id='mobileNotification'>This website does not support mobile devices! Please use your computer instead</div>";
} else {
	let isCaps = false;
	const key = $("#key"),
		keyCode = $("#keyCode"),
		code = $("#code");
	document.onkeydown = (e) => {
		e.preventDefault();
		key.innerHTML = e.key == " " ? e.code : e.key;
		keyCode.innerHTML = e.keyCode;
		code.innerHTML = e.code;

		if (e.shiftKey) $("#Shift").classList.add("active");
		if (e.ctrlKey) $("#Ctrl").classList.add("active");
		if (e.altKey) $("#Alt").classList.add("active");
		if (e.keyCode == 20) {
			$("#capsLock").classList.add("active");
			isCaps = !isCaps;
		}
		if (e.keyCode == 91) $("#Meta").classList.add("active");
	};
	document.onkeyup = (e) => {
		if (e.key == "Shift") $("#Shift").classList.remove("active");
		if (e.key == "Control") $("#Ctrl").classList.remove("active");
		if (e.key == "Alt") $("#Alt").classList.remove("active");
		isCaps
			? $("#capsLock").classList.add("active")
			: $("#capsLock").classList.remove("active");
	};
}
const copy = (el) => {
	$("#notification").innerText = `Copied ${el.innerText}`;
	$("#notification").classList.add("show");
	navigator.clipboard.writeText(el.innerText);
	let timeout = setTimeout(() => {
		$("#notification").classList.remove("show");
		clearTimeout(timeout);
	}, 1000);
};
