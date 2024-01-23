import React, { useState } from "react";
import "./App.css";
import Todo from "components/Todo";
import Button from "components/Button";

// 사용한 hook은 오직 useState
// 기능 구현을 위해 생성한 함수는 2개 입니다. `onChangeHandler` , `onSubmitHandler`
// 사용한 javascript 내장 메서드는 `map`, `filter` 입니다.
// todo의 initial state는 `{id: 0, title: “”, body: “”, isDone: false}` 입니다.

const App = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  }

  // TODO LIST 작성하고 추가 버튼 클릭시 내용 추가
  const clickAddHandler = (event) => {
    if(title && body) {
      const newTodo = {
        id: todo.length + 1,
        title: title, 
        body: body,
      }
      setTodo([...todo, newTodo]) // 원래 있었던 배열을 싹 풀고 저거를 추가함
      // todo list를 입력한 후 입력하는 칸 지우기
      setTitle('');
      setBody('');
    } else { // 아무것도 입력되지 않았다면 입력이 없다는 alert 창 띄우기
      alert('입력이 없습니다');
    }
  }

  // 삭제 버튼 클릭(x)
  const clickDelHandler = (id) => {
    const newTodo = todo.filter(todo => todo.id !== id);
    /* 화살표 함수가 아닌 function함수로 하면 
    const newTodo = todo.filter(function(todo) {
      return todo.id !== id;
    }
    */
    setTodo(newTodo);
  }

  // 완료시 Done으로 이동, isDone true
  const clickDoneHandler = (id) => {
    const newTodo = todo.map(function (todo) {
      if(todo.id === id) {
        return {...todo, isDone:true};
      }
      return todo;
    }) 
    setTodo(newTodo);
  }

  // 취소버튼 클릭시 다시 Working으로 옮겨지도록 isDone false값 주기
  const clickCancelHandler = (id) => {
    const newTodo = todo.map(function (todo) {
      if(todo.id === id) {
        return {...todo, isDone:false};
      }
      return todo;
    }) 
    setTodo(newTodo);
  }

  return (
    <div className="container">
      <header>
        <div className="title">myTodoList</div>
        <div className="subTitle">React</div>
      </header>
      <hr />

      <div className="inputTodo">
        <div className="inputTitle">
          <p>
            <strong>제목 : &nbsp;</strong>
          <input 
            value={title}
            onChange={titleChangeHandler}
          />
          </p>
        </div>
        <div className="inputContent">
          <p>
            <strong>내용 : &nbsp;</strong>
          <input 
            value={body}
            onChange={bodyChangeHandler}
          />
          </p>
        </div>
        <div className="plusButton">
          <Button clickAddHandler={clickAddHandler}><strong>추가하기</strong></Button>
        </div>
      </div>

      <div className="working">
        <h2>Working...🔥</h2>
      </div>

      <div className="app-style">
      {
        todo.filter((item) => !item.isDone).map((item) => (
          <Todo key={item.id} item={item} clickHandler1={clickDelHandler} clickHandler2={clickDoneHandler} btn1={"삭제하기"} btn2={"완료"}/>
        ))
      }
      </div>

      <div className="done">
        <h2>Done✔️</h2>
      </div>

      <div className="app-style">
      {
        todo.filter((item) => item.isDone).map((item) => (
          <Todo key={item.id} item={item} clickHandler1={clickDelHandler} clickHandler2={clickCancelHandler} btn1={"삭제하기"} btn2={"취소"}/>
        ))
      }
      </div>

    </div>
  );
};

export default App;