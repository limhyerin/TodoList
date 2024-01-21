// Done
// 삭제 버튼 클릭시 삭제
// 취소버튼 클릭시 다시 working으로 이동

const DoneTodo = ({item, clickDelHandler, clickCancelHandler}) => {
    return (
        <div key={item.id} className="component-style">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <div className="buttons">
            <p className="Btn" onClick={() => clickDelHandler(item.id)}>삭제하기</p>
            <p className="Btn" onClick={() => clickCancelHandler(item.id)}>취소</p>
          </div>
      </div>
    );
  };

export default DoneTodo;