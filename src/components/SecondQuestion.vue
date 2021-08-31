<template>
    <div class="second">
        <div class="second__box-quote">
            <p class="second__quote">
                Мы расскажем Вам не только подробности 
                <br>вашей смерти, но также поможем 
                <br>Вам избежать этой ужасной даты и 
                <br>продлить вашу жизнь на многие годы.
            </p>
            <img class="second__img-eye1" src="../assets/img/eye-1.svg" alt="eye-1">
        </div>
        <div class="second__line"></div>
        <p class="second__question">Когда Вы чувствуете себя наиболее <br>комфортно?</p>
        <router-link to="/third"><button class="second__btn">Утро</button></router-link>
        <router-link to="/third"><button class="second__btn">День</button></router-link>
        <router-link to="/third"><button class="second__btn">Вечер</button></router-link>
        <router-link to="/third"><button class="second__btn">Ночь</button></router-link>
        <img class="second__img-eye" src="../assets/img/eye.svg" alt="eye">
        <p class="second__num-question">Вопрос 2-5</p>
    </div>
</template>

<script>

</script>

<style scoped>
    .second__box-quote {
        height: 224px;
        position: relative;
    }
    .second__quote {
        font-family: 'Bad Script', cursive;
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        color: #FFFFFF;
        opacity: 0.6;

        padding-top: 48px;
    }
    .second__img-eye1 {
        position: absolute;
        right: 630px;
        top: 125px;
        width: 150px;
        opacity: 0.2;
        transform: rotate(-9.61deg);
    }
    .second__line {
        width: 100%;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .second__question {
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        color: #F6C866;

        margin: 74px 0 22px 0;
    }
    .second__btn {
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
    .second__img-eye {
        margin-left: 408px;
        width: 89px;
        opacity: 0.6;
    }
    .second__num-question {
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);

        margin: 35px 0 25px 0;
    }
</style>