<template>
    <div>
        <div class="fourth">
            <div class="fourth__box-quote">
                <p class="fourth__quote">
                    Смерть родного человека – одно из 
                    <br>тяжелейших испытаний в жизни каждого 
                    <br>из нас!
                </p>
                <img class="fourth__img-eye1" src="../assets/img/eye-1.svg" alt="eye-1">
            </div>
            <div class="fourth__line"></div>
            <p class="fourth__question">Снятся ли Вам умершие люди?</p>

            <router-link to="/fifth"><button class="fourth__btn">Да</button></router-link>
            <router-link to="/fifth"><button class="fourth__btn">Нет</button></router-link>
            <router-link to="/fifth"><button class="fourth__btn">Иногда</button></router-link>
            <img class="fourth__img-eye" src="../assets/img/eye.svg" alt="eye">
            <p class="fourth__num-question">Вопрос 4-5</p>
        </div>



        <div class="loading">
            <div class="loading__box">
                <img class="loading__img" src="../assets/img/loading.svg" alt="loading">
                <p class="loading__text">Loading</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .fourth__box-quote {
        height: 224px;
        position: relative;
    }
    .fourth__quote {
        font-family: 'Bad Script', cursive;
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        color: #FFFFFF;
        opacity: 0.6;

        padding-top: 48px;
    }
    .fourth__img-eye1 {
        position: absolute;
        right: 630px;
        top: 125px;
        width: 150px;
        opacity: 0.2;
        transform: rotate(-9.61deg);
    }
    .fourth__line {
        width: 100%;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .fourth__question {
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        color: #F6C866;

        margin: 74px 0 22px 0;
    }
    .fourth__btn {
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
    .fourth__img-eye {
        margin-left: 408px;
        width: 89px;
        opacity: 0.6;
    }
    .fourth__num-question {
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);

        margin: 35px 0 25px 0;
    }



    .loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: #202024;;

        animation: cssAnimation 0s ease-in 2s forwards;
        animation-fill-mode: forwards;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    @keyframes cssAnimation {
        to {
            width:0;
            height:0;
            overflow:hidden;
        }
    }
    .loading__box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .loading__img {
        width: 73px;
    }
    .loading__text {
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);

        margin-top: 27px;
    }
</style>