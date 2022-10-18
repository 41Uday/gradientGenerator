// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradient});
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: white;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: white;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
`
export const HexCode = styled.p`
  color: #ededed;
  font-family: 'Roboto';
`
export const Input = styled.input`
  height: 45px;
  width: 100px;
  background-color: transparent;
  border: none;
`
export const OverallContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  height: 40px;
  width: 120px;
  border-radius: 8px;
  border: none;
  margin-top: 30px;
  color: #1e293b;
  font-family: 'Roboto';
`
