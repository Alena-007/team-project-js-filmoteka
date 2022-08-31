
const bodyTheme = document.querySelector("body")
const buttonTheme = document.querySelector(".theme-button")
const iconTheme = document.querySelector(".theme-icon")
const footerTheme = document.querySelector("footer")


bodyTheme.classList.contains('light-theme')
buttonTheme.classList.contains('light-theme')
iconTheme.classList.contains('light-theme')


buttonTheme.addEventListener("click", onChangeTheme)
checkTheme();

function onChangeTheme(e) {
    e.preventDefault()
    console.log("hello")
    if (bodyTheme.classList.contains('dark-theme') || bodyTheme.classList.contains('')) {
        localStorage.setItem('theme', 'light');
        iconTheme.classList.remove('dark-theme-icon')
        buttonTheme.classList.remove('dark-theme-button')
        bodyTheme.classList.remove('dark-theme')
        footerTheme.classList.remove('dark-theme')

        iconTheme.classList.add('light-theme-icon')
        buttonTheme.classList.add('light-theme-button')
        bodyTheme.classList.add('light-theme')
        footerTheme.classList.add('light-theme')


    } else {
        localStorage.setItem('theme', 'dark');
        iconTheme.classList.add('dark-theme-icon')
        buttonTheme.classList.add('dark-theme-button')
        bodyTheme.classList.add('dark-theme')
        footerTheme.classList.add('dark-theme')

        iconTheme.classList.remove('light-theme-icon')
        buttonTheme.classList.remove('light-theme-button')
        bodyTheme.classList.remove('light-theme')
        footerTheme.classList.remove('light-theme')
    }

    // document.body.classList.toggle("dark-theme")
    
}
function checkTheme() {
    if (localStorage.getItem('theme') === 'light') {
         iconTheme.classList.remove('dark-theme-icon')
        buttonTheme.classList.remove('dark-theme-button')
        bodyTheme.classList.remove('dark-theme')
        footerTheme.classList.remove('dark-theme')

        iconTheme.classList.add('light-theme-icon')
        buttonTheme.classList.add('light-theme-button')
        bodyTheme.classList.add('light-theme')
        footerTheme.classList.add('light-theme')
    } else if (localStorage.getItem('theme') === 'dark') {
          iconTheme.classList.add('dark-theme-icon')
        buttonTheme.classList.add('dark-theme-button')
        bodyTheme.classList.add('dark-theme')
        footerTheme.classList.add('dark-theme')

        iconTheme.classList.remove('light-theme-icon')
        buttonTheme.classList.remove('light-theme-button')
        bodyTheme.classList.remove('light-theme')
        footerTheme.classList.remove('light-theme')
    }
}