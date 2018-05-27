import { composeModal } from "./modal.js"

const renderModal = (content) => {
  const modal = composeModal(content)
  document.body.appendChild(modal)
}

export { renderModal }
