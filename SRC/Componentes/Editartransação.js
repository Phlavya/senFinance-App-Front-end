import React, { useContext, useState, useRef } from "react"; 
 import { 
   Dialog, 
   DialogTitle, 
   DialogContent, 
   DialogContentText, 
   DialogActions, 
   Button, 
   Grid, 
   MenuItem, 
   Typography, 
 } from "@mui/material"; 
 import Context from "../Context"; 
 import { Formik, Form } from "formik"; 
 import * as Yup from "yup"; 
 import TextFieldWrapper from "./FormComponents/TextField"; 
 import { maskMoeda } from "../utils/Masks"; 
  
 function EditarTransacao() { 
   const formikRef = useRef(null); 
   const [tipos] = useState(["Entrada", "Saída"]); 
   const [categorias] = useState([ 
     "Passagem",
     "Alimentação" ,
     "Hospedagem",
     
     
   ]);
   const { 
     setOpenEditDialog, 
     handleEditTransaction, 
     titulo, 
     valor, 
     setOpenEditDialog, 
     handleEditTransaction, 
     titulo, 
     valor, 
     categoria, 
     tipo, 
   } = useContext(Context); 
  
   const submitForm = () => { 
     formikRef.current.submitForm(); 
   }; 
  
   const handleCloseDialog = () => { 
     setOpenEditDialog(f
     categoria, 
     tipo, 
   } = useContext(Context); 
  
   const submitForm = () => { 
     formikRef.current.submitForm(); 
   }; 
  
   const handleCloseDialog = () => { 
     setOpenEditDialog(false); 
   }; 
  
   const validationSchema = Yup.object({ 
     titulo: Yup.string().required("Título é obrigatório"), 
     valor: Yup.string().required("Valor é obrigatório"), 
     tipo: Yup.string().required("Tipo é obrigatório"), 
     categoria: Yup.string().required("Categoria é obrigatório"), 
   }); 
  
   const values = { 
     titulo: titulo, 
     valor: valor, 
     tipo: tipo, 
     categoria: categoria, 
   }; 
  
   return ( 
     <Dialog onClose={handleCloseDialog} open> 
       <DialogTitle>Editar transação</DialogTitle> 
       <DialogContent> 
         <DialogContentText> 
           <Typography variant="body2"> 
             Edite facilmente sua transação preenchendo os campos abaixo. 
           </Typography> 
         </DialogContentText> 
         <Formik 
           innerRef={formikRef} 
           initialValues={values} 
           validationSchema={validationSchema} 
           onSubmit={(values) => { 
             handleEditTransaction(values); 
           }} 
         > 
           {({ setFieldValue }) => ( 
             <Form style={{ marginTop: "24px" }}> 
               <Grid container spacing={3}> 
                 <Grid item lg={6} md={6} sm={6} xs={12}> 
                   <TextFieldWrapper name="titulo" label="Título" /> 
                 </Grid> 
                 <Grid item lg={6} md={6} sm={6} xs={12}> 
                   <TextFieldWrapper 
                     name="valor" 
                     label="Valor" 
                     onKeyUp={(e) => 
                       setFieldValue("valor", maskMoeda(e.target.value)) 
                     } 
                   /> 
                 </Grid> 
                 <Grid item lg={6} md={6} sm={6} xs={12}> 
                   <TextFieldWrapper select name="tipo" label="Tipo"> 
                     {tipos.map((option) => ( 
                       <MenuItem key={option} value={option}> 
                         {option} 
                       </MenuItem> 
                     ))} 
                   </TextFieldWrapper> 
                 </Grid> 
                 <Grid item lg={6} md={6} sm={6} xs={12}> 
                   <TextFieldWrapper select name="categoria" label="Categoria"> 
                     {categorias.map((option) => ( 
                       <MenuItem key={option} value={option}> 
                         {option} 
                       </MenuItem> 
                     ))} 
                   </TextFieldWrapper> 
                 </Grid> 
               </Grid> 
             </Form> 
           )} 
         </Formik> 
       </DialogContent> 
       <DialogActions> 
         <Button onClick={handleCloseDialog}>Cancelar</Button> 
         <Button onClick={submitForm}>Ok</Button> 
       </DialogActions> 
     </Dialog> 
   ); 
 } 
  
 export default EditarTransacao;
