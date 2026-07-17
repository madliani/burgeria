const parseDataAttrs = (dataset: DOMStringMap | undefined) => {
    const parsedDataAttrs: Record<string, string> = {}

    if (typeof dataset === "undefined") {
        return parsedDataAttrs
    }

    for (const dataAttr of Object.entries(dataset)) {
        const name = dataAttr[0]
        const value = dataAttr[1]

        if (typeof value === "undefined") {
            return parsedDataAttrs
        }

        parsedDataAttrs[`data-${name}`] = value
    }

    return parsedDataAttrs
}

export { parseDataAttrs }
