import { useState } from "react";
import reviews from "./data";
import { FaBeer } from "react-icons/fa";
import User from "./components/user";

const App = () => {
  const [index, setIndex] = useState(0);
  const selectedUser = reviews[index];
  const randomUser = () => {
    const random = Math.floor(Math.random() * reviews.length);
    setIndex(random);
  };
  const nextUser = (next) => {
    if (next) {
      setIndex((currentIndex) => {
        return (currentIndex + 1) % reviews.length;
      });
    } else {
      setIndex((currentIndex) => {
        return (currentIndex - 1 + reviews.length) % reviews.length;
      });
    }
  };

  console.log(index);
  return (
    <div>
      <User
        key={selectedUser.id}
        user={selectedUser}
        randomUser={randomUser}
        nextUser={nextUser}
      ></User>
    </div>
  );
};
export default App;
