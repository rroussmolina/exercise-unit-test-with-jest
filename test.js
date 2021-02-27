// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.6 dollars", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const yen = fromDollarToYen(3.5)

    // is 1 dollar son 106.6 yenes, entonces 3.5 yenes deberian ser = (3.5 * 106.6)
    const expected = 3.5 * 106.6; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yen);
})

test("One yen should be 0.0067 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const pound = fromYenToPound(3.5)

    // is 1 yen son 0.0067 pounds, entonces 3.5 pounds deberian ser = (3.5 * 0.0067)
    const expected = 3.5 * 0.0067; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pound);
})
