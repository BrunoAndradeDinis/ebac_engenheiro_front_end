const calc = require('./calculadora')

// calc.divisao

// suite de teste
describe('Teste para a calculadora', ()=>{

    test('somar 2 e 2 deve resultar em 4', ()=>{
        const minhaSoma = calc.soma(2, 2)
    
        expect(minhaSoma).toBe(4) // isso é uma asserção 
    })
    
    test('Multiplicar 2 e 2 deve resultar em 4', ()=>{
        const minhaMultiplicacao = calc.multiplicacao(2, 2)
    
        expect(minhaMultiplicacao).toBeGreaterThan(3) // isso é uma asserção 
    })

    test('Dividir 2 e 2 deve resultar em 1', ()=>{
        const minhaDivisao = calc.divisao(2, 2)
    
        expect(minhaDivisao).toBe(1) // isso é uma asserção 
    })
    
    test('Subtrair 2 e 2 deve resultar em 0', ()=>{
        const minhaSubtracao = calc.subtracao(2, 2)
    
        expect(minhaSubtracao).toBe(0) // isso é uma asserção 
    })
})

it("deve somar 2 e 2", ()=>{
    const resultado = calc.soma(2,2)
    expect(resultado).toBe(4)
})
