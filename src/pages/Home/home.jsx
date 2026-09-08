import MenuTopo from "../../components/menuTopo/menuTopo";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";

import { FaMicrochip, FaShieldAlt, FaTruck, FaTools, FaArrowRight, FaMobileAlt, FaLaptop, FaHeadphones } from "react-icons/fa";

function Home() {
    return (
        <>
            <MenuTopo />

            <Container maxWidth="lg" sx={{ py: 5 }}>
                {/* HERO */}
                <Paper elevation={4} sx={{ p: 6, mb: 5, textAlign: "center", borderRadius: 3 }}>
                    <FaMicrochip size={60} />

                    <Typography variant="h2" gutterBottom sx={{ mt: 2 }}>Tecnologia que cabe no seu dia.</Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>Os melhores eletrônicos com preço justo e garantia de verdade.</Typography>

                    <Button variant="contained" size="large" endIcon={<FaArrowRight />}>Ver produtos</Button>
                </Paper>

                {/* CATEGORIAS */}
                <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ mb: 4 }}>
                    <Chip label="Smartphones" icon={<FaMobileAlt />} color="primary" />
                    <Chip label="Notebooks" />
                    <Chip label="Acessórios" />
                    <Chip label="Smart TVs" />
                </Stack>

                {/* DESTAQUES */}
                <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>Nossos destaques</Typography>

                <Grid container spacing={3}>
                    {/* SMARTPHONE */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card elevation={3}>
                            <CardMedia component="div" sx={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#eee" }}>
                                <FaMobileAlt size={70} />
                            </CardMedia>

                            <CardContent>
                                <Typography variant="h5" gutterBottom>Smartphone Galaxy X</Typography>

                                <Typography color="text.secondary" sx={{ mb: 2 }}>Câmera de qualidade, bateria que dura o dia todo e tela vibrante.</Typography>

                                <Rating value={5} readOnly />

                                <Typography variant="h6" sx={{ mt: 1 }}>R$ 1.899,00</Typography>

                                <Button variant="contained" fullWidth sx={{ mt: 2 }}>Ver produto</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* NOTEBOOK */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card elevation={3}>
                            <CardMedia component="div" sx={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#eee" }}>
                                <FaLaptop size={70} />
                            </CardMedia>

                            <CardContent>
                                <Typography variant="h5" gutterBottom>Notebook Ultra</Typography>

                                <Typography color="text.secondary" sx={{ mb: 2 }}>Leve, rápido e com memória de sobra pra trabalho e estudo.</Typography>

                                <Rating value={4} readOnly />

                                <Typography variant="h6" sx={{ mt: 1 }}>R$ 3.499,00</Typography>

                                <Button variant="contained" fullWidth sx={{ mt: 2 }}>Ver produto</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* FONE */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card elevation={3}>
                            <CardMedia component="div" sx={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#eee" }}>
                                <FaHeadphones size={70} />
                            </CardMedia>

                            <CardContent>
                                <Typography variant="h5" gutterBottom>Fone Bluetooth Pro</Typography>

                                <Typography color="text.secondary" sx={{ mb: 2 }}>Cancelamento de ruído e autonomia de até 30 horas.</Typography>

                                <Rating value={5} readOnly />

                                <Typography variant="h6" sx={{ mt: 1 }}>R$ 349,00</Typography>

                                <Button variant="contained" fullWidth sx={{ mt: 2 }}>Ver produto</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* DIFERENCIAIS */}
                <Typography variant="h4" align="center" sx={{ mt: 7, mb: 4 }}>Por que comprar com a gente?</Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
                            <FaShieldAlt size={45} />

                            <Typography variant="h5" sx={{ mt: 2 }}>Garantia estendida</Typography>

                            <Typography color="text.secondary">Todos os produtos saem com garantia e nota fiscal.</Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
                            <FaTools size={45} />

                            <Typography variant="h5" sx={{ mt: 2 }}>Suporte especializado</Typography>

                            <Typography color="text.secondary">Time técnico pronto pra ajudar antes e depois da compra.</Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
                            <FaTruck size={45} />

                            <Typography variant="h5" sx={{ mt: 2 }}>Entrega rápida</Typography>

                            <Typography color="text.secondary">Pedido embalado e enviado no mesmo dia útil.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Home;
