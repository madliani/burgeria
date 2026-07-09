const onHamburgerClick = () => {
    document.addEventListener("astro:page-load", () => {
        const hamburger = document.querySelector("[data-id='hamburger']")
        const mobileMenu = document.querySelector("[data-id='mobile-menu']")

        if (hamburger !== null && mobileMenu !== null) {
            const toggleHamburgerMenu = () => {
                hamburger.classList.toggle("active")

                mobileMenu.classList.toggle(
                    "base-header__mobile-menu--unhidden"
                )
            }

            hamburger.addEventListener("click", toggleHamburgerMenu)
            mobileMenu.addEventListener("click", toggleHamburgerMenu)

            for (
                let index = 0;
                index <= (mobileMenu.children.length ?? 0) - 1;
                index++
            ) {
                const menuItem = mobileMenu.children.item(index)

                if (menuItem !== null) {
                    menuItem.addEventListener("click", toggleHamburgerMenu)
                }
            }
        }
    })
}

export { onHamburgerClick }
