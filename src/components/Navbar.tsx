import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/YouTube_full-color_icon_2017.svg';
import SearchBar from './SearchBar';
import styled from '@emotion/styled/macro';

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  height: '20px',
  width: '146px',
});

const LogoWrapper = styled.div({
  height: '20px',
  width: '38px',
  paddingRight: '2px',
});

const LogoText = styled.span({
  fontFamily: 'sans-serif',
  fontWeight: 600,
  color: '#fff',
  fontSize: '1.1rem',
});

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#0f0f0f',
        top: 0,
        justifyContent: 'space-between',
      }}>
      <StyledLink to="/">
        <LogoWrapper>
          <Logo width="100%" height="100%" viewBox="0 0 160 110" />
        </LogoWrapper>
        <LogoText>YouTubeClone</LogoText>
      </StyledLink>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
