const { sumar, restar, multiplicar } = require('../src/calculadora');

test('suma 2 + 3 y debe retornar 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('resta 5 - 2 y debe retornar 3', () => {
    expect(restar(5, 2)).toBe(3);
});

test('multiplica 4 * 3 y debe retornar 12', () => {
    expect(multiplicar(4, 3)).toBe(12);
});