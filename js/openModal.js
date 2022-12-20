import { API_URL, PREFIX_PRODUCT } from "./consts.js";
import {
  modalProduct,
  modalProductTitle,
  modalProductImage,
  modalProductDescription,
  ingredientsList,
  ingredientsCalories,
  modalProductPriceCount,
  modalProductBtn,
} from "./elements.js";
import { getData } from "./getData.js";

export const openModal = async (id) => {
  const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
  modalProductTitle.textContent = product.title;
  modalProductImage.src = product.image;

  ingredientsList.textContent = "";

  const ingredientsListItem = product.ingredients.map((item) => {
    const li = document.createElement("li");
    li.classList.add("ingredients__item");
    li.textContent = item;
    return li;
  });

  ingredientsList.append(...ingredientsListItem);

  modalProductDescription.textContent = product.description;
  ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
  modalProductPriceCount.textContent = product.price;
  modalProductBtn.dataset.idProduct = product.id;

  modalProduct.classList.add("modal_open");
};
