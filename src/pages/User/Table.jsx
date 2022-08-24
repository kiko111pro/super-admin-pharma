import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { IconButton, Switch } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "name", label: "NAME", minWidth: 100 },
  {
    id: "phone",
    label: "PHONE",
    minWidth: 170,
  },
  {
    id: "email",
    label: "EMAIL",
    minWidth: 170,
  },
  {
    id: "phoneVerification",
    label: "PHONE VERIFIED",
    minWidth: 170,
  },
  {
    id: "status",
    label: "STATUS",
    minWidth: 170,
  },
  {
    id: "ACTION",
    label: "ACTION",
    minWidth: 170,
  },
];

function createData(id, name, phone, email, phoneVerification) {
  return { id, name, phone, email, phoneVerification };
}

const rows = [
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
  ),
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
  ),
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
  ),
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
  ),
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
  ),
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
  ),
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
  ),
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
  ),
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
  ),
  createData(
    "62fe505d87dafe3895763ea2",
    "Vinay Singh",
    1324171354,
    "some@gmail.com",
    false
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
                  align={column.align}
                  sx={{ fontWeight: 600 }}
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
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phoneVerification}</TableCell>
                    <TableCell>
                      <Switch />
                    </TableCell>
                    <TableCell variant="contained">
                      <IconButton>
                        <EditIcon color="primary" />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon color="error" />
                      </IconButton>
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
