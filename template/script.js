const productions = [{
    title: 'multi-purpose API',
    linkName: 'google.com',
    link: 'https://google.com'
},
{
    title: 'multi-purpose bot',
    linkName: 'google.com',
    link: 'https://google.com'
}]
const closeButton = document.getElementById('close-button')

function setModal(id, visibility, padding, callback) {
    const modal = document.getElementById(id)
    modal.innerHTML = productions
    .map(data => `${data.title}: <button class="hyperlink" onclick="window.open('${data.link}', '_blank')">${data.linkName}</button><br>`).join('')
    closeButton.style.visibility = visibility
    modal.style.visibility = visibility
    modal.style.padding = padding
    if(typeof callback === 'function') callback(modal)
}