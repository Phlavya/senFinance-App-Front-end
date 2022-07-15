import React, { useState } from "react"; 
 import { useSnackbar } from "notistack"; 
 import { 
   Box, 
   Toolbar, 
   Paper, 
   Grid, 
   Typography, 
   Button, 
   MenuItem, 
 } from "@mui/material"; 
 import { Formik, Form } from "formik"; 
 import * as Yup from "yup"; 
 import TextFieldWrapper from "./FormComponents/TextField"; 
 import { dataAtualFormatada } from "../utils/DataFormatada"; 
 import { maskMoeda } from "../utils/Masks"; 
  
 function RegistroTransacao() { 
   const { enqueueSnackbar } = useSnackbar(); 
   const [dataStorage, setDataStorage] = useState([]); 
   const [tipos] = useState(["Entrada", "Saída"]); 
   const [categorias] = useState([ 
     "Passagem",
     "Alimentação",
     "Hospedagem",
   ]);
  
   const validationSchema = Yup.object({ 
     titulo: Yup.string().required("Título é obrigatório"), 
     valor: Yup.string().required("Valor é obrigatório"), 
     tipo: Yup.string().required("Tipo é obrigatório"), 
     categoria: Yup.string().required("Categoria é obrigatório"), 
   }); 
  
   const values = { 
     titulo: "", 
     valor: "", 
     tipo: "", 
     categoria: "", 
   }; 
  
   const handleRegister = (values, resetForm) => { 
     let getDataStorage = JSON.parse(localStorage.getItem("transacoes")); 
     let found; 
     if (getDataStorage !== null) { 
       found = getDataStorage.find( 
         (element) => element.titulo === values.titulo 
       ); 
     } 
     if (getDataStorage === null) { 
       dataStorage.push({ 
         titulo: values.titulo, 
         valor: values.valor, 
         tipo: values.tipo, 
         categoria: values.categoria, 
         data: dataAtualFormatada(), 
       }); 
       let dataStringfy = JSON.stringify(dataStorage); 
       localStorage.setItem("transacoes", dataStringfy); 
       enqueueSnackbar("Transação registrada com sucesso!", { 
         variant: "success", 
         anchorOrigin: { horizontal: "right", vertical: "top" }, 
       }); 
       resetForm(); 
     } else if (found !== undefined) { 
       enqueueSnackbar("Título já cadastrado. Tente novamente!", { 
         variant: "error", 
         anchorOrigin: { horizontal: "right", vertical: "top" }, 
       }); 
     } else { 
       getDataStorage.push({ 
         titulo: values.titulo, 
         valor: values.valor, 
         tipo: values.tipo, 
         categoria: values.categoria, 
         data: dataAtualFormatada(), 
       }); 
       let dataStringfy = JSON.stringify(getDataStorage); 
       localStorage.setItem("transacoes", dataStringfy); 
       enqueueSnackbar("Transação registrada com sucesso!", { 
         variant: "success", 
         anchorOrigin: { horizontal: "right", vertical: "top" }, 
       }); 
       resetForm(); 
     } 
     setDataStorage([]); 
   }; 
  
   return ( 
     <> 
       <Formik 
         initialValues={values} 
         validationSchema={validationSchema} 
         onSubmit={(values, { resetForm }) => { 
           handleRegister(values, resetForm); 
         }} 
       > 
         {({ setFieldValue }) => ( 
           <Form style={{ width: "100%" }}> 
             <Box 
               component="main" 
               sx={{ 
                 flexGrow: 1, 
                 p: 3, 
                 margin: "0 auto", 
               }} 
             > 
               <Toolbar /> 
               <Grid container> 
                 <Grid item lg={12} md={12} sm={12} xs={12}> 
                   <Typography 
                     variant="h5" 
                     sx={{ fontWeight: "700", color: "#4e4f50" }} 
                   > 
                     Registrar Transação 
                   </Typography> 
                   <Typography variant="body2" color="text.secondary"> 
                     Aqui você poderá registrar suas transações. 
                   </Typography> 
                 </Grid> 
               </Grid> 
               <Paper elevation={2} sx={{ padding: "24px", marginTop: "24px" }}> 
                 <Grid container spacing={3}> 
                   <Grid item lg={3} md={3} sm={3} xs={12}> 
                     <TextFieldWrapper name="titulo" label="Título" /> 
                   </Grid> 
                   <Grid item lg={3} md={3} sm={3} xs={12}> 
                     <TextFieldWrapper 
                       name="valor" 
                       label="Valor" 
                       onKeyUp={(e) => 
                         setFieldValue("valor", maskMoeda(e.target.value)) 
                       } 
                     /> 
                   </Grid> 
                   <Grid item lg={3} md={3} sm={3} xs={12}> 
                     <TextFieldWrapper select name="tipo" label="Tipo"> 
                       {tipos.map((option) => ( 
                         <MenuItem key={option} value={option}> 
                           {option} 
                         </MenuItem> 
                       ))} 
                     </TextFieldWrapper> 
                   </Grid> 
                   <Grid item lg={3} md={3} sm={3} xs={12}> 
                     <TextFieldWrapper select name="categoria" label="Categoria"> 
                       {categorias.map((option) => ( 
                         <MenuItem key={option} value={option}> 
                           {option} 
                         </MenuItem> 
                       ))} 
                     </TextFieldWrapper> 
                   </Grid> 
                 </Grid> 
                 <Grid container justifyContent="center"> 
                   <Grid item lg={2} md={2} sm={2} xs={6}> 
                     <Button 
                       variant="contained" 
                       type="submit" 
                       fullWidth 
                       sx={{ marginTop: "24px" }} 
                     > 
                       Registrar 
                     </Button> 
                   </Grid> 
                 </Grid> 
               </Paper> 
             </Box> 
           </Form> 
         )} 
       </Formik> 
     </> 
   ); 
 } 
  
 export default RegistroTransacao;
