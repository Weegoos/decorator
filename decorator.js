console.log("---------Decorator---------")


class Batyr{
    constructor(user_name){
        this.user_name = user_name;
        return `Info ${ this.user_name}`;
    }
    get(){
        
    }
}

class User extends Batyr {
    constructor(users, cities){
        super()
        this.user_name = "Batyr"
        this.cities = cities;      
    }
    get(){
        console.log(`User Info: ${this.user_name} - ${this.cities}`);
    }
}


let s1 = new Batyr();
s1.get();

let d1= new User(s1, 'Astana');
d1.get();
console.log(d1);


