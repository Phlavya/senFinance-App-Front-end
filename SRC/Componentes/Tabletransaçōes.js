import React, { useState, useEffect } from "react"; 

 import { useSnackbar } from "notistack"; 

 import { 

   Box, 

   Toolbar, 

   TableContainer, 

   Table, 

   TableHead, 

   TableRow, 

   TableCell, 

   TableBody, 

   TableFooter, 

   TablePagination, 

   Paper, 

   Tooltip, 

   IconButton, 

   Grid, 

   Typography, 

   TextField, 

   MenuItem, 

   Button, 

 } from "@mui/material"; 

 import { Delete, Edit } from "@mui/icons-material"; 

 import ExcluirTransacao from "./ExcluirTransacao"; 

 import EditarTransacao from "./EditarTransacao"; 

 import Context from "../Context"; 

 import { dataAtualFormatada } from "../utils/DataFormatada"; 

  

 function TableTransacoes() { 

   const { enqueueSnackbar } = useSnackbar(); 

   const [tipos] = useState(["Entrada", "Saída", "Todos"]); 

   const [categorias] = useState([ 

     "Alimentação", 

     "Educação", 

     "Entretenimento", 

     "Saúde", 

     "Transporte", 

     "Todas", 

   ]); 

   const [rows, setRows] = useState([]); 

   const [page, setPage] = useState(0); 

   const [titulo, setTitulo] = useState(""); 

   const [valor, setValor] = useState(""); 

   const [categoria, setCategoria] = useState(""); 

   const [tipo, setTipo] = useState(""); 

   const [rowsPerPage, setRowsPerPage] = React.useState(5); 

   const [openDeleteDialog, setOpenDeleteDialog] = useState(false); 

   const [openEditDialog, setOpenEditDialog] = useState(false); 

   const [tipoFilter, setTipoFilter] = useState(""); 

   const [categoriaFilter, setCategoriaFilter] = useState(""); 

   const [tipoSelected, setTipoSelected] = useState([]); 

   const [categoriaSelected, setCategoriaSelected] = useState([]); 

   const [getDataStorage] = useState( 

     JSON.parse(localStorage.getItem("transacoes")) 

   ); 

  

   useEffect(() => { 

     if (getDataStorage !== null) { 

       setRows(getDataStorage); 

     } else { 

       setRows([]); 

     } 

   }, [getDataStorage]); 

  

   const handleChangePage = (event, newPage) => { 

     setPage(newPage); 

   }; 

  

   const handleChangeRowsPerPage = (event) => { 

     setRowsPerPage(parseInt(event.target.value, 10)); 

     setPage(0); 

   }; 

  

   const handleOpenDeleteDialog = (titulo) => { 

     setOpenDeleteDialog(true); 

     setTitulo(titulo); 

   }; 

  

   const handleOpenEditDialog = (titulo, tipo, categoria, valor) => { 

     setTitulo(titulo); 

     setTipo(tipo); 

     setCategoria(categoria); 

     setValor(valor); 

     setOpenEditDialog(true); 

   }; 

  

   const handleDeleteTransaction = () => { 

     for (let i = 0; i < getDataStorage.length; i++) { 

       if (getDataStorage[i].titulo === titulo) { 

         getDataStorage.splice(i, 1); 

       } 

     } 

     setRows(getDataStorage); 

     let dataStringfy = JSON.stringify(getDataStorage); 

     localStorage.setItem("transacoes", dataStringfy); 

     enqueueSnackbar("Transação excluída com sucesso!", { 

       variant: "success", 

       anchorOrigin: { horizontal: "right", vertical: "top" }, 

     }); 

     setOpenDeleteDialog(false); 

   }; 

  

   const handleEditTransaction = (values) => { 

     for (let i = 0; i < getDataStorage.length; i++) { 

       if (getDataStorage[i].titulo === titulo) { 

         getDataStorage[i].titulo = values.titulo; 

         getDataStorage[i].categoria = values.categoria; 

         getDataStorage[i].valor = values.valor; 

         getDataStorage[i].tipo = values.tipo; 

         getDataStorage[i].data = dataAtualFormatada() + " (Editado)"; 

       } 

     } 

     setRows(getDataStorage); 

     let dataStringfy = JSON.stringify(getDataStorage); 

     localStorage.setItem("transacoes", dataStringfy); 

     enqueueSnackbar("Transação editada com sucesso!", { 

       variant: "success", 

       anchorOrigin: { horizontal: "right", vertical: "top" }, 

     }); 

     setOpenEditDialog(false); 

   }; 

  

   const handleFilterTipo = (tipo) => { 

     setTipoFilter(tipo); 

     let selected = []; 

     if (categoriaFilter !== "" && categoriaFilter !== "Todas") { 

       selected = categoriaSelected.filter((value) => value.tipo === tipo); 

     } else { 

       selected = getDataStorage.filter((value) => value.tipo === tipo); 

     } 

     setTipoSelected(selected); 

     if ( 

       tipo === "Todos" && 

       (categoriaFilter === "" || categoriaFilter === "Todas") 

     ) { 

       setRows(getDataStorage); 

     } else if (tipo === "Todos" && categoriaFilter !== "") { 

       setRows(categoriaSelected); 

     } else { 

       setRows(selected); 

     } 

   }; 

  

   const handleFilterCategoria = (categoria) => { 

     setCategoriaFilter(categoria); 

     let selected = []; 

     if (tipoFilter !== "" && tipoFilter !== "Todos") { 

       selected = tipoSelected.filter((value) => value.categoria === categoria); 

     } else { 

       selected = getDataStorage.filter( 

         (value) => value.categoria === categoria 

       ); 

     } 

     setCategoriaSelected(selected); 

     if ( 

       categoria === "Todas" && 

       (tipoFilter === "" || tipoFilter === "Todos") 

     ) { 

       setRows(getDataStorage); 

     } else if (categoria === "Todas" && tipoFilter !== "") { 

       setRows(tipoSelected); 

     } else { 

       setRows(selected); 

     } 

   }; 

  

   const handleResetFilters = () => { 

     setTipoFilter(""); 

     setCategoriaFilter(""); 

     if (getDataStorage !== null) { 

       setRows(getDataStorage); 

     } else { 

       setRows([]); 

     } 

   }; 

  

   return ( 

     <> 

       <Context.Provider 

         value={{ 

           openDeleteDialog, 

           setOpenDeleteDialog, 

           openEditDialog, 

           setOpenEditDialog, 

           handleDeleteTransaction, 

           handleEditTransaction, 

           titulo, 

           categoria, 

           valor, 

           tipo, 

         }} 

       > 

         <Box 

           component="main" 

           sx={{ 

             flexGrow: 1, 

             p: 3, 

             width: { md: `calc(100% - 250px)` }, 

             margin: "0 auto", 

           }} 

         > 

           <Toolbar /> 

           <Grid container> 

             <Grid item lg={12} md={12}> 

               <Typography 

                 variant="h5" 

                 sx={{ fontWeight: "700", color: "#4e4f50" }} 

               > 

                 Transações 

               </Typography> 

               <Typography variant="body2" color="text.secondary"> 

                 Aqui você poderá visualizar as informações das suas transações, 

                 bem como editar e/ou excluí-las. 

               </Typography> 

             </Grid> 

           </Grid> 

           <TableContainer component={Paper} sx={{ marginTop: "24px" }}> 

             <Grid 

               container 

               spacing={1} 

               alignItems="center" 

               sx={{ padding: "16px" }} 

             > 

               <Grid item> 

                 <Typography variant="body2" color="text.secondary"> 

                   Filtros: 

                 </Typography> 

               </Grid> 

               <Grid item lg={2} md={3} sm={3} xs={3}> 

                 <TextField 

                   select 

                   size="small" 

                   label="Tipo" 

                   value={tipoFilter} 

                   fullWidth 

                   onChange={(e) => handleFilterTipo(e.target.value)} 

                 > 

                   {tipos.map((option) => ( 

                     <MenuItem key={option} value={option}> 

                       {option} 

                     </MenuItem> 

                   ))} 

                 </TextField> 

               </Grid> 

               <Grid item lg={2} md={3} sm={3} xs={3}> 

                 <TextField 

                   select 

                   size="small" 

                   label="Categoria" 

                   value={categoriaFilter} 

                   fullWidth 

                   onChange={(e) => handleFilterCategoria(e.target.value)} 

                 > 

                   {categorias.map((option) => ( 

                     <MenuItem key={option} value={option}> 

                       {option} 

                     </MenuItem> 

                   ))} 

                 </TextField> 

               </Grid> 

               <Grid item lg={2}> 

                 <Button 

                   variant="contained" 

                   size="small" 

                   onClick={handleResetFilters} 

                 > 

                   Resetar 

                 </Button> 

               </Grid> 

             </Grid> 

             <Table size="small" aria-label="a dense table"> 

               <TableHead> 

                 <TableRow> 

                   <TableCell align="center">Título</TableCell> 

                   <TableCell align="center">Tipo</TableCell> 

                   <TableCell align="center">Categoria</TableCell> 

                   <TableCell align="center">Valor</TableCell> 

                   <TableCell align="center">Data/Hora</TableCell> 

                   <TableCell align="center">Ações</TableCell> 

                 </TableRow> 

               </TableHead> 

               <TableBody> 

                 {(rowsPerPage > 0 

                   ? rows.slice( 

                       page * rowsPerPage, 

                       page * rowsPerPage + rowsPerPage 

                     ) 

                   : rows 

                 ).map((row) => ( 

                   <TableRow 

                     key={row.titulo} 

                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }} 

                   > 

                     <TableCell align="center">{row.titulo}</TableCell> 

                     <TableCell align="center">{row.tipo}</TableCell> 

                     <TableCell align="center">{row.categoria}</TableCell> 

                     <TableCell align="center">{row.valor}</TableCell> 

                     <TableCell align="center">{row.data}</TableCell> 

                     <TableCell align="center"> 

                       <Tooltip title="Editar" placement="left"> 

                         <IconButton 

                           onClick={() => 

                             handleOpenEditDialog( 

                               row.titulo, 

                               row.tipo, 

                               row.categoria, 

                               row.valor 

                             ) 

                           } 

                         > 

                           <Edit /> 

                         </IconButton> 

                       </Tooltip> 

                       <Tooltip title="Excluir" placement="right"> 

                         <IconButton 

                           onClick={() => handleOpenDeleteDialog(row.titulo)} 

                         > 

                           <Delete /> 

                         </IconButton> 

                       </Tooltip> 

                     </TableCell> 

                   </TableRow> 

                 ))} 

               </TableBody> 

               <TableFooter> 

                 <TableRow> 

                   <TablePagination 

                     rowsPerPageOptions={[ 

                       5, 

                       10, 

                       25, 

                       { label: "Todas", value: -1 }, 

                     ]} 

                     colSpan={6} 

                     count={rows.length} 

                     rowsPerPage={rowsPerPage} 

                     page={page} 

                     labelRowsPerPage="Linhas por página:" 

                     labelDisplayedRows={({ from, to, count }) => 

                       `${from}-${to} de ${count}` 

                     } 

                     onPageChange={handleChangePage} 

                     onRowsPerPageChange={handleChangeRowsPerPage} 

                   /> 

                 </TableRow> 

               </TableFooter> 

             </Table> 

           </TableContainer> 

         </Box> 

  

         {/* DIALOG DE EXCLUSÃO DA TRANSAÇÃO */} 

         {openDeleteDialog ? <ExcluirTransacao /> : null} 

  

         {/* DIALOG DE EDIÇÃO DA TRANSAÇÃO */} 

         {openEditDialog ? <EditarTransacao /> : null} 

       </Context.Provider> 

     </> 

   ); 

 } 

  

 export default TableTransacoes;
