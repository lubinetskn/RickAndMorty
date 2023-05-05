import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { TPerson } from "types/TPerson";

interface IPersonPanels {
  data: TPerson[];
}

export function PersonPanels({ data }: IPersonPanels) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr"
      gap="20px"
      margin="20px"
      justifyItems="center"
      alignItems="center"
    >
      {data.map((item: TPerson) => {
        return (
          <Card key={item.id} sx={{ width: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                component={RouterLink}
                to={`person/${item.id}`}
                size="small"
              >
                Know More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}
