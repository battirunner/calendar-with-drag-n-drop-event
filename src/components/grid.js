
import React, { Component, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { Rnd } from "react-rnd";

function Grid() {
  const [sampleData, setSampleData] = useState({start: 1, width: 3, bg: 'red'});
  const [dragData, setDragData] = useState({x: '', y: ''});
  const [gridData, setGridData] = useState([
    {
      val: 'check 1',
      start: 3,
      width: 2,
      bg: 'red'
    },
    {
      val: 'check 2',
      start: 15,
      width: 4,
      bg: 'yellow'
    },
    {
      val: 'check 4',
      start: 4,
      width: 5,
      bg: 'green'
    },
  ]);
  // const barWidth = useState
  const style = {
    display: "block",
    position: "relative",
    // transform: `translateX(227px) translateY(0)`,
    // userSelect: "auto",
    // top: '0',
    // alignItems: "center",
    // justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    // Left: "120px"
  };
  const gridHeaderData = [1, 2, 3, 4, 5, 6];
  const gridDayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  return (
    <>
      <header className="App-header">
        <div className="border-2 border-red-400 w-4/5 mt-24">
          Test page
        </div>
        <div className="w-4/5">
          {`position data = ${dragData.x}`}
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
                return (<div className={`bg-gray-500 border-r-2 border-black text-black text-sm`} style={{ width: '60px' }}>{data}</div>)
              })
            }
          </div>
          {
            gridData.map((data, index) => {
              return (
                <div key={index} className="flex bg-white pt-2 border border-red-100 text-black">
                  {
                    <Rnd
                      style={{ ...style, backgroundColor: data.bg }}
                      className={`bg-${data.bg} w-${data.width}/6 text-md`}
                      default={{
                        x: (data.start - 1) * 57,
                        y: -2,
                        width: data.width * 60,
                        height: 40
                      }}
                      isResizable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
                      // position={{
                      //   x: (data.start-1) * 57,
                      //   y: 5
                      // }}
                      size={{
                        height: 40,
                        width: data.width * 58
                      }}
                      minHeight="40"
                      maxHeight="40"
                      dragAxis='x'
                      // onResizeStop={(e) => {
                      //   console.log(e)
                      //   setDragData(e);
                      // }}
                      onResizeStop={(e) => {
                        console.log(e.screenX)
                        const temp = gridData;
                        temp[index] = {...data, width: parseInt((e.x - 200 )/55)+1 };
                        console.log("cheh", temp)
                        setGridData([...temp]);
                        console.log(gridData)
                      }}
                      onDragStop={(e) => {
                        console.log(e, e.toElement.clientWidth ,e.pageX, parseInt((e.x - 200 )/55)+1  )
                        const temp = gridData;
                        // temp[index] = {...data, start: parseInt((e.screenX - 83 )/20)}; 
                        // setGridData([...temp]);
                      
                      }}
                    >
                      {/* <div key={index} className={`bg-${data.bg} text-md`} >{data.val}</div> */}
                      day{data.start} to {data.start + data.width}
                    </Rnd>
                    // <Rnd
                    //   style={{ ...style, backgroundColor: sampleData.bg }}
                    //   className={`bg-${sampleData.bg} w-${1}/6 text-md`}
                    //   default={{
                    //     // x: data.width * 20,
                    //     // y: 0,
                    //     // width: data.width * 60,
                    //     height: 40
                    //   }}
                    //   position={{
                    //     x: (sampleData.start-1) * 57,
                    //     y: 5
                    //   }}
                    //   size={{
                    //     width: sampleData.width * 58
                    //   }}
                    //   minHeight="40"
                    //   maxHeight="40"
                    //   dragAxis='x'
                    //   onResizeStop={(e) => {
                    //     console.log(e)
                    //   }}
                    //   onDragStop={(e) => {
                    //     // console.log(e.screenX)
                    //     // const temp = gridData;
                    //     // temp[index] = {...data, start: parseInt((e.screenX/30)%10)};
                    //     // console.log("cheh", temp)
                    //     setSampleData({start: parseInt((e.screenX/30)%20), width: 3});
                    //     console.log(gridData)
                    //   }}
                    // >
                    //   ff
                    // </Rnd>
                  }
                </div>
              )
            })
          }
        </div>
      </header>
    </>
  );
}

export default Grid;