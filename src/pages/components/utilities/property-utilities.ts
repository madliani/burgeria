const parseDataAttrs = (dataset: DOMStringMap | undefined) => {
    const parsedDataAttrs: Record<string, string> = {}

    if (typeof dataset !== "undefined") {
        for (const dataAttr of Object.entries(dataset)) {
            const name = dataAttr[0]
            const value = dataAttr[1]

            if (typeof value !== "undefined") {
                parsedDataAttrs[`data-${name}`] = value
            }
        }
    }

    return parsedDataAttrs
}

export { parseDataAttrs }
