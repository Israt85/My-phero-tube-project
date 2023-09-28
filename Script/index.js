const loadData =async ()=>{
     const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const categoryBtn = document.getElementById("category-btn")
    data.data.forEach((category) => {
        const div = document.createElement("div")
        div.innerHTML= `
        <a onclick=handleLoad('${category.category_id}') class="tab">${category.category}</a>
        `
       categoryBtn.appendChild(div)
    });
    console.log(data.data)
}
const handleLoad = async (categoryId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
   const cardContainer = document.getElementById("card-container")
   console.log(data.data)
   data.data.forEach((card) =>{
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="relative flex max-w-[20rem] flex-col text-gray-700">
    <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
      <img class="w-full h-40"
        src=${card.thumbnail}
      />
    </div>
    <div class=" px-2 py-4 flex items-center">
      <div class="w-10">
          <img src=${card.authors[0].profile_picture} alt="">
      </div>
      <div>
        <p class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
          dllsfj
          </p>
      </div>
    </div>
    <div class="flex items-center justify-between p-6">
      <div class="flex items-center -space-x-3">
        <img
          alt="natali craig"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
          class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
          data-tooltip-target="author-1"
        />
        <div
          data-tooltip="author-1"
          class="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
        >
          Natali Craig
        </div>
        <img
          alt="tania andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
          data-tooltip-target="author-2"
        />
        <div
          data-tooltip="author-2"
          class="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
        >
          Tania Andrew
        </div>
      </div>
      <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        January 10
      </p>
    </div>
  </div>
    `
     cardContainer.appendChild(div)

   })
}


loadData()