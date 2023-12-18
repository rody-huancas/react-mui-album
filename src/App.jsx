import {
  Typography,
  AppBar,
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useStyles } from "./styles";

const CARDS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Álbum de Fotos</Typography>
        </Toolbar>
      </AppBar>

      <main style={{ marginBottom: "20px" }}>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: "30px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom // agregar un espaciado hacia abajo
            >
              Álbum de Fotos
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique atque soluta dignissimos incidunt accusantium autem sint
              sit vero quas debitis ullam.
            </Typography>

            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Ver mis fotos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Acción secundaria
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {CARDS.map((card) => (
              <Grid key={card} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Título de imagen"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla, perspiciatis?
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver
                    </Button>
                    <Button size="small" color="secondary">
                      editar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptate
          mollitia ducimus.
        </Typography>
      </footer>
    </>
  );
};

export default App;
