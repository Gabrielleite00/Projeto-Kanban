import './style.css'


import { Header } from './components/header/header';
import { KanbanBoard } from './components/cards/cards'; 

document.addEventListener('DOMContentLoaded', () => {

    new Header();
    new KanbanBoard();
});
