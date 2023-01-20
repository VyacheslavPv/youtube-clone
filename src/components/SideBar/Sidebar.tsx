import { Stack } from '@mui/material';

import { categories } from '../../utils/constants';

import './Sidebar.css';

const selectedCategory = 'New';

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sm: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}>
    {categories.map((category) => (
      <button
        className={`category-btn${
          category.name === selectedCategory ? ' category-btn-selected' : ''
        }`}
        onClick={() => {}}
        key={category.name}>
        <span style={{ marginRight: '24px' }}>{category.icon}</span>
        <span className="category-btn-name">{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
