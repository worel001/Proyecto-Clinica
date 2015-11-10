sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("hospital.controller.inicio", {
           
	           
	 onInit: function() { 
	 	aObject_360 = [   
	 		             
	 		             { DESCRIPCION: "PACIENTE", SECTOR:"Cuidados Intensivos", TIPO: "PACIENTE", PISO: 1, ESTADO: 1, CANTIDAD:2, WIDTH:"45px", HEIGHT:"58px",  QX:"390", QY:"400", L_QX:"388", L_QY:"400"},
	 		            // { DESCRIPCION: "PACIENTE", SECTOR:"Cuidados Intensivos", TIPO: "PACIENTE", PISO: 1, ESTADO: 2, CANTIDAD:2, WIDTH:"45px", HEIGHT:"45px",  QX:"430", QY:"413", L_QX:"428", L_QY:"411"},
	 		            // { DESCRIPCION: "PACIENTE", SECTOR:"Cuidados Intensivos", TIPO: "PACIENTE", PISO: 1, ESTADO: 3, CANTIDAD:2,  WIDTH:"45px", HEIGHT:"45px",  QX:"390", QY:"413", L_QX:"388", L_QY:"411"},
	 		             { DESCRIPCION: "PACIENTE", SECTOR:"Cuidados Intensivos", TIPO: "PACIENTE", PISO: 1, ESTADO: 0, CANTIDAD:2,  WIDTH:"45px", HEIGHT:"58px",  QX:"430", QY:"400", L_QX:"428", L_QY:"400"},
	 		             { DESCRIPCION: "Box Spring. 1 plaza", SECTOR:"Cuidados Intensivos", TIPO: "CAMA", 	 PISO: 1, ESTADO: 0, CANTIDAD:2, WIDTH:"45px", HEIGHT:"45px",  QX:"208", QY:"410", L_QX:"229", L_QY:"402" },
	 		             { DESCRIPCION: "Box Spring. 1 plaza", SECTOR:"Cuidados Intensivos", TIPO: "CAMA",	 PISO: 1, ESTADO: 1, CANTIDAD:2, WIDTH:"45px", HEIGHT:"45px",  QX:"263", QY:"410", L_QX:"280", L_QY:"402" },
	 		             
	 		             { DESCRIPCION: "XT-MAQUINA-250", SECTOR:"Cirugia", TIPO: "EQUIPO", 	 PISO: 1, ESTADO: 1, CANTIDAD:2,  WIDTH:"45px", HEIGHT:"45px",  QX:"112", QY:"410", L_QX:"115", L_QY:"408"},
	 		             { DESCRIPCION: "XT-MAQUINA-250", SECTOR:"Cirugia",  TIPO: "EQUIPO",	 PISO: 1, ESTADO: 0, CANTIDAD:2,WIDTH:"45px", HEIGHT:"45px",  QX:"62",  QY:"410", L_QX:"58", L_QY:"408"},

	 		             { DESCRIPCION: "Recue Night", SECTOR:"Farmacia", TIPO: "MEDICAMENTO", PISO: 2, ESTADO: 0, CANTIDAD:2, WIDTH:"50px", HEIGHT:"45px", QX:"387", QY:"358", L_QX:"387", L_QY:"345"},
	 		             { DESCRIPCION: "Recue Night", SECTOR:"Farmacia", TIPO: "MEDICAMENTO", PISO: 2, ESTADO: 1, CANTIDAD:2, WIDTH:"50px", HEIGHT:"45px", QX:"439", QY:"358", L_QX:"439", L_QY:"345"},
	 		             { DESCRIPCION: "Monitor LED LG 29", SECTOR:"Urgencias", TIPO: "MONITOR", PISO: 5, ESTADO: 0, CANTIDAD:2,   WIDTH:"40px", HEIGHT:"45px", QX:"111", QY:"187", L_QX:"105", L_QY:"187"},
	 		             { DESCRIPCION: "Monitor LED LG 29", SECTOR:"Urgencias", PISO: 5,TIPO: "MONITOR", ESTADO: 1, CANTIDAD:2,   WIDTH:"40px", HEIGHT:"45px", QX:"165", QY:"187", L_QX:"159", L_QY:"187"},
	 		             
	 		             { DESCRIPCION: "Silla De Ruedas", SECTOR:"Cuidados Intensivos", TIPO: "SILLA_RUEDAS", PISO: 3, CANTIDAD:2, ESTADO: 1,  WIDTH:"45px", HEIGHT:"54px", QX:"269", QY:"289", L_QX:"294", L_QY:"294"},
	 		             { DESCRIPCION: "Silla De Ruedas", SECTOR:"Cuidados Intensivos", TIPO: "SILLA_RUEDAS", PISO: 3, CANTIDAD:2, ESTADO: 0,  WIDTH:"45px", HEIGHT:"51px", QX:"211", QY:"293", L_QX:"255", L_QY:"294"},
	 		             
	 		             { DESCRIPCION: "Resonancia", SECTOR:"Imagenología", TIPO: "RESONANCIA", PISO: 4, CANTIDAD:2, ESTADO: 0,  WIDTH:"45px", HEIGHT:"50px", QX:"390", QY:"238", L_QX:"386", L_QY:"238"},
	 		             { DESCRIPCION: "Resonancia", SECTOR:"Imagenología", TIPO: "RESONANCIA", PISO: 4, CANTIDAD:2, ESTADO: 1,  WIDTH:"45px", HEIGHT:"50px",  QX:"441", QY:"238",L_QX:"437", L_QY:"238"},
	 		             
	 		             { DESCRIPCION: "Radiografia", SECTOR:"Imagenología", TIPO: "RADIOGRAFIA", PISO: 4, CANTIDAD:2, ESTADO: 0, WIDTH:"76px", HEIGHT:"57px" , QX:"198", QY:"235", L_QX:"215", L_QY:"271"},
	 		             { DESCRIPCION: "Radiografia", SECTOR:"Imagenología", TIPO: "RADIOGRAFIA", PISO: 4, CANTIDAD:2, ESTADO: 1, WIDTH:"51px", HEIGHT:"43px", QX:"263", QY:"247", L_QX:"262", L_QY:"238"},
	 		             { DESCRIPCION: "Box Sping. 1/2 Plaza", SECTOR:"Urgencias", TIPO: "CAMA_URGENCIA", PISO: 5, CANTIDAD:2, ESTADO: 0,  WIDTH:"76px", HEIGHT:"60px", QX:"399", QY:"173", L_QX:"388", L_QY:"181"},
	 		             { DESCRIPCION: "Box Sping. 1/2 Plaza", SECTOR:"Urgencias", TIPO: "CAMA_URGENCIA", PISO: 5, CANTIDAD:2, ESTADO: 1,  WIDTH:"76px", HEIGHT:"60px", QX:"223", QY:"173", L_QX:"258", L_QY:"181"},
	 		             
	 		             { DESCRIPCION: "Box Sping. 1/2 Plaza", SECTOR:"oncologia", TIPO: "CAMA_ONCOLOGIA", PISO: 6, CANTIDAD:2, ESTADO: 0,  WIDTH:"70px", HEIGHT:"60px", QX:"397", QY:"123", L_QX:"216", L_QY:"126"},
	 		             { DESCRIPCION: "Box Sping. 1/2 Plaza", SECTOR:"oncologia", TIPO: "CAMA_ONCOLOGIA", PISO: 6, CANTIDAD:2, ESTADO: 1,  WIDTH:"70px", HEIGHT:"60px", QX:"231", QY:"123", L_QX:"397", L_QY:"126"},
	 		             
	 		             { DESCRIPCION: "Escritorio", SECTOR:"administracion", TIPO: "ESCRITORIO", PISO: 7, CANTIDAD:2, ESTADO: 0,  WIDTH:"84px", HEIGHT:"60px", QX:"397", QY:"67", L_QX:"395", L_QY:"72"},
	 		             { DESCRIPCION: "Escritorio", SECTOR:"administracion", TIPO: "ESCRITORIO", PISO: 7, CANTIDAD:2, ESTADO: 1,  WIDTH:"88px", HEIGHT:"60px", QX:"231", QY:"67", L_QX:"247", L_QY:"72"}

	 				  
	 	];
	 	
	 	aJSON_Info = [         {ID : 1, TIPO: "CAMA", PISO: 1, ESTADO: 0,
	 							 CONTENT : [{ 
	 							 			TITLE : "InfoGeneral", 
	 										CONTENT : [ { PARAM: "Nombre", VALUE: "Juancho Saez"},
	 											        { PARAM: "Id", VALUE: "4354361"},
	 											        { PARAM: "TIPO", VALUE: "Paciente"},
	 											        { PARAM: "Icon", VALUE: "../images/picture/4.png"}
													 	]},       
	 							 	       {TITLE : "Info", 
	 										CONTENT : [{ PARAM: "Rut", VALUE: "12121212-1"},
													 	{ PARAM: "Fecha de nacimiento", VALUE: "22/11/1982"},
													 	{ PARAM: "Género", VALUE: "Masculino"},
													 	{ PARAM: "Nacionalidad", VALUE: "Chilena"},
													 	{ PARAM: "Prevision", VALUE: "SI"},
													 	{ PARAM: "Estado Paciente", VALUE: "Estable"}
													 	]},
											 { TITLE : "Contacto",
											 CONTENT : [{ PARAM: "Dirección", VALUE: "Rodriguez 1281"},
													 	{ PARAM: "Fono Casa", VALUE: "82273748"},
													 	{ PARAM: "Fono Cel", VALUE: "93888827"},
													 	{ PARAM: "E-mail", VALUE: "msnn@tide.cl"}]},
											 { TITLE : "Datos de admisión",
											 CONTENT : [{ PARAM: "Fecha De Pre Admisión", VALUE: "19-10-2015"},
													 	{ PARAM: "Fecha De Ingreso", VALUE: "20-10-2015"},
													 	{ PARAM: "Fecha De Admisión", VALUE: "20-10-2015"},
													 	{ PARAM: "Fecha asignacion Habitacion", VALUE: "20-10-2015"},
													 	{ PARAM: "Fecha inicio Atencion Medica", VALUE: "20-10-2015"}]},
											{ TITLE : "Signos Vitales",
											 CONTENT : [{ PARAM: "Presión Sistólica", VALUE: "123  mmhg"},
													 	{ PARAM: "Presión Diastólica", VALUE: "67  mmhg"},
													 	{ PARAM: "Saturación de O2", VALUE: "70%"},
													 	{ PARAM: "Frecuencia Cardiaca", VALUE: "78 x Min"},
													 	{ PARAM: "Frecuencia Respiratoria", VALUE: "25 x Min"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Presión Sistólica", VALUE: "123  mmhg"},
													 	{ PARAM: "Presión Diastólica", VALUE: "67  mmhg"},
													 	{ PARAM: "Saturación de O2", VALUE: "70%"},
													 	{ PARAM: "Frecuencia Cardiaca", VALUE: "78 x Min"},
													 	{ PARAM: "Frecuencia Respiratoria", VALUE: "25 x Min"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Interconsulta con otorrino", VALUE: "Interconsulta"},
													 	{ PARAM: "Controlar satuturación de O2 c/4 horas", VALUE: "Enfermería"},
													 	{ PARAM: "Tomar Rx de tórax", VALUE: "RX Pa y lateral"},
													 	{ PARAM: "Tomar Electrocardiograma", VALUE: "EKG"},
													 	{ PARAM: "Tomar Hemograma", VALUE: "Hemogramas"},
													 	{ PARAM: "Tomar Enzimas Cardiacas", VALUE: "Enfermería"},
													 	{ PARAM: "Colocar O2 por cánula nasal", VALUE: "Enfermería"}]}	 	
							 	]},
							 	{ID : 2, TIPO: "CAMA", PISO: 1, ESTADO: 0,
	 							 CONTENT : [{ 
	 							 			TITLE : "InfoGeneral", 
	 										CONTENT : [ { PARAM: "Nombre", VALUE: "Maciel Cabrera"},
	 											        { PARAM: "Id", VALUE: "4354361"},
	 											        { PARAM: "TIPO", VALUE: "Paciente"},
	 											        { PARAM: "Icon", VALUE: "../images/picture/1.jpg"}
													 	]},       
	 							 	       {TITLE : "Info", 
	 										CONTENT : [{ PARAM: "Rut", VALUE: "82736378-k"},
													 	{ PARAM: "Fecha de nacimiento", VALUE: "13/04/1988"},
													 	{ PARAM: "Género", VALUE: "Femenino"},
													 	{ PARAM: "Nacionalidad", VALUE: "Chilena"},
													 	{ PARAM: "Prevision", VALUE: "SI"},
													 	{ PARAM: "Estado Paciente", VALUE: "Estable"}
													 	]},
											 { TITLE : "Contacto",
											 CONTENT : [{ PARAM: "Dirección", VALUE: "Rodriguez 1281"},
													 	{ PARAM: "Fono Casa", VALUE: "82273748"},
													 	{ PARAM: "Fono Cel", VALUE: "93888827"},
													 	{ PARAM: "E-mail", VALUE: "msnn@tide.cl"}]},
											 { TITLE : "Datos de admisión",
											 CONTENT : [{ PARAM: "Fecha De Pre Admisión", VALUE: "19-10-2015"},
													 	{ PARAM: "Fecha De Ingreso", VALUE: "20-10-2015"},
													 	{ PARAM: "Fecha De Admisión", VALUE: "20-10-2015"},
													 	{ PARAM: "Fecha asignacion Habitacion", VALUE: "20-10-2015"},
													 	{ PARAM: "Fecha inicio Atencion Medica", VALUE: "20-10-2015"}]},
											{ TITLE : "Signos Vitales",
											 CONTENT : [{ PARAM: "Presión Sistólica", VALUE: "123  mmhg"},
													 	{ PARAM: "Presión Diastólica", VALUE: "67  mmhg"},
													 	{ PARAM: "Saturación de O2", VALUE: "70%"},
													 	{ PARAM: "Frecuencia Cardiaca", VALUE: "78 x Min"},
													 	{ PARAM: "Frecuencia Respiratoria", VALUE: "25 x Min"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Presión Sistólica", VALUE: "123  mmhg"},
													 	{ PARAM: "Presión Diastólica", VALUE: "67  mmhg"},
													 	{ PARAM: "Saturación de O2", VALUE: "70%"},
													 	{ PARAM: "Frecuencia Cardiaca", VALUE: "78 x Min"},
													 	{ PARAM: "Frecuencia Respiratoria", VALUE: "25 x Min"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Interconsulta con otorrino", VALUE: "Interconsulta"},
													 	{ PARAM: "Controlar satuturación de O2 c/4 horas", VALUE: "Enfermería"},
													 	{ PARAM: "Tomar Rx de tórax", VALUE: "RX Pa y lateral"},
													 	{ PARAM: "Tomar Electrocardiograma", VALUE: "EKG"},
													 	{ PARAM: "Tomar Hemograma", VALUE: "Hemogramas"},
													 	{ PARAM: "Tomar Enzimas Cardiacas", VALUE: "Enfermería"},
													 	{ PARAM: "Colocar O2 por cánula nasal", VALUE: "Enfermería"}]}	 	
							 	]},
							 	{ID : 3, TIPO: "CAMA", PISO: 1, ESTADO: 0,
	 							 CONTENT : [{ 
	 							 			TITLE : "InfoGeneral", 
	 										CONTENT : [ { PARAM: "Nombre", VALUE: "Carmela Carmona"},
	 											        { PARAM: "Id", VALUE: "43345361"},
	 											        { PARAM: "TIPO", VALUE: "Paciente"},
	 											        { PARAM: "Icon", VALUE: "../images/picture/2.jpg"}
													 	]},       
	 							 	       {TITLE : "Info", 
	 										CONTENT : [{ PARAM: "Rut", VALUE: "12341212-1"},
													 	{ PARAM: "Fecha de nacimiento", VALUE: "22/11/1922"},
													 	{ PARAM: "Género", VALUE: "Femenino"},
													 	{ PARAM: "Nacionalidad", VALUE: "Chilena"},
													 	{ PARAM: "Prevision", VALUE: "SI"},
													 	{ PARAM: "Estado Paciente", VALUE: "Estable"}
													 	]},
											 { TITLE : "Contacto",
											 CONTENT : [{ PARAM: "Dirección", VALUE: "Rodriguez 1281"},
													 	{ PARAM: "Fono Casa", VALUE: "82273748"},
													 	{ PARAM: "Fono Cel", VALUE: "93888827"},
													 	{ PARAM: "E-mail", VALUE: "msnn@tide.cl"}]},
											 { TITLE : "Datos de admisión",
											 CONTENT : [{ PARAM: "Fecha De Pre Admisión", VALUE: "19-10-2015"},
													 	{ PARAM: "Fecha De Ingreso", VALUE: "20-10-2015"},
													 	{ PARAM: "Fecha De Admisión", VALUE: "20-10-2015"},
													 	{ PARAM: "Fecha asignacion Habitacion", VALUE: "20-10-2015"},
													 	{ PARAM: "Fecha inicio Atencion Medica", VALUE: "20-10-2015"}]},
											{ TITLE : "Signos Vitales",
											 CONTENT : [{ PARAM: "Presión Sistólica", VALUE: "123  mmhg"},
													 	{ PARAM: "Presión Diastólica", VALUE: "67  mmhg"},
													 	{ PARAM: "Saturación de O2", VALUE: "70%"},
													 	{ PARAM: "Frecuencia Cardiaca", VALUE: "78 x Min"},
													 	{ PARAM: "Frecuencia Respiratoria", VALUE: "25 x Min"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Presión Sistólica", VALUE: "123  mmhg"},
													 	{ PARAM: "Presión Diastólica", VALUE: "67  mmhg"},
													 	{ PARAM: "Saturación de O2", VALUE: "70%"},
													 	{ PARAM: "Frecuencia Cardiaca", VALUE: "78 x Min"},
													 	{ PARAM: "Frecuencia Respiratoria", VALUE: "25 x Min"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Interconsulta con otorrino", VALUE: "Interconsulta"},
													 	{ PARAM: "Controlar satuturación de O2 c/4 horas", VALUE: "Enfermería"},
													 	{ PARAM: "Tomar Rx de tórax", VALUE: "RX Pa y lateral"},
													 	{ PARAM: "Tomar Electrocardiograma", VALUE: "EKG"},
													 	{ PARAM: "Tomar Hemograma", VALUE: "Hemogramas"},
													 	{ PARAM: "Tomar Enzimas Cardiacas", VALUE: "Enfermería"},
													 	{ PARAM: "Colocar O2 por cánula nasal", VALUE: "Enfermería"}]}	 	
							 	]},
							 	{ID : 1, TIPO: "CAMA_ONCOLOGIA", PISO: 6, ESTADO: 0,
	 							 CONTENT : [{ 
	 							 			TITLE : "InfoGeneral", 
	 										CONTENT : [ { PARAM: "Nombre", VALUE: "Felipe Naranjo"},
	 											        { PARAM: "Id", VALUE: "4354361"},
	 											        { PARAM: "TIPO", VALUE: "Paciente"},
	 											        { PARAM: "Icon", VALUE: "../images/picture/3.png"}
													 	]},       
	 							 	       {TITLE : "Info", 
	 										CONTENT : [{ PARAM: "Rut", VALUE: "12121212-1"},
													 	{ PARAM: "Fecha de nacimiento", VALUE: "22/11/1982"},
													 	{ PARAM: "Género", VALUE: "Masculino"},
													 	{ PARAM: "Nacionalidad", VALUE: "Chilena"},
													 	{ PARAM: "Prevision", VALUE: "SI"},
													 	{ PARAM: "Estado Paciente", VALUE: "Estable"}
													 	]},
											 { TITLE : "Contacto",
											 CONTENT : [{ PARAM: "Dirección", VALUE: "Rodriguez 1281"},
													 	{ PARAM: "Fono Casa", VALUE: "82273748"},
													 	{ PARAM: "Fono Cel", VALUE: "93888827"},
													 	{ PARAM: "E-mail", VALUE: "msnn@tide.cl"}]},
											 { TITLE : "Diagnostico",
											 CONTENT : [{ PARAM: "Padecimiento", VALUE: "Leucemia Mieloide Aguda  (LMA)"},
													 	{ PARAM: "Tratamiento", VALUE: "Quimioterapia"}]},
											{ TITLE : "Fase De Insucción",
											 CONTENT : [{ PARAM: "Medicamento", VALUE: "Citarabina - Ara CDaunorubicina"},
													 	{ PARAM: "Tratamiento", VALUE: "Concomitante con Radioterapia"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Presión Sistólica", VALUE: "123  mmhg"},
													 	{ PARAM: "Presión Diastólica", VALUE: "67  mmhg"},
													 	{ PARAM: "Saturación de O2", VALUE: "70%"},
													 	{ PARAM: "Frecuencia Cardiaca", VALUE: "78 x Min"},
													 	{ PARAM: "Frecuencia Respiratoria", VALUE: "25 x Min"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Interconsulta con otorrino", VALUE: "Interconsulta"},
													 	{ PARAM: "Controlar satuturación de O2 c/4 horas", VALUE: "Enfermería"},
													 	{ PARAM: "Tomar Rx de tórax", VALUE: "RX Pa y lateral"},
													 	{ PARAM: "Tomar Electrocardiograma", VALUE: "EKG"},
													 	{ PARAM: "Tomar Hemograma", VALUE: "Hemogramas"},
													 	{ PARAM: "Tomar Enzimas Cardiacas", VALUE: "Enfermería"},
													 	{ PARAM: "Colocar O2 por cánula nasal", VALUE: "Enfermería"}]}	 	
							 	]},
							 	{ID : 2, TIPO: "CAMA_ONCOLOGIA", PISO: 6, ESTADO: 0,
	 							 CONTENT : [{ 
	 							 			TITLE : "InfoGeneral", 
	 										CONTENT : [ { PARAM: "Nombre", VALUE: "Oliva Nieto"},
	 											        { PARAM: "Id", VALUE: "4354361"},
	 											        { PARAM: "TIPO", VALUE: "Paciente"},
	 											        { PARAM: "Icon", VALUE: "../images/picture/1.jpg"}
													 	]},       
	 							 	       {TITLE : "Info", 
	 										CONTENT : [{ PARAM: "Rut", VALUE: "12121212-1"},
													 	{ PARAM: "Fecha de nacimiento", VALUE: "22/11/1982"},
													 	{ PARAM: "Género", VALUE: "Femenino"},
													 	{ PARAM: "Nacionalidad", VALUE: "Chilena"},
													 	{ PARAM: "Prevision", VALUE: "SI"},
													 	{ PARAM: "Estado Paciente", VALUE: "Estable"}
													 	]},
											 { TITLE : "Contacto",
											 CONTENT : [{ PARAM: "Dirección", VALUE: "Rodriguez 1281"},
													 	{ PARAM: "Fono Casa", VALUE: "82273748"},
													 	{ PARAM: "Fono Cel", VALUE: "93888827"},
													 	{ PARAM: "E-mail", VALUE: "msnn@tide.cl"}]},
											{ TITLE : "Diagnostico",
											 CONTENT : [{ PARAM: "Padecimiento", VALUE: "Cáncer de Seno Estadio II"},
													 	{ PARAM: "Tratamiento", VALUE: "Quimioterapia"}]},
											{ TITLE : "Fase De Insucción",
											 CONTENT : [{ PARAM: "Medicamento", VALUE: "Protocolo A-C Adriamicina: Citarabina"},
													 	{ PARAM: "Tratamiento", VALUE: "Concomitante con Radioterapia y Cirugia"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Presión Sistólica", VALUE: "123  mmhg"},
													 	{ PARAM: "Presión Diastólica", VALUE: "67  mmhg"},
													 	{ PARAM: "Saturación de O2", VALUE: "70%"},
													 	{ PARAM: "Frecuencia Cardiaca", VALUE: "78 x Min"},
													 	{ PARAM: "Frecuencia Respiratoria", VALUE: "25 x Min"}]},
											{ TITLE : "Observaciones Clinicas",
											 CONTENT : [{ PARAM: "Interconsulta con otorrino", VALUE: "Interconsulta"},
													 	{ PARAM: "Controlar satuturación de O2 c/4 horas", VALUE: "Enfermería"},
													 	{ PARAM: "Tomar Rx de tórax", VALUE: "RX Pa y lateral"},
													 	{ PARAM: "Tomar Electrocardiograma", VALUE: "EKG"},
													 	{ PARAM: "Tomar Hemograma", VALUE: "Hemogramas"},
													 	{ PARAM: "Tomar Enzimas Cardiacas", VALUE: "Enfermería"},
													 	{ PARAM: "Colocar O2 por cánula nasal", VALUE: "Enfermería"}]}	 	
							 	]},
							 	
						];
							 	
							 
	 	
/*	 						   RUT: "12121212-1", NOMBRE: "Juancho", APELLIDO: "Saez", FECHA_NAC: "22/11/1982", GENERO: "Masculino", NACIONALIDAD: "Chileno", PREVISION: "SI", ESTADO_PACIENTE: 1, ESTADO_PACIENTE2: "Ingresado"},
                               {ID_OBJECTO : 5, TIPO: "CAMA", PISO: 1, ID: 4398938, ICON: "../images/picture/1.jpg", RUT: "82736378-k", NOMBRE: "Masiel", APELLIDO: "Cabrera", FECHA_NAC: "13/04/1988", GENERO: "Masculino", NACIONALIDAD: "Chileno", PREVISION: "SI", ESTADO_PACIENTE: 2, ESTADO_PACIENTE2: "Signos vitales tomados"},
                               {ID_OBJECTO : 8, TIPO: "CAMA", PISO: 1, ID: 8883773, ICON: "../images/picture/2.jpg", RUT: "18762552-1", NOMBRE: "Carmela", APELLIDO: "Carmona", FECHA_NAC: "26/10/1980", GENERO: "Femenino", NACIONALIDAD: "Chileno", PREVISION: "SI", ESTADO_PACIENTE: 3, ESTADO_PACIENTE2: "Diagnóstico ingresado"},
                               {ID_OBJECTO : 3, TIPO: "CAMA_ONCOLOGIA", PISO: 6, ID: 2005847, ICON: "../images/picture/5.png", RUT: "29039837-3", NOMBRE: "Anais", APELLIDO: "Fueltealba", FECHA_NAC: "12/02/1972", GENERO: "Femenino", NACIONALIDAD: "Peruana", PREVISION: "SI", ESTADO_PACIENTE: 3, ESTADO_PACIENTE2: "Diagnóstico ingresado"},
                               {ID_OBJECTO : 5, TIPO: "CAMA_ONCOLOGIA", PISO: 6, ID: 8567637, ICON: "../images/picture/5.png", RUT: "64838773-5", NOMBRE: "Camila", APELLIDO: "Gajardo", FECHA_NAC: "07/09/1990", GENERO: "Femenino", NACIONALIDAD: "Chilena", PREVISION: "SI", ESTADO_PACIENTE: 4, ESTADO_PACIENTE2: "Hospitalizado"}
						];
 
       aJSON_Contact = [       {ID_OBJECTO : 1, TIPO: "CAMA", PISO: 1, DIRECCION: "Rodriguez 1281", CIUDAD: "Santiago", FONO_CASA: 82273748, FONO_CEL: 93888827, EMAIL: "msnn@tide.cl"},
                               {ID_OBJECTO : 5, TIPO: "CAMA", PISO: 1, DIRECCION: "Aldunate 2332", CIUDAD: "Santiago", FONO_CASA: 22039485, FONO_CEL: 98766338, EMAIL: "oeiua34@gmail.com"},
                               {ID_OBJECTO : 8, TIPO: "CAMA", PISO: 1, DIRECCION: "Macul 298", CIUDAD: "Santiago", FONO_CASA: 23323441, FONO_CEL: 93887267, EMAIL: "wef4f@hotmail.com"},
                               {ID_OBJECTO : 3, TIPO: "CAMA_ONCOLOGIA", PISO: 6,DIRECCION: "Grecia 0229", CIUDAD: "Concepción", FONO_CASA: 99583762, FONO_CEL: 92263552, EMAIL: "aparsf@gmail.com"},
                               {ID_OBJECTO : 5, TIPO: "CAMA_ONCOLOGIA", PISO: 6, DIRECCION: "Las encinas 2907", CIUDAD: "Temuco", FONO_CASA: 39488736, FONO_CEL: 73887632, EMAIL: "ikejn@gmail.com"}
						];*/


		aObject = [

						{ID:2, TIPO: "PACIENTE", PISO:"1", ESTADO: 2, QX: 64 , QY: 87, WIDTH:"45px", HEIGHT:"45px"},
						{ID:3, TIPO: "PACIENTE", PISO:"1", ESTADO: 3, QX: 240, QY: 160, WIDTH:"45px", HEIGHT:"45px"},
						{ID:4, TIPO: "PACIENTE", PISO:"1", ESTADO: 3, QX: 260, QY: 220, WIDTH:"45px", HEIGHT:"45px"},
						
						
						{ID:1, TIPO: "CAMA", PISO:"1", ESTADO:0, QX:40 , QY:22,WIDTH:"45px", HEIGHT:"45px"},
						{ID:2, TIPO: "CAMA", PISO:"1", ESTADO:1, QX:138, QY:22,WIDTH:"45px", HEIGHT:"45px"},
						{ID:3, TIPO: "CAMA", PISO:"1", ESTADO:1, QX:235, QY:22,WIDTH:"45px", HEIGHT:"45px"},
						{ID:4, TIPO: "CAMA", PISO:"1", ESTADO:1, QX:333, QY:22,WIDTH:"45px", HEIGHT:"45px"},
						{ID:2, TIPO: "CAMA", PISO:"1", ESTADO:0, QX:430, QY:22,WIDTH:"45px", HEIGHT:"45px"},
						{ID:6, TIPO: "CAMA", PISO:"1", ESTADO:1, QX:522, QY:22,WIDTH:"45px", HEIGHT:"45px"},
						{ID:7, TIPO: "CAMA", PISO:"1", ESTADO:1, QX:38 , QY:292,WIDTH:"45px", HEIGHT:"45px"},
						{ID:3, TIPO: "CAMA", PISO:"1", ESTADO:0, QX:225, QY:292,WIDTH:"45px", HEIGHT:"45px"},
						{ID:9, TIPO: "CAMA", PISO:"1", ESTADO:1, QX:420, QY:292,WIDTH:"45px", HEIGHT:"45px"},
						
						{ID:1, TIPO: "EQUIPO", PISO:"1", ESTADO: 1, QX: 112, QY: 223,WIDTH:"45px", HEIGHT:"45px"},
						{ID:2, TIPO: "EQUIPO", PISO:"1", ESTADO: 0, QX: 400, QY: 224,WIDTH:"45px", HEIGHT:"45px"},
						
						{ID:1, TIPO: "MEDICAMENTO", PISO:"2", ESTADO: 1, QX: 63 , QY: 224, WIDTH:"50px", HEIGHT:"45px"},
						{ID:2, TIPO: "MEDICAMENTO", PISO:"2", ESTADO: 1, QX: 106, QY: 224, WIDTH:"50px", HEIGHT:"45px"},
						{ID:3, TIPO: "MEDICAMENTO", PISO:"2", ESTADO: 1, QX: 149, QY: 224, WIDTH:"50px", HEIGHT:"45px"},
						{ID:1, TIPO: "MEDICAMENTO", PISO:"2", ESTADO: 0, QX: 360, QY: 15, WIDTH:"50px", HEIGHT:"45px"},
						{ID:4, TIPO: "MEDICAMENTO", PISO:"2", ESTADO: 1, QX: 34 , QY: 18, WIDTH:"50px", HEIGHT:"45px"},
						{ID:2, TIPO: "MEDICAMENTO", PISO:"2", ESTADO: 0, QX: 138, QY: 18, WIDTH:"50px", HEIGHT:"45px"},
						{ID:5, TIPO: "MEDICAMENTO", PISO:"2", ESTADO: 1, QX: 89 , QY: 92, WIDTH:"50px", HEIGHT:"45px"},
						{ID:3, TIPO: "MEDICAMENTO", PISO:"2", ESTADO: 0, QX: 314, QY: 160, WIDTH:"50px", HEIGHT:"45px"},
						
						{ID:1, TIPO: "SILLA_RUEDAS", PISO:"3", ESTADO: 1, QX: 82 , QY: 150,  WIDTH:"45px", HEIGHT:"54px"},
						{ID:2, TIPO: "SILLA_RUEDAS", PISO:"3", ESTADO: 1, QX: 301, QY: 40,  WIDTH:"45px", HEIGHT:"54px"},
						{ID:1, TIPO: "SILLA_RUEDAS", PISO:"3", ESTADO: 0, QX: 343, QY: 234,  WIDTH:"45px", HEIGHT:"54px"},
						{ID:2, TIPO: "SILLA_RUEDAS", PISO:"3", ESTADO: 0, QX: 248, QY: 302,  WIDTH:"45px", HEIGHT:"54px"},
						
						{ID:2, TIPO: "PACIENTE", PISO:"3", ESTADO: 3, QX: 64 , QY: 30, WIDTH:"45px", HEIGHT:"45px"},
						{ID:3, TIPO: "PACIENTE", PISO:"3", ESTADO: 3, QX: 150, QY: 160, WIDTH:"45px", HEIGHT:"45px"},
						{ID:4, TIPO: "PACIENTE", PISO:"3", ESTADO: 2, QX: 260, QY: 220, WIDTH:"45px", HEIGHT:"45px"},
						
			             
			            {ID:1, TIPO: "RESONANCIA", PISO:"4", ESTADO: 1, QX: 18 , QY:18,  WIDTH:"45px", HEIGHT:"50px"},
			            {ID:2, TIPO: "RESONANCIA", PISO:"4", ESTADO: 1, QX: 218, QY:18,  WIDTH:"45px", HEIGHT:"50px"},
						{ID:3, TIPO: "RESONANCIA", PISO:"4", ESTADO: 0, QX: 358, QY:18,  WIDTH:"45px", HEIGHT:"50px"},
						{ID:4, TIPO: "RESONANCIA", PISO:"4", ESTADO: 1, QX: 545, QY:18,  WIDTH:"45px", HEIGHT:"50px"},
						{ID:5, TIPO: "RADIOGRAFIA", PISO:"4", ESTADO: 0, QX: 111 , QY:292,  WIDTH:"76px", HEIGHT:"57px"},
						{ID:6, TIPO: "RADIOGRAFIA", PISO:"4", ESTADO: 1, QX: 344, QY:302, WIDTH:"51px", HEIGHT:"43px"},
						{ID:7, TIPO: "RADIOGRAFIA", PISO:"4", ESTADO: 1, QX: 544, QY:302, WIDTH:"51px", HEIGHT:"43px"},
						
						{ID:2, TIPO: "PACIENTE", PISO:"4", ESTADO: 3, QX: 64 , QY: 87, WIDTH:"50px", HEIGHT:"45px"},
						{ID:3, TIPO: "PACIENTE", PISO:"4", ESTADO: 3, QX: 90, QY: 160, WIDTH:"50px", HEIGHT:"45px"},
						{ID:4, TIPO: "PACIENTE", PISO:"4", ESTADO: 2, QX: 260, QY: 220, WIDTH:"50px", HEIGHT:"45px"},
						
						{ID:1, TIPO: "MONITOR", PISO:"5", ESTADO: 1, QX: 90 , QY:96,  WIDTH:"45px", HEIGHT:"45px"},
						{ID:2, TIPO: "MONITOR", PISO:"5", ESTADO: 1, QX: 284, QY:97,  WIDTH:"45px", HEIGHT:"45px"},
						{ID:3, TIPO: "MONITOR", PISO:"5", ESTADO: 1, QX: 478, QY:96,  WIDTH:"45px", HEIGHT:"45px"},
						{ID:4, TIPO: "MONITOR", PISO:"5", ESTADO: 0, QX: 95 , QY:224,  WIDTH:"45px", HEIGHT:"45px"},
						{ID:5, TIPO: "MONITOR", PISO:"5", ESTADO: 0, QX: 280, QY:224,  WIDTH:"45px", HEIGHT:"45px"},
						{ID:6, TIPO: "MONITOR", PISO:"5", ESTADO: 0, QX: 476, QY:224,  WIDTH:"45px", HEIGHT:"45px"},
						
						{ID:1, TIPO: "CAMA_URGENCIA", PISO:"5", ESTADO: 1, QX: 18 , QY:18,  WIDTH:"76px", HEIGHT:"60px"},
						{ID:2, TIPO: "CAMA_URGENCIA", PISO:"5", ESTADO: 1, QX: 218 , QY:18,  WIDTH:"76px", HEIGHT:"60px"},
						{ID:3, TIPO: "CAMA_URGENCIA", PISO:"5", ESTADO: 0, QX: 320, QY:18,  WIDTH:"76px", HEIGHT:"60px"},
						{ID:4, TIPO: "CAMA_URGENCIA", PISO:"5", ESTADO: 1, QX: 509, QY:18,  WIDTH:"76px", HEIGHT:"60px"},
						
						{ID:1, TIPO: "CAMA_ONCOLOGIA", PISO:"6", ESTADO: 1, QX: 18 , QY:11,  WIDTH:"71px", HEIGHT:"60px"},
						{ID:2, TIPO: "CAMA_ONCOLOGIA", PISO:"6", ESTADO: 1, QX: 218 , QY:11,  WIDTH:"71px", HEIGHT:"60px"},
						{ID:1, TIPO: "CAMA_ONCOLOGIA", PISO:"6", ESTADO: 0, QX: 323, QY:11,  WIDTH:"71px", HEIGHT:"60px"},
						{ID:4, TIPO: "CAMA_ONCOLOGIA", PISO:"6", ESTADO: 1, QX: 513, QY:11,  WIDTH:"71px", HEIGHT:"60px"},
						{ID:2, TIPO: "CAMA_ONCOLOGIA", PISO:"6", ESTADO: 0, QX: 20 , QY:292,  WIDTH:"71px", HEIGHT:"60px"},
						{ID:6, TIPO: "CAMA_ONCOLOGIA", PISO:"6", ESTADO: 1, QX: 210, QY:292,  WIDTH:"71px", HEIGHT:"60px"},
						{ID:7, TIPO: "CAMA_ONCOLOGIA", PISO:"6", ESTADO: 1, QX: 408, QY:292,  WIDTH:"71px", HEIGHT:"60px"},
						
						{ID:2, TIPO: "PACIENTE", PISO:"6", ESTADO: 2, QX: 64 , QY: 87, WIDTH:"50px", HEIGHT:"45px"},
						{ID:3, TIPO: "PACIENTE", PISO:"6", ESTADO: 3, QX: 350, QY: 160, WIDTH:"50px", HEIGHT:"45px"},
						{ID:4, TIPO: "PACIENTE", PISO:"6", ESTADO: 2, QX: 260, QY: 220, WIDTH:"50px", HEIGHT:"45px"},
						
						{ID:1, TIPO: "ESCRITORIO", PISO:"7", ESTADO: 1, QX: 18 , QY:18,  WIDTH:"88px", HEIGHT:"60px"},
						{ID:2, TIPO: "ESCRITORIO", PISO:"7", ESTADO: 1, QX: 218 , QY:18, WIDTH:"88px", HEIGHT:"60px"},
						{ID:3, TIPO: "ESCRITORIO", PISO:"7", ESTADO: 0, QX: 320, QY:18,  WIDTH:"84px", HEIGHT:"60px"},
						{ID:4, TIPO: "ESCRITORIO", PISO:"7", ESTADO: 1, QX: 504, QY:18,  WIDTH:"88px", HEIGHT:"60px"}
						
		],
		
		 this.createPatient360();
		 this.createMap();
	},
	
	getPositionById : function (id){
		var aObject;
		aObject = {left : sap.ui.getCore().byId(sap.ui.getCore().byId(id).oParent.sId).mProperties.left,
				   top :  sap.ui.getCore().byId(sap.ui.getCore().byId(id).oParent.sId).mProperties.top}
		return aObject;
	},
	
	setPositionById :  function (id,left,top){
		sap.ui.getCore().byId(sap.ui.getCore().byId(id).oParent.sId).setLeft(left+"px");
		sap.ui.getCore().byId(sap.ui.getCore().byId(id).oParent.sId).setTop(top+"px")
	},
	
	getSrcImageContent : function(estado,tipo){
		var stringSrc = "";
		switch(tipo){
			case "PACIENTE" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/enfermeria/pacientes/paciente_gris.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/enfermeria/pacientes/paciente_verde.png";
				  				break;
				  			case 2 :
				  					stringSrc = "../images/enfermeria/pacientes/paciente_celeste.png";
				  				break;
				  			case 3 :
				  					stringSrc = "../images/enfermeria/pacientes/paciente_naranja.png";
				  				break;	
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "CAMA" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/enfermeria/camas/cama_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/enfermeria/camas/cama_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "EQUIPO" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/enfermeria/equipos/equipo_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/enfermeria/equipos/equipo_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "MEDICAMENTO" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/farmacia/medicamentos/medicamento_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/farmacia/medicamentos/medicamento_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "MONITOR" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/farmacia/monitores/monitor_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/farmacia/monitores/monitor_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "SILLA_RUEDAS" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/cuidados_intensivos/silla_ruedas/silla_de_ruedas_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/cuidados_intensivos/silla_ruedas/silla_de_ruedas_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "RESONANCIA" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/imagenologia/resonancia/resonancia_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/imagenologia/resonancia/resonancia_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "RADIOGRAFIA" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/imagenologia/radiografia/radiografia_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/imagenologia/radiografia/radiografia_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "CAMA_ONCOLOGIA" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/oncologia/camas/cama_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/oncologia/camas/cama_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "CAMA_URGENCIA" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/urgencias/camas/cama_urgencia_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/urgencias/camas/cama_urgencia_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
			case "ESCRITORIO" :
				switch(estado){
				  			case 0 : 
				  					stringSrc = "../images/administracion/escritorio/escritorio_nodisp.png";
				  				break;
				  			case 1 :
				  					stringSrc = "../images/administracion/escritorio/escritorio_disp.png";
				  				break;
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
			break;
		}	 
		 return stringSrc;
	},
	
	estadoDetail : function (estado){
		var stringSrc = "";
			switch(estado){
				  			case 0 : 
				  					stringSrc = "No Disponible";
				  				break;
				  			case 1 :
				  					stringSrc = "Disponible";
				  				break;
				  			case 2 :
				  					stringSrc = "En Recuperacion";
				  				break;	
				  			case 3 :
				  					stringSrc = "Dado de Alta";
				  				break;	
				  			case 4 :
				  					stringSrc = "Critico";			
				  				break;	
							default : console.log("ESTADO NO REGISTRADO = "+estado);
				 }
				 return stringSrc;
	},
	
	getCantidadObject : function (aArrayIndex){
		var cantidad = 0;
		
       if(aArrayIndex.TIPO.indexOf("PACIENTE")>-1){
       	  cantidad = aArrayIndex.CANTIDAD;
       }else{
			for(var index in aObject){
				if(aArrayIndex.TIPO ==  aObject[index].TIPO && aArrayIndex.ESTADO == aObject[index].ESTADO){
					cantidad++;
				}
			}
       }	
       
		return cantidad;
	},
	
	
	createPatient360 : function(){
		for(var index in aObject_360){
				var sHtml = aObject_360[index].DESCRIPCION;
						sHtml += "<ul>";
						sHtml += "<li><strong>Sector: </strong>"+aObject_360[index].SECTOR+"</li>";
						sHtml += "<li><strong>Piso: </strong>"+aObject_360[index].PISO+"</li>";
						sHtml += "<li><strong>Estado: </strong>"+this.estadoDetail(aObject_360[index].ESTADO)+"</li>";
						sHtml += "<li><strong>Cantidad: </strong>"+this.getCantidadObject(aObject_360[index])+"</li>";
						sHtml += "</ul>";
			
		  	  	 oMatrix360.addContent(  
		  	  	 	new sap.ui.commons.Image("IMAGE_"+aObject_360[index].TIPO+"_"+aObject_360[index].PISO+"_"+aObject_360[index].ESTADO,{
		  	  	 		src: this.getSrcImageContent(aObject_360[index].ESTADO,aObject_360[index].TIPO),
		  	  	 		width: aObject_360[index].WIDTH,
		  	  	 		height: aObject_360[index].HEIGHT,
		  	  	 		tooltip : new sap.ui.commons.RichTooltip("TOOLTIP_"+aObject_360[index].TIPO+"_"+aObject_360[index].PISO+"_"+aObject_360[index].ESTADO,{
		  	  	 			      text : sHtml,
		  	  	 			      title: aObject_360[index].TIPO,
								  imageSrc :  this.getSrcImageContent(aObject_360[index].ESTADO,aObject_360[index].TIPO)
						}),
		  	  	 		press : function(oEvent){
		  	  	 			    SAP_UI.createObjectPiso(oEvent.getParameters().id.split("_")[oEvent.getParameters().id.split("_").length-2]);
		  	  	 			    SAP_UI.refreshElement(oEvent.getParameters().id.split("_")[oEvent.getParameters().id.split("_").length-2]);
		  	  	 		}
		  	  	 	}),
		  	  	 	{left : aObject_360[index].QX+"px", top : aObject_360[index].QY+"px"});
		  		//Crea Label del paciente 
		  		oMatrix360.addContent(
		  			new sap.ui.commons.Label("LABEL_"+aObject_360[index].TIPO+"_"+aObject_360[index].PISO+"_"+aObject_360[index].ESTADO,{
		  				text : this.getCantidadObject(aObject_360[index]),	
		  				design :  sap.ui.commons.LabelDesign.Bold}
		  			),
		  			{left : (aObject_360[index].L_QX - 2 )+"px", top : (aObject_360[index].L_QY - 2)+"px"});
		}
	},
	
	createObjectPiso : function(piso){
		oMatrixElements.destroyContent();
		var oti, obj;
		
		var imgRooms = sap.ui.getCore().getElementById('oMatrixElements');
		
		oMatrixElements.addContent(new sap.ui.commons.Image("IMAGEN_FONDO",{src: "../images/plano_hospital.png",width: "600px",height: "360px" }));
		console.log("PISO: "+piso);
		for(var index in aObject){
		  	  	console.log(this.getSrcImageContent(aObject[index].ESTADO,aObject[index].TIPO));
		  	  	
		  	  	if ((aObject[index].ESTADO == 0 || aObject[index].ESTADO == 3 || aObject[index].ESTADO == 2) && this.existInfoObject(aObject[index])) {
		  	           
			  	  	if(aObject[index].PISO == piso){
			  	  		console.log("IDS");
			  	  		console.log("ThingInspector_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO);
			  	  		this.createThingInspector("ThingInspector_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO,aObject[index]);
			  	  		
			  	  		oMatrixElements.addContent(new sap.ui.commons.Image("IMAGE_PISO_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO,{
				  	  	 		src: this.getSrcImageContent(aObject[index].ESTADO,aObject[index].TIPO),
				  	  	 		width: aObject[index].WIDTH,  
				  	  	 		height: aObject[index].HEIGHT,
				  	  	 		press : function(oEvent){
                                    sap.ui.getCore().byId(oEvent.getParameters().id.replace("IMAGE_PISO", "ThingInspector")).open();  
				  	  	 		}
			  	  	 	}),{left : aObject[index].QX+"px", top : aObject[index].QY+"px"});
					}
		  	  	}else{
		  	  		if(aObject[index].PISO == piso){
			  	  		oMatrixElements.addContent(new sap.ui.commons.Image("IMAGE_PISO_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO,{
				  	  	 		src: this.getSrcImageContent(aObject[index].ESTADO,aObject[index].TIPO),
				  	  	 		width: aObject[index].WIDTH,
				  	  	 		height: aObject[index].HEIGHT
			  	  	 	}),{left : aObject[index].QX+"px", top : aObject[index].QY+"px"});
					}
		  	  	}
	  	  	
		}
	},
	
	existInfoObject :  function (idJSON){

			for (var index in aJSON_Info){
		 	 if(aJSON_Info[index].ID ==  idJSON.ID && aJSON_Info[index].TIPO == idJSON.TIPO && 
		 		aJSON_Info[index].ESTADO ==  idJSON.ESTADO && aJSON_Info[index].PISO ==  idJSON.PISO ){
				return true;
		 	 }
		 }
			return false;
			
	},
	
	createThingInspector : function (id,idJSON){
		console.log("s");
		if(sap.ui.getCore().byId("cerrar_"+id)){
			return;
		}
		 var aJSON = []; 

		 for (var index in aJSON_Info){
		 	 if(aJSON_Info[index].ID ==  idJSON.ID && aJSON_Info[index].TIPO == idJSON.TIPO && 
		 		aJSON_Info[index].ESTADO ==  idJSON.ESTADO && aJSON_Info[index].PISO ==  idJSON.PISO ){
		 	 	aJSON = aJSON_Info[index];
		 	 }
		 }
		  console.log(aJSON);
		
		function row(aParams){
		 var aRows = [];	
			for (var index in aParams ){
				
				var oControl;
				
				oControl = new sap.ui.commons.TextView({
						text: aParams[index].VALUE
				});
	
				var oLabel = new sap.ui.commons.Label({
					text: aParams[index].PARAM + ":",
					labelFor: oControl
				});
			
				var oMLCell1 = new sap.ui.commons.layout.MatrixLayoutCell({
					hAlign : sap.ui.commons.layout.HAlign.End,
					vAlign : sap.ui.commons.layout.VAlign.Top,
					content : [ oLabel ]
				});
				var oMLCell2 = new sap.ui.commons.layout.MatrixLayoutCell({
					hAlign : sap.ui.commons.layout.HAlign.Begin,
					vAlign : sap.ui.commons.layout.VAlign.Top,
					content : [ oControl ]
				});
				aRows.push(new sap.ui.commons.layout.MatrixLayoutRow ({cells : [ oMLCell1, oMLCell2 ]}));
			}
			
			 return aRows;
			
		}
		
		var close = new sap.ui.ux3.ThingAction("cerrar_"+id,{text : "Cerrar",tooltip: "Cerrar"});

		var oTI  = new sap.ui.ux3.ThingInspector(id, {
			firstTitle: aJSON.CONTENT[0].CONTENT[0].VALUE,
			secondTitle: aJSON.CONTENT[0].CONTENT[1].VALUE,
			type: aJSON.CONTENT[0].CONTENT[2].VALUE,
			icon: aJSON.CONTENT[0].CONTENT[3].VALUE,
			updateActionEnabled: false,
			facets: [
				 new sap.ui.ux3.NavigationItem({key : "overview", text : "Detalle 1"}),
				 new sap.ui.ux3.NavigationItem({key : "detail", text : "Detalle 2"})
			],
			headerContent: [
				new sap.ui.ux3.ThingGroup({
					title : aJSON.CONTENT[1].TITLE,
					content: [
						new sap.ui.commons.layout.MatrixLayout({rows: [row(aJSON.CONTENT[1].CONTENT)
						]})
					]
				}),
				new sap.ui.ux3.ThingGroup({
					title : aJSON.CONTENT[2].TITLE,
					content: [
						new sap.ui.commons.layout.MatrixLayout({rows: [row(aJSON.CONTENT[2].CONTENT)
							//row("Web Site", "www.sap.com", "httidp://www.sap.com")
						]})
					]
				})
			],
			openNew: function(oEvent) {
				sap.ui.commons.MessageBox.show("Se ha generado la siguiente acción: ", "INFORMATION", "Abrir nuevo", "CLOSE", null, "CLOSE");
			},
			facetSelected: function(oEvent) {
				oTI.removeAllFacetContent();
				oTI.removeAllActions();
				switch(oEvent.getParameter("key")){
					case "overview":
						oTI.addFacetContent(new sap.ui.ux3.ThingGroup({
							title : aJSON.CONTENT[3].TITLE,
							content: [
								new sap.ui.commons.layout.MatrixLayout({rows: [row(aJSON.CONTENT[3].CONTENT)
											
								]})
							]
						}));
						oTI.addFacetContent(new sap.ui.ux3.ThingGroup({
						title : aJSON.CONTENT[4].TITLE,
						content: [
							new sap.ui.commons.layout.MatrixLayout({rows: [row(aJSON.CONTENT[4].CONTENT)
										
							]})
						]
						}));
						oTI.addAction(close);
						break;
					case "detail":
						oTI.addFacetContent(new sap.ui.ux3.ThingGroup({
						title : aJSON.CONTENT[5].TITLE,
						content: [
							new sap.ui.commons.layout.MatrixLayout({rows: [row(aJSON.CONTENT[5].CONTENT)
							
				]})
					]
				}));
						oTI.addAction(close);
						break;
				}
			},
			actionSelected: function(oEvent) {
			
				if(oEvent.getParameter("action").getId().indexOf("cerrar") > -1 ){
					if(oTI.isOpen()){
						oTI.close();
					    return;
					}
				}
			}
		});
		
		oTI.addStyleClass("oTI");
	},
	
	
	createMap : function (){
		aMap =[
		  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],  
	      [1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1],
	      [1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1],
	      [1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1], 
	      [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1], 
	      [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1], 
	      [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1], 
	      [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1], 
	      [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1], 
	      [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1], 
	      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
	      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1], 
	      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
	      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
	      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];   
	},
	
	refreshElement : function (piso){
		var piso = piso;
		clearInterval(timeRefresh);
	 	timeRefresh = setInterval(function() {
		  for(var index in aObject){
		  	if(aObject[index].TIPO.indexOf("PACIENTE") > -1 || aObject[index].TIPO.indexOf("EQUIPO") > -1 || aObject[index].TIPO.indexOf("MEDICAMENTO") > -1|| aObject[index].TIPO.indexOf("SILLA") > -1){
		  	  if(aObject[index].PISO == piso && aObject[index].ESTADO != 1 ){	
		  	  	var position = SAP_UI.getPositionById("IMAGE_PISO_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO);
		  	     	position.top = Math.round(position.top.split("px")[0])/1; 
		  	  	    position.left = Math.round(position.left.split("px")[0])/1;
	  	  	    
	  	  	    var indexPosition = {top: Math.round(position.top/10), left: Math.round(position.left/10)};
		  	    var rand = Math.floor((Math.random() * 5) + 1);

		  	  	    switch(rand) {
					case 1:
						    if(indexPosition.top + 1 < height_){
		        			   if(aMap[indexPosition.top + 1][indexPosition.left] != 1)
		        			    	SAP_UI.setPositionById("IMAGE_PISO_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO,position.left,position.top + 10);
		        			 }   
		        		break;
				    case 2 :
				    	if(indexPosition.left + 1 < with_){
					    	 if(aMap[indexPosition.top][indexPosition.left + 1] != 1)
		        			    	SAP_UI.setPositionById("IMAGE_PISO_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO,position.left + 10,position.top);
				    	}
				        break;
				    case 3 :
				    	if(indexPosition.top + 1 < with_ && indexPosition.left + 1 < height_){
						    if(aMap[indexPosition.top + 1][indexPosition.left + 1] != 1)
			        			    SAP_UI.setPositionById("IMAGE_PISO_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO,position.left + 10,position.top + 10);
		  	  	         } 
					        break;
					case 4: 
						if(indexPosition.top - 1 > 0){
						    if(aMap[indexPosition.top - 1][indexPosition.left] != 1)
			        				SAP_UI.setPositionById("IMAGE_PISO_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO,position.left,position.top - 10);
						}
					        break;
					case 5:
						if(indexPosition.left - 1 > 0){
					    	 if(aMap[indexPosition.top][indexPosition.left - 1] != 1)
		        			    	SAP_UI.setPositionById("IMAGE_PISO_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO,position.left - 10,position.top);
						}	  
				        break; 
				    case 6:
				    	if(indexPosition.top - 1 > 0 && indexPosition.left - 1 > 0){
						    if(aMap[indexPosition.top - 1][indexPosition.left - 1] != 1)
			        			    SAP_UI.setPositionById("IMAGE_PISO_"+aObject[index].TIPO+"_"+aObject[index].ID+"_"+aObject[index].PISO+"_"+aObject[index].ESTADO,position.left - 10,position.top - 10);
						}
					    	
					     break;
					}
		  	  }
		  	}
		  }
		}, 2000);
	}, 
	
	getObjectWithCondition : function (aObject,aCondition){
		var aElement = [];
        for(var index in aObject){
	          if(this.getEvaluateCondition(aObject[index],aCondition)){ 
	          	aElement.push(aObject[index]);
	          }
        }
	    return aElement;
	},
	
	getEvaluateCondition : function (_Object,aCondition){
		for(var index in aCondition){   
	    		var aPropertys = Object.keys(aCondition[index]);
	    		     for(var count in aPropertys){
	           	         if(aCondition[index][aPropertys[count]] !== _Object[aPropertys[count]]){
    	   					return false;
	           			 }
	    		  }	 
	     }
		return true;
	}
	
	});

});