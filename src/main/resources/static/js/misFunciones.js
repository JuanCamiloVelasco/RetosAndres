//METODOS Cabin
function Cargar(){
	$.ajax({    
		url : 'http://144.22.58.129:8080/api/Cabin/all',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
			console.log(respuesta);
			$("#TablaP").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> ID </th>';
			Tablaprin += '<th> BRAND </th>';
			Tablaprin += '<th> ROOMS </th>';
			Tablaprin += '<th> NAME </th>';
			Tablaprin += '<th> DESCRIPCION </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';
			for (i=0; i<respuesta.length; i++){
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
				Tablaprin += '<td>'+ respuesta[i].id+ '</td>';
                                Tablaprin += '<td>'+ respuesta[i].brand+ '</td>';
				Tablaprin += '<td>'+ respuesta[i].rooms+ '</td>'; 		
				Tablaprin += '<td>'+ respuesta[i].name+ '</td>'; 						 						 
				Tablaprin += '<td>'+ respuesta[i].description+ '</td>';
				Tablaprin += '<td><button onclick="editarRegistro('+respuesta[i].id+')">Detalle</button>';
				Tablaprin += '<td><button onclick="Eliminar('+respuesta[i].id+')">Eliminar</button>';	
				Tablaprin += '</tr>';
				Tablaprin += '</tbody>';
			}
			Tablaprin += '</table>';
			$("#TablaP").append(Tablaprin);
		}
	});
}

function ingresarDatos(){
	var datos={
		id:$("#id").val(),
		brand:$("#brand").val(),
		rooms:$("#rooms").val(),		
		name:$("#name").val(),
                description:$("#description").val()
	};
	if (datos.brand=='' || datos.rooms=='' || datos.name=='' || datos.description==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson=JSON.stringify(datos);
	$.ajax({
	url:'http://144.22.58.129:8080/api/Cabin/save',
	data:datosJson,
	type:'POST',
	dataType: 'json',
	contentType: "application/json; charset=utf-8",
	statusCode: {
		201: function () {
			alert("La cabaña se agrego exitosamente");
			Cargar();
		}
	}
	
});
limpiarCampos();
}}
function editarRegistro (id){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Cabin/'+id,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    success : function(respuesta) {
		console.log(respuesta); 
			$("#id").val(respuesta.id);
			$("#brand").val(respuesta.brand);
			$("#rooms").val(respuesta.rooms);			
			$("#name").val(respuesta.name);
			$("#description").val(respuesta.description);
			$("#id").attr('disabled', true);
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}
function actualizar(){
	var datos={
		id:$("#id").val(),
		brand:$("#brand").val(),
		rooms:$("#rooms").val(),		
		name:$("#name").val(),
                description:$("#description").val()
	};
	if (datos.brand=='' || datos.rooms=='' || datos.name=='' || datos.description==''){
		alert("Todos los campos son obligatorios");
	}

	else{
	let datosJson = JSON.stringify(datos); 
	$.ajax(    
    'http://144.22.58.129:8080/api/Cabin/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    
    statusCode : {
		
		201 :  function() {
			alert("La cabaña se actualizo exitosamente");
			$("#id").attr('disabled', false);
        	Cargar();	
			}
		}
	});
	limpiarCampos();
}}
function Eliminar(id){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Cabin/'+id,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    statusCode: {
                204: function () {
                    alert("La cabaña se elimino exitosamente!");
					Cargar();
                }
            }
        });}

    
    
function limpiarCampos(){
        $("#id").val(''),
        $("#brand").val(''),
        $("#rooms").val(''),
        $("#name").val(''),
        $("#description").val('')
}
function besbloquearM(){
	$("#id").attr('disabled', false);
	$("#messageText").attr('disabled', false);
	limpiarCamposM();
}
//METODOS CLIENTES
function CargarC(){
	$.ajax({    
		url : 'http://144.22.58.129:8080/api/Client/all',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
			console.log(respuesta);
			$("#TablaC").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> ID </th>';
                        Tablaprin += '<th> CORREO </th>';
                        Tablaprin += '<th> CONTRASEÑA </th>';
			Tablaprin += '<th> NOMBRE </th>';
			Tablaprin += '<th> EDAD </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';
			for (i=0; i<respuesta.length; i++){
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
				Tablaprin += '<td>'+ respuesta[i].idClient+ '</td>'; 		
				Tablaprin += '<td>'+ respuesta[i].email+ '</td>'; 		
				Tablaprin += '<td>'+ respuesta[i].password+ '</td>'; 		
				Tablaprin += '<td>'+ respuesta[i].name+ '</td>'; 		 		
				Tablaprin += '<td>'+ respuesta[i].age+ '</td>'; 		 
				Tablaprin += '<td><button onclick="editarRegistroC('+respuesta[i].idClient+')">Detalle</button>';
				Tablaprin += '<td><button onclick="eliminarC('+respuesta[i].idClient+')">Eliminar</button>';	
				Tablaprin += '</tr>';	
				Tablaprin += '</tbody>';
			}
			Tablaprin += '</table>';
			$("#TablaC").append(Tablaprin);
		},
	});
}
function ingresarDatosC(){
	var datos={
		idClient:$("#idClient").val(),
                email:$("#email").val(),
                password:$("#password").val(),
		name:$("#name").val(),
		age:$("#age").val()
	};
	if (datos.name=='' || datos.email=='' || datos.age=='' || datos.password==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson=JSON.stringify(datos);
	$.ajax({
	url:'http://144.22.58.129:8080/api/Client/save',
	data:datosJson,
	type:'POST',
	dataType: 'json',
	contentType: "application/json; charset=utf-8",
	statusCode: {
		201: function () {
			alert("El cliente se agrego exitosamente");
			CargarC();	
		}
                }
});
limpiarCamposC();
}}
function editarRegistroC(idClient){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Client/'+idClient,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    success : function(respuesta) {
		console.log(respuesta); 
			$("#idClient").val(respuesta.idClient);
                        $("#email").val(respuesta.email);
                        $("#password").val(respuesta.password);
			$("#name").val(respuesta.name);			
			$("#age").val(respuesta.age);
			$("#idClient").attr('disabled', true);
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}
function actualizarC(){
	var datos={
		idClient:$("#idClient").val(),
                email:$("#email").val(),
                password:$("#password").val(),
		name:$("#name").val(),
		age:$("#age").val()
	};
	if (datos.name=='' || datos.email=='' || datos.age=='' || datos.password==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson = JSON.stringify(datos); 
	$.ajax(    
    'http://144.22.58.129:8080/api/Client/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    
    statusCode : {
		
		201 :  function() {
			alert("El cliente se actualizo exitosamente");
			$("#id").attr('disabled', false);
        	CargarC();	
			}
		}
	});
	limpiarCamposC();
}}
function eliminarC(idClient){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Client/'+idClient,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    statusCode: {
                204: function () {
                    alert("El cliente se elimino exitosamente!");
					CargarC();
                }
            }
        });}
    
function limpiarCamposC(){
        $("#idClient").val(''),
        $("#name").val(''),
        $("#email").val(''),
        $("#age").val(''),
        $("#password").val('')
}
function besbloquearC(){
	$("#id").attr('disabled', false);
}
//METODOS MENSAJES
function CargarM(){
	$.ajax({    
		url : 'http://144.22.58.129:8080/api/Message/all',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
			console.log(respuesta);
			$("#TablaM").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> ID </th>';
			Tablaprin += '<th> MENSAJE </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';
			for (i=0; i<respuesta.length; i++){
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
				Tablaprin += '<td>'+ respuesta[i].idMessage+ '</td>'; 		
				Tablaprin += '<td>'+ respuesta[i].messageText+ '</td>'; 				 				 
				Tablaprin += '<td><button onclick="editarRegistroM('+respuesta[i].idMessage+')">Detalle</button>';
				Tablaprin += '<td><button onclick="eliminarM('+respuesta[i].idMessage+')">Eliminar</button>';	
				Tablaprin += '</tr>';	
				Tablaprin += '</tbody>';
			}
			Tablaprin += '</table>';
			$("#TablaM").append(Tablaprin);
		},
	});
}
function ingresarDatosM(){
	var datos={
		idMessage:$("#idMessage").val(),
		messageText:$("#messageText").val()
	};
	if (datos.messagetext=='' || datos.partyroom=='' || datos.client==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson=JSON.stringify(datos);
	$.ajax({
	url:'http://144.22.58.129:8080/api/Message/save',
	data:datosJson,
	type:'POST',
	dataType: 'json',
	contentType: "application/json; charset=utf-8",
	statusCode: {
		201: function () {
			alert("El mensaje se agrego exitosamente");
			CargarM();	
		}
		}
});
limpiarCamposM();
}}
function editarRegistroM(idMessage){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Message/'+idMessage,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    success : function(respuesta) {
		console.log(respuesta); 
			$("#idMessage").val(respuesta.idMessage);
			$("#messageText").val(respuesta.messageText);
			$("#idMessage").attr('disabled', true);
			$("#messageText").attr('disabled', true);
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}

function eliminarM(idMessage){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Message/'+idMessage,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    statusCode: {
                204: function () {
                    alert("El mensaje se elimino exitosamente!");
					CargarM();
                }
            }
        });}
function limpiarCamposM(){
    $("#idMessage").val(''),
    $("#messageText").val('')
}
function besbloquearM(){
	$("#idMessage").attr('disabled', false);
	$("#messageText").attr('disabled', false);
	limpiarCamposM();
}

//METODOS CATEGORY
function CargarCat(){
	$.ajax({    
		url : 'http://144.22.58.129:8080/api/Category/all',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
			console.log(respuesta);
			$("#TablaP").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> ID </th>';
			Tablaprin += '<th> NOMBRE </th>';
			Tablaprin += '<th> DESCRIPCION </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';
			for (i=0; i<respuesta.length; i++){
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
				Tablaprin += '<td>'+ respuesta[i].id+ '</td>';
                                Tablaprin += '<td>'+ respuesta[i].name+ '</td>';						 						 
				Tablaprin += '<td>'+ respuesta[i].description+ '</td>';
				Tablaprin += '<td><button onclick="editarRegistroCat('+respuesta[i].id+')">Detalle</button>';
				Tablaprin += '<td><button onclick="eliminarCat('+respuesta[i].id+')">Eliminar</button>';	
				Tablaprin += '</tr>';
				Tablaprin += '</tbody>';
			}
			Tablaprin += '</table>';
			$("#TablaP").append(Tablaprin);
		}
	});
}

function ingresarDatosCat(){
	var datos={
		id:$("#id").val(),		
		name:$("#name").val(),
                description:$("#description").val(),
	};
	if (datos.name=='' || datos.description==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson=JSON.stringify(datos);
	$.ajax({
	url:'http://144.22.58.129:8080/api/Category/save',
	data:datosJson,
	type:'POST',
	dataType: 'json',
	contentType: "application/json; charset=utf-8",
	statusCode: {
		201: function () {
			alert("La categoria se agrego exitosamente");
			CargarCat();
		}
	}
	
});
limpiarCamposCat();
}}
function editarRegistroCat (id){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Category/'+id,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    success : function(respuesta) {
		console.log(respuesta); 
			$("#id").val(respuesta.id);		
			$("#name").val(respuesta.name);
			$("#description").val(respuesta.description);
			$("#id").attr('disabled', true);
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}
function actualizarCat(){
	var datos={
		id:$("#id").val(),	
		name:$("#name").val(),
                description:$("#description").val()
	};
	if (datos.id=='' || datos.name=='' || datos.description==''){
		alert("Todos los campos son obligatorios");
	}
	
	else{
	let datosJson = JSON.stringify(datos); 
	$.ajax(    
    'http://144.22.58.129:8080/api/Category/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    
    statusCode : {
		
		201 :  function() {
			alert("La categoria se actualizo exitosamente");
			$("#id").attr('disabled', false);
        	CargarCat();	
			}
		}
	});
	limpiarCamposCat();
}}
function eliminarCat(id){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Category/'+id,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    statusCode: {
                204: function () {
                    alert("La categoria se elimino exitosamente!");
					CargarCat();
                }
            }
        });}
function limpiarCamposCat(){
        $("#id").val(''),
        $("#name").val(''),
        $("#description").val('')
}

//METODOS Reservas
function CargarRes(){
	$.ajax({    
		url : 'http://144.22.58.129:8080/api/Reservation/all',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
			console.log(respuesta);
			$("#TablaP").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> ID </th>';
			Tablaprin += '<th> FECHA INICIO </th>';
			Tablaprin += '<th> FECHA DEVOLUCION </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';
			for (i=0; i<respuesta.length; i++){
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
				Tablaprin += '<td>'+ respuesta[i].idReservation+ '</td>';
                                Tablaprin += '<td>'+ respuesta[i].startDate+ '</td>';						 						 
				Tablaprin += '<td>'+ respuesta[i].devolutionDate+ '</td>';
				Tablaprin += '<td><button onclick="eliminarRes('+respuesta[i].idReservation+')">Eliminar</button>';	
				Tablaprin += '</tr>';
				Tablaprin += '</tbody>';
			}
			Tablaprin += '</table>';
			$("#TablaP").append(Tablaprin);
		}
	});
}

function ingresarDatosRes(){
	var datos={
		idReservation:$("#idReservation").val(),		
		startDate:$("#startDate").val(),
                devolutionDate:$("#devolutionDate").val()
	};
	if (datos.startDate=='' || datos.devolutionDate=='' || datos.partyroom=='' || datos.client=='' || datos.score==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson=JSON.stringify(datos);
	$.ajax({
	url:'http://144.22.58.129:8080/api/Reservation/save',
	data:datosJson,
	type:'POST',
	dataType: 'json',
	contentType: "application/json; charset=utf-8",
	statusCode: {
		201: function () {
			alert("La reserva se registro exitosamente");
			CargarRes();
		},
		555: function(){
			validarexistenciaRes(datos.id);
		}
	}
	
});
limpiarCamposRes();
}}

function eliminarRes(idReservation){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Reservation/'+idReservation,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    statusCode: {
                204: function () {
                    alert("La reserva se elimino exitosamente!");
					CargarRes();
                }
            }
        });}
    function Reporte1(){
    $.ajax({    
		url : 'http://144.22.58.129:8080/api/Reservation/report-status',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
                    
			console.log(respuesta);
			$("#TablaP").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> Completed </th>';
			Tablaprin += '<th> Cancelled </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';		
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
				Tablaprin += '<td>'+ respuesta.completed+ '</td>';
                                Tablaprin += '<td>'+ respuesta.cancelled+ '</td>';						 						 
				Tablaprin += '</tr>';
				Tablaprin += '</tbody>';
			Tablaprin += '</table>';
			$("#TablaP").append(Tablaprin);
                        
		}
	});
 }

function Cargar2(){
	$.ajax({    
		url : 'http://144.22.58.129:8080/api/Reservation/report-dates/2020-01-01/2020-12-31',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
			console.log(respuesta);
			$("#TablaP").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> ID </th>';
			Tablaprin += '<th> FECHA INICIO </th>';
			Tablaprin += '<th> FECHA DEVOLUCION </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';
			for (i=0; i<respuesta.length; i++){
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
				Tablaprin += '<td>'+ respuesta[i].idReservation+ '</td>';
                                Tablaprin += '<td>'+ respuesta[i].startDate+ '</td>';						 						 
				Tablaprin += '<td>'+ respuesta[i].devolutionDate+ '</td>';	
				Tablaprin += '</tr>';
				Tablaprin += '</tbody>';
			}
			Tablaprin += '</table>';
			$("#TablaP").append(Tablaprin);
		}
	});
    }
function Cargar3(){
	$.ajax({    		  
		url : 'http://144.22.58.129:8080/api/Reservation/report-clients',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
			console.log(respuesta);
			$("#TablaP").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> TOTAL RESERVAS </th>';
			Tablaprin += '<th> ID </th>';
                        Tablaprin += '<th> CORREO </th>';
                        Tablaprin += '<th> CONTRASEÑA </th>';
			Tablaprin += '<th> NOMBRE </th>';
			Tablaprin += '<th> EDAD </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';
			for (i=0; i<respuesta.length; i++){
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
                                Tablaprin += '<td>'+ respuesta[i].total+ '</td>';
				Tablaprin += '<td>'+ respuesta[i].client.idClient+ '</td>';
				Tablaprin += '<td>'+ respuesta[i].client.email+ '</td>'; 		
				Tablaprin += '<td>'+ respuesta[i].client.password+ '</td>'; 		
				Tablaprin += '<td>'+ respuesta[i].client.name+ '</td>'; 		 		
				Tablaprin += '<td>'+ respuesta[i].client.age+ '</td>'; 		 
				Tablaprin += '</tr>';	
				Tablaprin += '</tbody>';
			}
			Tablaprin += '</table>';
			$("#TablaP").append(Tablaprin);
		},
	});
}

function limpiarCamposRes(){
        $("#idReservation").val(''),
        $("#startDate").val(''),
        $("#devolutionDate").val('')
}

//METODOS ADMIN
function CargarAdm(){
	$.ajax({    
		url : 'http://144.22.58.129:8080/api/Admin/all',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
			console.log(respuesta);
			$("#TablaP").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> ID </th>';
			Tablaprin += '<th> NOMBRE </th>';
			Tablaprin += '<th> CORREO </th>';
			Tablaprin += '<th> CONTRASEÑA </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';
			for (i=0; i<respuesta.length; i++){
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
				Tablaprin += '<td>'+ respuesta[i].idAdmin+ '</td>';
                                Tablaprin += '<td>'+ respuesta[i].name+ '</td>';						 						 
				Tablaprin += '<td>'+ respuesta[i].email+ '</td>';
				Tablaprin += '<td>'+ respuesta[i].password+ '</td>';
				Tablaprin += '<td><button onclick="editarRegistroAdm('+respuesta[i].idAdmin+')">Detalle</button>';
				Tablaprin += '<td><button onclick="eliminarAdm('+respuesta[i].idAdmin+')">Eliminar</button>';	
				Tablaprin += '</tr>';
				Tablaprin += '</tbody>';
			}
			Tablaprin += '</table>';
			$("#TablaP").append(Tablaprin);
		}
	});
}

function ingresarDatosAdm(){
	var datos={
		idAdmin:$("#idAdmin").val(),		
		name:$("#name").val(),
                email:$("#email").val(),
                password:$("#password").val()
	};
	if (datos.name=='' || datos.email=='' || datos.password==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson=JSON.stringify(datos);
	$.ajax({
	url:'http://144.22.58.129:8080/api/Admin/save',
	data:datosJson,
	type:'POST',
	dataType: 'json',
	contentType: "application/json; charset=utf-8",
	statusCode: {
		201: function () {
			alert("El admin se resgistro exitosamente");
			CargarAdm();
		},
		555: function(){
			validarexistenciaRes(datos.id);
		}
	}
	
});
limpiarCamposAdm();
}}
function editarRegistroAdm (idAdmin){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Admin/'+idAdmin,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    success : function(respuesta) {
		console.log(respuesta); 
			$("#idAdmin").val(respuesta.idAdmin);		
			$("#name").val(respuesta.name);
			$("#email").val(respuesta.email);
			$("#password").val(respuesta.password);
			$("#idAdmin").attr('disabled', true);
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}
function actualizarAdm(){
	var datos={
		idAdmin:$("#idAdmin").val(),		
		name:$("#name").val(),
                email:$("#email").val(),
                password:$("#password").val()
	};
	if (datos.name=='' || datos.email=='' || datos.password==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson = JSON.stringify(datos); 
	$.ajax(    
    'http://144.22.58.129:8080/api/Admin/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    
    statusCode : {
		
		201 :  function() {
			alert("El admin se actualizo exitosamente");
			$("#id").attr('disabled', false);
        	CargarAdm();	
			}
		}
	});
	limpiarCamposAdm();
}}
function eliminarAdm(idAdmin){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Admin/'+idAdmin,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    statusCode: {
                204: function () {
                    alert("El admin se elimino exitosamente!");
					CargarAdm();
                }
            }
        });}
function limpiarCamposAdm(){
        $("#idAdmin").val(''),
        $("#name").val(''),
        $("#email").val(''),
        $("#password").val('')
}

//METODOS GET POST PUT Y DELETE DE LA TABLA SCORE
function CargarScore(){
	$.ajax({    
		url : 'http://144.22.58.129:8080/api/Score/all',
		type : 'GET',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
	  
		success : function(respuesta) {
			console.log(respuesta);
			$("#TablaP").empty();
			var Tablaprin = '<table id= "customers">';
			Tablaprin += '<thead>'
			Tablaprin += '<tr>';
			Tablaprin += '<th> ID </th>';
			Tablaprin += '<th> PUNTAJE </th>';
			Tablaprin += '<th> MENSAJE </th>';
			Tablaprin += '</tr>';
			Tablaprin += '</thead>';
			for (i=0; i<respuesta.length; i++){
				Tablaprin += '<tbody>';
				Tablaprin += '<tr>';
				Tablaprin += '<td>'+ respuesta[i].idScore+ '</td>';
				Tablaprin += '<td>'+ respuesta[i].calificacion+ '</td>';
                                Tablaprin += '<td>'+ respuesta[i].mensaje+ '</td>';						 						 
				Tablaprin += '<td><button onclick="eliminarScore('+respuesta[i].idScore+')">Eliminar</button>';	
				Tablaprin += '</tr>';
				Tablaprin += '</tbody>';
			}
			Tablaprin += '</table>';
			$("#TablaP").append(Tablaprin);
		}
	});
}

function ingresarDatosScore(){
	var datos={
		idScore:$("#idScore").val(),		
		calificacion:$("#calificacion").val(),		
		mensaje:$("#mensaje").val()
	};
	if (datos.mensaje=='' || datos.reserva=='' || datos.calificacion==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson=JSON.stringify(datos);
	$.ajax({
	url:'http://144.22.58.129:8080/api/Score/save',
	data:datosJson,
	type:'POST',
	dataType: 'json',
	contentType: "application/json; charset=utf-8",
	statusCode: {
		201: function () {
			alert("El puntaje se registro exitosamente");
			CargarScore();
		},
		555: function(){
			validarexistenciaScore(datos.id);
		}
	}
	
});
limpiarCamposScore();
}}
function editarRegistroScore (idScore){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Score/'+idScore,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    success : function(respuesta) {
		console.log(respuesta); 
			$("#idScore").val(respuesta.idScore);		
			$("#calificacion").val(respuesta.calificacion);		
			$("#mensaje").val(respuesta.mensaje);
			$("#idAdmin").attr('disabled', true);
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status + json);
    }
});
}
function actualizarScore(){
	var datos={
		idScore:$("#idScore").val(),		
		calificacion:$("#calificacion").val(),		
		mensaje:$("#mensaje").val()
	};
	if (datos.mensaje=='' || datos.reserva=='' || datos.calificacion==''){
		alert("Todos los campos son obligatorios");
	}
	else{
	let datosJson = JSON.stringify(datos); 
	$.ajax(    
    'http://144.22.58.129:8080/api/Score/update',
	{data: datosJson,
    type : 'PUT',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    
    statusCode : {
		
		201 :  function() {
			alert("El puntaje se actualizo exitosamente");
			$("#id").attr('disabled', false);
        	CargarScore();	
			}
		}
	});
	limpiarCamposAdm();
}}
function eliminarScore(idScore){
	$.ajax({    
    url : 'http://144.22.58.129:8080/api/Score/'+idScore,
    type : 'DELETE',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
    statusCode: {
                204: function () {
                    alert("El puntaje se elimino exitosamente!");
					CargarScore();
                }
            }
        });}
function limpiarCamposScore(){
        $("#idScore").val(''),
        $("#calificacion").val(''),
        $("#mensaje").val('')
}