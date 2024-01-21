import React, { useState } from "react";
import "./App.css";
import WorkingTodo from "components/WorkingTodo";
import DoneTodo from "components/DoneTodo";
import Button from "components/Button";

// 1. **JSX 문법**이란 무엇일까요?
// 2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?
// 3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?
// 4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.
// 5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**

// 사용한 hook은 오직 useState
// 기능 구현을 위해 생성한 함수는 2개 입니다. `onChangeHandler` , `onSubmitHandler`
// 사용한 javascript 내장 메서드는 `map`, `filter` 입니다.
// todo의 initial state는 `{id: 0, title: “”, body: “”, isDone: false}` 입니다.

const App = () => {
  // 구조분해할당
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
    // 1. 새로운 형태의 이놈을 만든다
    // 이놈 : {id:1, age:30, name:"송중기"},
    // 2. 이놈을 배열에 더한다.
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
    } else if (!body || !title) { // 제목이나 내용이 입력되지 않았을 시 alert 창 띄우기
      alert('내용을 입력해주세요');
    } else { // 아무것도 입력되지 않았다면 입력이 없다는 alert 창 띄우기
      alert('입력이 제대로 되지 않았습니다');
    }
  }

  // 삭제 버튼 클릭(x)
  const clickDelHandler = (id) => {
    // 만약 송중기가 들어가 있는 값을 뺀다면?
    const newTodo = todo.filter(todo => todo.id !== id);
    /* 화살표 함수가 아닌 function함수로 하면 
    const newUsers = users.filter(function(user) {
      return user.id !== id;
    }
    */
    setTodo(newTodo);
  }

  // 완료시 Done으로 이동
  const clickDoneHandler = (id) => {
    const newTodo = todo.map(function (todo) {
      if(todo.id === id) {
        return {...todo, isDone:true};
      }
      return todo;
    }) 
    setTodo(newTodo);
  }

  // 취소버튼 클릭시 다시 Working으로 옮겨지도록
  // 완료시 Done으로 이동
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
          <WorkingTodo key={item.id} item={item} clickDelHandler={clickDelHandler} clickDoneHandler={clickDoneHandler}/>
        ))
      }
      </div>

      <div className="done">
        <h2>Done✔️</h2>
      </div>

      <div className="app-style">
      {
        todo.filter((item) => item.isDone).map((item) => (
          <DoneTodo key={item.id} item={item} clickDelHandler={clickDelHandler} clickCancelHandler={clickCancelHandler}/>
        ))
      }
      </div>

    </div>
  );
};

export default App;