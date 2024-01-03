const useData = async (searchText='12') => {
    const loadData = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const response = await loadData.json();
    // console.log(response.data);
    displayData(response.data);
  }
  
  