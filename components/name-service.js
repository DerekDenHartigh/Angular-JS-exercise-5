"use strict";

function NameService()  {

    const service = this;
    service.name = "Y u No Save!";  // default service.name
    service.saveName = (nameInput)=>{  // logs nameInput, assigns nameInput value to service.name, nameInput === nameForm's ctrl.nameInput
        console.error('saved: '+nameInput);
        service.name = nameInput;
    };
  
    service.loadName = ()=>{ // logs service.name, returns service.name as assigned by saveName();
    console.warn('loading: '+service.name)
    return service.name;
    };
  
  }
    
    angular
      .module("NameApp")  // tells it what module/app it is a part of
      .service("NameService", NameService);  // defines the name of the service?