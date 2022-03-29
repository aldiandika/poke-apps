import CardContent from '@mui/material/CardContent';
import { CardActionArea, Box, CardMedia } from '@mui/material';
import { Card } from "@mui/material";
import Typography from '@mui/material/Typography';

const PokeListCard = ({
  pokeID,
  pokeType,
  pokeName,
  pokeDesc,
  background
}) => {
  return (
    <>
      <Card sx={{
        maxWidth: 176,
        height: 100,
        elevation: 12,
        borderRadius: 4,
        backgroundColor: background
      }}>
        <CardActionArea>
          <Box
            sx={{
              width: "100%",
              position: "relative"
            }}
          >
            <CardMedia
              component="img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID + 1}.png`}
              alt="Pokemon"
              style={{
                position: "absolute",
                top: -30,
                left: 55
              }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              textTransform: "capitalize",
              position: "absolute",
              top: 5,
              left: 7
            }}
          >
            {pokeName}
          </Typography>
        </CardActionArea>
      </Card>
    </>
  )
}

export default PokeListCard;