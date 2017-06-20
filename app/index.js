const React = require('react');
const ReactDOM = require('react-dom');
const Top = require('./top');
const PropTypes = require('prop-types');
const io = require('socket.io-client');
const Config = require('Config');
require('./index.css');

const socket = io(Config.host + ':' + Config.port);

function Spinner(props) {
  return (
    <div className={'sk-folding-cube'} style={props.styles}>
      <div className={'sk-cube1 sk-cube'}></div>
      <div className={'sk-cube2 sk-cube'}></div>
      <div className={'sk-cube4 sk-cube'}></div>
      <div className={'sk-cube3 sk-cube'}></div>
    </div>
  )
}

Spinner.propTypes = {
  style: PropTypes.string
}

function TextList(props) {
  return (
    <ul className={'textlist'}>
      {props.items.sort((a, b) => b.id - a.id).map(function (el) {
        return <li title={el.link} key={props.id + el.id}>{el.title}</li>
      })}
    </ul>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsI: [],
      itemsWe: []
    }
  }
  componentDidMount() {
    socket.on('items_i', function(items) {
      this.setState(function () {
        return {
          itemsI: items
        }
      })
    }.bind(this));

    socket.on('items_we', function(items) {
      this.setState(function () {
        return {
          itemsWe: items
        }
      })
    }.bind(this));
  }
  componentWillUnmount() {
    socket.off('items_i');
    socket.off('items_we');
  }
  render() {
    return (
      <div className={'centerdiv'}>
        <Top />
        <div className={'content'}>
          { this.state.itemsI === null || this.state.itemsWe === null || this.state.itemsI.length === 0 && this.state.itemsWe.length === 0 &&
            <Spinner styles={{'backgroundColor': '#ccc' }} />
          }
          { this.state.itemsWe !== null &&this.state.itemsWe.length > 0 &&
            <TextList id='we' items={this.state.itemsWe} />
          }
          { this.state.itemsI !== null && this.state.itemsI.length > 0 &&
            <TextList id='i' items={this.state.itemsI} />
          }
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
