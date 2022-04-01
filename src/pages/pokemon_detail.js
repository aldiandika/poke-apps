import { Box, Fab, Hidden, Drawer, IconButton, Link } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PokeTypeTag from "../components/poke_type_tag";
import PokeballBG from "../assets/pokeball.webp";
import PokeballIC from "../assets/pokeball-icon.webp";

import NameAndTypeComp from "../components/name_n_type_component";
import PokeBasicInfo from "../components/poke_basic_info";
import PokeMoveInfo from "../components/poke_moves_info";
import PokeAbility from "../components/poke_ability_info";
import CatchLayout from "../layouts/catch_layout";
import HomeIcon from "@mui/icons-material/Home";

const PokemonDetailPage = () => {
  let param = useParams();
  let pokeID = param.id;

  const [pokeData, setPokeData] = useState({});
  const [bgColor, setBgColor] = useState("greenyellow");

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  // Pokemon Data
  const [pokeType, setPokeType] = useState([]);

  const defineBgColor = (type) => {
    if ((type) === "grass") { setBgColor("#64D0B0") }
    else if ((type) === "water") { setBgColor("#91CAF9") }
    else if ((type) === "fire") { setBgColor("#EB696B") }
    else if ((type) === "electric") { setBgColor("#F9D86E") }
    else if ((type) === "ice") { setBgColor("#98D8D8") }
    else if ((type) === "fighting") { setBgColor("#C03028") }
    else if ((type) === "poison") { setBgColor("#A040A0") }
    else if ((type) === "ground") { setBgColor("#E0C068") }
    else if ((type) === "flying") { setBgColor("#91B2E5") }
    else if ((type) === "psychic") { setBgColor("#F2888B") }
    else if ((type) === "bug") { setBgColor("#93B11E") }
    else if ((type) === "rock") { setBgColor("#C4B984") }
    else if ((type) === "ghost") { setBgColor("#4A68B9") }
    else if ((type) === "dragon") { setBgColor("#0063C3") }
    else if ((type) === "steel") { setBgColor("#408B99") }
    else if ((type) === "dark") { setBgColor("#56525C") }
    else if ((type) === "fairy") { setBgColor("#E98CE1") }
    else if ((type) === "normal") { setBgColor("#A8A878") }
  }

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
        if (res.status === 200) {
          setPokeData(rawData);
          setPokeType(rawData.types);
          defineBgColor(rawData.types[0].type.name);
        }
      }
    ).catch(
      err => {
        console.log(err);
      }
    )

  }, [pokeID])

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "ivory",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >

        <Hidden lgUp>

          {/* Name and Type Pokemon */}
          <Box
            sx={{
              width: "100%",
              height: "50vh",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 10,
              backgroundColor: bgColor,
              position: "fixed",
              overflow: "hidden"
            }}
          >
            <Box
              sx={{ paddingLeft: 1 }}
            >
              <Link href="/">
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </Link>
            </Box>
            <img
              src={PokeballBG}
              alt="Background"
              style={{
                width: 300,
                position: "absolute",
                opacity: 0.3,
                zIndex: 1,
                top: -5,
                left: 180
              }}
            />
            <NameAndTypeComp
              pokeName={pokeData.name}
              poke_ID={pokeID}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 2
              }}
            >
              {
                pokeType.map((item, id) => (
                  <PokeTypeTag
                    key={id}
                    pokeType={item.type.name}
                  />
                ))
              }
            </Box>


          </Box>

          {/* Image */}
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`}
            alt="Pokemon"
            style={{
              width: "60%",
              position: "absolute",
              top: "12%",
              left: "20%",
              zIndex: 100,
            }}
          />
        </Hidden>
        <Hidden lgDown>
          {/* Name and Type Pokemon */}
          <Box
            sx={{
              width: "100vw",
              height: "50vh",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 4,
              px: 10,
              backgroundColor: bgColor,
              position: "fixed"
            }}
          >
            <Box
              sx={{ paddingLeft: 1 }}
            >
              <Link href="/">
                <IconButton>
                  <HomeIcon />
                </IconButton>
              </Link>
            </Box>
            <img
              src={PokeballBG}
              alt="Background"
              style={{
                width: 500,
                position: "absolute",
                opacity: 0.3,
                zIndex: 1,
                top: -40,
                right: 200
              }}
            />
            <NameAndTypeComp
              pokeName={pokeData.name}
              poke_ID={pokeID}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingLeft: 4
              }}
            >
              {
                pokeType.map((item, id) => (
                  <PokeTypeTag
                    key={id}
                    pokeType={item.type.name}
                  />
                ))
              }
            </Box>


          </Box>

          {/* Image */}
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`}
            alt="Pokemon"
            style={{
              width: "30%",
              position: "absolute",
              top: "-10%",
              left: "60%",
              zIndex: 100,
            }}
          />
        </Hidden>
        {/* Detail Desc */}
        <Box
          sx={{
            minWidth: "90vw",
            height: "60vh",
            position: "relative",
            zIndex: 10,
            bottom: -200,
            paddingTop: 8,
            paddingLeft: 2.5,
            paddingRight: 2,
            borderTopLeftRadius: "2em",
            borderTopRightRadius: "2em",
            backgroundColor: "ivory"
          }}
        >
          <Box
            minWidth={{ xs: "85vw", sm: "85vw", md: "90%", lg: "90%" }}
            sx={{

              height: "60vh",
              position: "absolute",
              zIndex: 15,
              bottom: 0,
              left: 5.5,
              paddingLeft: 2,
              paddingRight: 2,
              paddingBottom: 2,
              overflow: "auto"
            }}
          >
            {pokeData ? (<>
              <PokeBasicInfo
                pokeWeight={pokeData.weight}
                pokeHeight={pokeData.height}
                pokeBaseEXP={pokeData.base_experience}
              />
              <br />
              <PokeAbility
                pokeAbi={pokeData.abilities}
              />
              <br />
              <PokeMoveInfo
                pokeID={pokeID}
                pokeMoves={pokeData.moves}
              />
            </>) : (<>
              <PokeBasicInfo
                pokeWeight="no-data"
                pokeHeight="no-data"
                pokeBaseEXP="no-data"
              />
              <br />
              <PokeAbility />
              <br />
              <PokeMoveInfo
                pokeID={pokeID}
              />
            </>)}

          </Box>

        </Box>
      </Box>

      {/* Button Catch */}
      <Fab
        sx={{
          position: "absolute",
          top: "25vh",
          right: 12,
          backgroundColor: "white"
        }}
        onClick={handleDrawerOpen}
      >
        <img
          alt="catch-poke"
          src={PokeballIC}
          width="90px"
        />
      </Fab>

      {/* Drawer */}
      <Drawer
        anchor="bottom"
        open={openDrawer}
      >
        <CatchLayout
          pokeID={pokeID}
          pokeName={pokeData.name}
          handleDrawerClose={() => handleDrawerClose()}
        />
      </Drawer>

    </>
  )
}

export default PokemonDetailPage;