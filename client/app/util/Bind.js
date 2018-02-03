class Bind {
    constructor(modelo, view, ...props) {

        const proxy = ProxyFactory.create(modelo, props, model => view.update(modelo));

        view.update(modelo)

        return proxy

    }
}