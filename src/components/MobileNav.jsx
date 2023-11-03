import { Menu, MenuList, MenuButton, MenuItem, IconButton } from '@chakra-ui/react';
import Hamburger from './Hamburger';

export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<Hamburger />} variant="outline" />
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Menu</MenuItem>
          <MenuItem>Reservations</MenuItem>
          <MenuItem>Order Online</MenuItem>
          <MenuItem>Login</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
