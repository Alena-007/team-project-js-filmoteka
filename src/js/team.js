const refs = {
  openModalBtn: document.querySelector('[data-team-open]'),
  closeModalBtn: document.querySelector('[data-team-close]'),
  teamModal: document.querySelector('[data-team]')
};
refs.openModalBtn.addEventListener('click', onOpenTeamModal);
refs.closeModalBtn.addEventListener('click', onCloseTeamModal);
refs.teamModal.addEventListener('click', teamdropClose);
function onOpenTeamModal() {
  window.addEventListener('keydown', onEscPress);
  refs.teamModal.classList.remove('visually-hidden');
  document.body.style.overflow = 'hidden';
}
function onCloseTeamModal() {
  window.removeEventListener('keydown', onEscPress);
  refs.teamModal.classList.add('visually-hidden');
  document.body.style.overflow = '';
}
function teamdropClose(e) {
  if (e.currentTarget === e.target) {
    onCloseTeamModal();
  }
}
function onEscPress(e) {
  if (e.code === 'Escape') {
    onCloseTeamModal();
  }
}
