const saudacao = require('./saudacao')

describe('Suíte de saudação', ()=>{
    test('Deverá retoanr Olá, Maria', ()=>{
        const olaMaria = saudacao.dizOla("Maria")

        expect(olaMaria).toBe('Olá, Maria')
        expect(olaMaria).toContain(',')
        expect(true).toBeTruthy()
        expect([1,2,3,4,5]).toHaveLength(5)
    })
})