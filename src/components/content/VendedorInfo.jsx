export default function VendedorInfo ({ vendedor }) {

  const nome = vendedor.nome;  
  const nota = vendedor.nota;
  const email = vendedor.email;
  const telefone = vendedor.telefone;
  
  const estiloContainer = {
    border: '1px solid #ddd',     
    borderRadius: '8px',          
    padding: '16px',              
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px'
  };

  return (
    <>
      <div style={estiloContainer}>
        <h3>Informações do Vendedor</h3>
        <h4>{nome}</h4>
        <span>{nota}</span>
        <p>{email}</p>
        <p>{telefone}</p>
      </div>
    </>
  );
}