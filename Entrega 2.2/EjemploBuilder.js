var ConstructorPizzas = /** @class */ (function () {
    function ConstructorPizzas() {
        this.reset();
    }
    ConstructorPizzas.prototype.reset = function () {
        this.product = new Pizza();
    };
    ConstructorPizzas.prototype.ponerBase = function () {
        this.product.parts.push('Base');
    };
    ConstructorPizzas.prototype.ponerTomate = function () {
        this.product.parts.push('Tomate');
    };
    ConstructorPizzas.prototype.ponerMozzarella = function () {
        this.product.parts.push('Queso mozzarella');
    };
    ConstructorPizzas.prototype.ponerAlbahaca = function () {
        this.product.parts.push('Albahaca');
    };
    ConstructorPizzas.prototype.ponerJamonDulce = function () {
        this.product.parts.push('Jamón Dulce');
    };
    ConstructorPizzas.prototype.ponerAceitunas = function () {
        this.product.parts.push('Aceitunas');
    };
    ConstructorPizzas.prototype.ponerFontina = function () {
        this.product.parts.push('Queso fontina');
    };
    ConstructorPizzas.prototype.ponerParmesano = function () {
        this.product.parts.push('Queso parmesano');
    };
    ConstructorPizzas.prototype.ponerGorgonzola = function () {
        this.product.parts.push('Queso Gorgonzola');
    };
    ConstructorPizzas.prototype.ponerBrie = function () {
        this.product.parts.push('Queso Brie');
    };
    ConstructorPizzas.prototype.ponerJamonSerrano = function () {
        this.product.parts.push('Jamón Serrano');
    };
    ConstructorPizzas.prototype.ponerRucula = function () {
        this.product.parts.push('Rúcula');
    };
    ConstructorPizzas.prototype.ponerAtun = function () {
        this.product.parts.push('Atún');
    };
    ConstructorPizzas.prototype.ponerSalmon = function () {
        this.product.parts.push('Salmón');
    };
    ConstructorPizzas.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConstructorPizzas;
}());
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.parts = [];
    }
    Pizza.prototype.listParts = function () {
        console.log("Ingredientes: ".concat(this.parts.join(', '), "\n"));
    };
    return Pizza;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.pizzaMargherita = function () {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerMozzarella();
        this.builder.ponerAlbahaca();
    };
    Director.prototype.pizzaProsciutto = function () {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerMozzarella();
        this.builder.ponerJamonDulce();
        this.builder.ponerAceitunas();
    };
    Director.prototype.pizza4Formaggi = function () {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerMozzarella();
        this.builder.ponerFontina();
        this.builder.ponerParmesano();
        this.builder.ponerGorgonzola();
    };
    Director.prototype.pizzaRegina = function () {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerBrie();
        this.builder.ponerJamonSerrano();
        this.builder.ponerRucula();
    };
    Director.prototype.pizzaMarina = function () {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerMozzarella();
        this.builder.ponerAtun();
        this.builder.ponerSalmon();
    };
    return Director;
}());
function clientCode(director) {
    var builder = new ConstructorPizzas();
    director.setBuilder(builder);
    console.log('Pizza Margherita:');
    director.pizzaMargherita();
    builder.getProduct().listParts();
    console.log('Pizza Prosciutto:');
    director.pizzaProsciutto();
    builder.getProduct().listParts();
    console.log('Pizza 4 Formaggi:');
    director.pizza4Formaggi();
    builder.getProduct().listParts();
    console.log('Pizza Regina:');
    director.pizzaRegina();
    builder.getProduct().listParts();
    console.log('Pizza Marina:');
    director.pizzaMarina();
    builder.getProduct().listParts();
    console.log('Pizza personalizada:');
    builder.ponerBase();
    builder.ponerTomate();
    builder.ponerSalmon();
    builder.ponerBrie();
    builder.ponerAlbahaca();
    builder.ponerAceitunas();
    builder.getProduct().listParts();
}
var director = new Director();
clientCode(director);
