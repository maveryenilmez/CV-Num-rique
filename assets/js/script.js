

addEventListener("load",app);
function app() {
	class Fortune {
		constructor(fortuneList) {
			this.text = !fortuneList ? "No fortune" : fortuneList[~~(Math.random() * fortuneList.length)];
			this.luckyNumbers = [];
			this.drawLuckyNumbers();
		}
		drawLuckyNumbers() {
			let maxDraws = 6,
				draws = maxDraws,
				maxNumber = 99,
				numberPool = [];

			// create number pool
			while (maxNumber--) {
				numberPool.unshift(maxNumber + 1);
			}
			// draw from pool, populate the lucky numbers
			while (draws--) {
				let drawn = ~~(Math.random() * numberPool.length);
				this.luckyNumbers.push(numberPool[drawn]);
				numberPool.splice(drawn,1);
			}
		}
	}

	let fcBtn = document.querySelector(".fc"),
		fortuneText = document.querySelector(".fc-fortune-text"),
		fortuneList = [
			"Ne cherche pas le bonheur crée le.",
			"Creativity is not a option. It's essential.",
			"Faire un CV est un besoin, être recruté est un art.",
			"Suivez vos rêves, ils connaissent le chemin.",
			"La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre - Albert Einstein",
			"Tous les hommes pensent que le bonheur se trouve au sommet de la montagne, alors qu'il réside dans la façon de la gravir.",
		],
		fortune = new Fortune(),

		//PROBLEMATIQUE LE COOKIES NE SOUVRE PAS.
		getFortune = function(){
			fortune = new Fortune(fortuneList);
			fortuneText.innerHTML = fortune.text;
		},
		nextState = function(){
			let elClass = this.classList,
				spawned = "spawned",
				opened = "opened";

			// open cookie
			if (elClass.contains(spawned)) {
				elClass.remove(spawned);
				elClass.add(opened);

			// new cookie
			} else {
				elClass.remove(opened);
				elClass.add(spawned);
				getFortune();
			}
		};
	
	getFortune();
	fcBtn.addEventListener("click",nextState);
}











