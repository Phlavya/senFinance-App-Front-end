import React, { useEffect, useState } from "react"; 
 import { 
   Box, 
   Toolbar, 
   Card, 
   CardContent, 
   Grid, 
   Typography, 
 } from "@mui/material"; 
 import { 
   Add, 
   Remove, 
   AttachMoney, 
   KeyboardDoubleArrowUp, 
   KeyboardDoubleArrowDown, 
 } from "@mui/icons-material"; 
  
 function Dashboard() { 
   const [transacoesEntrada, setTransacoesEntrada] = useState([]); 
   const [transacoesSaida, setTransacoesSaida] = useState([]); 
   const [subtotalEntrada, setSubtotalEntrada] = useState("R$ 0,00"); 
   const [subtotalSaida, setSubtotalSaida] = useState("R$ 0,00"); 
   const [subtotalConta, setSubtotalConta] = useState("R$ 0,00"); 
  
   useEffect(() => { 
     let getDataStorage = JSON.parse(localStorage.getItem("transacoes")); 
     if (getDataStorage !== null) { 
       let entrada = getDataStorage.filter((value) => value.tipo === "Entrada"); 
       let saida = getDataStorage.filter((value) => value.tipo === "Saída"); 
       setTransacoesEntrada(entrada); 
       setTransacoesSaida(saida); 
       let somaEntrada = 0; 
       let somaSaida = 0; 
  
       for (let i = 0; i < entrada.length; i++) { 
         somaEntrada += parseInt(entrada[i].valor); 
       } 
  
       for (let i = 0; i < saida.length; i++) { 
         somaSaida += parseInt(saida[i].valor); 
       } 
       setSubtotalEntrada(somaEntrada); 
       setSubtotalSaida(somaSaida); 
       setSubtotalConta(somaEntrada - somaSaida); 
     } 
   }, []); 
  
   return ( 
     <Box 
       component="main" 
       sx={{ 
         flexGrow: 1, 
         p: 3, 
         width: { md: `calc(100% - 250px)` }, 
         margin: "0 auto", 
       }} 
     > 
       <Toolbar /> 
       <Grid container spacing={3}> 
         <Grid item lg={12} md={12} sm={12} xs={12}> 
           <Typography variant="h5" sx={{ fontWeight: "700", color: "#4e4f50" }}> 
             Dashboard 
           </Typography> 
           <Typography variant="body2" color="text.secondary"> 
             Aqui você encontrará informações sobre suas transações. 
           </Typography> 
         </Grid> 
         <Grid item lg={4} md={6} sm={6} xs={12}> 
           <Card variant="outlined"> 
             <CardContent> 
               <Grid container alignItems="center"> 
                 <Grid item> 
                   <Add 
                     style={{ 
                       backgroundColor: "#5c8c38", 
                       fill: "#fff", 
                       borderRadius: "50%", 
                       padding: "4px", 
                       marginRight: "20px", 
                       boxShadow: "2px 5px 9px -3px #000000a6", 
                     }} 
                   /> 
                 </Grid> 
                 <Grid item> 
                   <Typography variant="h5"> 
                     {transacoesEntrada.length} 
                   </Typography> 
                   <Typography variant="body2" color="text.secondary"> 
                     Transações de Entrada 
                   </Typography> 
                 </Grid> 
               </Grid> 
             </CardContent> 
           </Card> 
         </Grid> 
         <Grid item lg={4} md={6} sm={6} xs={12}> 
           <Card variant="outlined"> 
             <CardContent> 
               <Grid container alignItems="center"> 
                 <Grid item> 
                   <Remove 
                     style={{ 
                       backgroundColor: "#e42629", 
                       fill: "#fff", 
                       borderRadius: "50%", 
                       padding: "4px", 
                       marginRight: "20px", 
                       boxShadow: "2px 5px 9px -3px #000000a6", 
                     }} 
                   /> 
                 </Grid> 
                 <Grid item> 
                   <Typography variant="h5">{transacoesSaida.length}</Typography> 
                   <Typography variant="body2" color="text.secondary"> 
                     Transações de Saída 
                   </Typography> 
                 </Grid> 
               </Grid> 
             </CardContent> 
           </Card> 
         </Grid> 
         <Grid item lg={4} md={6} sm={6} xs={12}> 
           <Card variant="outlined"> 
             <CardContent> 
               <Grid container alignItems="center"> 
                 <Grid item> 
                   <KeyboardDoubleArrowUp 
                     style={{ 
                       backgroundColor: "#ef7f38", 
                       fill: "#fff", 
                       borderRadius: "50%", 
                       padding: "4px", 
                       marginRight: "20px", 
                       boxShadow: "2px 5px 9px -3px #000000a6", 
                     }} 
                   /> 
                 </Grid> 
                 <Grid item> 
                   <Typography variant="h5"> 
                     {subtotalEntrada.toLocaleString("pt-BR", { 
                       style: "currency", 
                       currency: "BRL", 
                     })} 
                   </Typography> 
                   <Typography variant="body2" color="text.secondary"> 
                     Subtotal de Entrada 
                   </Typography> 
                 </Grid> 
               </Grid> 
             </CardContent> 
           </Card> 
         </Grid> 
         <Grid item lg={4} md={6} sm={6} xs={12}> 
           <Card variant="outlined"> 
             <CardContent> 
               <Grid container alignItems="center"> 
                 <Grid item> 
                   <KeyboardDoubleArrowDown 
                     style={{ 
                       backgroundColor: "#ef7f38", 
                       fill: "#fff", 
                       borderRadius: "50%", 
                       padding: "4px", 
                       marginRight: "20px", 
                       boxShadow: "2px 5px 9px -3px #000000a6", 
                     }} 
                   /> 
                 </Grid> 
                 <Grid item> 
                   <Typography variant="h5"> 
                     {subtotalSaida.toLocaleString("pt-BR", { 
                       style: "currency", 
                       currency: "BRL", 
                     })} 
                   </Typography> 
                   <Typography variant="body2" color="text.secondary"> 
                     Subtotal de Saída 
                   </Typography> 
                 </Grid> 
               </Grid> 
             </CardContent> 
           </Card> 
         </Grid> 
         <Grid item lg={4} md={6} sm={6} xs={12}> 
           <Card variant="outlined"> 
             <CardContent> 
               <Grid container alignItems="center"> 
                 <Grid item> 
                   <AttachMoney 
                     style={{ 
                       backgroundColor: "#0c7ec2", 
                       fill: "#fff", 
                       borderRadius: "50%", 
                       padding: "4px", 
                       marginRight: "20px", 
                       boxShadow: "2px 5px 9px -3px #000000a6", 
                     }} 
                   /> 
                 </Grid> 
                 <Grid item> 
                   <Typography variant="h5"> 
                     {subtotalConta.toLocaleString("pt-BR", { 
                       style: "currency", 
                       currency: "BRL", 
                     })} 
                   </Typography> 
                   <Typography variant="body2" color="text.secondary"> 
                     Subtotal da Conta 
                   </Typography> 
                 </Grid> 
               </Grid> 
             </CardContent> 
           </Card> 
         </Grid> 
       </Grid> 
     </Box> 
   ); 
 } 
  
 export default Dashboard;
