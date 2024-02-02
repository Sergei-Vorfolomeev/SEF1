export function fieldValidator(body) {
    const errors = {
        errorsMessages: []
    }
    const methods = {
        isBoolean: (key) => {
            const valueType = typeof body[key]
            const value = body[key]
            if (value) {
                if (valueType !== 'boolean') {
                    errors.errorsMessages.push({message: `${key} must be boolean type`, field: key})
                }
            }

            return methods
        },

        isNumber: (key) => {
            const valueType = typeof body[key]
            const value = body[key]
            if (value) {
                if (valueType !== 'number') {
                    errors.errorsMessages.push({message: `${key} must be number type`, field: key})
                }
            }
            return methods
        },

        minMax: (key, min, max) => {
            const valueType = typeof body[key]
            const value = body[key]
            if (value) {
                if (valueType === 'number') {
                    const value = body[key]
                    if (+value < min || +value > max) {
                        errors.errorsMessages.push({message: `${key} must be from ${min} to ${max}`, field: key})
                    }
                }
            }
            return methods
        },

        maxLength: (key, max) => {
            const valueType = typeof body[key]
            const value = body[key]
            if (value && valueType === 'string') {
                if (value.toString().length > max) {
                    errors.errorsMessages.push({message: `${key} must be no longer ${max}`, field: key})
                }
            }
            return methods
        },

        isDate: (key) => {
            const valueType = typeof body[key]
            const value = body[key]
            if (valueType !== 'string') {
                if(value) {
                    errors.errorsMessages.push({message: `${key} must be string`, field: key})
                }
            }
            return methods
        },

        requiredFields: (...args) => {
            for (const arg of args) {
                if (!body[key]) {
                    errors.errorsMessages.push({
                        message: `${arg} is required`,
                        field: `${arg}`
                    })
                }
            }
            return methods
        },

        availableResolutions: (passedResolutions) => {
            const resolution = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160']
            if (passedResolutions) {
                for (let el of passedResolutions) {
                    if (!resolution.includes(el)) {
                        errors.errorsMessages.push({
                            message: `availableResolutions are incorrect`,
                            field: 'availableResolutions'
                        })
                    }
                }
            }
            return methods
        },

        getErrors: () => {
            return errors
        }
    }
    return methods
}

