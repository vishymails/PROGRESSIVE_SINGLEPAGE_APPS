var classes_from;
(function (classes_from) {
    var Person = /** @class */ (function () {
        function Person(name, surname, email) {
            this.email = email;
            this.name = name;
            this.surname = surname;
        }
        Person.prototype.greet = function () {
            console.log("Hi All");
        };
        return Person;
    }());
    var person = new Person("Mahanth", "v rao", "mahanth@gmail.com");
})(classes_from || (classes_from = {}));
