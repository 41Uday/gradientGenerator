// Write your code here

import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, buttonMethod, isActive} = props
  const {displayText, directionId} = item
  const buttonClick = () => {
    buttonMethod(directionId)
  }

  return (
    <li>
      <Button val={isActive} onClick={buttonClick}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
