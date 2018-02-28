class Person {
    name :String;
    constructor(name:string){
        this.name = name;
    }
    dance(){
        console.log(this.name + " is dancing");
    }
}

var brand = new Person("brand");
brand.dance();

class AwesomePerson extends Person{
    dance(){
        console.log("So Awesome!")
        super.dance();
    }
}

var roob = new AwesomePerson("robb");
roob.dance();