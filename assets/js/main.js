var app = new Vue({
    el: '#app',
    data: {
        text: '',
        
        todoList: [],

        todoCompleted: []
    },

    beforeUpdate(){
        this.todoList.forEach((element,index) =>{
            if(element.done == true){
                this.todoCompleted.push(element);
                this.todoList.splice(index,1)
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

        taskCompleted(element){

            if(element.done == false){
                element.done = true;
            }else{
                element.done = false
            }
        },
        
        newTask(){
            let task = {
                text: this.text,
                done: false
            }
            this.todoList.push(task)
            this.text = ''; 
        }
        
    }
})