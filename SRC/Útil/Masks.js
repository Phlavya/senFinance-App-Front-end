export const maskMoeda = (value) => { 
   return value 
   .replace(/\D/g, "") // permite digitar apenas numero 
   .replace(/(\d{1})(\d{14})$/, "$1.$2") // coloca ponto antes dos ultimos 14 digitos 
   .replace(/(\d{1})(\d{11})$/, "$1.$2") // coloca ponto antes dos ultimos 11 digitos 
   .replace(/(\d{1})(\d{8})$/, "$1.$2") // coloca ponto antes dos ultimos 8 digitos 
   .replace(/(\d{1})(\d{5})$/, "$1.$2") // coloca ponto antes dos ultimos 5 digitos 
   .replace(/(\d{1})(\d{1,2})$/, "$1,$2") // coloca virgula antes dos ultimos 2 digitos 
 };
