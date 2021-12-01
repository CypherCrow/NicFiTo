<template>
    <div> 
        <div id="message">
            <p>Your product has been uploaded! HOORAY!</p>
            <br/>
            <p>Redirecting in {{ countDown }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UploadComplete',
    created(){
        this.countDownTimer()
    }, 
    data(){
        return {
            countDown: 5
        }
    },
    methods: {
        countDownTimer(){
            if(this.countDown > 0){
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
            }
            else {
                this.$router.push('/books')
            }
        }
    }
}
</script>

<style scoped>

div#message {
    font-size: 20px;
    margin-top: 35%; 
    justify-content: center;
    align-items: center;
}

</style>