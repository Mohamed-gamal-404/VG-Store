const products = [
    {
        id: 1,
        title: "Ground Nuts Oil Pack",
        slug: "ground-nuts-oil-pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg",
        category: "snack-and-spices",
        sub_category: "snack",
        rate:2,
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 2,
        title: "Organic Litchi Juice Pack",
        slug: "organic-litchi-juice-pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/2.jpg",
        category: "snack-and-spices",
        sub_category: "Juice",
        rate: 3,
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 3,
        title: "Crunchy Banana Chips",
        slug: "crunchy-banana-chips",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/3.jpg",
        category: "snack-and-spices",
        sub_category: "chips",
        rate: 4,
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 4,
        title: "Organic dragon fruit",
        slug: "organic-dragon-fruit",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/9.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: 3,
        isDiscount: false,
        oldPrice: 30,
        newPrice: null,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 5,
        title: "Fresh blue berry",
        slug: "fresh-blue-berry",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/10.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: 5,
        isDiscount: false,
        oldPrice: 30,
        newPrice: null,
        out_of_stock: true,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
]
let currentCategory= "all"
const categoriesItem = document.querySelector(".header-items");
const proudactHub = document.querySelector(".proudact-cards");
function GetCatigories() {
    let categories = []
    products.forEach(proudact => {
        categories.push(proudact.category)
    });
    const ComparCatigories = ["all" , ...new Set(categories)]
    console.log(ComparCatigories);
    const results = ComparCatigories.map((category) => (
        {
            lable : category.replaceAll("-" , " ").replaceAll("and" , "&"),
            value : category,
        }
    )); 

    results.forEach((item)=>
        (categoriesItem.innerHTML += `<h4 class="${currentCategory== item.value ? "active" : "" }" data-value= "${item.value}">${item.lable}</h4>
                    <span>/</span>`)
    );
    const categorySelector = document.querySelectorAll(".header-items h4")
    categorySelector.forEach((item)=>item.onclick = () =>{
        categorySelector.forEach((item)=> item.classList.remove("active"))
        item.classList.add("active");
        currentCategory = item.dataset.value 
        console.log(categoryFilter());
    console.log()
    })
}
function categoryFilter(){
    if( currentCategory == "all"){
        return veiwProudacts(products);
    }else {
        const filterProudacts = products.filter((proudact) => proudact.category == currentCategory)
        return veiwProudacts(filterProudacts)
    }
}
function veiwProudacts(data){
    let html = ``
data.forEach((product)=> html +=(`<div class="proudact-card">
                    <div class="proudact-card-image">
                        <img src="${product.image}" alt="">
                        <div class="proudact-image-icons">
                            <div class="icon">
                                <svg  class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16px" width="10px" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></div>
                            <div class="icon">  
                                <svg class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="10px" width="10px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"></path></svg></div>
                            <div class="icon"> 
                                <svg class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="10px" width="10px" xmlns="http://www.w3.org/2000/svg"><path d="M192 382h-22c-24.6 0-29-3.6-33.8-9.6-5.5-6.9-8.2-19.1-8.2-54.2V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S32 60.7 32 96c0 23.7 12.9 44.3 32 55.4v166.8c0 46.4 3.7 70.8 22.1 94 19.9 25.1 45 35.8 83.9 35.8h22v64l96-96-96-96v62zM96 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM448 360.6V190.8c0-46.4-3.7-70.8-22.1-94C406 71.7 380.9 62 342 62h-22V0l-96 96 96 96v-64h22c24.6 0 29 2.6 33.8 8.6 5.5 6.9 8.2 19.1 8.2 54.2v169.8c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.3-32-55.4zM416 456c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path></svg>
                            </div>
                            <div class="icon"> 
                                <svg class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="10px" width="10px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 264-89.6 112-38.4-44.88"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></path></svg></div>
                        </div>
                    </div>
                    <div class="proudact-catigory-rating">
                        <h1>${product.sub_category}</h1>
                        <div class="rating">
                        ${new Array(5).fill(1).map((_, index)=> product.rate>= index+1? `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path></svg>
`:`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><g id="Star"><path d="M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"></path></g></svg>`).join("")}
                        </div>
                    </div>
                    <div class="proudact-title">
                        <h1>${product.title}</h1>
                    </div>
                    <div class="proudact-pricing-weghit">
                        <div class="price">
                            <strong>$${product.isDiscount? product.newPrice : product.oldPrice}</strong>
                            <del>${product.isDiscount? `$${product.oldPrice} `: ""}</del>
                            <span class="outOfStock">${product.out_of_stock? "out of stock" : ""}</span>
                        </div>
                        <div class="weghit">
                            <span>10kg</span>
                        </div>
                    </div>
                </div>`))
    proudactHub.innerHTML = html
}
categoryFilter();
GetCatigories();
console.log(new Array(5).fill(1));
