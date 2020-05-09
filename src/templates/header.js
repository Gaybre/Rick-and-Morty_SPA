const Header = ()=> {
    const view = `
        <div class="header-main">
            <div class="header-logo">
                <h1>
                    <a href="/Rick-and-Morty_SPA/">
                        <img src="https://i.pinimg.com/originals/03/52/18/03521845fbd9dbf7f097ec22692ea7b1.png" alt="logo" class="logo">
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
