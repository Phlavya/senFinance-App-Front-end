import "@testing-library/jest-dom"; 

 import { render, screen } from "@testing-library/react"; 

 import TableTransacoes from "../components/TableTransacoes"; 

 import { SnackbarProvider } from "notistack"; 

  

 const data = [ 

   { 

     título : "crédito",

     valor : "900,00",

     categoria : "passagem",

     tipo: "Entrada", 

     dados : "14/07/2022 _ _ _ _ _ _ _ _ _ _ _ _ _ _                                                                                                                                  

   }, 

 ]; 

 const dataStringfy = JSON.stringify(data); 

  

 describe("Componente TableTransacoes", () => { 

   test("deve conter o título 'Transações'", () => { 

     render( 

       <SnackbarProvider> 

         <TableTransacoes /> 

       </SnackbarProvider> 

     ); 

     const transacoesTitle = screen.getByRole("heading", { 

       level: 5, 

       name: "Transações", 

     }); 

     expect(transacoesTitle).toBeInTheDocument(); 

   }); 

  

   test("deve conter o subtítulo 'Aqui você poderá visualizar as informações das suas transações, bem como editar e/ou excluí-las.'", () => { 

     render( 

       <SnackbarProvider> 

         <TableTransacoes /> 

       </SnackbarProvider> 

     ); 

     const transacoesSubtitle = screen.getByText("Aqui você poderá visualizar as informações das suas transações, bem como editar e/ou excluí-las."); 

     expect(transacoesSubtitle).toBeInTheDocument(); 

   }); 

  

   test("deve conter um select de tipo", () => { 

     render( 

       <SnackbarProvider> 

         <TableTransacoes /> 

       </SnackbarProvider> 

     ); 

     const inputTipo = screen.getByRole("button", { name: /Tipo/i }); 

     expect(inputTipo).toBeInTheDocument(); 

   }); 

  

   test("deve conter um select de categoria", () => { 

     render( 

       <SnackbarProvider> 

         <TableTransacoes /> 

       </SnackbarProvider> 

     ); 

     const inputCategoria = screen.getByRole("button", { name: /Categoria/i }); 

     expect(inputCategoria).toBeInTheDocument(); 

   }); 

  

   test("deve conter um botão para resetar os filtros", () => { 

     render( 

       <SnackbarProvider> 

         <TableTransacoes /> 

       </SnackbarProvider> 

     ); 

     const buttonReset = screen.getByRole("button", { name: /Resetar/i }); 

     expect(buttonReset).toBeInTheDocument(); 

   }); 

  

   test("deve conter uma tabela com 6 colunas", () => { 

     render( 

       <SnackbarProvider> 

         <TableTransacoes /> 

       </SnackbarProvider> 

     ); 

     const table = screen.getByRole("table"); 

     const columns = screen.queryAllByRole("columnheader") 

     expect(table).toBeInTheDocument(); 

     expect(columns).toHaveLength(6) 

   }); 

  

   test("deve conter dois ícones na coluna de ações", () => { 

     localStorage.setItem("transacoes", dataStringfy); 

     render( 

       <SnackbarProvider> 

         <TableTransacoes /> 

       </SnackbarProvider> 

     ); 

     const row = screen.getAllByRole("row")[1]; 

     const columnAcao = row.getElementsByTagName("td")[5] 

     const editIcon = screen.getByTestId("EditIcon") 

     const deleteIcon = screen.getByTestId("DeleteIcon") 

     expect(columnAcao).toContainElement(editIcon) 

     expect(columnAcao).toContainElement(deleteIcon) 

   }); 

 });
