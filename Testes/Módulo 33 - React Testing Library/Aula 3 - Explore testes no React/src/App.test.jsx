import { screen, render, fireEvent} from '@testing-library/react'
import App from "./App"

describe("Testes para o componente principal", ()=>{
    test('Deve renderizar corretamente', ()=>{
        render(<App /> )
        // const {debug} = render(<App /> )
        // debug() // esse comando faz retornar o html do que é renderizado
        expect(screen.getByText(/cadastrar/i)).toBeInTheDocument()
    })
    test("Deve adicionar 'estudar react' na lista", ()=>{
        const {debug} = render(<App />)

        fireEvent.change(screen.getByTestId('campo-tarefa'), {
            target:{
                value: 'estudar react'
            }
        })

        fireEvent.click(screen.getByTestId('btn-cadastrar'))

        debug()
        expect(screen.getByText(/estudar react/i)).toBeInTheDocument()

    })
    
})