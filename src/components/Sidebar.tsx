// /** @jsxImportSource @emotion/react */

import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

// import { css } from '@emotion/react/macro';
import styled from '@emotion/styled/macro';

/* Styled components */

const CategoryName = styled.span`
  opacity: 0.8;
`;

const CategoryBtn = styled.button<{ selected?: boolean }>`
  font-weight: bold;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  background: ${({ selected }) =>
    selected ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  outline: none;
  border: none;
  color: #f1f1f1;
  padding: 0 12px;
  margin: 10px 0px;
  border-radius: 20px;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ selected }) =>
      selected ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
    color: white;
    ${CategoryName} {
      opacity: 1;
    }
  }
`;

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
      <CategoryBtn
        selected={category.name === selectedCategory}
        onClick={() => {}}
        key={category.name}>
        <span style={{ marginRight: '24px' }}>{category.icon}</span>
        <CategoryName>{category.name}</CategoryName>
      </CategoryBtn>
    ))}
  </Stack>
);

export default Sidebar;
