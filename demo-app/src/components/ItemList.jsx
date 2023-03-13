import { Stack, Box, Checkbox } from '@mui/material';

export const ItemList = ({ list, onCheck, showCheckedOnly }) => {
  return (
    <Stack spacing={2}>
      {list
        .filter((item) => (showCheckedOnly ? !item?.checked : true))
        .map((item, i) => (
          <Box
            key={item._id}
            sx={{
              backgroundColor: item?.checked ? '#bbb' : '#eee',
              borderRadius: 2,
              px: 2,
              py: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checkbox
              checked={item?.checked}
              onChange={() => onCheck(item.id)}
            />
            <Box>{item.text}</Box>
          </Box>
        ))}
    </Stack>
  );
};
