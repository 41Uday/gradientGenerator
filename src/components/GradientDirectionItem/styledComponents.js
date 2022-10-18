// Style your elements here
import styled from 'styled-components'

export const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 8px;
  border: none;
  background-color: ${props => (props.val ? ' white' : ' #ffffff79')};
  color: #1e293b;
  margin: 10px;
  opacity: ${props => (props.val ? 1 : 0.5)}; ;
`
