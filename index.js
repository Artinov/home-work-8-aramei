function setText(selector, text) {
	document.querySelector(selector).innerHTML = text;
}


function setTextAll(selector, text) {
	var x = document.querySelectorAll(selector)
	for (i = 0; i < x.length; i++) {
    x[i].innerHTML = text;
	}
}

function setTextAllForEach(selector, text) {
	var x = document.querySelectorAll(selector)
	var element = x[i];
	x.forEach(function(element) {
		element.innerHTML = text;
	})
}


setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");
setTextAllForEach("div .block a", "rewrited on forEach");