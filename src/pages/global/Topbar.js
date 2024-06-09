import {
  Box,
  IconButton,
  useTheme,
  InputBase,
  Badge,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material"
import { useContext, useState } from "react"
import { ColorModeContext, tokens } from "../../theme"
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material"

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Topbar = ({  sizeWindow, isCollapse}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  const [anchorElUser, setAnchorElUser] =  useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      position="fixed"
      zIndex={1}
      // width="calc(100% - 270px)"
      className={`topbar-container ${sizeWindow <= 900 || isCollapse ? 'mobile' : ''}`}
      backgroundColor={`${theme.palette.mode === 'dark' ? colors.primary[500] : theme.palette.background.default}`}
    >
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      <Box display="flex">
        <Tooltip title={`${theme.palette.mode === 'dark' ? ' Dark Mode`' : ' Light Mode`'}`} arrow>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark'
              ? <DarkModeOutlined />
              : <LightModeOutlined />
            }
          </IconButton>
        </Tooltip>
        <Tooltip title='Notification' arrow>
          <IconButton>
            <Badge color="error" badgeContent={3} showZero>
              <NotificationsOutlined />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title='Setting' arrow>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title='Open Profile' arrow>
          <IconButton onClick={handleOpenUserMenu}>
            {/* <PersonOutlined /> */}
            <Avatar alt="Rian S" src={`../../assets/user.png`} sx={{ width: 24, height: 24 }} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  )
}

export default Topbar