import {
  Card,
  CardContent,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useUpdatePersonMutation } from "service/rickandmorty";
import { TPerson } from "types/TPerson";

interface IPersonCard {
  user: TPerson;
}

export const PersonCard = ({ user }: IPersonCard) => {
  const { personId } = useParams();
  const { image, gender, name, status, species } = user;
  const [editPerson, setEditPerson] = useState(false);

  const [formName, setName] = useState("");
  const [formGender, setGender] = useState("");
  const [formStatus, setStatus] = useState("");
  const [formSpecies, setSpecies] = useState("");

  const [updatePerson] = useUpdatePersonMutation();

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h1">
          {name}
        </Typography>
        <Box
          display={"flex"}
          justifyContent="space-evenly"
          alignItems="stretch"
          flexDirection="row"
        >
          <Box width={"50%"}>
            <ImageList
              sx={{ maxWidth: 500, minHeight: 450 }}
              cols={1}
              // rowHeight={164}
            >
              <ImageListItem>
                <img
                  src={`${image}`}
                  srcSet={`${image}`}
                  alt={name}
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </Box>
          <Box
            width={"50%"}
            display={"flex"}
            justifyContent="start"
            alignItems="start"
            flexDirection="column"
            padding="20px"
          >
            <Box
              display={"flex"}
              flexDirection="row"
              alignItems={"center"}
              gap={"10px"}
            >
              <Typography variant="body1">gender:</Typography>

              <Typography variant="h6">{gender}</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection="row"
              alignItems={"center"}
              gap={"10px"}
            >
              <Typography variant="body1">status:</Typography>

              <Typography variant="h6">{status}</Typography>
            </Box>

            <Box
              display={"flex"}
              flexDirection="row"
              alignItems={"center"}
              gap={"10px"}
            >
              <Typography variant="body1">species:</Typography>

              <Typography variant="h6">{species}</Typography>
            </Box>
            <Box margin={"20px"}>
              <Button
                onClick={() => {
                  setEditPerson(true);
                }}
              >
                Edit
              </Button>
            </Box>
            {editPerson && (
              <Box
                display={"flex"}
                flexDirection="column"
                alignItems={"center"}
                gap={"10px"}
              >
                <TextField
                  name="name"
                  label="name"
                  variant="standard"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <TextField
                  name="gender"
                  label="gender"
                  variant="standard"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <TextField
                  name="status"
                  label="status"
                  variant="standard"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                />
                <TextField
                  name="species"
                  label="species"
                  variant="standard"
                  onChange={(e) => {
                    setSpecies(e.target.value);
                  }}
                />

                <Button
                  onClick={async () => {
                    try {
                      await updatePerson({
                        id: personId,
                        name: formName,
                        gender: formGender,
                        status: formStatus,
                        species: formSpecies,
                      }).unwrap();
                    } catch (e) {
                      console.log(e);
                    } finally {
                      setEditPerson(false);
                    }
                  }}
                >
                  update
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
