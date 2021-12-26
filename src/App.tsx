import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import Form from './Form';
import Editor from './Editor';
import TreeSearch from './TreeSearch';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="editor" element={<Editor />} />
          <Route path="tree-search" element={<TreeSearch />} />
        </Routes>
      </HeaderNav>
    </BrowserRouter>
  );
}

export default App;
