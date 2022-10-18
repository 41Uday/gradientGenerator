import {Component} from 'react'

import {
  MainContainer,
  Heading,
  Paragraph,
  UnorderedList,
  Card,
  HexCode,
  Input,
  OverallContainer,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    direction: 'top',
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    activeDirectionId: gradientDirectionsList[0].directionId,
    one: '#8ae323',
    two: '#014f7b',
    dir: 'top',
  }

  totalObject = () => {
    const {one, two, dir} = this.state
    return `to ${dir}, ${one}, ${two}`
  }

  buttonMethod = id => {
    this.setState({activeDirectionId: id})
    const res = gradientDirectionsList.filter(e => e.directionId === id)
    this.setState({direction: res[0].value})
  }

  colorChange = event => {
    this.setState({colorOne: event.target.value})
  }

  colorChangeTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  generateButton = () => {
    const {direction, colorOne, colorTwo} = this.state
    this.setState({
      one: colorOne,
      two: colorTwo,
      dir: direction,
    })
  }

  render() {
    const {activeDirectionId, colorOne, colorTwo} = this.state

    return (
      <MainContainer
        gradient={this.totalObject()}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderedList>
          {gradientDirectionsList.map(e => (
            <GradientDirectionItem
              key={e.directionId}
              item={e}
              buttonMethod={this.buttonMethod}
              isActive={activeDirectionId === e.directionId}
            />
          ))}
        </UnorderedList>
        <Paragraph>Pick the Colors</Paragraph>
        <OverallContainer>
          <Card>
            <HexCode>{colorOne}</HexCode>
            <Input type="color" onChange={this.colorChange} value={colorOne} />
          </Card>
          <Card>
            <HexCode>{colorTwo}</HexCode>
            <Input
              type="color"
              onChange={this.colorChangeTwo}
              value={colorTwo}
            />
          </Card>
        </OverallContainer>
        <GenerateButton type="button" onClick={this.generateButton}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
