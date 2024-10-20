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
          `
            <img src="${user.image}" alt="${user.name}" class="avatar js-avatar" data-name="${user.name}">
          `
        )
        .join("");
    }
  }

  render(): string {
    
    this.fetchData();

    return `
      <header class="header">
        <div class="header-container">
          <div class="title-container">
            <i class="fa-solid fa-table-columns style-icon"></i>
            <h1>KanPlan</h1>
          </div>

          <div class="user-filter">
            <div class="avatars"></div>
          </div>

          <div class="divider"></div>
          
          <div class="tag-filter">
            <div class="tags">
              <button class="badge-tag blue js-tag" data-tag="Design">Design</button>
              <button class="badge-tag green js-tag" data-tag="Front-end">Front-end</button>
              <button class="badge-tag red js-tag" data-tag="Back-end">Back-end</button>
              <button class="badge-tag orange js-tag" data-tag="UX">UX</button>
            </div>
          </div>

        </div>
      </header>
    `;
  }
}

  

