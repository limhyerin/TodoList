const Todo = ({item, clickHandler1, clickHandler2, btn1, btn2}) => {
    return (
      <div key={item.id} className="component-style">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <div className="buttons">
            <button className="Btn" onClick={() => clickHandler1(item.id)}><strong>{btn1}</strong></button>
            <button className="Btn" onClick={() => clickHandler2(item.id)}><strong>{btn2}</strong></button>
          </div>
      </div>
    );
  };

export default Todo;