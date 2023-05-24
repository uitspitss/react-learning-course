import { Box, Button, TextField } from '@mui/material';
import { FormEvent, useRef } from 'react';

type Props = {
  onSubmit: (data: any) => void;
  defaultText: string;
};

export const ToDoUpdateForm = ({ onSubmit, defaultText }: Props) => {
  const formRef = useRef();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(Object.fromEntries(formData.entries()));
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
        defaultValue={defaultText}
      />
      <Button type="submit" variant="contained">
        更新する
      </Button>
    </Box>
  );
};
