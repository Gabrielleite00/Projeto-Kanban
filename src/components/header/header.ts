export class Header {
    private items = [
      { id: 1, status: "pending", date: "2024-10-01" },
      { id: 2, status: "completed", date: "2024-09-28" },
      { id: 3, status: "pending", date: "2024-10-07" },
      { id: 4, status: "completed", date: "2024-09-15" },
      { id: 5, status: "pending", date: "2024-10-10" }
    ];
  
    constructor() {
      document.addEventListener("DOMContentLoaded", () => {
        this.initialize();
      });
    }
  
    initialize() {
      const filterButton = document.getElementById("filter-button");
      const dateButton = document.getElementById("date-button");
      const shareButton = document.getElementById("share-button");
  
      filterButton?.addEventListener("click", () => this.handleFilter());
      dateButton?.addEventListener("click", () => this.handleDateSelection());
      shareButton?.addEventListener("click", () => this.handleShare());
  
      console.log('Header component initialized');
    }
  
    handleFilter() {
      const filterOption = prompt("Selecione um filtro: \n1. Todos\n2. Pendentes\n3. Concluídos", "1");
  
      if (!filterOption || !["1", "2", "3"].includes(filterOption)) {
        console.log("Opção inválida. Nenhum filtro selecionado.");
        return;
      }
  
      switch (filterOption) {
        case "1":
          console.log("Exibindo todos os itens");
          this.filterItemsByStatus("all");
          break;
        case "2":
          console.log("Exibindo apenas os itens pendentes");
          this.filterItemsByStatus("pending");
          break;
        case "3":
          console.log("Exibindo apenas os itens concluídos");
          this.filterItemsByStatus("completed");
          break;
      }
    }
  
    filterItemsByStatus(status: string) {
      const filteredItems = this.items.filter(item => {
        return status === "all" ? true : item.status === status;
      });
      console.log("Itens filtrados:", filteredItems);
    }
  
    handleDateSelection() {
      const dateOption = prompt("Selecione um intervalo de datas: \n1. Esta semana\n2. Este mês\n3. Personalizado", "1");
  
      if (!dateOption || !["1", "2", "3"].includes(dateOption)) {
        console.log("Opção inválida. Nenhum intervalo de datas selecionado.");
        return;
      }
  
      switch (dateOption) {
        case "1":
          console.log("Exibindo itens desta semana");
          this.filterItemsByDate(this.getDateStartOfWeek(), new Date());
          break;
        case "2":
          console.log("Exibindo itens deste mês");
          this.filterItemsByDate(this.getDateStartOfMonth(), new Date());
          break;
        case "3":
          const startDateStr = prompt("Digite a data de início (YYYY-MM-DD)", "2024-01-01");
          const endDateStr = prompt("Digite a data de fim (YYYY-MM-DD)", "2024-12-31");
          if (startDateStr && endDateStr) {
            const startDate = new Date(startDateStr);
            const endDate = new Date(endDateStr);
            this.filterItemsByDate(startDate, endDate);
          }
          break;
      }
    }
  
    filterItemsByDate(startDate: Date, endDate: Date) {
      const filteredItems = this.items.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });
      console.log("Itens filtrados por data:", filteredItems);
    }
  
    getDateStartOfWeek(): Date {
      const currentDate = new Date();
      const firstDay = currentDate.getDate() - currentDate.getDay();
      return new Date(currentDate.setDate(firstDay));
    }
  
    // Função auxiliar para obter a data de início do mês
    getDateStartOfMonth(): Date {
      const currentDate = new Date();
      return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    }
  
    handleShare() {
      const shareData = {
        title: 'KanPlan To-Do',
        text: 'Veja meu progresso no KanPlan To-Do!',
        url: window.location.href
      };
  
      if (navigator.share) {
        navigator.share(shareData)
          .then(() => console.log('Conteúdo compartilhado com sucesso'))
          .catch(err => console.log('Erro ao compartilhar:', err));
      } else {
        alert('Compartilhamento não suportado no seu navegador');
      }
    }
  }
  