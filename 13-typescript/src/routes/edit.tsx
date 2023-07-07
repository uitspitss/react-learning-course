import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useParams, useNavigate } from 'react-router-dom';
import { TodoUpdateForm } from '../components/TodoUpdateForm';
import { useTodo } from '../hooks/useTodo';

const Edit = () => {
  const { todoId } = useParams();
  const navigate = useNavigate();
  const { todo, loading, error, update } = useTodo(todoId);

  const updateTodo = async (data) => {
    await update(data);
    navigate(-1);
  };

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant="h3">ToDo アプリ</Typography>
        <TodoUpdateForm defaultText={todo.text} onSubmit={updateTodo} />
      </Box>
    </Container>
  );
};

export default Edit;
