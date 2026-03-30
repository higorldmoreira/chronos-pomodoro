import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

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
  </>
}
