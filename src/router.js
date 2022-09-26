import { routes } from "@/utils/route";

export default function Router(target){
    this.target = target
    
    const findMatchedRoute = () => {
        return routes.find((route) => route.path === location.pathname)
    }

    const route = () => {
        const page = findMatchedRoute().element
        new page(this.target)
    }

    const init = () => {
        window.addEventListener('historychange', ({detail}) => {
            const {to, isReplace} = detail
            if(isReplace || to === location.pathname){
                history.replaceState(null, "", location.origin + to)
            }else{
                history.pushState(null, "", location.origin + to)
            }
            route()
        })

        window.addEventListener('popstate', () => {
            route()
        })
    }

    init()
    route()
}