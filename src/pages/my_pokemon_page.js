import React, { Component } from "react";
import { Box, Container, Grid } from "@mui/material";
import PokeListCard from "../components/poke_list_card";
class MyPokemonPage extends Component {
  state = {
    pokeList: [],
    pokeUrl: ""
  }

  componentDidMount() {
    let tempList = JSON.parse(localStorage.getItem("my_poke"));
    console.log(tempList);
    this.setState({
      pokeList: tempList
    })
  }

  render() {
    return (
      <>
        {
          (this.state.pokeList === undefined || this.state.pokeList.length === 0) ? (
            <>
              <Box
                sx={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  fontWeight: "bold",
                  color: "#56525C"
                }}
              >
                Loading . . .
              </Box>

            </>
          ) : (
            <>
              <Box
                sx={{
                  width: "100%",
                  minHeight: "100vh",
                  paddingTop: 8,
                  backgroundColor: "ivory"
                }}
              >
                <Box
                  sx={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    fontWeight: "bold",
                    padding: 2,
                    color: "#56525C"
                  }}
                >
                  My Pokemon
                </Box>

                <Container
                  // maxWidth={{ xs: "xs", sm: "sm", md: "md", lg: "lg" }}
                  maxWidth="md"
                >
                  <Grid
                    container
                    spacing={1}
                  >
                    {
                      this.state.pokeList.map((item, id) => (
                        <>
                          <Grid
                            key={id}
                            item
                            xs={6}
                            sm={6}
                            md={3}
                            lg={3}
                          >
                            <PokeListCard
                              pokeUrl={`https://pokeapi.co/api/v2/pokemon/${item.pokeID}`}
                              pokeName={item.pokeAlias}
                            />
                          </Grid>
                        </>
                      ))
                    }
                  </Grid>
                </Container>

              </Box >
            </>
          )
        }
      </>

    )
  }
}

export default MyPokemonPage;