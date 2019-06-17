import React from 'react';
import './App.css';

import { Button} from 'antd';
import style from './test.module.less'

function App() {
  console.log(style)
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">
          Dashed
        </Button>
        <span className={style.abc}>123</span>
      </header>
    </div>
  );
}

export default App;
