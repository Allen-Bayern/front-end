const obj = {
    name : 'Nora',
  
    rept(){
      return {
        name: 'Z',
        getName(){
          return this.name;
        }
      };
    },
};

console.log(obj.rept().getName.bind(obj)());