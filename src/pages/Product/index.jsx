import { Button, OutlinedInput, Stack } from "@mui/material";
import React from "react";
import StickyHeadTable from "./Table";
import { useBoolean } from "../../utils/hooks";
function Product() {
  const [open, setOpen] = useBoolean();

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

export default Product;
