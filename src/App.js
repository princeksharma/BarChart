import React, { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart/BarChart';

const data = [
  {
    name: 'Coca Cola',
    val_1: 4000,
    val_2: 2000,
    mark_val: 3000,
  },
  {
    name: 'Fanta ',
    val_1: 700,
    val_2: 900,
    mark_val: 800,
  },
  {
    name: 'Sprite',
    val_1: 400,
    val_2: 500,
    mark_val: 900,
  },
  {
    name: 'Cappy',
    val_1: 500,
    val_2: 500,
    mark_val: 500,
  },
];

const allKeys = ['val_1', 'val_2', 'mark_val'];

const colors = {
  val_1: 'green',
  val_2: 'lightGreen',
  mark_val: 'black',
};

function App() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <h2>Hroizontal Bar Chart </h2>
      <BarChart data={data} keys={keys} colors={colors} />

      <div className='fields'>
        {allKeys.map((key) => (
          <div key={key} className='field'>
            <input
              id={key}
              type='checkbox'
              checked={keys.includes(key)}
              onChange={(e) => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter((_key) => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
