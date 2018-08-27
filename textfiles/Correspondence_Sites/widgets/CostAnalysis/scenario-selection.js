// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/scenario-selection.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv class\x3d"esriCTRegionDetailsParentDiv" data-dojo-attach-point\x3d"regionDetailsParentContainer"\x3e\r\n    \x3cdiv class\x3d"esriCTRegionLabel"\x3e${nls.scenarioSelection.regionLabel}\x3c/div\x3e\r\n    \x3cinput class\x3d"esriCTRegionTextBox" data-dojo-attach-point\x3d"regionNameTextBox" data-dojo-type\x3d"dijit/form/TextBox" readonly\x3d"true"\r\n    /\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTScenarioDetailsParentDiv" data-dojo-attach-point\x3d"scenarioDetailsParentDiv"\x3e\r\n    \x3cdiv class\x3d"esriCTScenarioLabel"\x3e${nls.scenarioSelection.scenarioLabel}\x3c/div\x3e\r\n    \x3cselect class\x3d"esriCTScenarioDropdown" data-dojo-attach-point\x3d"scenarioDropDown" data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./scenario-selection.html dojo/_base/array dojo/_base/lang dojo/store/Memory dojo/dom-class".split(" "),function(e,f,g,h,k,l,m,n,c){return e([f,g,h],{templateString:k,baseClass:"jimu-widget-cost-analysis-scenario-selection",postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments);this._init()},_init:function(){this.regionNameTextBox.set("value",this.regionName);this._setScenarioOptions()},
_setScenarioOptions:function(){var a,d;a=[];l.forEach(this.scenarioOptions,m.hitch(this,function(b){a.push({name:b.scenario,value:b.scenario,featureTemplate:this.templateName,geographyGlobalID:this.geographyGlobalID,costEquation:b.costEquation})}));d=new n({idProperty:"value",data:a});this.scenarioDropDown.set("labelAttr","name");this.scenarioDropDown.set("store",d);this.scenarioDropDown.set("value",this.nls.scenarioSelection.noneText);this.costingGeometryLayer?c.remove(this.regionDetailsParentContainer,
"esriCTHidden"):c.add(this.regionDetailsParentContainer,"esriCTHidden")}})});