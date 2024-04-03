import { useState } from 'react';
import CustomSelect from './components/CustomSelect';

function App() {

  const [options, setOptions] = useState([
    {
      label: "One",
      value: "optOne",
    },
    {
      label: "Two",
      value: "optTwo",
    },
    {
      label: "Three",
      value: "optThree",
    },
    {
      label: "Four",
      value: "optFour",
    },
    {
      label: "Five",
      value: "optFive",
    },
    {
      label: "Six",
      value: "optSix",
    },
    {
      label: "Seven",
      value: "optSeven",
    },
  ])

  const handleChangeSelect = (e) => {
    console.log(e)
  }

  return (
    <div className="App">
      <CustomSelect
        options={options}
        placeHolder='Please select...'
        onChange={(e) => handleChangeSelect(e)}
        isSearchable
        isMulti
      />
    </div>
  );
}

export default App;
