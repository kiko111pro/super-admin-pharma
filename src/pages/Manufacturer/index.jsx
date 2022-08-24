import { OutlinedInput, Stack, Button } from "@mui/material";
import React from "react";
import StickyHeadTable from "./Table";

function Manufacturer() {
  return (
    <Stack sx={{ maxWidth: "90vw" }} gap={1}>
      <Stack gap={1} direction="row" alignItems="center" sx={{}}>
        <OutlinedInput />
        <Button sx={{ height: "100%" }} variant="contained">
          Search
        </Button>
      </Stack>
      <StickyHeadTable />
    </Stack>
  );
}

export default Manufacturer;
