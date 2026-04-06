import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'


import './style/theme.css'
import './style/Global.css'



export default function App() {

  console.log('App renderizou')

  return <>
      <Container>
        <Heading><Logo/></Heading>
      </Container>
      <Container>
        <Menu/>
      </Container>
      <Container>
        <CountDown/>
      </Container>
      <Container>
        <form className='form' action="">
          <div className='formRow'>
            <DefaultInput 
            id='meuInput' 
            labelText='Task' 
            type='text' 
            placeholder='Digite algo...'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <p>Ciclos.</p>
            <p> 0 0 0 0</p>
          </div>
          <div className='formRow'>
            <button type='submit'>Start</button>
          </div>
        </form>
        
      </Container>
  </>
}
