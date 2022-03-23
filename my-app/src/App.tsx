import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, incrementByAmount } from "./index";
import "./App.css";
import { Dispatch } from "redux";

let a: JSX.IntrinsicElements["div"] = <div>hi</div>;
let b: JSX.Element = <div>hello</div>;

function App() {
  // state는 타입지정 자동으로 해줌
  let [user, setUser] = useState("john");
  // 타입이 두 개 이상 올 수 있다면? -> Generic
  let [user2, setUser2] = useState<string | number>(123);

  // 리덕스
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {a} {b}
      <h4>hello</h4>
      <Profile name="kim" age={20}></Profile>
      <button
        onClick={() => {
          dispatch(incrementByAmount());
        }}
      >
        버튼
      </button>
    </div>
  );
}

function Profile(props: { name: string; age: number }): JSX.Element {
  return <div>프로필입니다</div>;
}

export default App;
