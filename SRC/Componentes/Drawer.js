import React from "react"; 

 import { Link } from "react-router-dom"; 

 import Logo from "../img/logo.png"; 

 import { 

   Drawer as MUIDrawer, 

   ListItem, 

   List, 

   ListItemIcon, 

   ListItemText, 

   AppBar, 

   Toolbar, 

   IconButton, 

   Box, 

   Divider, 

 } from "@mui/material"; 

 import { 

   Menu, 

   GridView, 

   Add, 

   CompareArrows, 

 } from "@mui/icons-material"; 

 import { useLocation } from "react-router-dom"; 

  

 function Drawer() { 

   const [mobileOpen, setMobileOpen] = React.useState(false); 

   const { pathname } = useLocation(); 

  

   const handleDrawerToggle = () => { 

     setMobileOpen(!mobileOpen); 

   }; 

  

   const itemsList = [ 

     { 

       text: "Dashboard", 

       icon: <GridView />, 

       path: "/", 

     }, 

     { 

       text: "Criar transação", 

       icon: <Add />, 

       path: "/registro", 

     }, 

     { 

       text: "Transações", 

       icon: <CompareArrows />, 

       path: "/transacoes", 

     }, 

   ]; 

  

   const drawer = ( 

     <> 

       <Toolbar /> 

       <Divider /> 

       <List> 

         {itemsList.map((item) => ( 

           <Link 

             to={item.path} 

             style={{ textDecoration: "none", color: "#000" }} 

           > 

             <ListItem 

               button 

               selected={item.path === pathname} 

               key={item.text} 

               onClick={item.onClick} 

             > 

               {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>} 

               <ListItemText primary={item.text} /> 

             </ListItem> 

           </Link> 

         ))} 

       </List> 

     </> 

   ); 

  

   return ( 

     <> 

       <AppBar 

         position="fixed" 

         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#fff" }} 

       > 

         <Toolbar> 

           <IconButton 

             color="inherit" 

             aria-label="open drawer" 

             edge="start" 

             onClick={handleDrawerToggle} 

             sx={{ mr: 2, display: { md: "none" } }} 

           > 

             <Menu sx={{fill: "#4e4f50"}} /> 

           </IconButton> 

           <img src={Logo} width="200px" alt="Logo da SenFinança" /> 

         </Toolbar> 

       </AppBar> 

       <Box 

         component="nav" 

         sx={{ width: { md: "250px" }, flexShrink: { md: 0 } }} 

         aria-label="mailbox folders" 

       > 

         <MUIDrawer 

           variant="temporary" 

           onClick={handleDrawerToggle} 

           sx={{ 

             display: { xs: "block", md: "none" }, 

             width: "250px", 

             "& .MuiDrawer-paper": { 

               width: "250px", 

               boxSizing: "border-box", 

               backgroundColor: "#fff", 

             }, 

           }} 

           open={mobileOpen} 

         > 

           {drawer} 

         </MUIDrawer> 

         <MUIDrawer 

           variant="permanent" 

           sx={{ 

             display: { xs: "none", md: "block" }, 

             "& .MuiDrawer-paper": { 

               boxSizing: "border-box", 

               width: "250px", 

               backgroundColor: "#fff", 

             }, 

           }} 

           open 

         > 

           {drawer} 

         </MUIDrawer> 

       </Box> 

     </> 

   ); 

 } 

  

 export default Drawer;
