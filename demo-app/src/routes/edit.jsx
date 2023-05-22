import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';
import { ToDoUpdateForm } from '../components/ToDoUpdateForm';
import { useFetchOne } from '../hooks/useFetchOne';

const Edit = () => {
  const { todoId } = useParams();
  const {
    data: item,
    loading,
    error,
    update,
  } = useFetchOne('http://localhost:4000/todos', todoId);

  const updateItem = async (data) => {
    update(data);
  };

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant="h3">ToDo アプリ</Typography>
          <ToDoUpdateForm defaultText={item.text} onSubmit={updateItem} />
        </Box>
      </Container>
    </div>
  );
};

export default Edit;
