import React from "react"; 
 import "./App.css"; 
 import MyRoutes from "./Routes"; 
 import Drawer from "./components/Drawer"; 
 import { SnackbarProvider } from "notistack"; 
  
 function App() { 
   return ( 
     <> 
       <SnackbarProvider> 
         <div style={{ display: "flex" }}> 
           <Drawer /> 
           <MyRoutes /> 
         </div> 
       </SnackbarProvider> 
     </> 
   ); 
 } 
  
 export default App;
