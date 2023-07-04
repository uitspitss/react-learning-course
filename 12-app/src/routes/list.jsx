import {
  Box,
  Switch,
  TextField,
  Typography,
  Stack,
  Checkbox,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Container } from '@mui/system';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        <Stack spacing={2}>
          {todos
            .filter((item) => {
              const re = new RegExp(filters.searchTerm);
              return re.test(item.text);
            })
            .filter((item) => filters.showCheckedItems || !item.checked)
            .map((item, i) => (
              <Box
                key={item._id}
                sx={{
                  backgroundColor: item.checked ? '#bbb' : '#eee',
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  checked={item.checked}
                  onChange={() => checkItem(item)}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box>{item.text}</Box>
                  <Box>
                    <Link to={`/todos/${item._id}`}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default List;
