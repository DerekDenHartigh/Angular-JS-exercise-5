"use strict";

function nameDisplay(NameService) {
    const ctrl = this;
    let nameInput = "";

    ctrl.loadName = function(){
        console.log("loaded");
        ctrl.nameInput = NameService.loadName();
    }
}
        
angular
.module('NameApp')
.component('nameDisplay', {
    template: `
    <h1>Name: {{$ctrl.nameInput}}</h1>
    <button id="load-button" ng-click="$ctrl.loadName()">Load</button>
    `,
    controller: nameDisplay,
});