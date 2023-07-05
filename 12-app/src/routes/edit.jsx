import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { todoId } = useParams();

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant="h3">ToDo アプリ{todoId}</Typography>
      </Box>
    </Container>
  );
};

export default Edit;
