import { tasks } from "../data/data"; 
import { deleteCard } from "./deleteCard";
import { handleButtonClick } from "./handleButtonClick";
import { saveTasksToLocalStorage } from "./storageUtils";


export function moveCard() {
	const btnMoveLeft = document.querySelectorAll(".left") as NodeListOf<HTMLButtonElement>;
	const btnMoveRight = document.querySelectorAll(".right") as NodeListOf<HTMLButtonElement>;
    
    btnMoveLeft.forEach((btn) => btn.addEventListener("click", (event) => {
        handleButtonClick(event, "left");
        saveTasksToLocalStorage(tasks);
    }));
    
    btnMoveRight.forEach((btn) => btn.addEventListener("click", (event) => {
        handleButtonClick(event, "right");
        saveTasksToLocalStorage(tasks);
    }));

    deleteCard();
    window.dispatchEvent(new Event('renderCards'));
}
