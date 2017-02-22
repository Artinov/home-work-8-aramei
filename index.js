function setText(selector, text) {
	document.querySelector(selector).innerHTML = text;
}


function setTextAll(selector, text) {
	var x = document.querySelectorAll(selector)
	for (i = 0; i < x.length; i++) {
    x[i].innerHTML = text;
	}
}


setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");