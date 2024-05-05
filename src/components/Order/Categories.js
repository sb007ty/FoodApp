import { SetMealSharp } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
const buttonCatStyle = {
  width: "100%",
};
export default function Categories({
  setCategory,
  alphabetSel,
  setAlphabetSel,
  filterDataFun,
}) {
  const [alph, setAlph] = useState(alphabetSel);
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ marginBottom: "50px", marginTop: "50px" }}
      onClick={(e) => {
        console.log(e.target.textContent);
        const buttonText = e.target.textContent;
        let categorySel = 0;
        switch (buttonText.toLowerCase()) {
          case "all category":
            categorySel = 0;
            break;
          case "main":
            categorySel = 1;
            break;
          case "side":
            categorySel = 2;
            break;
          case "veg":
            categorySel = 3;
            break;
          case "non veg":
            categorySel = 4;
            break;
          default:
            break;
        }
        filterDataFun(categorySel);
        // setCategory(categorySel);
      }}
    >
      <Grid item sx={{ display: "flex", alignItems: "center" }} sm={4} xs={6}>
        {/* <div style={{ display: "inline-flex", justifyContent: "center" }}> */}
        <Button
          variant="contained"
          sx={buttonCatStyle}
          onClick={() => {
            setAlphabetSel(alph.toLowerCase());
          }}
        >
          Set alphabet- {alph}
        </Button>
        <TextField
          onChange={(e) => {
            setAlph(e.target.value);
          }}
          value={alph}
        />
      </Grid>
      <Grid item sm={4} xs={6}>
        <Button variant="contained" sx={buttonCatStyle}>
          All Category
        </Button>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Button variant="contained" sx={buttonCatStyle}>
          Main
        </Button>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Button variant="contained" sx={buttonCatStyle}>
          Side
        </Button>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Button variant="contained" sx={buttonCatStyle}>
          Veg
        </Button>
      </Grid>
      <Grid item sm={4} xs={6}>
        <Button variant="contained" sx={buttonCatStyle}>
          Non Veg
        </Button>
      </Grid>
    </Grid>
  );
}
