import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <div className='contents-1'>
          <h1>Todo List</h1>
          <button> List </button>
          <button> Set </button>
        </div>

        <table border='1' className='table-1'>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>内容</th>
            <th>カテゴリ</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>aaa</td>
            <td>bbb</td>
            <td>ccc</td>
            <td>ddd</td>
            <td>eee</td>
          </tr>
        </table>

      </div>
    )
  }
}

export default App;
