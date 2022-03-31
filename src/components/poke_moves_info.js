import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { useState, useEffect } from "react";
import PokeTableCell from "./poke_move_table_cell";
import axios from "axios";
// import PokeTableCell from "./poke_move_table_cell";

const PokeMoveInfo = ({
  pokeID,
}) => {
  const [moves, setMoves] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon/${pokeID}/`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(
      res => {
        // console.log(res.data);
        let rawData = res.data
        setMoves(rawData.moves);
        // console.log(moves);
      }
    ).catch(
      err => {
        console.log(err);
      }
    )

  }, [pokeID, moves])


  return (
    <>
      {
        (moves === undefined || moves.length === 0) ? (
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
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontWeight: "bold",
                color: "#56525C"
              }}
            >
              Moves
            </Box>

            <Card
              sx={{
                minWidth: "12em",
                minHeight: "3em",
                marginTop: 1,
                padding: 2,
                boxShadow: 3,
                borderRadius: "1em"
              }}
            >
              <Box
                sx={{
                  maxWidth: "80vw",
                  maxHeight: "50vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingY: 1,
                  overflowY: "scroll"
                }}
              >
                <TableContainer component={Paper}>
                  <Table stickyHeader sx={{ minWidth: 650, maxHeight: 400 }} size="small" aria-label="a moves table">
                    <TableHead >
                      <TableRow >
                        <TableCell >Name</TableCell>
                        <TableCell align="right">Accuracy</TableCell>
                        <TableCell align="right">Damage&nbsp;Class</TableCell>
                        <TableCell align="right">Power</TableCell>
                        <TableCell align="right">PP</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        moves.map((item, id) => (
                          <>
                            <TableRow key={id}>
                              <PokeTableCell
                                pokeUrl={item.move.url}
                                moveName={item.move.name}
                              />
                            </TableRow>
                          </>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>

              </Box>

            </Card>
          </>
        )
      }

    </>
  )
}

export default PokeMoveInfo;