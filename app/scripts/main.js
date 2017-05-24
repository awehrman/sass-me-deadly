let data = "Victor Saville *Presents* Mickey Spillane\'s \n\n \"Kiss&nbsp;Me Deadly \n\n";
data = data.split(" ").reverse();

data = data.map(word => {
	if (~word.indexOf('*')) {
		return "<br/><span class=\"lower\">" + word.split('*')[1] + "</span><br/>";
	}
	return word + "<br />";
})

const credits = document.createElement("div");
credits.className = "crawl";
credits.innerHTML = data.join('');

const element = document.getElementById("deadly");
element.appendChild(credits);
