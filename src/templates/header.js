const Header = ()=> {
    const view = `
        <div class="header-main">
            <div class="header-logo">
                <h1>
                    <a href="/Rick-and-Morty_SPA/">
                        <img src="../../src/images/rick.png" alt="logo" class="logo">
                        <span class=hide>100tifi.co</span>
                    </a>
                </h1>
            </div>
            <div class="header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `
    return view
}

export default Header
