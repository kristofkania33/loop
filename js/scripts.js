//scripts.js

function drawTree(pietra) {
	for(var i=1;i<=pietra;i++) {
		var star = '';
		//rysowanie gwiazdek
		for(var j=1;j<=i;j++) {
			star = star + "*"; 
		}
		console.log(star);
	}
}

drawTree(5)