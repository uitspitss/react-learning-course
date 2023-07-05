import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

const List = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant="h3">ToDo アプリ</Typography>
      </Box>
    </Container>
  );
};

export default List;
