import { Suspense, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/system";

import { Header, Footer } from "src/components";

import { RouteList } from "src/route";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1673d6",
      contrastText: "#ffffff",
    },
  },
});

const App = () => {
  useEffect(() => {
    // console.log(process.env.REACT_APP_ENV);
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Header />
          <main className="content">
            <Container>
              <Suspense>
                <RouteList />
              </Suspense>
            </Container>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
