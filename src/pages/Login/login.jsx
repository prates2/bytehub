import MenuTopo from "../../components/menuTopo/menuTopo";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { FaMicrochip, FaUser, FaLock } from "react-icons/fa";

function Login() {
    return (
        <>
            <MenuTopo />

            <Container maxWidth="sm" sx={{ py: 8 }}>
                <Paper elevation={4} sx={{ p: 5, borderRadius: 3 }}>
                    {/* Ícone e título */}
                    <Stack spacing={1} alignItems="center" sx={{ mb: 4 }}>
                        <FaMicrochip size={50} />
                        <Typography variant="h4">Bem-vindo de volta!</Typography>
                        <Typography variant="body1" color="text.secondary">Entre na sua conta</Typography>
                    </Stack>

                    <Divider sx={{ mb: 4 }} />

                    {/* Formulário */}
                    <Stack spacing={3}>
                        <TextField
                            label="E-mail"
                            type="email"
                            fullWidth
                            slotProps={{ input: { startAdornment: <FaUser /> } }}
                        />

                        <TextField
                            label="Senha"
                            type="password"
                            fullWidth
                            slotProps={{ input: { startAdornment: <FaLock /> } }}
                        />

                        <Button variant="contained" size="large" fullWidth>Entrar</Button>

                        <Button variant="text" size="small">Esqueci minha senha</Button>
                    </Stack>
                </Paper>
            </Container>
        </>
    );
}

export default Login;
