namespace classes_from {
    class Person {
        public name : string;
        public surname : string;
        public email : string;

        public constructor( name : string, surname : string, email : string ) {
            this.email = email;
            this.name = name;
            this.surname = surname;

        }

        public greet() {
            console.log("Hi All");
        }
    }

    const person = new Person("Mahanth", "v rao", "mahanth@gmail.com");
}