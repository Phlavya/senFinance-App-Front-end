import "@testing-library/jest-dom"; 
 import { render, screen } from "@testing-library/react"; 
 import Dashboard from "../components/Dashboard"; 
  
 const data = [ 
   { 
     título :       "crédito",
     valor :      "300, 00" ,
     categoria :   "Alimentação" , 
     tipo :   "Entrada" , 
     data :              "06/07/2022 às 13:15:24 ”, _ _ _ _ _ _ _ _                                
   },,
];
 const dataStringfy = JSON.stringify(data); 
  
 describe("Componente Dashboard", () => { 
   test("deve conter o título 'Dashboard'", () => { 
     localStorage.setItem("transacoes", dataStringfy); 
     render(<Dashboard />); 
     const dashboardTitle = screen.getByText(/^Dashboard/i); 
     expect(dashboardTitle).toBeInTheDocument(); 
   }); 
  
   test("deve conter o subtítulo 'Aqui você encontrará informações sobre suas transações.'", () => { 
     localStorage.setItem("transacoes", dataStringfy); 
     render(<Dashboard />); 
     const dashboardSubtitle = screen.getByText( 
       /^Aqui você encontrará informações sobre suas transações./i 
     ); 
     expect(dashboardSubtitle).toBeInTheDocument(); 
   }); 
  
   test("deve conter um card com informações de 'Transações de Entrada'", () => { 
     localStorage.setItem("transacoes", dataStringfy); 
     render(<Dashboard />); 
     const transacoesEntrada = screen.getByText(/^Transações de Entrada/i); 
     expect(transacoesEntrada).toBeInTheDocument(); 
   }); 
  
   test("deve conter um card com informações de 'Transações de Saída'", () => { 
     localStorage.setItem("transacoes", dataStringfy); 
     render(<Dashboard />); 
     const transacoesSaida = screen.getByText(/^Transações de Saída/i); 
     expect(transacoesSaida).toBeInTheDocument(); 
   }); 
  
   test("deve conter um card com informações de 'Subtotal de Entrada'", () => { 
     localStorage.setItem("transacoes", dataStringfy); 
     render(<Dashboard />); 
     const subtotalEntrada = screen.getByText(/^Subtotal de Entrada/i); 
     expect(subtotalEntrada).toBeInTheDocument(); 
   }); 
  
   test("deve conter um card com informações de 'Subtotal de Saída'", () => { 
     localStorage.setItem("transacoes", dataStringfy); 
     render(<Dashboard />); 
     const subtotalSaida = screen.getByText(/^Subtotal de Saída/i); 
     expect(subtotalSaida).toBeInTheDocument(); 
   }); 
  
   test("deve conter um card com informações de 'Subtotal da Conta'", () => { 
     localStorage.setItem("transacoes", dataStringfy); 
     render(<Dashboard />); 
     const subtotalConta = screen.getByText(/^Subtotal da Conta/i); 
     expect(subtotalConta).toBeInTheDocument(); 
   }); 
  
   test("deve conter um valor diferente de null ou undefined nos cards", () => { 
     localStorage.setItem("transacoes", dataStringfy); 
     render(<Dashboard />); 
     const transacoesEntrada = screen.getByText(/^Transações de Entrada/i); 
     const transacoesSaida = screen.getByText(/^Transações de Saída/i); 
     const subtotalEntrada = screen.getByText(/^Subtotal de Entrada/i); 
     const subtotalSaida = screen.getByText(/^Subtotal de Saída/i); 
     const subtotalConta = screen.getByText(/^Subtotal da Conta/i); 
     const valueTransacaoEntrada = transacoesEntrada.getElementsByTagName("h5"); 
     const valueTransacaoSaida = transacoesSaida.getElementsByTagName("h5"); 
     const valueSubtotalEntrada = subtotalEntrada.getElementsByTagName("h5"); 
     const valueSubtotalSaida = subtotalSaida.getElementsByTagName("h5"); 
     const valueSubtotalConta = subtotalConta.getElementsByTagName("h5"); 
     expect(valueTransacaoEntrada).not.toBeNull(); 
     expect(valueTransacaoEntrada).not.toBeUndefined(); 
     expect(valueTransacaoSaida).not.toBeNull(); 
     expect(valueTransacaoSaida).not.toBeUndefined(); 
     expect(valueSubtotalEntrada).not.toBeNull(); 
     expect(valueSubtotalEntrada).not.toBeUndefined(); 
     expect(valueSubtotalSaida).not.toBeNull(); 
     expect(valueSubtotalSaida).not.toBeUndefined(); 
     expect(valueSubtotalConta).not.toBeNull(); 
     expect(valueSubtotalConta).not.toBeUndefined(); 
   }); 
  
   test("deve conter um ícone representativo em cada card", () => { 
     localStorage.setItem("transacoes", dataStringfy); 
     render(<Dashboard />); 
     const addIcon = screen.getByTestId("AddIcon"); 
     const removeIcon = screen.getByTestId("RemoveIcon"); 
     const keyboardDoubleArrowUpIcon = screen.getByTestId( 
       "KeyboardDoubleArrowUpIcon" 
     ); 
     const keyboardDoubleArrowDownIcon = screen.getByTestId( 
       "KeyboardDoubleArrowDownIcon" 
     ); 
     const attachMoneyIcon = screen.getByTestId("AttachMoneyIcon"); 
     expect(addIcon).toBeInTheDocument(); 
     expect(removeIcon).toBeInTheDocument(); 
     expect(keyboardDoubleArrowUpIcon).toBeInTheDocument(); 
     expect(keyboardDoubleArrowDownIcon).toBeInTheDocument(); 
     expect(attachMoneyIcon).toBeInTheDocument(); 
   }); 
 });
