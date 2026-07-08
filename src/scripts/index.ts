import { onHamburgerClick } from "@scripts/blocs/base-header"

const main = () => {
    try {
        onHamburgerClick()
    } catch (error) {
        console.error(error)
    }
}

export { main }
