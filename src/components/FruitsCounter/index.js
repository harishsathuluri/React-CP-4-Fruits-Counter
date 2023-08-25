// Write your code here
import {Component} from 'react'
import './index.css'

const mangoImgUrl = 'https://assets.ccbp.in/frontend/react-js/mango-img.png'
const bananaImgUrl = 'https://assets.ccbp.in/frontend/react-js/banana-img.png'

class FruitsCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => prevState.count + 1)
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="countValue"> {count} </span>
            mangoes <span className="count-value"> {count} </span> bananas{' '}
          </h1>
          <div className="image-container">
            <img src={mangoImgUrl} className="image" />
            <img src={bananaImgUrl} className="image" />
          </div>
          <div className="button-container">
            <button className="button1">Eat Mango </button>
            <button className="button1">Eat Banana </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
