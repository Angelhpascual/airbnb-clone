import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen Free parking · Washing Machine"
        star={4.73}
        price="30€/night"
        total="117€ total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/3396b721-3983-408b-ab97-70744472f852.jpg?im_w=1200"
        location="Entire loft in Tarifa"
        title="Mar y Monte"
        description="2 guests · 1 bedroom · 1.5baths"
        star={5.0}
        price="70€/night"
        total="200€ total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/dcbb67e8-2f3c-4fe8-b4c3-5667ca100492.jpg?im_w=960"
        location="Entire cottage in Benalauría"
        title="La Parra, rural turism, a paradise"
        description="2 guests · 1 bedroom · 1 bed · 1.5 baths"
        star={4.98}
        price="50€/night"
        total="171€ total"
      />
    </div>
  );
}

export default SearchPage;
