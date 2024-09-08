import "./data.style.css";
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { visuallyHidden } from '@mui/utils';

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.', "--", "TEXT", "6/3/24", "EditIcon, DeleteIcon"),
  createData(2, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.', "--", "TEXT", "5/3/24", "EditIcon, DeleteIcon"),
  createData(3, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.', "--", "TEXT", "2/3/24", "EditIcon, DeleteIcon"),
  createData(4, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.', "--","TEXT", "2/3/24", "EditIcon, DeleteIcon"),
  createData(5, "Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain", "--", "TEXT", "4/3/24", "EditIcon, DeleteIcon"),
  createData(6, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.omb', "--","TEXT", "8/3/24", "EditIcon, DeleteIcon"),
  createData(7, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.eam sandwich', "--","TEXT", "3/3/24", "EditIcon, DeleteIcon"),
  createData(8, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.Bean', "--","TEXT", "9/3/24", "EditIcon, DeleteIcon"),
  createData(9, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.', "--", "TEXT", "6/3/24", "EditIcon, DeleteIcon"),
  createData(10, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.op', "--","TEXT", "9/3/24", "EditIcon, DeleteIcon"),
  createData(11, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.allow', "--", "TEXT", "8/3/24", "EditIcon, DeleteIcon"),
  createData(12, 'Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.', "--", "TEXT", "2/3/24", "EditIcon, DeleteIcon"),
  createData(13, "Who founded beyondchats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.", "--","TEXT", "3/3/24", "EditIcon, DeleteIcon"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Data' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Source' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Type' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Created At' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Actions' },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <span className="tableTitle">{headCell.label}</span>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
}

export default function Data() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice((page - 1) * rowsPerPage, page * rowsPerPage),
    [order, orderBy, page],
  );

  return (
    <Box sx={{ width: '100%'}}>
      <Paper sx={{ width: '99%', mb: 2, border: "1px solid #afadad"}}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow hover key={row.id} sx={{ cursor: 'pointer' }}>
                    <TableCell padding="checkbox"></TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none" sx={{width:"700px"}}>
                      {row.name}
                    </TableCell>
                    <TableCell align="center"><span className="table-font">{row.calories}</span></TableCell>
                    <TableCell align="center"><span className="borderType table-font">{row.fat}</span></TableCell>
                    <TableCell align="center"><span className="table-font">{row.carbs}</span></TableCell>
                    <TableCell align="center">
                    <EditIcon sx={{ cursor: 'pointer', mr: 1, color:"#2872fa" }}  />
                    <DeleteIcon sx={{ cursor: 'pointer',ml:1, color: "#fa2871" }} />
                        {/* <span className="table-font"> */} 
                        {/* <div>`{${EditIcon}}`</div> */}
                                                 {/* </span> */}
                            </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div className="page">
        <Stack spacing={2} sx={{ mt: 2}}>
  <Pagination
    count={Math.ceil(rows.length / rowsPerPage)}
    page={page}
    onChange={handleChangePage}
    color="primary"
  />
</Stack>

      </div>
    </Box>
  );
}
