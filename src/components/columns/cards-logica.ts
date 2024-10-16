// export type ColumnType = 'pendente' | 'em progresso' | 'finalizado';

// export class Card {
//     columnType: ColumnType;
//     cardElement: HTMLDivElement;

//     constructor(columnType: ColumnType) {
//         this.columnType = columnType;
//         this.cardElement = this.createCardElement();
//         this.updateButtons();
//         this.addRemoveEvent();
//     }

//     createCardElement(): HTMLDivElement {
//         const newCard = document.createElement('div') as HTMLDivElement;
//         newCard.classList.add('kanban-card');
//         newCard.setAttribute('draggable', 'true');

//         newCard.innerHTML = `
//             <div class="badge high">
//                 <span>Prioridade Alta</span>
//             </div>
//             <p class="card-title">Novo Card</p>
//             <div class="card-infos">
//                 <div class="card-icons">
//                     <p><i class="fa-regular fa-comment"> 0 </i></p>
//                     <p><i class="fa-solid fa-paperclip"> 0 </i></p>
//                 </div>
//                 <div class="user">
//                     <img src="images/137360936.jpeg" alt="Usuário do quadro Kanban">
//                 </div>
//             </div>
//             <button class="remove-card">
//                 <i class="fa fa-trash" aria-hidden="true"></i> Remover
//             </button>
//         `;

//         return newCard;
//     }

//     updateButtons(): void {
//         const leftButton = this.cardElement.querySelector('.move-card.left');
//         const rightButton = this.cardElement.querySelector('.move-card.right');
//         if (leftButton) leftButton.remove();
//         if (rightButton) rightButton.remove();

//         if (this.columnType === 'em progresso') {
//             this.addLeftButton();
//             this.addRightButton();
//         } else if (this.columnType === 'pendente') {
//             this.addRightButton();
//         } else if (this.columnType === 'finalizada') {
//             this.addLeftButton();
//         }
//     }

//     addLeftButton(): void {
//         const leftButton = document.createElement('button') as HTMLButtonElement;
//         leftButton.classList.add('move-card', 'left');
//         leftButton.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i> Voltar`;
//         this.cardElement.appendChild(leftButton);

//         leftButton.addEventListener('click', () => this.moveCard('left'));
//     }

//     addRightButton(): void {
//         const rightButton = document.createElement('button') as HTMLButtonElement;
//         rightButton.classList.add('move-card', 'right');
//         rightButton.innerHTML = `<i class="fa fa-arrow-right" aria-hidden="true"></i> Avançar`;
//         this.cardElement.appendChild(rightButton);

//         rightButton.addEventListener('click', () => this.moveCard('right'));
//     }

//     addRemoveEvent(): void {
//         const removeButton = this.cardElement.querySelector('.remove-card') as HTMLButtonElement;
//         removeButton.addEventListener('click', () => {
//             this.cardElement.remove();
//         });
//     }

//     moveCard(direction: 'left' | 'right'): void {
//         const currentColumn = this.cardElement.closest('.kanban-column') as HTMLElement;
//         let targetColumn: HTMLElement | null = null;

//         if (direction === 'left') {
//             targetColumn = currentColumn.previousElementSibling as HTMLElement;
//         } else if (direction === 'right') {
//             targetColumn = currentColumn.nextElementSibling as HTMLElement;
//         }

//         if (targetColumn) {
//             const kanbanCards = targetColumn.querySelector('.kanban-cards') as HTMLElement;
//             kanbanCards.appendChild(this.cardElement);

//             this.updateColumnType(targetColumn.dataset.id!);
//             this.updateButtons();
//         }
//     }

//     updateColumnType(columnId: string): void {
//         this.columnType = columnId === "1" ? 'pendente' : columnId === "2" ? 'em progresso' : 'finalizada';
//     }
// }

// export class KanbanBoard {
//     constructor() {
//         this.init();
//     }

//     init(): void {
//         document.querySelectorAll('.add-card').forEach(button => {
//             button.addEventListener('click', (e) => {
//                 const column = (e.currentTarget as HTMLElement).closest('.kanban-column') as HTMLElement;
//                 const columnType = column.dataset.id === "1" ? 'pendente' :
//                                 column.dataset.id === "2" ? 'em progresso' : 'finalizada';
//                 const kanbanCards = column.querySelector('.kanban-cards') as HTMLElement;

//                 const newCard = new Card(columnType); 
//                 kanbanCards.appendChild(newCard.cardElement); 
//             });
//         });

//         document.querySelectorAll('.kanban-card').forEach(cardElement => {
//             const columnType = (cardElement.closest('.kanban-column') as HTMLElement).dataset.id === "1" ? 'pendente' :
//                             (cardElement.closest('.kanban-column') as HTMLElement).dataset.id === "2" ? 'em progresso' : 'finalizada';

//             const existingCard = new Card(columnType); 
//             existingCard.cardElement = cardElement as HTMLDivElement;  
//             existingCard.updateButtons(); 
//             existingCard.addRemoveEvent(); 
//         });
//     }
// }

