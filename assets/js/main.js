var app = new Vue({
    el: '#app',
    data: {
        testo: '',
        
        todoList: [],

        todoCompleted: []
    },

    beforeUpdate(){
        this.todoList.forEach((element) =>{
            if(element.done == true){
                this.todoCompleted.push(element);
                this.todoList.splice(element,1)
            }
        })
    },

    methods:{
        removeTask(element, x){
            if(element.done == true){
                this.todoCompleted.splice(x,1)
            }else{
                this.todoList.splice(x,1)
            }
        },

        taskCompleted(element, x){

            if(element.done == false){
                element.done = true;
            }else{
                element.done = false
            }
        },
        
        newTask(testo){
            let task = {
                text: testo,
                done: false
            }
            this.todoList.push(task)
        }
    }
})