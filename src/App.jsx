import './App.css'
import Header from './components/header/Header';
import InfoProdutoPage from './pages/InfoProdutoPage'

export default function App() {
  return (
    <>
      <Header />
      <main className='container_main_pag'>
        <InfoProdutoPage />
      </main>
    </>
  )
}