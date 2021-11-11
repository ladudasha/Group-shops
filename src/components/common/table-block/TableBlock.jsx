import s from "./TableBlock.module.scss";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(address, avaliable, quantity) {
    return { address, avaliable, quantity};
}

const rows = [
    createData('Москва, ул. Науки 25', 'В наличии', 1),
    createData('Москва, ул.  Южная 134', 'В наличии', 2),
    createData('Санкт-Петербург, ул. Красная 19', 'Нет в наличии', 0),
    createData('Киев, ул Шевченко 167', 'Нет в наличии', 0),
];

export default function TableBlock() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 1134 }} aria-label="simple table">
                <TableHead className={s.head}>
                    <TableRow>
                        <TableCell style={{borderBottom:"none", borderTop:"none"}}>Адрес</TableCell>
                        <TableCell style={{borderBottom:"none", borderTop:"none"}} align="left">Режим работы</TableCell>
                        <TableCell style={{borderBottom:"none", borderTop:"none"}} align="left">Доступно</TableCell>
                        <TableCell style={{borderBottom:"none", borderTop:"none"}} align="left">Количество</TableCell>
                        <TableCell style={{borderBottom:"none", borderTop:"none"}} align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={s.body}>
                    {rows.map((row) => (
                        <TableRow
                            key={row.address}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell  className={s.address} component="th" scope="row">
                                {row.address}
                            </TableCell>
                            <TableCell align="left">
                                <div className={s.workingHours}>
                                <span  className={s.text}> пн-сб</span>
                                <span  className={s.text}> 08:00-19:00</span>
                                <span  className={s.text}> вс:</span>
                                <span  className={s.text}> 09:00-17:00</span>
                                </div>
                            </TableCell>
                            <TableCell align="left">{row.avaliable}</TableCell>
                            <TableCell align="left">{row.quantity}</TableCell>
                            <TableCell align="left">
                                <button className={s.button}>КУПИТЬ </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



// function TableBlock(props) {
//     return ( 

//             <div className={s.tableBlock}>

//             </div>

//     );
// }

// export default TableBlock;