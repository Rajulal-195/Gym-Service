import React from "react";
import CustomHero from "../Components/CustomHero";
import Footer from "../Components/Footer";
import PriceComponent from "../Components/Price/PriceComponent";


const membershipHeaders = [
  "Regular Membership",
  "1 month",
  "3 months",
  "6 months",
  "1year",
];
const membershipRows = [
  {
    "Regular Membership": "Gym",
    "1 month": 3500,
    "3 month": 4500,
    "6 month": 5500,
    "1 year": 6500,
  },
  {
    "Regular Membership": "Gym and Cardio",
    "1 month": 4500,
    "3 month": 5500,
    "6 month": 6500,
    "1 year": 7500,
  },
];

const packageHeaders = ["Personal training", "3 month", "6 month"];
const packageRows = [
  {
    "Personal Training": "Single person",
    "3 Month": "Nrs. 11000",
    "6 Month": "Nrs. 28000",
  },
  {
    "Personal Training": "Two person",
    "3 Month": "Nrs. 9000",
    "6 Month": "Nrs. 23000",
  },
];


const PricePage = () => {
  return (
    <div>
      <CustomHero link={"prices"} text={"Price"} />

      <PriceComponent
        headers={membershipHeaders}
        rows={membershipRows}
        caption="Packages and prices"
      />
      <PriceComponent headers={packageHeaders} rows={packageRows} />

      <Footer />
    </div>
  );
};

export default PricePage;
