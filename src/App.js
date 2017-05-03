import React from 'react'
import PropTypes from 'prop-types'

const Button = (props, context) => (
  <button style={{background: context.color}}>
    {props.children}
  </button>
)

Button.contextTypes = {
  color: PropTypes.string
}

const Message = ({ text }) => (
  <div>
    {text} <Button>Amazing !</Button>
  </div>
)

class MessageList extends React.Component {

  getChildContext() {
    return { color: "red" }
  }

  render() {
    return (
      <div>
        {React.Children.toArray(
          this.props.messages.map((message) =>
            <Message text={message.text} />
          )
        )}
      </div>
    )
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string
}

const messages = [
  { text: 'React is ' },
  { text: 'Typescript is ' },
  { text: 'VS Code is ' }
]

const App = () => (
  <MessageList messages={messages} />
)

export default App
