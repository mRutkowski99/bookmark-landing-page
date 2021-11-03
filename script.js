const btnHamburger = document.querySelector('#hamburger')
const btnClose = document.querySelector('#close')
const mobileMenu = document.querySelector('.mobile-menu-wrapper')
const tabsNav = document.querySelector('.tabs-nav')
const tabOptions = document.querySelectorAll('.tabs-option')
const tabs = document.querySelectorAll('.tab')
const faqContainer = document.querySelector('.faq-container')
const faqAnswers = document.querySelectorAll('.faq-answer')
const faqArrows = document.querySelectorAll('.faq-arrow')
const btnSubmit = document.querySelector('.btn-submit')
const input = document.querySelector('input')

//Mobile menu
btnHamburger.addEventListener('click', () => mobileMenu.classList.remove('hidden'))
btnClose.addEventListener('click', () => mobileMenu.classList.add('hidden'))

//Tabs navigation
tabsNav.addEventListener('click', e => {
    e.preventDefault()
    if (!e.target.classList.contains('tabs-option')) return

    tabOptions.forEach(option => option.classList.remove('active-tab'))
    e.target.classList.add('active-tab')

    tabs.forEach((tab, i) => {
        tab.style.transition = 'ease-out 500ms'
        tab.style.transform = `translateX(${(i - e.target.dataset.option * 100)}%)`
        tab.classList.remove('curr-tab')
    })
    tabs[e.target.dataset.option].classList.add('curr-tab')
})

//FAQ
faqContainer.addEventListener('click', e => {
    if (!(e.target.classList.contains('faq-question') || e.target.classList.contains('faq-arrow'))) return

    const answer = e.target.closest('.faq').querySelector('.faq-answer')
    if (!answer.classList.contains('hidden'))   answer.classList.add('hidden')
    else {
        faqAnswers.forEach(ans => ans.classList.add('hidden'))
        answer.classList.remove('hidden')
    }

    const arrow = e.target.closest('.faq').querySelector('.faq-arrow')
    if (arrow.classList.contains('arrow-rotated'))   arrow.classList.remove('arrow-rotated')
    else {
        faqArrows.forEach(arrow => arrow.classList.remove('arrow-rotated'))
        arrow.classList.add('arrow-rotated')
    }
})

//Email validation
btnSubmit.addEventListener('click', e => {
    e.preventDefault()

    if (input.validity.typeMismatch) {
        document.querySelector('.wrong-email').classList.remove('hidden')
        document.querySelector('.email-container').classList.remove('hide-msg')
        input.style.borderColor = 'var(--soft-red)'
    } else {
        document.querySelector('.wrong-email').classList.add('hidden')
        document.querySelector('.email-container').classList.add('hide-msg')
        input.style.borderColor = 'var(--soft-blue)'
        input.value = ''
    }
})