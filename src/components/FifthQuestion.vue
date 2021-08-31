<template>
    <div class="fifth">
        <div class="fifth__box-quote">
            <div class="fifth__box-message">
                <p class="fifth__message">{{message}}</p>
            </div>
            <img class="fifth__img-eye1" src="../assets/img/eye-1.svg" alt="eye-1">
        </div>
        <div class="fifth__line"></div>
        <p class="fifth__question">
            <br>Запись, которую Вы услышите, 
            <br>может шокировать людей с 
            <br>неокрепшей психикой. Вы готовы 
            <br>узнать, что ждет именно Вас?
        </p>

        <router-link to="/end"><button class="fifth__btn">Да</button></router-link>
        <router-link to="/end"><button class="fifth__btn">Затрудняюсь ответить</button></router-link>
        
        <img class="fifth__img-eye" src="../assets/img/eye.svg" alt="eye">
        <p class="fifth__num-question">Вопрос 5-5</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                message1: "По вам скучает очень близкий человек, которого больше нет в мире живых.",
                message2: "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.",
                message3: "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.",
                year: '',
                message: ''
            }
        },
        computed: {
            ...mapGetters([
                'STATE_YEAR'
            ])
        },
        methods: {
            getYear(){
                this.year = this.STATE_YEAR;
                if(this.year >= 1986) {
                    this.message = this.message1
                } else if(this.year >= 1976 && this.year <= 1985) {
                    this.message = this.message2
                } else {
                    this.message = this.message3
                }
            }
        },
        mounted(){
            this.getYear();
        }
    }
</script>

<style scoped>
    .fifth__box-quote {
        height: 200px;
        position: relative;
    }
    .fifth__box-message {
        width: 259px;
        height: 84px;
        background: #FFFFFF;
        border-radius: 5px;
        margin: 0 auto;
        margin-top: 24px;
    }
    .fifth__message {
        font-family: 'Bad Script', cursive;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #202024;
        padding: 12px;
    }
    .fifth__img-eye1 {
        position: absolute;
        right: 630px;
        top: 125px;
        width: 150px;
        opacity: 0.2;
        transform: rotate(-9.61deg);
    }
    .fifth__line {
        width: 100%;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .fifth__question {
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        color: #F6C866;

        margin: 74px 0 22px 0;
    }
    .fifth__btn {
        display: block;
        width: 310px;
        height: 70px;
        background: linear-gradient(90deg, rgba(246, 200, 102, 0.9) -6.2%, rgba(254, 173, 53, 0.9) 100%);
        border-radius: 50px;
        margin: 0 auto;

        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;

        margin-bottom: 35px;
    }
    .fifth__img-eye {
        margin-left: 408px;
        width: 89px;
        opacity: 0.6;
    }
    .fifth__num-question {
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);

        margin: 35px 0 25px 0;
    }
</style>