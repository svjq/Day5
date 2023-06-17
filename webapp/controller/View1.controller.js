sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("baby.controller.View1", {
            onInit: function () {
                    this.oRoute = this.getOwnerComponent().getRouter();
            },

            next:function(){
                this.oRoute.navTo("RouteView2");
            },

            RaisePop:function(){
                MessageBox.confirm("This message should appear in the confirmation", {
                    title: "Confirm",                                    // default
                    onClose: null,                                       // default
                    styleClass: "",                                      // default
                    actions: [ sap.m.MessageBox.Action.OK,
                               sap.m.MessageBox.Action.CANCEL ],         // default
                    emphasizedAction: sap.m.MessageBox.Action.OK,        // default
                    initialFocus: null,                                  // default
                    textDirection: sap.ui.core.TextDirection.Inherit     // default
                });
            }
        });
    });
