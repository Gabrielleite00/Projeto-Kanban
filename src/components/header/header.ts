export class Header {
  render(): string {
    return `
      <header class="header">
        <div class="header-container">
          <h1>KanPlan</h1>
          
          <div class="actions">
            <button id="filter-button" class="filter">Filter by user</button>
            
            <button id="date-button" class="date">This Week</button>
          
            <div class="avatars">
              <img src="https://avatars.githubusercontent.com/u/123703672?v=4" alt="Avatar 1" class="avatar">
              <img src="https://avatars.githubusercontent.com/u/137360936?v=4" alt="Avatar 2" class="avatar">
              <img src="https://avatars.githubusercontent.com/u/70522543?v=4" alt="Avatar 3" class="avatar">
              <img src="https://avatars.githubusercontent.com/u/150956309?v=4" alt="Avatar 3" class="avatar">
              <div class="avatar plus">+1</div>
            </div>
          
            <button id="share-button">Share</button>
          </div>
        </div>
      </header>
    `
  }
}
  