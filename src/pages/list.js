import React, { Component } from 'react'
import Header from  '../components/header'
import TodoDateLow from  '../components/todo-date-low'

const todoData = [
    {
        id: 1,
        title: 'タイトル1',
        content: '内容1内容1内容1内容1内容1内容1内容1',
        createdAt: '2020-05-04',
        category: 1,
    },
    {
        id: 2,
        title: 'タイトル2',
        content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
        createdAt: '2020-05-04',
        category: 2,
    },
    {
        id: 3,
        title: 'タイトル3',
        content: '内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3',
        createdAt: '2020-05-04',
        category: 1,
    },
]

class List extends Component {

    render() {
        return(
            <div>
                <Header history={this.props.history} index={1}/>
                <div className='contents-1'>
                    <h1>Todo List</h1>
                </div>

                <table border='1' className='table-1'>
                <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>内容</th>
                    <th>日時</th>
                    <th>カテゴリ</th>
                    <th>操作</th>
                </tr>
                <TodoDateLow todoData={todoData}/>
                </table>
            </div>
        )
    }
}

export default List;