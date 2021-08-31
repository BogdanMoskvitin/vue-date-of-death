<template>
    <div>
        <div class="recording">
            <img class="recording__img" src="../assets/img/microphone.png" alt="microphone">
            <div class="recording__line">
                <div class="recording__line-yellow"></div>
            </div>
            <p class="recording__percent">{{count}}%</p>
            <p class="recording__title">Запись сообщения</p>
        </div>



        <div class="end">
            <div class="end__box-message">
                <p class="end__message">
                    Спасибо за Ваши ответы! 
                    <br><span>Мы подготовили для Вас 
                    <br>персональную аудио запись с 
                    <br>Вашим прогнозом.</span>
                    </p>
            </div>
            <p class="end__text">
                Вы можете узнать, как повлиять 
                <br>на события, которые ожидают 
                <br>вас в ближайшем будущем. 
            </p>
            <div class="end__box-date">
                <p class="end__date">
                    ПЕРВОЕ ЗНАЧИМОЕ 
                    <br>СОБЫТИЕ МОЖЕТ 
                    <br>ПРОИЗОЙТИ УЖЕ 14.02.2021, 
                    <br>Вам надо быть готовым, что 
                    <br>бы последствия не оказались 
                    <br>необратимыми.
                </p>
            </div>
            <p class="end__text">
                Нажмите на кнопку ниже прямо 
                <br>сейчас и наберите наш номер 
                <br>телефона. Прослушайте важную 
                <br>информацию!
            </p>
            <button v-on:click="callSrv" class="end__btn">Позвонить и прослушать</button>
            <p v-if="isActive" class="end__user">Имя: <span>{{user.name}}</span> <br>Рост: <span>{{user.height}}</span></p>
            
            <p class="end__footer">
                TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU 
                <br>DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, 
            </p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                count: 0,
                url: "https://swapi.dev/api/people/1",
                isActive: false,
                user: [],
                error: null
            }
        },
        methods: {
            timer(){
                setInterval( () => {
                    this.count < 100 ? this.count += 1 : clearInterval(); 
                }, 20);
            },
            callSrv() {
                this.isActive = true;
                axios
                    .get(this.url)
                    .then(response => {this.user = response.data})
                    .then(() => console.log(this.user))
            }
        },
        mounted() {
            this.timer();
        }
    }
</script>

<style scoped>
    .recording {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: #202024;

        animation: cssAnimation 0s ease-in 2.5s forwards;
        animation-fill-mode: forwards;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @keyframes cssAnimation {
        to {
            width:0;
            height:0;
            overflow:hidden;
        }
    }
    .recording__img {
        height: 69px;
    }
    .recording__line {
        width: 259px;
        height: 4px;
        background: #FFFFFF;
        border-radius: 5px;

        margin: 39px 0 24px 0;
    }
    .recording__line-yellow {
        height: 4px;
        background: #F6C866;
        border-radius: 5px;
        width: 0;

        animation: 2s in-out forwards;
    }
    @keyframes in-out {
        to {
            width: 259px;
        }
    }
    .recording__percent {
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);
    }
    .recording__title {
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);

        margin-top: 12px;
    }



    .end__box-message {
        width: 259px;
        height: 84px;
        background: #FFFFFF;
        border-radius: 5px;

        margin: 24px auto 28px auto;
    }
    .end__message {
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #202024;

        padding: 6px 0;
    }
    span {
        font-weight: bold;
    }
    .end__text {
        font-weight: 300;
        font-size: 14px; 
        line-height: 16px;
        text-align: center;
        color: #FFFFFF;
    }
    .end__box-date {
        width: 259px;
        height: 172px;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 3px;
        margin: 19px auto;
    }
    .end__date {
        font-weight: bold;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        color: #F6C866;

        padding-top: 13px;
    }
    .end__btn {
        display: block;
        width: 238px;
        height: 48px;
        background: linear-gradient(90deg, rgba(76, 217, 100, 0.9) -6.2%, rgba(50, 185, 73, 0.9) 100%);
        border-radius: 50px;
        margin: 21px auto 18px auto;

        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
    }
    .end__user {
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        color: #FFFFFF;
        margin: 16px 0;
    }
    .end__footer {
        font-weight: normal;
        font-size: 7px;
        line-height: 9px;
        text-align: center;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: #9D9D9D;
    }
</style>