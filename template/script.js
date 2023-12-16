async function setModal(id, visibility, padding, callback) {
    const modal = document.getElementById(id)
    modal.style.visibility = visibility
    modal.style.padding = padding
    if(typeof callback === 'function') await callback(modal)
}