console.log('JS OK');

const app = new Vue({
    el: '#root',
    data: {
        list: [
            {
                text: 'Fare il caffè',
                done: false,
            },

            {
                text: 'rifare il letto',
                done: false,
            },

            {
                text: 'lavare i pavimenti',
                done: false,
            },

            {
                text: 'nutrire il gatto',
                done: false,
            }
        ],

        doneList: [],
        task: '',
    },

    methods: {

        toDoCheck(object) {
            if (object.done === true) {
                return "line";
            }
        },

        taskDone(object) {
            object.done = true;
            this.doneList.push(object);
        },

        addTask() {
            let taskCheck = this.task.trim();
            if (taskCheck.length > 0) {
                let newTask = {
                    text: this.task,
                    done: false,
                }
                this.list.push(newTask);
                this.task = '';
            }
        }

    }

})