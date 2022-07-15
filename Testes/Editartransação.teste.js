import "@testing-library/jest-dom"; 
 import { render, screen, fireEvent } from "@testing-library/react"; 
 import userEvent from "@testing-library/user-event"; 
 import EditarTransacao from "../components/EditarTransacao"; 
  
 describe("Componente EditarTransacao", () => { 
   test("deve conter o título 'Editar transação' no dialog", () => { 
     render(<EditarTransacao />); 
     const editarTitle = screen.getByText(/^Editar transação/i); 
     expect(editarTitle).toBeInTheDocument(); 
   }); 
  
   test("deve conter o texto de ajuda no dialog", () => { 
     render(<EditarTransacao />); 
     const editarText = screen.getByText( 
       /^Edite facilmente sua transação preenchendo os campos abaixo./i 
     ); 
     expect(editarText).toBeInTheDocument(); 
   }); 
  
   test("deve conter um input de título", () => { 
     render(<EditarTransacao />); 
     const inputTitulo = screen.getByLabelText(/^Título/i); 
     expect(inputTitulo).toBeInTheDocument(); 
   }); 
  
   test("deve conter um input de valor", () => { 
     render(<EditarTransacao />); 
     const inputValor = screen.getByLabelText(/^Valor/i); 
     expect(inputValor).toBeInTheDocument(); 
   }); 
  
   test("deve conter um input de tipo", () => { 
     render(<EditarTransacao />); 
     const inputTipo = screen.getByRole("button", { name: /Tipo/i }); 
     expect(inputTipo).toBeInTheDocument(); 
   }); 
  
   test("deve conter um input de categoria", () => { 
     render(<EditarTransacao />); 
     const inputCategoria = screen.getByRole("button", { name: /Categoria/i }); 
     expect(inputCategoria).toBeInTheDocument(); 
   }); 
  
   test("deve conter um botão de cancelar", () => { 
     render(<EditarTransacao />); 
     const cancelarButton = screen.getByRole("button", { name: /Cancelar/i }); 
     expect(cancelarButton).toBeInTheDocument(); 
   }); 
  
   test("deve conter um botão de ok", () => { 
     render(<EditarTransacao />); 
     const okButton = screen.getByRole("button", { name: /Ok/i }); 
     expect(okButton).toBeInTheDocument(); 
   }); 
 });
