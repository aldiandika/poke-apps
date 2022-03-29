import { Box, Grid } from "@mui/material";
import { Component } from "react";
import PokeListCard from "../components/poke_list_card";
import axios from "axios";

class PokemonListPage extends Component {
  state = {
    pokeData: [],
    count: 0,
    next: ``
  }

  componentDidMount() {
    axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon?limit=99`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(
      res => {
        console.log(res.data.results);
        let listPoke = res.data.results;
        this.setState({
          pokeData: listPoke
        })
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }

  render() {

    return (
      <Box
        sx={{
          minHeight: "100vh",
          paddingTop: 12,
          px: 1,
          backgroundColor: "ivory",
          justifyContent: "center",
          alignItems: "center"
        }}
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
                py={1}
              >
                <PokeListCard
                  pokeID={id}
                  pokeName={item.name}
                />
              </Grid>
            ))
          }
        </Grid>

      </Box>
    )
  }
}

export default PokemonListPage;