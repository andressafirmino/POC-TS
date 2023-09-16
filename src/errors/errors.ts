function conflictError(resource = "Item") {
    return {
        name: "conflict",
        message: `${resource} já existe!`
    }
}

export const errors = {
    conflictError
}