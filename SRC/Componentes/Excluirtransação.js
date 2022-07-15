import React, { useContext } from "react"; 
 import { 
   Dialog, 
   DialogTitle, 
   DialogContent, 
   DialogContentText, 
   DialogActions, 
   Button, 
 } from "@mui/material"; 
 import Context from "../Context"; 
  
 function ExcluirTransacao() { 
   const { setOpenDeleteDialog, handleDeleteTransaction } = 
     useContext(Context); 
  
   const handleCloseDialog = () => { 
     setOpenDeleteDialog(false); 
   }; 
  
   return ( 
     <Dialog onClose={handleCloseDialog} open> 
       <DialogTitle>Excluir transação</DialogTitle> 
       <DialogContent> 
         <DialogContentText> 
           Tem certeza que deseja excluir esta transação? 
         </DialogContentText> 
       </DialogContent> 
       <DialogActions> 
         <Button onClick={handleCloseDialog}>Cancelar</Button> 
         <Button onClick={handleDeleteTransaction}>Excluir</Button> 
       </DialogActions> 
     </Dialog> 
   ); 
 } 
  
 export default ExcluirTransacao;
