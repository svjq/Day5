sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("baby.controller.View2", {
        onInit:function(){
            //Controller.prototype.init.apply(this);
            this.oRoute = this.getOwnerComponent().getRouter();
            // this.oRouter.getRoute("RouteView2").attachMatched("hulk");
        },
        back:function(){
            this.oRoute.navTo("RouteView1");
        },
        hulk:function(oEvent){
            var a = oEvent.getParameter("arguments").param1;
            console.log(a);
        }
    })
});