import React from 'react';
import './App.css';
import { Container } from './components/Style'
import { AuthContextProvider } from './components/contexts/AuthContext';
import Main from './components/Main';
import Header from './components/Header';
import SignIn from './components/SignIn';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Settings from './components/Settings';
import Invoices from './components/Invoices';
import CreateInvoice from './components/CreateInvoice'
import Search from './components/Search'
import Recipients from './components/Recipients'

// export const MenuContext = React.createContext();

function App() {
  return (
    <>
    <AuthContextProvider>
      <Container>
        <Header/>
          <Routes>
            <Route path="/" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/invoices" element={<Invoices />}/>
            <Route path="/createinvoice" element={<CreateInvoice />}/>
            <Route path="/recipients" element={<Recipients />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/account" element={<Settings />}/>
          </Routes>
      </Container>
    </AuthContextProvider>

    </>

  );
}

export default App;
