import { onHamburgerClick } from "@scripts/modules/base-header"

const main = () => {
    try {
        onHamburgerClick()
    } catch (error) {
        console.error(error)
    }
}

export { main }
