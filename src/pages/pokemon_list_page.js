import { Box, Container, Grid, Button } from "@mui/material";
import { Component } from "react";
import PokeListCard from "../components/poke_list_card";
import axios from "axios";

class PokemonListPage extends Component {
  state = {
    pokeData: [],
    count: 0,
    next: ``,
    previous: null,
    owned: 0
  }

  componentDidMount() {
    axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon?limit=20`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(
      res => {
        // console.log(res.data.results);
        let listPoke = res.data.results;

        this.setState({
          pokeData: listPoke,
          next: res.data.next,
          previous: res.data.previous
        })
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
    let tempList = JSON.parse(localStorage.getItem("my_poke"));
    if (tempList.length) {
      this.setState({ owned: tempList.length })
    }

  }

  render() {

    const nextPage = () => {
      axios({
        method: "get",
        url: this.state.next,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }).then(
        res => {
          // console.log(res.data.results);
          let listPoke = res.data.results;

          this.setState({
            pokeData: listPoke,
            next: res.data.next,
            previous: res.data.previous
          })
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }

    const prevPage = () => {
      axios({
        method: "get",
        url: this.state.previous,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }).then(
        res => {
          // console.log(res.data.results);
          let listPoke = res.data.results;

          this.setState({
            pokeData: listPoke,
            next: res.data.next,
            previous: res.data.previous
          })
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }

    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          paddingTop: 6,
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
          Pokemon List.
        </Box>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            fontWeight: 400,
            paddingLeft: 2,
            color: "#56525C"
          }}
        >
          Owned: {this.state.owned}
        </Box>
        <Box
          sx={{
            maxWidth: "100vw",
            display: "flex",
            flexDirection: "row",
            paddingX: 4,
            paddingY: 1,
            justifyContent: "space-between"
          }}
        >
          {
            this.state.previous ? (
              <Button variant="text" onClick={prevPage} >PREV</Button>
            ) : (<Button variant="text" disabled >PREV</Button>)
          }

          {
            this.state.next ? (
              <Button variant="text" onClick={nextPage} >NEXT</Button>
            ) : (<Button variant="text" disabled >NEXT</Button>)
          }

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
              this.state.pokeData.map((item, id) => (

                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={3}
                  lg={3}
                >
                  <PokeListCard
                    key={id}
                    pokeUrl={item.url}
                    pokeName={item.name}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Container>
        <Box
          sx={{
            maxWidth: "100vw",
            display: "flex",
            flexDirection: "row",
            paddingX: 4,
            paddingY: 1,
            justifyContent: "space-between"
          }}
        >
          {
            this.state.previous ? (
              <Button variant="text" onClick={prevPage} >PREV</Button>
            ) : (<Button variant="text" disabled >PREV</Button>)
          }

          {
            this.state.next ? (
              <Button variant="text" onClick={nextPage} >NEXT</Button>
            ) : (<Button variant="text" disabled >NEXT</Button>)
          }

        </Box>


      </Box >
    )
  }
}

export default PokemonListPage;