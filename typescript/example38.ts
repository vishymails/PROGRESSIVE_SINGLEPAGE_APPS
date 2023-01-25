
namespace strict_property_initialization_demo {

    class Rectangle {

        public width: number;
        public height: number;

        public constructor(width: number, height: number) {
            this.width = width;
            this.height = height;
        }

        public setHeight(height: number) {
            this.height = height;
        }

    }

    class Rectangle2 {

        public width: number;
        public height: number; // Error

        public constructor(width: number) {
            this.width = width;
        }

        public setHeight(height: number) {
            this.height = height;
        }

    }

    class Rectangle3 {

        public width: number;
        public height!: number; // OK

        public constructor(width: number) {
            this.width = width;
        }

        public setHeight(height: number) {
            this.height = height;
        }

    }

    class Rectangle4 {
        public width: number; // Error
        public height: number; // Error
    }

    class Rectangle5 {
        public width!: number; // OK
        public height!: number; // OK
    }

    class Rectangle6 {
        public width: number = 0; // OK
        public height: number = 0; // OK
    }

}
