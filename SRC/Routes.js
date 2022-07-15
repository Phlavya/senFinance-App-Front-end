import React from "react"; 
 import { Routes, Route } from "react-router-dom"; 
 import Dashboard from "./components/Dashboard"; 
 import RegistroTransacao from "./components/RegistroTransacao"; 
 import TableTransacoes from "./components/TableTransacoes"; 
  
 const MyRoutes = () => { 
   return ( 
     <Routes> 
       <Route element={<Dashboard />} path="/"></Route> 
       <Route element={<TableTransacoes />} path="transacoes"></Route> 
       <Route element={<RegistroTransacao />} path="registro"></Route> 
     </Routes> 
   ); 
 }; 
  
 export default MyRoutes;
