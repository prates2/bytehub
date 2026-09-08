import MenuTopo from "../../components/menuTopo/menuTopo";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { FaHeadset, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

function Contato() {
    return (
        <>
            <MenuTopo />

            <Container maxWidth="sm" sx={{ py: 6 }}>
                <Paper elevation={4} sx={{ p: 5, borderRadius: 3 }}>
                    {/* Título */}
                    <Stack spacing={1} alignItems="center" sx={{ mb: 4 }}>
                        <FaHeadset size={50} />
                        <Typography variant="h4">Fale com a gente</Typography>
                        <Typography variant="body1" color="text.secondary">Dúvida sobre um produto ou seu pedido? Manda uma mensagem.</Typography>
                    </Stack>

                    <Divider sx={{ mb: 4 }} />

                    {/* Formulário */}
                    <Stack spacing={3}>
                        <TextField
                            label="Nome"
                            fullWidth
                            slotProps={{ input: { startAdornment: <FaUser /> } }}
                        />

                        <TextField
                            label="E-mail"
                            type="email"
                            fullWidth
                            slotProps={{ input: { startAdornment: <FaEnvelope /> } }}
                        />

                        <TextField
                            label="Mensagem"
                            multiline
                            rows={5}
                            fullWidth
                            slotProps={{ input: { startAdornment: <FaComment /> } }}
                        />

                        <Button variant="contained" size="large" fullWidth>Enviar mensagem</Button>
                    </Stack>
                </Paper>
            </Container>
        </>
    );
}

export default Contato;
