import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { completeStateToto, deleteTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TodoBox = styled.div`
  width: 270px;
  height: 170px;
  padding: 12px 24px 24px 24px;
  align-items: center;
  justify-content: center;
  border: 4px solid teal;
  border-radius: 12px;
`;

const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  /* grid-template-columns: (4, 1fr); */
`;

const BoxButton = styled.button`
  margin: 5px 5px auto 5px;
  background-color: white;
  border: 2px solid ${(props) => props.bordercolor};
  border-radius: 10px;
  height: 40px;
  width: 50%;
  cursor: pointer;
`;

function TodoList({ listIsDone }) {
  const todos = useSelector((todos) => todos.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{listIsDone ? "Done..! 🎉" : "Working.. 🔥"}</h2>
      <ListBox>
        {todos
          .filter((todo) => todo.isDone === listIsDone)
          .map((todo) => {
            return (
              <TodoBox key={todo.id}>
                <Link to={`/todo/${todo.id}`}>상세보기</Link>
                <h2>{todo.title}</h2>
                <p>{todo.contents}</p>

                <div className="buttons">
                  <BoxButton
                    bordercolor="green"
                    onClick={() => {
                      dispatch(completeStateToto(todo));
                    }}
                  >
                    {listIsDone ? "취소" : "완료"}
                  </BoxButton>
                  <BoxButton
                    bordercolor="red"
                    onClick={() => {
                      dispatch(deleteTodo(todo));
                    }}
                  >
                    삭제
                  </BoxButton>
                </div>
              </TodoBox>
            );
          })}
      </ListBox>
    </div>
  );
}

export default TodoList;
