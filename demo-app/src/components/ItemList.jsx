import { Link } from 'react-router-dom';
import { Stack, Box, Checkbox, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const ItemList = ({ list, onCheck, showCheckedItems, searchTerm }) => {
  return (
    <Stack spacing={2}>
      {list
        .filter((item) => {
          const re = new RegExp(searchTerm);
          return re.test(item.text);
        })
        .filter((item) => showCheckedItems || !item.checked)
        .map((item, i) => (
          <Box
            key={item._id}
            sx={{
              backgroundColor: item.checked ? '#bbb' : '#eee',
              borderRadius: 2,
              px: 2,
              py: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Checkbox checked={item.checked} onChange={() => onCheck(item)} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box>{item.text}</Box>
              <Box>
                <Link to={`/todos/${item._id}`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
    </Stack>
  );
};
