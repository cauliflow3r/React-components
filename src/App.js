import React from "react";
import Section from "./components/Section/Section";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  let users = [
    {
      name: "lor",
      lastName: "lol",
      age: 22,
      id: 1,
    },
    {
      name: "kllooo",
      lastName: "dwad",
      age: 21,
      id: 2,
    },
    {
      name: "loursxc",
      lastName: "loooooos",
      age: 25,
      id: 3,
    },
    {
      name: "loursxc",
      lastName: "loooooos",
      age: 25,
      id: 4,
    },
    {
      name: "loursxc",
      lastName: "loooooos",
      age: 25,
      id: 5,
    },
    {
      name: "loursxc",
      lastName: "loooooos",
      age: 25,
      id: 6,
    },
  ];
  return (
    <div>
      <Header />

      <Section users={users} />

      <Footer />
    </div>
  );
};

export default App;
