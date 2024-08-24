import styled from 'styled-components'
import {StyledButton} from './Button'

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: in;  
  ul{
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    
    li {
      color: #fff;
      padding: 10px;
      text-decoration: none;
    }
    
    li:hover {
      background-color: #000000;
    }
  }
  `

export default function Navbar() {
    return (
      <Menu>
        <div>
          <ul>
            <li>Inicio</li>
            <li>Serviços</li>
            <li>Sobre</li>
          </ul>
        </div>
        <div>
          <StyledButton></StyledButton>
        </div>
      </Menu>
    );
  }
  
