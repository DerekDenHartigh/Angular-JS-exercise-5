"use strict";

function nameDisplay(NameService) {  //nameDisplay is the name-display.js controller, I'm passing the NameService service function into the controller as a parameter
    const ctrl = this;
    // let nameInput;  // initializing nameInput, is this necessary? Nope 
    ctrl.nameInput = "Defaultius Namius"  // I can set a default nameInput, loading the new nameInput w/ nothing saved will load my default service.name, as per the loadName();
    ctrl.loadName = function(){ // this function has access to NameService since it is passed as a parameter into the controller
        console.log("loaded");  // this loadName function is a lightweight relay function, simply console logging and calling another function
        ctrl.nameInput = NameService.loadName();  // loadname returns the saved service.name as defined when user saves inputName via saveName();
    } // this is essentially: ctrl.nameInput = service.name, but needs to be passes as a function/return due to scope?
}
        
angular
.module('NameApp')  // tells it what module it is a component of
.component('nameDisplay', {  // gives the nameDisplay component its name, template stuff: h1 displays the ctrl's nameInput variable - either defined by the loadName default or saved ng-modeled data from the nameForm component.  ng-click calls the loadName() function, which calls the service's loadName() which returns the service.name
    template: `
    <h1>Name: {{$ctrl.nameInput}}</h1>
    <button id="load-button" ng-click="$ctrl.loadName()">Load</button>
    `,
    controller: nameDisplay, // assigns controller to this nameDisplay component
});

/** benefits of a service is that it stores/holds data that is not being renderd in the view,
 * if a controller held the data, it would disappear when it was no longer rendered on the view
 */
