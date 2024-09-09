import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [SelectedItem, setSelectedItem] = useState([]);

  const handleClick = () => {
    if (inputValue) {
      let arr = [...data];
      arr.push({ inputValue });
      setData(arr);
      setInputValue('');
    }
  };

  const handleItemClick = (index) => {
    const arr = [...SelectedItem];
    const itemIndex = arr.indexOf(index);
    if (itemIndex !== -1) {
      arr.splice(itemIndex, 1);
    } else {
      arr.push(index);
    }
    setSelectedItem(arr);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button onClick={handleClick}>Add</button>
        <div>
          {data?.map((item, index) => {
            return (
              <div
                onClick={() => handleItemClick(index)}
                style={{ backgroundColor: "#ffffff", width: 50, cursor: 'pointer' }}>
                <p
                  style={{
                    color: '#000000',
                    textDecoration: SelectedItem.includes(index) ? 'underline' : 'none',
                  }}>{item.inputValue}</p>
              </div>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
