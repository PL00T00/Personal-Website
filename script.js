function hideAllPages () {
    const pages = document.querySelectorAll('div.page')
    pages.forEach(page => {
        page.classList.add('hidden')
    })
}

click.onclick = function() {
    hideAllPages()
}