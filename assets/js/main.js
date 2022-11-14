var app = new Vue({
    el: '#app',
    data: {
  
        todoList: [
            {
                text: 'Comprare la farina',
                done: false
            },
            {
                text: 'Aggiustare la mensola in cucina',
                done: false
            }
        ],

        todoCompleted: []
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
        }
        
    }
})