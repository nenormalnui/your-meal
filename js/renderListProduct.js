import { API_URL, PREFIX_PRODUCT } from "./consts.js";
import { createCardProduct } from "./createCardProduct.js";
import { catalogList } from "./elements.js";
import { getData } from "./getData.js"

export const renderListProduct = async (category = 'burger') => {
    catalogList.textContent = '';
/*     const categoriesList = new Set();
    const filteredCategories = [];
     */
    const listProduct = await getData(`${API_URL}${PREFIX_PRODUCT}?category=${category}`)
    const listCard = listProduct.map(createCardProduct)
/*     listProduct.forEach((item) => {
        categoriesList.add(item.category);
        //console.log(item)        
        console.log(categoriesList);
    });
    categoriesList.forEach((items, categoriesList)=> {
        console.log(items);
        filteredCategories.push(items);
    })
    console.log(filteredCategories); */
    catalogList.append(...listCard);
}