import React from "react";
import { Stack, OutlinedInput, Button } from "@mui/material";
import StickyHeadTable from "./Table";
function User() {
  return (
    <Stack gap={2}>
      <Stack gap={1} direction="row" alignItems="center">
        <OutlinedInput />
        <Button variant="contained">Search</Button>
      </Stack>
      <StickyHeadTable />
    </Stack>
  );
}

export default User;
