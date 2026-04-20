
// Hides all divs with "page" class, used when only showing one
function hideAllPages() {
    const pages = document.querySelectorAll('div.page');
    pages.forEach((page) => {
        page.classList.add('hidden');
    });
}

// Shows only the specified page in the brackets
function showOnly(pageId) {
    hideAllPages();
    document.getElementById(pageId).classList.remove('hidden');
}

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

homeBtn.onclick = function () {
    showOnly('welcomePage');
    scrollTop();
};

loreBtn.onclick = function () {
    showOnly('loreHome');
    scrollTop();
}