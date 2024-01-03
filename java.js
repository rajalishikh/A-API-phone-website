const useData = async (searchText='12') => {
    const loadData = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const response = await loadData.json();
    // console.log(response.data);
    displayData(response.data);
  }
  
  const displayData = (data) => {
    console.log(data);
    // step 1 ,Find the div
    const findDivContainer = document.getElementById('find-the-div');
    // clear phone container cards before the search 
    findDivContainer.innerHTML = '';
  // show all button 
     const showAllButton = document.getElementById('show-all-container');
    if (data.length > 9) {
      showAllButton.classList.remove('hidden');
    }
     else {
      showAllButton.classList.add('hidden');
      }
  
  
    // limit of your phone 
    data = data.slice(0, 10);
    data.forEach(phone => {
      console.log(phone);
      // step 2 create the div
      const createTheDiv = document.createElement('div');
      // step 3 give them input 
      createTheDiv.classList = `card  bg-base-100 shadow-xl`;
      createTheDiv.innerHTML =`
      <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>${phone.slug}</p>
              <div class="card-actions justify-center">
                <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
              </div>
  
            </div>`
      // append the child 
      findDivContainer.appendChild(createTheDiv);
      
      
    });
    addLoading(false);
    
    
  }