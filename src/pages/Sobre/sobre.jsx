import MenuTopo from "../../components/menuTopo/menuTopo";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { FaMicrochip, FaBolt, FaShieldAlt, FaArrowRight } from "react-icons/fa";

function Sobre() {
    return (
        <>
            <MenuTopo />

            <Container maxWidth="lg" sx={{ py: 5 }}>
                {/* Título */}
                <Paper elevation={3} sx={{ p: 5, mb: 4, textAlign: "center", borderRadius: 3 }}>
                    <FaMicrochip size={55} />
                    <Typography variant="h2" gutterBottom>Sobre Nós</Typography>
                    <Typography variant="h6" color="text.secondary">Tecnologia de verdade, com atendimento de gente boa.</Typography>
                </Paper>

                {/* História */}
                <Paper elevation={2} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
                    <Typography variant="h4" gutterBottom>Nossa história</Typography>
                    <Typography variant="body1" paragraph>A ByteHub nasceu da vontade de vender eletrônicos sem enrolação: preço claro, produto original e alguém pra te ajudar quando surge uma dúvida.</Typography>
                    <Typography variant="body1">Hoje trabalhamos com smartphones, notebooks, acessórios e TVs, sempre testando o que recomendamos antes de colocar na loja.</Typography>
                </Paper>

                {/* Valores */}
                <Typography variant="h4" align="center" gutterBottom sx={{ mb: 3 }}>O que nos representa</Typography>

                <Grid container spacing={3}>
                    {/* Qualidade */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card elevation={3}>
                            <CardContent sx={{ textAlign: "center", p: 3 }}>
                                <FaMicrochip size={50} />
                                <Typography variant="h5" gutterBottom sx={{ mt: 1 }}>Qualidade</Typography>
                                <Typography color="text.secondary">Só vendemos o que a gente mesmo usaria em casa.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Inovação */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card elevation={3}>
                            <CardContent sx={{ textAlign: "center", p: 3 }}>
                                <FaBolt size={50} />
                                <Typography variant="h5" gutterBottom sx={{ mt: 1 }}>Inovação</Typography>
                                <Typography color="text.secondary">Catálogo sempre atualizado com o que há de mais novo.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Confiança */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Card elevation={3}>
                            <CardContent sx={{ textAlign: "center", p: 3 }}>
                                <FaShieldAlt size={50} />
                                <Typography variant="h5" gutterBottom sx={{ mt: 1 }}>Confiança</Typography>
                                <Typography color="text.secondary">Garantia de verdade e suporte que responde rápido.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Botão */}
                <Paper elevation={2} sx={{ mt: 5, p: 4, textAlign: "center", borderRadius: 3 }}>
                    <Typography variant="h5" gutterBottom>Vem ver o que temos pra você!</Typography>
                    <Button variant="contained" size="large" endIcon={<FaArrowRight />} sx={{ mt: 2 }}>Ver catálogo</Button>
                </Paper>
            </Container>
        </>
    );
}

export default Sobre;
