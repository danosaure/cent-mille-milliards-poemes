import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './styles/globals.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
