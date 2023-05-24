import { Box, Button, TextField } from '@mui/material';
import { useRef } from 'react';

export const ToDoForm = ({ onSubmit }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set('id', Math.random().toString(16).slice(2));
    onSubmit(Object.fromEntries(formData.entries()));
    formRef.current.reset();
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 2 }}
      ref={formRef}
    >
      <TextField
        name="text"
        label="すること"
        variant="outlined"
        sx={{ flexGrow: 1 }}
        required
      />
      <Button type="submit" variant="contained">
        追加する
      </Button>
    </Box>
  );
};
