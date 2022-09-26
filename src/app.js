import Component from "@/core/Component";
import navigate from "@/core/Navigate";
import Router from "@/router"

export default class App extends Component{
    
    constructor(target, props){
        super(target, props)
        this.BASE_URL = 'http://localhost:3000'
        new Router(this.target)
    }

    template(){
        return 'app'
    }

    setEvent(){
        document.querySelector('.nav-bar').addEventListener('click', (e) => {
            navigate(e.target.getAttribute('route'))
        })
    }
}