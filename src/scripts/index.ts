import { onHamburgerClick } from "@scripts/modules/hamburger"

const main = () => {
    try {
        onHamburgerClick()
    } catch (error) {
        console.error(error)
    }
}

export { main }
