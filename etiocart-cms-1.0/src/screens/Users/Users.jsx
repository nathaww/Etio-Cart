import React from "react";
import './Users.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";

const columns = [
  {
    id: 'fullName', 
    label: 'Full name',
    minWidth: 170, 
  },
  { 
    id: 'phoneNumber', 
    label: 'Phone Number', 
    minWidth: 120,
    align:'center'
  },
  {
    id: 'userName',
    label: 'Username',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'email',
    label: 'E-mail',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'block',
    label: 'Block',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'del',
    label: 'Delete',
    minWidth: 90,
    align: 'center',
  },
  {
    id: 'userDetail',
    label: 'User Detail',
    minWidth: 90,
    align: 'center',
  },
];

function createData(fullName, phoneNumber, userName, email) {

  const block = <button type="button"><i className="fas fa-user-alt-slash"></i></button>;
  const del = <button type="button"><i className="fas fa-user-times"></i></button>;
  const userDetail = <Link to='./profile' ><i className="fas fa-external-link-alt"></i></Link>;
  return { fullName, phoneNumber, userName, email, userDetail, block, del};
}

const rows = [
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
  createData('Mark Specter', '0965235854', '@yessir', 'example@gmail.com'),
];

const Users = () => {
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


    <div className="users">

      <div className="container-fluid px-4">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">1720</h3>
                <p className="fs-5">Active</p>
              </div>
              <i className="fas fa-check fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">420</h3>
                <p className="fs-5">Inactive</p>
              </div>
              <i
                className="fas fa-times fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3899</h3>
                <p className="fs-5">Blocked Users</p>
              </div>
              <i className="fas fa-user fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3425</h3>
                <p className="fs-5">Total User</p>
              </div>
              <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="user">
        <div className="search">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <select class="form-select" id="state" required>
              <option value="">Sort by..</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Blocked</option>
            </select>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form><br />
        </div>

        <Paper className="bg-transparent table-striped table-hover" sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>
                          );
                        })}
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
      </div>
    </div>
  );
}
export default Users;