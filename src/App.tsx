import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Editor, Form, HeaderNav, TreeSearch } from './components';

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
