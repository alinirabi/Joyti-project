import React, { Component } from 'react';
import { Dropdown } from 'reactjs-dropdown-component';
import './style.css'
export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: [
        {
          id: 0,
          title: 'test1',
          selected: false,
          key: 'fruit'
        },
        {
          id: 1,
          title: 'test2',
          selected: false,
          key: 'fruit'
        },
        {
          id: 2,
          title: 'test4',
          selected: false,
          key: 'fruit'
        }
      ]
    }
  }
  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    });
  }
  render() {

    return (

      <div>
        <Dropdown
          title="Select Category"
          list={this.state.fruit}
          resetThenSet={this.resetThenSet}
          style={{border:'none'}}
        />
      </div>
    );
  }

}