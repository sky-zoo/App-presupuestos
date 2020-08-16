class InterfazDeUsuario{

	agregarGasto(gasto){
		const listaGastos = document.getElementById("listaGastos");
		const nuevoGasto = document.createElement("li");
		nuevoGasto.setAttribute("class", "item");
		const contenido = `
			<p class="ingreso-datos__datos__b">Titulo: ${gasto.titulo}</p>
			<p class="ingreso-datos__datos__b">Descripcion: ${gasto.descripcion}</p>
			<p class="ingreso-datos__datos__b">Precio: $${gasto.precio}</p>
		`;

		nuevoGasto.innerHTML = contenido;
		listaGastos.appendChild(nuevoGasto);
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

	const UI = new InterfazDeUsuario();
	UI.agregarGasto(gasto);

});