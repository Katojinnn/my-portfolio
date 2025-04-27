import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Avatar from '../../../../assets/images/avatar.jpg';
import DownloadIcon from '@mui/icons-material/Download'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from '../../../../components/StyledButtom/StyledButton';
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground';
import theme from '../../../../theme';


const Hero = () => {
    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItens: "center"
    }));

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground/>
                                </Box>
                                    <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Lucas Kato</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Full Stack Developer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                            <Typography>
                                                Download CV
                                            </Typography>
                                    
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contact Me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
};

export default Hero;
