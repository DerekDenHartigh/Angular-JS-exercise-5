"use strict";

function NameService()  {
    
    const service = this;
    service.name = "";
    service.saveName = (nameInput)=>{
        console.error(nameInput);
        service.name = nameInput;
    };
  
    service.loadName = ()=>{
    console.warn(service.name)
    return service.name;
    };
  
  }
    
    angular
      .module("NameApp")
      .service("NameService", NameService);