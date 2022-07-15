import "@testing-library/jest-dom"; 

 import { fireEvent, render, screen } from "@testing-library/react"; 

 import RegistroTransacao from "../components/RegistroTransacao"; 

 import { SnackbarProvider } from "notistack"; 

  

 describe("Componente RegistroTransacao", () => { 

   test("deve conter o título 'Registrar Transação'", () => { 

     render( 

       <SnackbarProvider> 

         <RegistroTransacao /> 

       </SnackbarProvider> 

     ); 

     const registroTitle = screen.getByText(/^Registrar Transação/i); 

     expect(registroTitle).toBeInTheDocument(); 

   }); 

  

   test("deve conter o subtítulo 'Aqui você poderá registrar suas transações.'", () => { 

     render( 

       <SnackbarProvider> 

         <RegistroTransacao /> 

       </SnackbarProvider> 

     ); 

     const registroSubtitle = screen.getByText( 

       /^Aqui você poderá registrar suas transações./i 

     ); 

     expect(registroSubtitle).toBeInTheDocument(); 

   }); 

  

   test("deve conter um input de título e iniciar com value vazio", () => { 

     render( 

       <SnackbarProvider> 

         <RegistroTransacao /> 

       </SnackbarProvider> 

     ); 

     const inputTitulo = screen.getByLabelText(/^Título/i); 

     expect(inputTitulo).toBeInTheDocument(); 

     expect(inputTitulo).toHaveValue(""); 

   }); 

  

   test("deve conter um input de valor e iniciar com value vazio", () => { 

     render( 

       <SnackbarProvider> 

         <RegistroTransacao /> 

       </SnackbarProvider> 

     ); 

     const inputValor = screen.getByLabelText(/^Valor/i); 

     expect(inputValor).toBeInTheDocument(); 

     expect(inputValor).toHaveValue(""); 

   }); 

  

   // test("deve conter um input de tipo e iniciar com value vazio", () => { 

   //   render( 

   //     <SnackbarProvider> 

   //       <RegistroTransacao /> 

   //     </SnackbarProvider> 

   //   ); 

   //   const inputTipo = screen.getByRole("button", { name: /Tipo/i }); 

   //   expect(inputTipo).toBeInTheDocument(); 

   //   expect(inputTipo).toHaveValue(""); 

   // }); 

  

   // test("deve conter um input de categoria e iniciar com value vazio", () => { 

   //   render( 

   //     <SnackbarProvider> 

   //       <RegistroTransacao /> 

   //     </SnackbarProvider> 

   //   ); 

   //   const inputCategoria = screen.getByRole("button", { name: /Categoria/i }); 

   //   expect(inputCategoria).toBeInTheDocument(); 

   //   expect(inputCategoria).toHaveValue(""); 

   // }); 

  

   test("deve conter um botão com o texto 'Registrar'", () => { 

     render( 

       <SnackbarProvider> 

         <RegistroTransacao /> 

       </SnackbarProvider> 

     ); 

     const buttonRegistrar = screen.getByRole("button", { name: /Registrar/i }); 

     expect(buttonRegistrar).toBeInTheDocument(); 

   }); 

  

   test("deve validar que o campo título não pode ser vazio (Formik + Yup)", async () => { 

     render( 

       <SnackbarProvider> 

         <RegistroTransacao /> 

       </SnackbarProvider> 

     ); 

     const inputTitulo = screen.getByLabelText(/^Título/i); 

     fireEvent.blur(inputTitulo); 

     const validationErrors = await screen.findByText(/^Título é obrigatório/i) 

     expect(validationErrors).toBeInTheDocument(); 

   }); 

  

   test("deve validar que o campo valor não pode ser vazio (Formik + Yup)", async () => { 

     render( 

       <SnackbarProvider> 

         <RegistroTransacao /> 

       </SnackbarProvider> 

     ); 

     const inputValor = screen.getByLabelText(/^Valor/i); 

     fireEvent.blur(inputValor); 

     const validationErrors = await screen.findByText(/^Valor é obrigatório/i) 

     expect(validationErrors).toBeInTheDocument(); 

   }); 

  

   test("deve validar que o campo tipo não pode ser vazio (Formik + Yup)", async () => { 

     render( 

       <SnackbarProvider> 

         <RegistroTransacao /> 

       </SnackbarProvider> 

     ); 

     const inputTipo = screen.getByRole("button", { name: /Tipo/i }); 

     fireEvent.blur(inputTipo); 

     const validationErrors = await screen.findByText(/^Tipo é obrigatório/i) 

     expect(validationErrors).toBeInTheDocument(); 

   }); 

  

   test("deve validar que o campo categoria não pode ser vazio (Formik + Yup)", async () => { 

     render( 

       <SnackbarProvider> 

         <RegistroTransacao /> 

       </SnackbarProvider> 

     ); 

     const inputCategoria = screen.getByRole("button", { name: /Categoria/i }); 

     fireEvent.blur(inputCategoria); 

     const validationErrors = await screen.findByText(/^Categoria é obrigatório/i) 

     expect(validationErrors).toBeInTheDocument(); 

   }); 

 });
