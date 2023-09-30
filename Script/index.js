const loadData = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
  const data = await res.json()
  const categoryBtn = document.getElementById("category-btn")
  data.data.forEach((category) => {
    const div = document.createElement("div")
    div.innerHTML = `
        <a onclick=handleLoad('${category.category_id}') class="tab">${category.category}</a>
        `
    categoryBtn.appendChild(div)
  });
  console.log(data.data)
  
}
const handleLoad = async (categoryId) => {

  console.log(categoryId);
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  const data = await res.json()
  const cardContainer = document.getElementById("card-container")
  cardContainer.innerHTML=""

  data.data.forEach((card) => {
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="relative flex max-w-[20rem] flex-col text-gray-700">
    <div class="relative m-0 overflow-hidden rounded-none text-gray-700 shadow-none">
      <img class="w-full h-40"
        src=${card.thumbnail}
      />
      <p class="absolute bg-black w-32 -mt-10 ml-24 rounded-lg px-2 py-2 text-xs text-white">${card.others.posted_date} hours </p>
      </div>
    </div>
    <div class="px-2 py-1 flex item-center gap-2">
      <div class="w-10 py-2">
          <img class="h-10 rounded-full" src=${card.authors[0].profile_picture} alt="">
      </div>
      <div>
        <p class="mt-3 block font-sans text-lg font-semibold leading-relaxed text-gray-700 antialiased">${card.title
      }
          </p>

          <div class="text-sm">
          <p>${card.authors[0].profile_name} </p>
         <div class ="flex gap-2">
         <div>${card.others.views} </div>
         
         <span>
             ${card.authors[0].verified== true ? "<img class='h-5 w-5' src='/verified.png'/>" : ''}
         </span>

         </div>
          </div>
      </div>
    </div>
    </div>
  </div>
    `
    cardContainer.appendChild(div)

  })
}

loadData();
handleLoad(1000);
