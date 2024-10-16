import { deleteCard } from "./deleteCard";
import { handleButtonClick } from "./handleButtonClick";

export function moveCard() {
	const btnMoveLeft = document.querySelectorAll(".left") as NodeListOf<HTMLButtonElement>;
	const btnMoveRight = document.querySelectorAll(".right") as NodeListOf<HTMLButtonElement>;
    btnMoveLeft.forEach((btn) => btn.addEventListener("click", (event) => handleButtonClick(event, "left")));
    btnMoveRight.forEach((btn) => btn.addEventListener("click", (event) => handleButtonClick(event, "right")));
    deleteCard()
}
