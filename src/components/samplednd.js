import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
const gridData = [
  [
    {
      val: 'check 4',
      width: 1,
      bg: 'white'
    },
    {
      val: 'check 2',
      width: 1,
      bg: 'white'
    },
    {
      val: 'check 1',
      width: 3,
      bg: 'red-400'
    },
  ],
  [
    {
      val: 'check 2',
      width: 1,
      bg: 'yellow-400'
    },
  ],
  [
    {
      val: 'check 3',
      width: 3,
      bg: 'white'
    },
    {
      val: 'check 4',
      width: 3,
      bg: 'green-400'
    },
  ],
];

const gridHeaderData = [1, 2, 3, 4, 5, 6];

class SimpleSortableList extends Component {
  render() {

    return (
      <div>
        <header className="App-header">
          <div className="border-2 border-red-400 w-4/5 mt-24">
            Test page
          </div>
          <div className="w-4/5">
            check
            <div className="flex mb-1">
              {
                gridHeaderData.map((data, index) => {
                  return (<div className={`w-1/6 ${index != gridHeaderData.length - 1 ? 'mr-1' : ''} bg-gray-300 text-black text-sm`}>week-{data}</div>)
                })
              }
            </div>
            <div />

            {
              gridData.map((grid, index) => {
                return (
                  // <Container onDrop={this.props.onDrop}>
                  //   <Draggable key={index}>
                      <div key={index + 100} className="flex bg-white p-2 border border-red-100 text-black">
                          <Container onDrop={this.props.onDrop} 
                            orientation="horizontal"
                            lockAxis="x"
                            style={{width: '100%', display: 'flex'}}
                          >
                            {
                              grid.map((data, index) => {
                                // return (<div id={index} className={`bg-${data.bg} w-${data.width}/6 text-md`} >{data.val}</div>)
                                return (
                                  data.bg == 'white' ? (
                                    <div key={index} className={`bg-${data.bg} w-${data.width}/6 text-md`} >{data.val}</div>
                                  ) : (
                                    <Draggable key={index} className={`w-${data.width}/6`}>
                                      <div key={index} className={`bg-${data.bg} text-md`} >{data.val}</div>
                                    </Draggable>
                                  )
                                )
                              })
                            }
                          </Container>
                      </div>
                  //   </Draggable>
                  // </Container>
                )
              })
            }
          </div>

        </header>
      </div>
    );
  }
}
export default SimpleSortableList;