import { StyledButton } from "./Components/Button"
import Navbar from "./Components/Navbar"
import { Wrapper } from "./Components/Wrapper"
function App() {

  return (
  <>
  <Navbar/>
  <Wrapper>
    <h1>Welcome to the React Button App</h1>
  </Wrapper>
    <StyledButton onClick={() => console.log('cliccou')}>
      Login
    </StyledButton>
  </>
  )
}

export default App
