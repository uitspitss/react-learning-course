import { Box, Switch, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useContext } from 'react';
import { ItemList } from './components/ItemList';
import { ToDoForm } from './components/ToDoForm';
import { useFetch } from './hooks/useFetch';
import styles from './App.module.css';
import { FilterContext } from './components/providers/FilterProvider';

const App = () => {
  const { data: list, loading, create, update } = useFetch(
    'http://localhost:4000/todos'
  );
  const { filters, setSearchTerm, toggleShowCheckedItems } = useContext(
    FilterContext
  );

  const addItem = async (data: any) => {
    create(data);
  };

  const checkItem = (item: any) => {
    update(item._id, { ...item, checked: !item.checked });
  };

  if (!list || loading) {
    return <p>loading...</p>;
  }

  return (
    <div className={styles.App}>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant="h3">ToDo アプリ</Typography>
          <ToDoForm onSubmit={addItem} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <TextField
              placeholder="検索"
              value={filters.searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch
                checked={!filters.showCheckedItems}
                onChange={toggleShowCheckedItems}
              />
              <Box>未チェックのみ表示</Box>
            </Box>
          </Box>
          <ItemList
            list={list}
            onCheck={checkItem}
            showCheckedItems={filters.showCheckedItems}
            searchTerm={filters.searchTerm}
          />
        </Box>
      </Container>
    </div>
  );
};

export default App;
