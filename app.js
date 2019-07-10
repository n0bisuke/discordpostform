const app = new Vue({
    el: '#app',
    data: {
      message: '',
      discordToken: ''
    },

    mounted(){
        let token = location.search.split('=')[1];
        if(!token) alert('tokenがありません');
        this.discordToken = token;
        console.log(token);
    },

    methods: {
        clear(){
            this.message = ''
        },
        onClick(){
            const url = `https://discordapp.com/api/webhooks/${this.discordToken}`;
            axios.post(url, {content: this.message})
            .then(res => {
                alert('success!')
                this.message = ''
            })
            .catch(err => alert('error'))
            .finally();
        }
    }
})

