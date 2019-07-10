// Vue.use(Router)

const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      discordToken: ''
    },

    mounted(){
        let token = location.search.split('=')[1];
        if(!token) alert('tokenがありません');
        this.discordToken = token;
        console.log(token);
    },

    methods: {
        onClick(){
            const url = `https://discordapp.com/api/webhooks/${this.discordToken}`;
            axios.post(url, {content: this.message})
            .then(res => alert('success!'))
            .catch(err => alert('error'))
            .finally();
        }
    }
})

