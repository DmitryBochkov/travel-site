import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.closeModalButton = $('.modal__close');
    this.modal = $('.modal');
    this.events();
  }

  events() {
    this.openModalButton.on('click', this.openModal.bind(this));
    this.closeModalButton.on('click', this.closeModal.bind(this));
    $(document).on('keyup', this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27 && this.modal.hasClass('modal--is-visible')) {
      this.closeModal();
    }
  }

  openModal(e) {
    e.preventDefault();
    this.modal.addClass('modal--is-visible');
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
  }
}

export default Modal;
