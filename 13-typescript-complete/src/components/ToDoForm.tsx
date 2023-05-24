import { Box, Button, TextField } from '@mui/material';
import { FormEvent, useRef } from 'react';

type Props = {
  onSubmit: (data: any) => void;
};

export const ToDoForm = ({ onSubmit }: Props) => {
  const formRef = useRef<HTMLFormElement>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.set(
      'id',
      Math.random()
        .toString(16)
        .slice(2)
    );
    onSubmit(Object.fromEntries(formData.entries()));
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
