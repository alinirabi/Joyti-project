import React, { Component } from 'react';
import {DropdownMultiple} from 'reactjs-dropdown-component';
import './style.css'
export default class Tags extends Component {
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
  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]));
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp
    });
  }
  render() {

    return (

      <div>
      <DropdownMultiple
  titleHelper="Tags"
  title="Select Tags"
  list={this.state.fruit}
  toggleItem={this.toggleSelected}
/>
      </div>
    );
  }

}