"use strict";

function nameForm(NameService) {

    const ctrl = this;

    ctrl.saveName = function(){
        NameService.saveName(ctrl.nameInput);
    };
}
        
angular
.module('NameApp')
.component('nameForm', {
    template: `
    <div id="form-box">
        <input id="name-input" placeholder="Type a Name Here" type=text ng-model="$ctrl.nameInput">
        <br>
        <button id="save-button" ng-click="$ctrl.saveName()">Save</button>
        <name-display></name-display>
    </div> 
    `,
    controller: nameForm,
    // bindings: {

    // }
});