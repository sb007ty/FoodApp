import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import useSWRImmutable from "swr/immutable";
import Meal from "./Meal";
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import "../../styles/order.css";
import Categories from "./Categories";
import { Search } from "@mui/icons-material";
export default function Order() {
  const [alphabetSel, setAlphabetSel] = useState("c");
  const [searchVal, setSearchVal] = useState("");
  const [searchedMeals, setSearchedMeals] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchAndFilteredData, setSearchAndFilteredData] = useState([]);
  async function fetchMenu(url) {
    const res = await axios.get(url);
    // console.log("bro");

    return res.data.meals;
  }
  const {
    data: mealsData,
    isLoading: isLoadingMeals,
    error: mealError,
    isValidating: isValidatingMeals,
    mutate,
  } = useSWRImmutable(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${alphabetSel.toLowerCase()}`,
    fetchMenu
    // { keepPreviousData: true }
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("will mutate");
  //     mutate();
  //   }, 7000);
  // }, []);
  // let filteredData = useMemo(
  //   () =>
  //     mealsData?.filter((item) => {
  //       if (category === 1) {
  //         return item["strCategory"] !== "Starter";
  //       }
  //       if (category === 2) {
  //         return item["strCategory"] === "Starter";
  //       }
  //       if (category === 3) {
  //         return item["strCategory"] === "Vegetarian";
  //       }
  //       if (category === 4) {
  //         return item["strCategory"] !== "Vegetarian";
  //       }
  //       return true;
  //     }),
  //   [category, mealsData]
  // );

  // console.log(
  //   filteredData,
  //   category,
  //   mealsData,
  //   isValidatingMeals,
  //   isLoadingMeals,
  //   " bro"
  // );
  useEffect(() => {
    setFilteredData(mealsData);
    setSearchAndFilteredData(mealsData);
    if (searchVal && mealsData) {
      console.log("hello");
      searchDish(searchVal, mealsData);
    }
  }, [mealsData]);
  function searchDish(searchDishVal, filterData) {
    console.log(searchDishVal, filterData);
    const newFilteredData = filterData.filter((item) => {
      // console.log(
      //   item["strMeal"],
      //   item["strMeal"].toLowerCase().includes(searchDishVal.toLowerCase())
      // );
      return (
        item &&
        item["strMeal"] &&
        item["strMeal"].toLowerCase().includes(searchDishVal.toLowerCase())
      );
    });
    // console.log(newFilteredData, " newFil");
    setSearchAndFilteredData(newFilteredData);
  }
  function filterDataFun(category) {
    const newFilteredData = mealsData?.filter((item) => {
      if (category === 1) {
        return item["strCategory"] !== "Starter";
      }
      if (category === 2) {
        return item["strCategory"] === "Starter";
      }
      if (category === 3) {
        return item["strCategory"] === "Vegetarian";
      }
      if (category === 4) {
        return item["strCategory"] !== "Vegetarian";
      }
      return true;
    });
    if (!searchVal.length) {
      setSearchAndFilteredData(newFilteredData);
    } else {
      searchDish(searchVal, newFilteredData);
    }
    setFilteredData(newFilteredData);
  }
  function getMealsData() {
    console.log(filteredData, searchAndFilteredData, "search");
    if (!searchAndFilteredData && !isLoadingMeals)
      return (
        <div>
          <p>No meals found</p>

          <Categories
            setAlphabetSel={setAlphabetSel}
            alphabetSel={alphabetSel}
            filterDataFun={filterDataFun}
          />
        </div>
      );
    if (isLoadingMeals || (!searchAndFilteredData && isLoadingMeals))
      return <div>Loading....</div>;
    if (mealError) return <div>Error....</div>;
    return (
      <>
        <Categories
          setAlphabetSel={setAlphabetSel}
          alphabetSel={alphabetSel}
          filterDataFun={filterDataFun}
        />
        <Grid container spacing={5}>
          {searchAndFilteredData.map((item) => {
            return <Meal key={item.idMeal} {...item} />;
          })}
        </Grid>
      </>
    );
  }

  return (
    <Box className="order-page">
      <Container>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Our Popular Dishes starting with - {alphabetSel}
        </Typography>
        <TextField
          id="outlined-basic"
          label="Search Dishes"
          variant="outlined"
          fullWidth
          sx={{ marginTop: "20px" }}
          onChange={(e) => {
            setSearchVal(e.target.value);
            searchDish(e.target.value, filteredData);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search
                  onClick={() => {
                    searchDish(searchVal, filteredData);
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
        {getMealsData()}
      </Container>
    </Box>
  );
}
