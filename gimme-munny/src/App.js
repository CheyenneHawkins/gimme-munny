import React from 'react';
import './App.css';
import { Container } from './components/Style'
import Main from './components/Main';
import Header from './components/Header';

// export const MenuContext = React.createContext();

function App() {
  return (
    <>
    {/* <MenuContext.Provider value='showmenu'> */}
      <Container>
        <Header/>
        <Main />
      </Container>
    {/* </MenuContext.Provider> */}

    </>

  );
}

export default App;
