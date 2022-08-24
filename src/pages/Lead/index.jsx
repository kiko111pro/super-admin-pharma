import React from "react";
import {Stack,OutlinedInput,Button} from "@mui/material"
import 
function Lead() {

  return (
    <Stack gap={2}>
      <Stack gap={1} direction="row" alignItems="center">
        <OutlinedInput />
        <Button variant="contained">Search</Button>
      </Stack>
      <StickyHeadTable setOpen={setOpen} />
    </Stack>
  );

}

export default Lead;
