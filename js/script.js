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
    },

    methods: {

        toDoCheck(object) {
            if (object.done === true) {
                return "line";
            }
        }
    }

})