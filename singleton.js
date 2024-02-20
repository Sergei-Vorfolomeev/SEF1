const Singleton1 = new function () {
    const single = this
    return function() {
        return single
    }
}()

// ========================================================================

const Singleton2 = function () {
    let instance
    return function Singleton () {
        if (instance) return instance
        instance = this
    }
}()

// ========================================================================

const Singleton3 = (() => {
    let instance = {}
    return () => instance
})()