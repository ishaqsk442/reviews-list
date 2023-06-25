// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {button: 0}

  previousItem = () => {
    const {button} = this.state

    if (button > 0) {
      this.setState(prevState => ({
        button: prevState.button - 1,
      }))
    }
  }

  nextItem = () => {
    const {reviewsList} = this.props

    const {button} = this.state

    if (button < reviewsList.length - 1) {
      this.setState(prevState => ({
        button: prevState.button + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {button} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[button]
    return (
      <div className="main">
        <h1>Reviews</h1>
        <div className="card">
          <div className="arrow">
            <button
              className="button"
              type="button"
              onClick={this.previousItem}
              data-testid="leftArrow"
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
          </div>
          <div className="content">
            <img className="img-class" alt={username} src={imgUrl} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <div className="arrow">
            <button
              className="button"
              type="button"
              onClick={this.nextItem}
              data-testid="rightArrow"
            >
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
