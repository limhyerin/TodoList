// 삭제버튼 눌렸을 때 요소 삭제하기
// 완료버튼 클릭 시 Done으로 옮기기
const WorkingTodo = ({item, clickDelHandler, clickDoneHandler}) => {
    return (
      <div key={item.id} className="component-style">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <div className="buttons">
            <p className="Btn" onClick={() => clickDelHandler(item.id)}>삭제하기</p>
            <p className="Btn" onClick={() => clickDoneHandler(item.id)}>완료</p>
          </div>
      </div>
    );
  };

export default WorkingTodo;