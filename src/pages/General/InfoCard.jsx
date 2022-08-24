import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import theme from "../../mui_theme/theme";

function InfoCard({ title, value }) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography
          sx={{ fontWeight: 700, lineHeight: 1.2 }}
          variant="h6"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 21,
            fontWeight: 600,
            textAlign: "right",
            color: theme.palette.primary.main,
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
