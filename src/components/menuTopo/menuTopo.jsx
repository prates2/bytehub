import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { FaMicrochip, FaBars } from "react-icons/fa";

const links = [
    { to: "/", label: "Home" },
    { to: "/contato", label: "Contato" },
    { to: "/login", label: "Login" },
    { to: "/sobre", label: "Sobre" },
];

function MenuTopo() {
    const theme = useTheme();
    // abaixo de "md" a gente troca o menu deitado pela sidebar
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [aberto, setAberto] = useState(false);
    const { pathname } = useLocation();

    const logo = (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FaMicrochip size={22} />
            <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
                ByteHub
            </Typography>
        </Box>
    );

    return (
        <>
            <AppBar position="static" color="primary" elevation={2} sx={{ borderRadius: 3 }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {logo}

                    {isMobile ? (
                        <IconButton color="inherit" onClick={() => setAberto(true)} aria-label="abrir menu">
                            <FaBars />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", gap: 3 }}>
                            {links.map((link) => (
                                <Typography
                                    key={link.to}
                                    component={Link}
                                    to={link.to}
                                    sx={{
                                        color: "inherit",
                                        textDecoration: "none",
                                        fontWeight: pathname === link.to ? 700 : 400,
                                    }}
                                >
                                    {link.label}
                                </Typography>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* sidebar só existe de fato no mobile, mesmo que o Drawer esteja sempre montado */}
            <Drawer anchor="left" open={isMobile && aberto} onClose={() => setAberto(false)}>
                <Box sx={{ width: 240 }} role="presentation" onClick={() => setAberto(false)}>
                    <Box sx={{ p: 2 }}>{logo}</Box>
                    <Divider />
                    <List>
                        {links.map((link) => (
                            <ListItem key={link.to} disablePadding>
                                <ListItemButton component={Link} to={link.to} selected={pathname === link.to}>
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default MenuTopo;
