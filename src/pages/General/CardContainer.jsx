import React from "react";
import { Grid } from "@mui/material";
import InfoCard from "./InfoCard";
function CardContainer() {
  return (
    <Grid item alignItems={"center"} align spacing={2} container xs>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard title="Total leads Received Today" value="10" />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard title={"Total manufacturers"} value="2" />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard title="Total Revenue (Lifetime)" value="100" />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard title="Total Revenue this month" value={20} />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard title="Subscriptions expiring this month" value={10} />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard title="Subscriptions already Expired" value={7} />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard
          title="Total manufacturers with no active subscriptions"
          value={40}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard title={"Total users"} value={30} />
      </Grid>
    </Grid>
  );
}

export default CardContainer;
