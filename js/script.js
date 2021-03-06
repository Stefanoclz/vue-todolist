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

        taskDone(object, objIndex) {
            object.done === true;
            this.doneList.push(object);
            console.log('list', this.list);
            console.log('doneList', this.doneList);
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
        },

        invertBoolean(object) {
            if (object.done === false) {
                object.done = true;
            } else {
                object.done = false;
            }
        }

    }

})