import react from 'react';

function Calender() {
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
          <table className="border-collapse border border-red-400 w-4/5 mx-auto">
            <thead>
              <tr>
                <th class="border border-green-600">State</th>
                <th class="border border-green-600">
                  <tr className="w-1/4">
                    <td className="border border-green-600">df</td>
                    <td className="border border-green-600">df</td>
                    <td className="border border-green-600">df</td>
                    <td className="border border-green-600">df</td>
                  </tr>
                  <tr>
                    <td className="border border-green-600">df</td>
                    <td className="border border-green-600">df</td>
                    <td className="border border-green-600">df</td>
                    <td className="border border-green-600">df</td>
                  </tr>
                  <tr>
                    <td>df</td>
                    <td>df</td>
                    <td>df</td>
                    <td>df</td>
                  </tr>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-green-600 ...">Indiana</td>
                <td class="border border-green-600 ...">Indianapolis</td>
              </tr>
              <tr>
                <td class="border border-green-600 ...">Ohio</td>
                <td class="border border-green-600 ...">Columbus</td>
              </tr>
              <tr>
                <td class="border border-green-600 ...">Michigan</td>
                <td class="border border-green-600 ...">Detroit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </>
  );
}

export default Calender;