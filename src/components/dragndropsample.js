import React, { Component } from 'react';
import { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { Rnd } from "react-rnd";
import { applyDrag, generateItems } from './utils';

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
      bg: 'red'
    },
  ],
  [
    {
      val: 'check 2',
      width: 1,
      bg: 'yellow'
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
      bg: 'green'
    },
  ],
];

const gridHeaderData = [1, 2, 3, 4];
const gridDayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const style = {
  display: "block",
  position: "relative",
  transform: `translateX(227px) translateY(0)`,
  userSelect: "auto",
  top: '0',
  // alignItems: "center",
  // justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  // Left: "120px"
};

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
                  return (<div className={`w-1/4 border-r-2 border-black bg-gray-300 text-black text-sm`}>week-{data}</div>)
                })
              }
            </div>
            <div className="flex mb-1">
              {
                gridDayData.map((data, index) => {
                  return (<div className={`bg-gray-500 border-r-2 border-black text-black text-sm`} style={{width: '60px'}}>{data}</div>)
                })
              }
            </div>
            <div />
            {
              gridData.map((grid, index) => {
                return (
                      <div key={index + 100} className="flex bg-white p-2 border border-red-100 text-black">
                            {
                              grid.map((data, index) => {
                                return (
                                  data.bg == 'white' ? (
                                    ''// <div key={index} className={`bg-${data.bg} w-${data.width}/6 text-md`} >{data.val}</div>
                                  ) : (
                                    <Rnd
                                    // className={`w-${data.width}/6`}
                                    style={{...style, backgroundColor: data.bg}}
                                    className={`bg-${data.bg} w-${data.width}/6 text-md`}
                                    default={{
                                      x: 100 + data.width * 20,
                                      y: 0,
                                      width: data.width*100,
                                      height: 40
                                    }}
                                    size={{ width: 100 , height: 40}}
                                    minHeight="40"
                                    maxHeight="40"
                                    dragAxis='x'
                                    onResizeStop={(e) => {
                                      console.log(e)
                                    }}
                                    onDragStop={(e) => {
                                      console.log(e.screenX)
                                    }}
                                    >
                                      {/* <div key={index} className={`bg-${data.bg} text-md`} >{data.val}</div> */}
                                      ss
                                    </Rnd>
                                  )
                                )
                              })
                            }
                      </div>
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