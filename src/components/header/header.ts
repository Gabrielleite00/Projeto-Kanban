import { api } from "../../data/apiUrl";
import { Users } from "../../interfaces/users.interface";

export class Header {
  api: string = api;
  data: Users[] = []; 

  async fetchData() {
    try {
      const response = await fetch(this.api);
      this.data = await response.json();
      this.updateAvatars(); 
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  updateAvatars() {
    const avatarsContainer = document.querySelector(".avatars");
    if (avatarsContainer) {
      avatarsContainer.innerHTML = this.data
        .map(
          (user) =>
            `<img src="${user.image}" alt="${user.name}" class="avatar js-avatar" data-name="${user.name}">`
        )
        .join("");
    }
  }

  render(): string {
    
    this.fetchData();

    return `
      <header class="header">
        <div class="header-container">
          <h1>KanPlan</h1>
          
          <div class="actions">
            <button id="filter-button" class="filter">Filter by user</button>
            
            <button id="date-button" class="date">This Week</button>
          
            <div class="avatars"></div>
          
            <button id="share-button">Share</button>
          </div>
        </div>
      </header>
    `;
  }
}

  

