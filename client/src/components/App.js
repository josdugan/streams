import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from 'react-router-dom';
import history from '../history';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <HistoryRouter history={history}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/streams/new" element={<StreamCreate />} />
            <Route path="/streams/edit/:id" element={<StreamEdit />} />
            <Route path="/streams/delete/:id" element={<StreamDelete />} />
            <Route path="/streams/:id" element={<StreamShow />} />
          </Routes>
        </div>
      </HistoryRouter>
    </div>
  );
};

export default App;
