// import "./normalize.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./components/MainLayout";
import MainItems from "./components/MainItems";
import MenuSelectedItems from "./components/MenuSelectedItems";
import "./App.css";

function App() {
  const [text, setText] = useState();

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='/main'
            element={
              <MainLayout
                formSubmit={handleFormSubmit}
                inputChange={handleInputChange}
                request={text}
              />
            }
          >
            <Route index element={<MainItems />} />
            <Route
              path='freezers'
              element={<MenuSelectedItems group='freezer' />}
            />
            <Route
              path='washing_machines'
              element={<MenuSelectedItems group='washing machine' />}
            />
            <Route
              path='cookers'
              element={<MenuSelectedItems group='cooker' />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
