"use strict";

function nameForm(NameService) {  // parent controller, by passing NameService as an argument, nameForm controller has access to it.

    const ctrl = this;

    ctrl.saveName = function(){  // this function passes the ng-modeled data as a parameter into the saveName function contained within the NameService service 
        NameService.saveName(ctrl.nameInput);  // saveName(ctrl.nameInput) assigns service.name as ctrl.nameInput
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