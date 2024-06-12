interface Builder {
    ponerBase(): void;
    ponerTomate(): void;
    ponerMozzarella(): void;
    ponerAlbahaca(): void;
    ponerJamonDulce(): void;
    ponerAceitunas(): void;
    ponerFontina(): void;
    ponerParmesano(): void;
    ponerGorgonzola(): void;
    ponerBrie(): void;
    ponerJamonSerrano(): void;
    ponerRucula(): void;
    ponerAtun(): void;
    ponerSalmon(): void;
}

class ConstructorPizzas implements Builder {
    private product: Pizza;

    
    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Pizza();
    }

   
    public ponerBase(): void {
        this.product.parts.push('Base');
    }

    public ponerTomate(): void {
        this.product.parts.push('Tomate');
    }

    public ponerMozzarella(): void {
        this.product.parts.push('Queso mozzarella');
    }

    public ponerAlbahaca(): void {
        this.product.parts.push('Albahaca');
    }

    public ponerJamonDulce(): void {
        this.product.parts.push('Jamón Dulce');
    }

    public ponerAceitunas(): void {
        this.product.parts.push('Aceitunas');
    }

    public ponerFontina(): void {
        this.product.parts.push('Queso fontina');
    }

    public ponerParmesano(): void {
        this.product.parts.push('Queso parmesano');
    }

    public ponerGorgonzola(): void {
        this.product.parts.push('Queso Gorgonzola');
    }

    public ponerBrie(): void {
        this.product.parts.push('Queso Brie');
    }

    public ponerJamonSerrano(): void {
        this.product.parts.push('Jamón Serrano');
    }

    public ponerRucula(): void {
        this.product.parts.push('Rúcula');
    }

    public ponerAtun(): void {
        this.product.parts.push('Atún');
    }

    public ponerSalmon(): void {
        this.product.parts.push('Salmón');
    }


    
    public getProduct(): Pizza {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Pizza {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Ingredientes: ${this.parts.join(', ')}\n`);
    }
}

class Director {
    private builder: Builder;

    
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    
    public pizzaMargherita(): void {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerMozzarella();
        this.builder.ponerAlbahaca();
    }

    public pizzaProsciutto(): void {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerMozzarella();
        this.builder.ponerJamonDulce();
        this.builder.ponerAceitunas();
    }

    public pizza4Formaggi(): void {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerMozzarella();
        this.builder.ponerFontina();
        this.builder.ponerParmesano();
        this.builder.ponerGorgonzola();
    }

    public pizzaRegina(): void {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerBrie();
        this.builder.ponerJamonSerrano();
        this.builder.ponerRucula();
    }

    public pizzaMarina(): void {
        this.builder.ponerBase();
        this.builder.ponerTomate();
        this.builder.ponerMozzarella();
        this.builder.ponerAtun();
        this.builder.ponerSalmon();
    }
}

function clientCode(director: Director) {
    const builder = new ConstructorPizzas();
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

const director = new Director();
clientCode(director);