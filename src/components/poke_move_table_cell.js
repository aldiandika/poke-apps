import { TableCell } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";


const PokeTableCell = ({
  pokeUrl,
  moveName
}) => {

  const [accu, setAccu] = useState();
  const [dmg, setDmg] = useState();
  const [power, setPower] = useState();
  const [pp, setPP] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: pokeUrl,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }).then(
      res => {
        // console.log(res.data);
        let rawData = res.data
        if (res.status === 200) {
          setAccu(rawData.accuracy);
          setDmg(rawData.damage_class.name);
          setPower(rawData.power);
          setPP(rawData.pp);
        }
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  }, [pokeUrl])

  return (
    <>
      <TableCell>{moveName}</TableCell>
      <TableCell align="right">{accu}</TableCell>
      <TableCell align="right">{dmg}</TableCell>
      <TableCell align="right">{power}</TableCell>
      <TableCell align="right">{pp}</TableCell>

    </>
  )
}
export default PokeTableCell;