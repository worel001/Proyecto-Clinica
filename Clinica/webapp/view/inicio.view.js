sap.ui.jsview("hospital.view.inicio", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.inicio
	 */
	getControllerName: function() {
		return "hospital.controller.inicio";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.inicio
	 */
	createContent: function(oController) {
	
	var aControls = [];
	
	oMatrix360 = new sap.ui.commons.layout.AbsoluteLayout("oMatrix360",{
      width: "540px", 
      height: "587px"
      });
    
     oMatrix360.addStyleClass("oMatrix360"); 
    
    oMatrix360.addContent(new sap.ui.commons.Image("IMAGEN_360",{src: "../images/corte_pro_1.png",width: "540px",height: "587px" }));
    
    aControls.push(oMatrix360);
    
    
	oMatrixElements = new sap.ui.commons.layout.AbsoluteLayout("oMatrixElements",{
      width: "600px", 
      height: "360px"
    });
     
     oMatrixElements.addStyleClass("oMatrixElements"); 
     
	 
      aControls.push(oMatrixElements);
      
		
      return aControls;
    
	}

});