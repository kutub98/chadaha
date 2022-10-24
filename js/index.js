// imgbb.com



const app = document.getElementById("app");
const products = document.getElementById("products");

const menus = [
  { name: "All" },
  { name: "এডভোকেট" },
  { name: "সলিসিটর" },
  { name: "এডভাইজর" },
  { name: "কো-অর্ডিনেটর" },
];
const product = [
  {
    id: 111,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image:
      "https://i.ibb.co/ZGVywrX/advocate-2.png",
    Category: "এডভোকেট",
    names: "Adv Saiful Islam Wahid",
    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },
  {
    id: 109,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image:
      "https://i.ibb.co/nf0Hvxw/advocate-1.png",
    Category: "এডভোকেট",
    names: "Adv Abdul Karim",

    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },
  {
    id: 108,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image:
      "https://i.ibb.co/ZGVywrX/advocate-2.png",
    Category: "সলিসিটর",
    names: "Adv Abdul alim",

    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },
  {
    id: 107,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image:
      "https://i.ibb.co/nf0Hvxw/advocate-1.png",
    Category: "সলিসিটর",
    names: "Adv Abdul Halim",

    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },
  {
    id: 106,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image:
      "https://i.ibb.co/ZGVywrX/advocate-2.png",
    Category: "এডভাইজর",
    names: "Adv Abdul Gafur",

    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },
  {
    id: 105,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image:
      "https://i.ibb.co/nf0Hvxw/advocate-1.png",
    Category: "এডভাইজর",
    names: "Adv Abdullah",
    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },

  {
    id: 102,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image:
      "https://i.ibb.co/ZGVywrX/advocate-2.png",
    Category: "কো-অর্ডিনেটর",
    names: "Adv Abdul Mujib",

    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },
  {
    id: 104,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image:
      "https://i.ibb.co/nf0Hvxw/advocate-1.png",
    Category: "মিশন",
    names: "Adv Abdullah Al Alim",
    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },
  {
    id: 103,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image: "https://i.ibb.co/nf0Hvxw/advocate-1.png",
    Category: "কো-অর্ডিনেটর",
    names: "Adv Abdus Satter",
    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },
  {
    id: 101,
    descriptions:
      "Abdullah al masum is famous writer, poet, reciter,trainer,philosopher, surprising idea maker, presenter, video editor,animator, trainer of artists, models news presenters, motivational speaker, song writer, tuner, singer & photographer,traveler. He is adviser, consultant,Brand ambassador of Big 6 groups of Bangladesh & foreign companies He is doing research on “foreign loan” for past 5 years. Also doing consultancy on 22+ businesses. connected with big energy positive peoples of EarthBorn In Bangladesh, Asia",
    image: "https://i.ibb.co/ZGVywrX/advocate-2.png",
    Category: "কো-অর্ডিনেটর",
    names: "Adv Abdul Gapper",
    Workas: "Co-ordinetor",
    Email: "addulAlim@gmail.com",
    phone: "+8801845-XXXXXXXXXX",
    office: "Chittgong Judge Court",
  },
];

const sortByCategory = (category) => {
  // console.log(category)
  const showAllBtn = document.getElementById("showAll");
  products.innerHTML = "";
  let filteredProducts = null;
  if (category === "All") {
    filteredProducts = product;
  } else {
    filteredProducts = product.filter((item) => item.Category.toLowerCase() === category.toLowerCase());
  }

  filteredProducts.forEach((data) => {
    showAllBtn.style.display = "none";

    if (category === "All") {
      showAllBtn.style.display = "block";
    }
    const div = document.createElement("div");
    // div.style.margin = "0px 20px";
    div.classList.add("cardss");
    // div.classList.add('card')
    div.innerHTML = `
    <img src = "${data.image}"class="img-fluid w-100 h-60 rounded-start" alt="..." >
    
    <div class="nameAndCategory">
    <h3>${data.names}</h3>
    <h5>${data.Category}</h5>
    <button id="Viewprofile" onclick="viewProfile(${data.id})">More Details</button>
    </div>
    `;
    products.appendChild(div);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  app.innerHTML = "";
  products.innerHTML = "";
  menus.forEach((data) => {
    const span = document.createElement("a");
    // span.style.marginTop = "20px";
    span.innerHTML = `<button onclick="sortByCategory('${data.name}')">${data.name}</button>`;
    app.appendChild(span);
  });

  const productLength = product.length;
  // const sixProduct = () =>{
  //   if(productLength== 5){
  //     return product;
  //   }
  // }
  // const viewSixProduct = sixProduct(product)
  // console.log(viewSixProduct)

  product.slice(0, 3).forEach((data) => {
    const div = document.createElement("div");
    div.classList.add("cardss");
    // div.style.marginTop = "20px";
    div.innerHTML = `
    <img src="${data.image}" class="img-fluid w-100 h-60 rounded-start" alt="...">
    <div class="nameAndCategory">
    <h5>${data.names}</h5>
    <h5>${data.Category}</h5>

    <button id="viewProfile" onclick="viewProfile(${data.id})">More Details</button>
    </div>`;
    products.appendChild(div);
  });

  const showAllBtn = document.getElementById("showAll");

  showAllBtn.addEventListener("click", function () {
    const seeLess = document.getElementById("seeLess");

    showAllBtn.style.display = "block";
    seeLess.classList.remove("d-none");
    seeLess.classList.add("d-block");

    seeLess.addEventListener("click", function () {
      seeLess.classList.add("d-none");
      products.innerHTML = "";
      product.slice(0, 6).forEach((data) => {
        const div = document.createElement("div");
        div.classList.add("cardss");
        // div.style.marginTop = "20px";
        div.innerHTML = `
          <img src="${data.image}" class="img-fluid w-100 h-60 rounded-start" alt="...">
          <div class="nameAndCategory">
          <h5>${data.names}</h5>
          <h5>${data.Category}</h5>
      
          <button id="viewProfile" onclick="viewProfile(${data.id})">More Details</button>
          </div>`;
        products.appendChild(div);
      });
      showAllBtn.style.display = "block";
    });

    showAllBtn.style.display = "none";

    products.innerHTML = "";

    product.forEach((data) => {
      const div = document.createElement("div");
      div.classList.add("cardss");
      // div.style.marginTop = "20px";
      div.innerHTML = `
      <img src="${data.image}" class="img-fluid w-100 h-60 rounded-start" alt="...">
      <div class="nameAndCategory">
      <h5>${data.names}</h5>
      <h5>${data.Category}</h5>
  
      <button id="viewProfile" onclick="viewProfile(${data.id})">More Details</button>
      </div>`;
      products.appendChild(div);
    });
  });
});

const viewProfile = (id) => {
  // window.location.href = ;
  const profile = document.getElementById("profile");
  const details = product.find((person) => person.id === id);
  //  console.log(details)

  const topMenu = document.getElementById("topMenu");
  const carouselExampleDark = document.getElementById("carouselExampleDark");
  const cardSections = document.getElementById("cardSections");
  const aboutPart = document.getElementById("aboutPart");
  carouselExampleDark.style.display = "none";
  aboutPart.style.display = "none";
  cardSections.style.display = "none";

  profile.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("personalDetails");

  div.innerHTML = `
  <div class="imgBox">
  <img src=${details.image} alt="" />
  </div>
  <div class= "details">
  <h3>${details?.names}</h3>
  <h5>Work as a: ${details?.Workas}</h5>
  <h4>${details?.descriptions}</h4>
  
  <h5><i class="fa-solid fa-envelope"></i> ${details?.Email}</h5>
  <h5><i class="fa-solid fa-square-phone"></i> ${details?.phone}</h5>
  <h5><i class="fa-solid fa-map-location-dot"></i>: ${details?.office}</h5>

  </div>
 
  `;
  profile.appendChild(div);
};

document.getElementById("open").addEventListener("click", function () {
  const open = document.getElementById("open");
  close.style.display = "block";
});

document.getElementById("close").addEventListener("click", function () {
  const open = document.getElementById("close");
  const close = document.getElementById("open");
  open.style.display = "block";
  close.style.display = "none";
});


//counter part



