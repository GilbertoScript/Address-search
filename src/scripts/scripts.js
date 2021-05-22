/* Function to get address by CEP */

function getAddress(cep) {

	if(cep == '' || cep.length >= 9 || cep.length <= 7) {
		alert('Por favor preencha corretamente o campo CEP!')
	}

	let url = `https://viacep.com.br/ws/${cep}/json/`
	
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open('GET', url);

	xmlHttp.onreadystatechange = () => {

		if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			
			let jsonDataText = xmlHttp.responseText;
			let jsonDataObject = JSON.parse(jsonDataText)

			console.log(jsonDataObject)

			document.querySelector('#endereco').value = jsonDataObject.logradouro
			document.querySelector('#bairro').value = jsonDataObject.bairro
			document.querySelector('#cidade').value = jsonDataObject.localidade
			document.querySelector('#uf').value = jsonDataObject.uf
			document.querySelector('#ddd').value = jsonDataObject.ddd

		}

	}

	xmlHttp.send();
}