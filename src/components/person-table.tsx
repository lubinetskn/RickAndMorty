import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import type { TPerson } from "types/TPerson";

interface IBasicTable {
  data: TPerson[];
}

export function BasicTable({ data }: IBasicTable) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">species</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">type</TableCell>
            <TableCell align="right">gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: TPerson) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`person/${row.id}`}>{row.name}</Link>
              </TableCell>
              <TableCell align="right">{row.species}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
