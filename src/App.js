import React, { useState } from "react";
import "./App.css"; // ๐ฅ ๋ฐ๋์ App.css ํ์ผ์ import ํด์ค์ผ ํฉ๋๋ค.
import CustomButton from "./components/CustomButton";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "์ก์ค๊ธฐ" },
    { id: 2, age: 24, name: "์ก๊ฐ" },
    { id: 3, age: 21, name: "๊น์ ์ " },
    { id: 4, age: 29, name: "๊ตฌ๊ตํ" },
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
        {/* app์ปดํฌ๋ํธ ์์ ์๋ user๊ฐ map์ผ๋ก ๋๋ฉด์ user์ ๋ํ ์ ๋ณด๋ค์ Props๋ก ๋๊ฒจ์ฃผ๊ณ  ์์. */}
        {users.map((user) => {
          if (user.age < 25) {
            return (
              <User
                handleDelete={deleteUserHandler}
                user={user}
                key={user.id} //key๊ฐ์ผ๋ก ๊ฐ์๋์์ ๋ณํ๋ฅผ ์ ์ ์์ด react์ ์ฑ๋ฅ์ด ์ต์ ํ๋๋ค.
              ></User>
            );
          } else {
            return null;
          }
        })}
      </div>
      <input
        value={name}
        placeholder="์ด๋ฆ์ ์๋ ฅํด์ฃผ์ธ์"
        // ์ธํ ์ด๋ฒคํธ๋ก ๋ค์ด์จ ์๋ ฅ ๊ฐ์ name์ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={age}
        placeholder="๋์ด๋ฅผ ์๋ ฅํด์ฃผ์ธ์"
        // ์ธํ ์ด๋ฒคํธ๋ก ๋ค์ด์จ ์๋ ฅ ๊ฐ์ age์ ๊ฐ์ผ๋ก ์๋ฐ์ดํธ
        onChange={(e) => setAge(e.target.value)}
      />
      <CustomButton color="green" onClick={addUserHandler}>
        ์ถ๊ฐํ๊ธฐ
      </CustomButton>
    </div>
  );
};

export default App;
