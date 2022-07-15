import "@testing-library/jest-dom"; 

 import { render, screen } from "@testing-library/react"; 

 import ExcluirTransacao from "../components/ExcluirTransacao"; 

  

 describe("Componente ExcluirTransacao", () => { 

   test("deve conter o título 'Excluir transação' no dialog", () => { 

     render(<ExcluirTransacao />); 

     const excluirTitle = screen.getByText(/^Excluir transação/i); 

     expect(excluirTitle).toBeInTheDocument(); 

   }); 

  

   test("deve conter o texto de ajuda no dialog", () => { 

     render(<ExcluirTransacao />); 

     const excluirText = screen.getByText(/^Tem certeza que deseja excluir esta transação?/i); 

     expect(excluirText).toBeInTheDocument(); 

   }); 

  

   test("deve conter um botão de cancelar", () => { 

     render(<ExcluirTransacao />); 

     const cancelarButton = screen.getByRole("button", { name: /Cancelar/i }); 

     expect(cancelarButton).toBeInTheDocument(); 

   }); 

  

   test("deve conter um botão de excluir", () => { 

     render(<ExcluirTransacao />); 

     const excluirButton = screen.getByRole("button", { name: /Excluir/i }); 

     expect(excluirButton).toBeInTheDocument(); 

   }); 

 });
