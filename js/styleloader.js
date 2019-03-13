/***This script deals with initial settings. Contains $$ sections of code -
 * 1.   Initiation Code: it contains -
 *      - initial variable declarations.
 *      - setting today's theme.
 *      - loading stylesheets and scripts using FallbackJS.
 * 
 * 2.   DOMContentLoaded Code: For things to do after basic HTML 
 *      structure is loaded. It contains -
 *      - Toggle Navbar burger
 *      - Add Blog Link to navbar
 *      - Footer credits
 *      - Loading the last few scripts
 * 
 */

( function() {
    /** ************************ Initiation Code ************************ */
    // Creating a new date obj
    let today = new Date();
    
    // if changeTheme is true, get the theme color for today
    if(Settings.changeTheme) Settings.todayTheme = Settings.colors[today.getDay()];

    // Load the preloader Stylesheet and Scripts
    fallback.load(Settings.preLoad.loaderFiles);
    
    // Load the main Stylesheets and Scripts from CDNs or fall back to local copies.
    fallback.load(Settings.toLoad);

    /** ************************ DOMContentLoaded Code ************************ */
    // After basic HTML Structure is loaded, do these things.
    document.addEventListener('DOMContentLoaded', (event) => {
        // Navbar Burger Toggle
        document.getElementById("nav-toggle").addEventListener ("click", function() {
            document.querySelector('.navbar-menu').classList.toggle("is-active");
        });

        // Adding blog link to Navbar
        if (Settings.blog !== "") {
            let blogLink = `<a target="_blank" class="navbar-item is-tab" href="${Settings.blog}">Blog</a>`;
            document.querySelector(".navbar-start").insertAdjacentHTML('afterbegin', blogLink); 
        }

        // Footer credits
        let copyright, year, projectName, authorCred, sourceCode, creditsStr;
        copyright = `<i class="far fa-copyright"></i>`;
        year = today.getFullYear();
        authorCred = `Sandeepan B.`;
        projectName = `GlitchCV`;
        sourceCode = `<a target="_blank" href="https://github.com/"><i class="fab fa-github-alt"></i></a>`;
        creditsStr = `${copyright} ${year} ${projectName}. Made by ${authorCred} ${sourceCode}`;
        document.getElementById("credits").insertAdjacentHTML('afterbegin', creditsStr);

        // load the last scripts
        fallback.load(Settings.lastLoad);
    });
})();
