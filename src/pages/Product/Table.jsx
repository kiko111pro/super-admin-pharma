import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Switch } from "@mui/material";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "plan", label: "Price", minWidth: 100 },
  { id: "plan", label: "Composition", minWidth: 100 },
  {
    id: "date",
    label: "Form",
    minWidth: 170,
  },
  {
    id: "status",
    label: "Brand",
    minWidth: 170,
  },
  {
    id: "more",
    label: "Manufacturer",
    minWidth: 170,
  },
  {
    id: "more",
    label: "MedType",
    minWidth: 170,
  },
  {
    id: "more",
    label: "Country",
    minWidth: 170,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

function createData(
  name,
  price,
  composition,
  form,
  brand,
  manufacturer,
  medType,
  country
) {
  return {
    name,
    price,
    composition,
    form,
    brand,
    manufacturer,
    medType,
    country,
  };
}

const rows = [
  createData(
    "Avery long name that is really",
    90,
    "Favipirar",
    "Tablet",
    "Glenmark",
    "Glenmark",
    "Allopathy",
    "Germany"
  ),
  createData(
    "Calpol",
    90,
    "Favipirar",
    "Tablet",
    "Glenmark",
    "Glenmark",
    "Allopathy",
    "Germany"
  ),
  createData(
    "Calpol",
    90,
    "Favipirar",
    "Tablet",
    "Glenmark",
    "Glenmark",
    "Allopathy",
    "Germany"
  ),
  createData(
    "Calpol",
    90,
    "Favipirar",
    "Tablet",
    "Glenmark",
    "Glenmark",
    "Allopathy",
    "Germany"
  ),
  createData(
    "Calpol",
    90,
    "Favipirar",
    "Tablet",
    "Glenmark",
    "Glenmark",
    "Allopathy",
    "Germany"
  ),
  createData(
    "Calpol",
    90,
    "Favipirar",
    "Tablet",
    "Glenmark",
    "Glenmark",
    "Allopathy",
    "Germany"
  ),
  createData(
    "Calpol",
    90,
    "Favipirar",
    "Tablet",
    "Glenmark",
    "Glenmark",
    "Allopathy",
    "Germany"
  ),
  createData(
    "Calpol",
    90,
    "Favipirar",
    "Tablet",
    "Glenmark",
    "Glenmark",
    "Allopathy",
    "Germany"
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={"center"}
                  sx={{ fontWeight: 600 }}
                  //   style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell sx={{ minWidth: 100 }}>{row.name}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.composition}</TableCell>
                    <TableCell>{row.form}</TableCell>
                    <TableCell>{row.brand}</TableCell>
                    <TableCell>{row.manufacturer}</TableCell>
                    <TableCell>{row.medType}</TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>
                      <Switch />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
