import { Box, Button, TextField } from '@mui/material';
import { FormEvent, useRef } from 'react';
import { CreateTodoData } from '../types/todo';

type Props = {
  onSubmit: (data: CreateTodoData) => void;
};

export const TodoCreateForm = ({ onSubmit }: Props) => {
  const formRef = useRef<HTMLFormElement>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(
      Object.fromEntries(formData.entries()) as unknown as CreateTodoData
    );
    formRef.current?.reset();
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
