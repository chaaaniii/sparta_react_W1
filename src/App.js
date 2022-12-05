import React, { useState } from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from "./components/CustomButton";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };
  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  return (
    <div>
      <div className="app-style">
        {/* app컴포넌트 안에 있는 user가 map으로 돌면서 user에 대한 정보들을 Props로 넘겨주고 있음. */}
        {users.map((user) => {
          if (user.age < 25) {
            return (
              <User
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id} //key값으로 가상돔에서 변화를 알 수 있어 react의 성능이 최적화된다.
              ></User>
            );
          } else {
            return null;
          }
        })}
      </div>
      <input
        value={name}
        placeholder="이름을 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={age}
        placeholder="나이를 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
        onChange={(e) => setAge(e.target.value)}
      />
      <CustomButton color="green" onClick={addUserHandler}>
        추가하기
      </CustomButton>
    </div>
  );
};

export default App;
