import { Box, Switch, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import './App.css';
import { ItemList } from './components/ItemList';
import { ToDoForm } from './components/ToDoForm';

const App = () => {
  const [list, setList] = useState([]);
  const [notCheckedOnly, setNotCheckedOnly] = useState(false);

  const addItem = (data) => {
    setList((prev) => [...prev, { ...data, checked: false }]);
  };

  const checkItem = (itemId) => {
    setList(
      list.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant="h3">ToDo アプリ</Typography>
          <ToDoForm onSubmit={addItem} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Switch
              value={notCheckedOnly}
              onChange={() => setNotCheckedOnly((prev) => !prev)}
            />
            <Box>未チェックのみ表示</Box>
          </Box>
          <ItemList
            list={list}
            onCheck={checkItem}
            showCheckedOnly={notCheckedOnly}
          />
        </Box>
      </Container>
    </div>
  );
};

export default App;
