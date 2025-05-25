import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from './routes';
import Footer from './pages/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

const MainContent = styled.div`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <ToastContainer autoClose={3000} />
      <MainContent>
        <RoutesApp />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;