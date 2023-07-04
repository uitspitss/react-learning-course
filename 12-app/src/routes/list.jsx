import { Box, Switch, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useContext } from 'react';
import { ItemList } from '../components/ItemList';
import { TodoCreateForm } from '../components/TodoCreateForm';
import { useTodos } from '../hooks/useTodos';
import { FilterContext } from '../components/providers/FilterProvider';

const List = () => {
  const { todos, loading, create, update } = useTodos();
  const { filters, setSearchTerm, toggleShowCheckedItems } =
    useContext(FilterContext);

  const addItem = async (data) => {
    create(data);
  };

  const checkItem = (item) => {
    update(item._id, { ...item, checked: !item.checked });
  };

  if (!todos || loading) {
    return <p>loading...</p>;
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant="h3">ToDo アプリ</Typography>
        <TodoCreateForm onSubmit={addItem} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <TextField
            placeholder="検索"
            value={filters.searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
          list={todos}
          onCheck={checkItem}
          showCheckedItems={filters.showCheckedItems}
          searchTerm={filters.searchTerm}
        />
      </Box>
    </Container>
  );
};

export default List;
