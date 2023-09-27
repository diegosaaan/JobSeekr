import '@/index.scss';
import './index.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(<div></div>);