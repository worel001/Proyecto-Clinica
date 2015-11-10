sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("hospital.controller.inicio", {
           
	           
	 onInit: function() { 
	 	aPositionMapTop = [
		 					{SECTOR: "ALA_NORTE", MAX : 21, MIN : 5},
		 					{SECTOR: "ALA_CENTRO", MAX : 50, MIN : 40},
		 					{SECTOR: "ALA_SUR", MAX : 85, MIN : 67}
	 				      ];
	 	aPositionMapLeft = [
		 					{SECTOR: "ALA_ESTE", MAX :21, MIN : 0},
		 					{SECTOR: "ALA_CENTRO", MAX : 55, MIN : 34},
		 					{SECTOR: "ALA_OESTE", MAX : 87, MIN : 67}
	 					  ];
	 				   
		aObject = 	[
				         { TAG: "CAMA_1.1", VALUE : "1"},
			             { TAG: "CAMA_1.2", VALUE : "0"},
			             { TAG: "CAMA_2.1", VALUE : "1"},
			             { TAG: "CAMA_2.2", VALUE : "1"},
			             { TAG: "CAMA_3.1", VALUE : "0"},
			             { TAG: "CAMA_3.2", VALUE : "1"},
			             { TAG: "CAMA_4.1", VALUE : "1"},
			             { TAG: "CAMA_4.2", VALUE : "0"},
			             { TAG: "CAMA_5.1", VALUE : "1"},
			             { TAG: "CAMA_5.2", VALUE : "1"},
			             { TAG: "CAMA_6.1", VALUE : "1"},
			             { TAG: "CAMA_6.2", VALUE : "1"},
			             { TAG: "EQUIPO_1_1", VALUE : "20,45"},
			             { TAG: "EQUIPO_1.2", VALUE : "20,45"},
			             { TAG: "EQUIPO_2.1", VALUE : "20,45"},
			             { TAG: "EQUIPO_2.2", VALUE : "20,45"},
			             { TAG: "11_1_1", QX : 8 , QY: 33},
			             { TAG: "11_1_2", QX : 8 , QY: 33},
			             { TAG: "PACIENTE_2_1", QX : 8 , QY: 33},
			             { TAG: "11_2_2", QX : 8 , QY: 33}
		],
		 this.createMap();
	     this.refreshElement();
	    
		console.log(aObject);
		console.log(this.getObjectWithCondition(aObject,[{ESTADO : "2", TIPO:"PACIENTE"}]));
		
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
      [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
      [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
      [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
      [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 
      [1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1], 
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1], 
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1], 
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1], 
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];   
		
	    console.log(aMap);
	    
	/*	
	  var string = ""
	  for(var i = 0; i < height_ ; i++){
			    for(var j = 0; j < with_; j++){
			    	if(j==0) string += i+"| "
			        if(j != with_ -1) string += aMap[i][j]+",";
			        else string += aMap[i][j];
			    }
			    string += " \n"; 
		}*/

		
		
	},
	
		refreshElement : function (){
	 	timeRefresh = setInterval(function() {
		  for(var index in aObject){
		  	  if(aObject[index].TAG.indexOf("PACIENTE") > -1){
		  	  	console.log(aObject[index].TAG);
		  	  	var position = SAP_UI.getPositionById(aObject[index].TAG);
		  	  	    console.log("POSITION ANTES DE SPLIT: X: "+position.left+" Y: "+position.top);
		  	     	position.top = Math.round(position.top.split("px")[0])/1; 
		  	  	    position.left = Math.round(position.left.split("px")[0])/1;
	  	  	   
	  	  	    var indexPosition = {top: Math.round(position.top/10), left: Math.round(position.left/10)};
		  	  	var resetPosition = false;    
		  	  	    console.log("POSICION IMAGEN: \n X: "+position.left+" Y: "+position.top);
		  	  	    console.log("POSICION ARRAY: \n X: "+indexPosition.left+" Y: "+indexPosition.top);
		  	  	    var rand = Math.floor((Math.random() * 5) + 1);
		  	  	    console.log("RANDOM: "+rand);

		  	  	    switch(rand) {
					case 1:
						    if(indexPosition.top + 1 < height_){
						    	console.log(aMap[indexPosition.top + 1][indexPosition.left]);
		        			 if(aMap[indexPosition.top + 1][indexPosition.left] != 1){
		        			    SAP_UI.setPositionById(aObject[index].TAG,position.left,position.top + 10);
		        			     console.log("NUEVA POSICION: \n X: "+position.left+" Y: "+(position.top + 10));
		        			 }else{
		        			 	resetPosition = true;
						        console.log("RECHAZO: X: "+position.left+" Y: "+position.top);
		        			 }
						   }else{
						   		resetPosition = true;
						   }
	        			break;
				    case 2 :
				    	if(indexPosition.left + 1 < with_){
				    		console.log(aMap[indexPosition.top][indexPosition.left + 1]);
					    	 if(aMap[indexPosition.top][indexPosition.left + 1] != 1){
		        			    SAP_UI.setPositionById(aObject[index].TAG,position.left + 10,position.top);
		        			    console.log("NUEVA POSICION: \n X: "+(position.left + 10) +" Y: "+position.top);
					    	 }else{
		        			 	resetPosition = true;
						        console.log("RECHAZO: X: "+position.left+" Y: "+position.top);
					    	 }
				    	}else{
				    		resetPosition = true;
				    	}	 
				        break;
				    case 3 :
				    	if(indexPosition.top + 1 < with_ && indexPosition.left + 1 < height_){
				    		console.log(aMap[indexPosition.top + 1][indexPosition.left + 1]);
						    if(aMap[indexPosition.top + 1][indexPosition.left + 1] != 1){
			        			    SAP_UI.setPositionById(aObject[index].TAG,position.left + 10,position.top + 10);
			        			    console.log("NUEVA POSICION: \n X: "+(position.left + 10)+" Y: "+(position.top + 10));
			  	  	    	}else{
		        			 	resetPosition = true;
						        console.log("RECHAZO: X: "+position.left+" Y: "+position.top);
		        			  }
		  	  	         }else{
		  	  	         	resetPosition = true;
		  	  	         } 
					        break;
					case 4: 
						if(indexPosition.top - 1 > 0){
							console.log(aMap[indexPosition.top - 1][indexPosition.left]);
						    if(aMap[indexPosition.top - 1][indexPosition.left] != 1){
			        			     SAP_UI.setPositionById(aObject[index].TAG,position.left,position.top - 10);
			        			     console.log("NUEVA POSICION: \n X: "+(position.left - 10) +" Y: "+position.top);
			  	  	       }else{
		        			 	resetPosition = true;
						        console.log("RECHAZO: X: "+position.left+" Y: "+position.top);
		        			  }
						}else{
							resetPosition = true;
						}
					        break;
					case 5:
						if(indexPosition.left - 1 > 0){
							console.log(aMap[indexPosition.top][indexPosition.left - 1]);
					    	 if(aMap[indexPosition.top][indexPosition.left - 1] != 1){
		        			    SAP_UI.setPositionById(aObject[index].TAG,position.left - 10,position.top);
		        			    console.log("NUEVA POSICION: \n X: "+position.left+" Y: "+(position.top - 10));
				  	  	    }else{
			        			resetPosition = true;
							        console.log("RECHAZO: X: "+position.left+" Y: "+position.top);
			        			  }
						}else{
							resetPosition = true;
						}	  
				        break; 
				    case 6:
				    	if(indexPosition.top - 1 > 0 && indexPosition.left - 1 > 0){
				    		console.log(aMap[indexPosition.top - 1][indexPosition.left - 1]);
						    if(aMap[indexPosition.top - 1][indexPosition.left - 1] != 1){
			        			    SAP_UI.setPositionById(aObject[index].TAG,position.left - 10,position.top - 10);
			        			    console.log("NUEVA POSICION: \n X: "+(position.left - 10) +" Y: "+(position.top - 10));
						     }else{
		        			 	resetPosition = true;
						        console.log("RECHAZO: X: "+position.left+" Y: "+position.top);
		        			  }
					    	}else{
					    		resetPosition = true;
					    	}
					    	
					     break;
					}
				

		  	  	/*
		  	  	
		  	  	
		  	  	 var indexPosition_Top = Math.floor(Math.random() * aPositionMapTop.length);
		  	  	 var positionTop = { 
		  	  	 					MAX : aPositionMapTop[indexPosition_Top].MAX,
		  	  						MIN: aPositionMapTop[indexPosition_Top].MIN
		  	  	 				   };
		  	  	 var indexPosition_Left = Math.floor(Math.random() * aPositionMapLeft.length);			   
		  	  	 var positionLeft = { 
		  	  	 					MAX : aPositionMapLeft[indexPosition_Left].MAX,
		  	  						MIN: aPositionMapLeft[indexPosition_Left].MIN
		  	  	 				   };
		  	  	 Math.floor((Math.random() * 100) + 1)
		  	  	 
		  	  	 var random_left = Math.floor(Math.random() * (positionLeft.MAX - positionLeft.MIN + 1)) + positionLeft.MIN;
		  	  	 var random_top = Math.floor(Math.random() * (positionTop.MAX - positionTop.MIN + 1)) + positionTop.MIN;
				 SAP_UI.setPositionById( aObject[index].TAG, random_left+"%", random_top+"%");
				console.log("LEFT_MIN: "+positionLeft.MIN+" LEFT_MAX: "+positionLeft.MAX);
				console.log("TOP_MIN: "+positionTop.MIN+" TOP_MAX: "+positionTop.MAX);
				console.log("RANDOM_LEFT: "+random_left+" RANDOM_TOP: "+random_top);
				*/
		       }
		  }
		}, 5000);
	},
/*	
	refreshElement : function (){
	 	timeRefresh = setInterval(function() {
		  for(var index in aObject){
		  	  if(aObject[index].TAG.indexOf("PACIENTE") > -1){
		  	  	 var indexPosition_Top = Math.floor(Math.random() * aPositionMapTop.length);
		  	  	 var positionTop = { 
		  	  	 					MAX : aPositionMapTop[indexPosition_Top].MAX,
		  	  						MIN: aPositionMapTop[indexPosition_Top].MIN
		  	  	 				   };
		  	  	 var indexPosition_Left = Math.floor(Math.random() * aPositionMapLeft.length);			   
		  	  	 var positionLeft = { 
		  	  	 					MAX : aPositionMapLeft[indexPosition_Left].MAX,
		  	  						MIN: aPositionMapLeft[indexPosition_Left].MIN
		  	  	 				   };
		  	  	 Math.floor((Math.random() * 100) + 1)
		  	  	 
		  	  	 var random_left = Math.floor(Math.random() * (positionLeft.MAX - positionLeft.MIN + 1)) + positionLeft.MIN;
		  	  	 var random_top = Math.floor(Math.random() * (positionTop.MAX - positionTop.MIN + 1)) + positionTop.MIN;
				 SAP_UI.setPositionById( aObject[index].TAG, random_left+"%", random_top+"%");
				console.log("LEFT_MIN: "+positionLeft.MIN+" LEFT_MAX: "+positionLeft.MAX);
				console.log("TOP_MIN: "+positionTop.MIN+" TOP_MAX: "+positionTop.MAX);
				console.log("RANDOM_LEFT: "+random_left+" RANDOM_TOP: "+random_top);
		       }
		  }
		}, 5000);
	},
*/	

	
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
	
	//onAfterRendering: function() {
	//
	//
	//},
	
	//	onBeforeRendering: function() {
	//
	//
	//	},
		 
	//	onExit: function() {
	//
	//	}     
           
	});

});