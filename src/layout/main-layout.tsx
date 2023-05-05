import { Link, Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import { AppBar, Toolbar, Typography } from "@mui/material";

export function MainLayout() {
  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              color={"#ffffff"}
              noWrap
              component={Link}
              to="/"
            >
              HOME
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </Container>
  );
}
