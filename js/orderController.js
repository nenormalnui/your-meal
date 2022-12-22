import { clearCart } from "./cart.js";
import { modalDeliveryContainer, modalDeliveryForm } from "./elements.js";

const checkDelivery = () => {
  if (modalDeliveryForm.format.value === "pickup") {
    modalDeliveryForm["address-info"].classList.add(
      "modal-delivery__fieldset-input_hide"
    );
  }

  if (modalDeliveryForm.format.value === "delivery") {
    modalDeliveryForm["address-info"].classList.remove(
      "modal-delivery__fieldset-input_hide"
    );
  }
};

export const orderController = (getCart) => {
  modalDeliveryForm.addEventListener("change", checkDelivery);

  modalDeliveryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(modalDeliveryForm);
    const data = Object.fromEntries(formData);
    data.order = getCart();
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(response => response.json())
      .then(response => {
        clearCart();
        modalDeliveryContainer.innerHTML = `
          <h2 class ="modal-success">Спасибо за заказ!</h2>
          <h3>Ваш номер заказа ${response.id}</h3>
        `;
        modalDeliveryForm.reset();
        checkDelivery();
        setTimeout(() => location.reload() , 2000);
      })

  })
};
