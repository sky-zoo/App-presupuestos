class InterfazDeUsuario{

	agregarGasto(gasto){
		const listaGastos = document.getElementById("");


	}

	borrarGasto(){

	}

}

class Gastos{

	constructor(titulo, descripcion, precio){
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.precio = precio;
	}
	
}

document.getElementById('formulario').addEventListener('submit', function(e){
	e.preventDefault();

	let titulo = document.getElementById("titulo").value;
	let descripcion = document.getElementById("desc").value;
	let precio = document.getElementById("precio").value;

	const gasto = new Gastos(titulo, descripcion, precio);

	console.log(gasto);

});