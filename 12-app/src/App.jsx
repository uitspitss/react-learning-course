import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useTodos } from './hooks/useTodos';

const App = () => {
  const { todos } = useTodos();
  console.log(todos);

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 4,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          gap: 4,
        }}
      >
        <Typography variant="h3">ToDo アプリ</Typography>
      </Box>
    </Container>
  );
};

export default App;
