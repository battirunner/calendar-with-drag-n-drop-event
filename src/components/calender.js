import react from 'react';

function Calender() {
  const headerData = ['project', 'test-scope', 'week-21.20', 'week-21.21', 'week-21.22', 'week-21.23', 'week-21.24'];
  const rowData = [
    {
      data1: 'Indiana',
      data2: 'Indianapolis',
      data3: 'Mexico'
    },
    {
      data1: 'Ohio',
      data2: 'Columbus',
      data3: 'iowa'
    },
    {
      data1: 'Michigan',
      data2: 'Detroit',
      data3: 'texas'
    },
  ];
  return (
    <>
      <header className="App-header">
        {/* <p className="bg-green-400">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="border-2 border-red-400 w-4/5 mt-24">
          Test page
        </div>
        <div className="w-4/5">
          check
          <table className="border-collapse border border-red-400 w-4/5 mx-auto bg-white text-black">
            <thead>
              <tr>
                {
                  headerData.map((data)=>{
                    return (<th class="border border-green-600 bg-gray-400 text-black text-sm">{data}</th>)
                  })
                }
              </tr>
            </thead>
            <tbody>
              {
                rowData.map((data) => {
                  return (
                  <tr>
                    <td class="border border-green-600 text-sm">{data.data1}</td>
                    <td class="border border-green-600 text-sm">{data.data2}</td>
                    <td class="border border-green-600 text-sm">{data.data3}</td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </header>
    </>
  );
}

export default Calender;