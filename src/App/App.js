import Header from "../components/Header";
import InputTodos from "../components/Main/InputTodo";
import Main from "../components/Main/Main";
import Nav from "../components/Main/Nav";
import Todos from "../components/Main/Todos";

function App() {
  return (
    <>
      <Header/>
      <Main>
        <InputTodos/>
        <Nav/>
        <Todos/>
      </Main>
    </>
  );
}

export default App;
