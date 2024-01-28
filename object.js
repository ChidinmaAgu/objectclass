class Car {
    static company = "";
 
     constructor(name, price) {
       this.name = name;
       this.price = price;
     }
 
     info() {
       console.log(`Car name is: ${this.name}`);
     }
 
 
     
     setNewCompany(name) {
       this.company = name;
 
       console.log(`New Company name is set`);
     }
 
 
       getCompany() {
       console.log(`${this.name} belongs to: ${this.company}`);
 
     }
 
 
 
 }
 
   // Creating a new instance for the Car class
 
    const car = new Car("Mazda", 100000);
 
      console.log(`Name : ${car.name}`);
      console.log(` Price: ${car.price}`);
      car.info();
 
    
       car.setNewCompany("volvo");
 
     
       console.log(`Class property-company : ${car.company}`);
        car.getCompany();
 
      