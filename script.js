

// Hides all divs with "page" class, used when only showing one
function hideAllPages () {
    const pages = document.querySelectorAll('div.page')
    pages.forEach(page => {
        page.classList.add('hidden')
    })
}


// Shows only the specified page in the brackets
function showOnly (pageId) {
    hideAllPages()
    document.getElementById(pageId).classList.remove('hidden')
}


click.onclick = function () {
    showOnly('welcomePage')
}