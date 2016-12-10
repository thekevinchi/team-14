let inputs = ["am","af","bm","bf","cm","cf","dm","df","em","ef","fm","ff","gm","gf","hm","hf","im","if","jm","jf","km","kf","lm","lf","mm","mf","nm","nf","om","of","pm","pf", "Vm", "Vf"]
let inputHash = {}
for (let i = 0; i < inputs.length; i++){
	inputHash[inputs[i]] = document.getElementById(inputs[i])
}

let labels = ["Wm","Wf","Ym","Yf","Xm","Xf","Zm","Zf","Fm","Ff"]
let labelsHash = {}
for (let i = 0; i < labels.length; i++){
	labelsHash[labels[i]] = document.getElementById(labels[i])
}

function sumValues(fieldsToGrab, isMale) {
	let total = 0
	for (let i = 0; i < fieldsToGrab.length; i++) {
		if (isMale) {			
			total += parseInt(inputHash[fieldsToGrab[i] + "m"].value)
		} else {
			total += parseInt(inputHash[fieldsToGrab[i] + "f"].value)
		}
	}
	return total
}

function updateAllLabels(){
	labelsHash["Wm"].innerText = sumValues("abcde", true)
	labelsHash["Wf"].innerText = sumValues("abcde", false)

	labelsHash["Xm"].innerText = sumValues("hijklm", true)
	labelsHash["Xf"].innerText = sumValues("hijklm", false)

	labelsHash["Ym"].innerText = parseInt(labelsHash["Wm"].innerText) + sumValues("fg", true)
	labelsHash["Yf"].innerText = parseInt(labelsHash["Wf"].innerText) + sumValues("fg", false)

	labelsHash["Zm"].innerText = parseInt(labelsHash["Xm"].innerText) + sumValues("o", true)
	labelsHash["Zf"].innerText = parseInt(labelsHash["Xf"].innerText) + sumValues("o", false)

	labelsHash["Fm"].innerText = sumValues("V", true) + parseInt(labelsHash["Ym"].innerText) - parseInt(labelsHash["Zm"].innerText)
	labelsHash["Ff"].innerText = sumValues("V", false) + parseInt(labelsHash["Yf"].innerText) - parseInt(labelsHash["Zf"].innerText)
}

$(document).ready(() => {
	$(".measure_arrow").on("click", (e) => {
		let numberInput = $(e.currentTarget).parent().siblings(".measure_input")[0]
		let inputValue
		if (numberInput.value == "") {
			inputValue = 0
		} else {
			inputValue = parseInt(numberInput.value)
		}
		if ($(e.currentTarget).hasClass("up")) {
			inputValue++
		} else {
			inputValue--
		}
		if (inputValue < 0) {
			inputValue = 0
		}
		numberInput.value = inputValue
		updateAllLabels()
	})

	$(".stockitem").each((item)=>{
		
	})
})















