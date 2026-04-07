import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Cycles } from './components/Cycles'
import { DefaultButton } from  './components/DefaultButton'

import './style/theme.css'
import './style/Global.css'
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';



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
            <Cycles/>
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
            <DefaultButton icon={<StopCircleIcon />} color='red' />
          </div>
        </form>
        
      </Container>
  </>
}
