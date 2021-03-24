import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { IconButton } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 550,
    width: "100%",
    margin: "0px 0px",
    border: "0px",
    boxShadow: "0px",
  },
  media: {
    width: "100%",
    height: "auto",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  // avatar: {
  //   backgroundColor: red[500],
  // },
  Content: {
    widht: "100px",
    color: "black",
  },
  containerContent: {
    padding: "0px 10px",
    widht: "100%",
    display: "flex",
    justifyContent: "center",
  },
  IconosContainer: {
    padding: "0px 10px",
    justifyContent: "space-between",
  },
  PublicarButton: {
    margin: "0px 5px",
    color: "#3493C2",
    fontWeight: "bold",
    height: "30px",
    fontSize: "12px",
    "&:hover": {
      backgroundColor: "white",
    },
  },

  inputText: {
    outline: "none",
    resize: "inherit",
    fontSize: "14px",
    fontFamily: "arial",
    border: "1px solid #C7C6C6",
    borderRadius: "15px",
    width: "100%",
    padding: "10px 10px 10px 10px",
    boxShadow: "rgba(0, 0, 0, 1)",
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent align="center" className={classes.containerContent}>
        <TextareaAutosize
          className={classes.inputText}
          variant="outline"
          aria-label="minimum height"
          placeholder="Comentar..."
          rowsMin={1}
        />
      </CardContent>
      <Grid container className={classes.IconosContainer}>
        <Grid item style={{ display: "flex", alignItems: "center" }}>
          <Button className={classes.PublicarButton} size="small">
            Enviar
          </Button>
        </Grid>

        <Grid item style={{ display: "flex", flexDirection: "row" }}>
          <Grid item>
            <IconButton style={{ padding: "10px 10px 10px 10px" }}>
              <AddAPhotoIcon fontSize="medium" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton style={{ padding: "10px 10px 10px 10px" }}>
              <TheatersIcon fontSize="medium" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
