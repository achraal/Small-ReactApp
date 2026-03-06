import { Container, Grid, Paper } from "@mui/material";

export default function Layout() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>Bloc 1</Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>Bloc 2</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
