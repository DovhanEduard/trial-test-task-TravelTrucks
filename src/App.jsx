import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import DetailsPage from './pages/DetailsPage';
import Layout from 'components/Common/Layout/Layout';
import Features from 'components/DetailsPage/Features/Features';
import Reviews from 'components/DetailsPage/Reviews/Reviews';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />

          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
