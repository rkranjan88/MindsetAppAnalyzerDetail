sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, ODataModel, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("com.mindset.analyzerdetail.AppAnalyzerDetail.controller.App", {
		onInit: function () {
			/*			var oComponentData = this.getMyComponent().getComponentData();
						if (oComponentData) {
							var oStartupParameters = oComponentData.startupParameters.App;
						}

						if (oStartupParameters) {
							oStartupParameters = oStartupParameters.toString();
							var oTable = this.getView().byId("LineItemsSmartTable"),
								oBinding = oTable.getTable().getBindingInfo("items");
							oTable.rebindTable();	
							var aFilter = [];
							aFilter.push(new Filter("AppDescription", FilterOperator.Contains, oStartupParameters));
							oBinding.filters.push(aFilter);
						}*/
		},
		/**
		 *@memberOf com.mindset.analyzerdetail.AppAnalyzerDetail.controller.App
		 */
		onBeforeRebindTable: function (oEvent) {
			var oComponentData = this.getMyComponent().getComponentData();
			if (oComponentData) {
				var oStartupParameters = oComponentData.startupParameters.App;
			}
			if (oStartupParameters) {
				oStartupParameters = oStartupParameters.toString();
				var mBindingParams = oEvent.getParameter("bindingParams");
				var aFilter = [];
				mBindingParams.filters.push(new Filter("AppDescription", FilterOperator.Contains, oStartupParameters));
			}
		},
		getMyComponent: function () {
			"use strict";
			var sComponentId = sap.ui.core.Component.getOwnerIdFor(this.getView());
			return sap.ui.component(sComponentId);
		}
	});
});