/** @jsxImportSource @emotion/react */
import { Box, Typography } from "@mui/material";
import { css } from "@emotion/react";


const PokeTypeTag = ({
  pokeType
}) => {
  return (
    <>
      <Box
        sx={{
          width: "25%",
          marginLeft: 0.5
        }}
      >
        <div
          css={css`
          width: auto;
          border-radius: 8em;
          padding: 0.2em;
          background-color: rgba(255,255,255,0.3);
          `}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography
              sx={{
                fontSize: "0.7em",
                fontWeight: 900,
                textTransform: "capitalize",
                color: "white",
              }}
            >
              {pokeType}
            </Typography>
          </Box>
        </div>
      </Box>

    </>
  )
}

export default PokeTypeTag;