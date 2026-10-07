

    // Lista delle categorie delle aziende con i rispettivi nomi
    const companyCategories = [
    { name: 'ENM', category: 'new' },
    { name: 'BNP', category: 'advertising' },
    { name: 'ForexChange', category: 'branding' },
    { name: 'YesIStartUp', category: 'web' }
    ];

    // Funzione per visualizzare i link delle aziende nell'HTML
    function displayCompanies() {
    const filtersContainer = document.querySelector('.filters');

    // Crea un elemento per ogni azienda e aggiungi l'attributo 'data-filter' dalla lista
    companyCategories.forEach((company) => {
    const filterItem = document.createElement('a');
    filterItem.href = '#';
    filterItem.textContent = company.name;
    filterItem.setAttribute('data-filter', `.${company.category}`);
    filtersContainer.appendChild(filterItem);
});


    // Richiama la funzione per visualizzare i link delle aziende
    displayCompanies();

    }