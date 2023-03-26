const categoryForm = document.querySelector("#category-frm");
const categoryTitle = document.querySelector("#ctTitle");
const categoryDesc = document.querySelector("#ctDesc");
const categoryPhoto = document.querySelector("#ct-uploadPhoto");
const categoryTags = document.querySelector("#ctTags");
const posts = document.querySelector("#allPosts");
const pagination = document.querySelector(".pagination");
const del_btns = document.querySelector("#category-delete");
var limit = 5;
var page = 1;

let url = "";

/* Add post */
categoryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    title: categoryTitle.value,
    description: categoryDesc.value,
    category: "63d6d381fd840217d5938b0d",
    photo: "63dbe8ed68d03b5daea77695",
    tags: categoryTags.value,
  };
  request.post("post", data).then((res) => {
    console.log(res);
  });
});

/* Render 1 */
const getCard = (arr = []) => {
  let render = arr.map((el) => {
    return `
        <div class="card__alls d-flex align-items-center">    
            <div class="tag__cards__img">
            <img src="" alt="">
            </div>
            <div class="tag__cards__img__text ms-3">
                <h5 class="tag__cards__img__text__title">${
                  el.category.name
                }</h5>
                <h2 class="tag__cards__img__text__title2">${el.title}</h2>
                <p>${el.description}</p>
                <div>
                  <button class="btn btn-danger me-3" id="category-delete"><i class="bi bi-trash3"></i></button>
                  <button class="btn btn-primary"><i class="bi bi-pencil-square"></i></button>
                </div>
              </div>
                
        </div>
        `;
  });
  posts.innerHTML = render;
};
/* Render 2 */
function getPost() {
  posts.innerHTML = "loading...";
  request.get(`post?page=${page}&limit=${limit}`).then((res) => {
    posts.innerHTML = "";
    getCard(res.data.data);
    let pages_num = Math.ceil(
      res.data.pagination.total / res.data.pagination.limit
    );
    let pages = "";
    for (i = 1; i <= pages_num; i++) {
      pages += `<li class="page-item"><a class="page-link ${
        page === i ? "active" : ""
      }" href="#" onclick="{changePage('${i}')}">${i}</a></li>`;
    }
    pagination.innerHTML = `
    <li class="page-item"><a class="page-link  ${
      page === 1 ? "disabled" : ""
    }" href="#" onclick="{changePage('prev')}">Previous</a></li>
    ${pages}
    <li class="page-item"><a class="page-link  ${
      pages_num === page ? "disabled" : ""
    }" href="#" onclick="{changePage('next')}">Next</a></li>
    `;
  });
}
getPost();
/* Pagination logica */
function changePage(value) {
  if (value === "next") {
    page++;
  } else if (value === "prev") {
    page--;
  } else {
    page = value;
  }
  getPost();
}

function postDelete(i) {
  request.post(`post/${i}`, { method: "DELETE" }).then((res) => {
    console.log(res);
  });
}
