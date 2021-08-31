<template>
    <div class="home">
        <p class="home__title">Лучшие астрологи и экстрасенсы Румынии</p>
        <div class="home__line"></div>
        <p class="home__accuracy">Точность прогноза: 97%</p>
        <img class="home__img-woman" src="../assets/img/woman1.png" alt="woman1">
        <p class="home__question">Вас беспокоит вопрос о том, когда Вы покинете этот Мир и при каких обстоятельствах?</p>
        <a href="#second"><button class="home__btn">Да</button></a>
        <button class="home__btn">Нет</button>
        <p class="home__online">Онлайн предсказание</p>
        <img class="home__img-hands" src="../assets/img/hands.png" alt="hands">
        <div class="home__box-text">
            <p class="home__text">
                Позвольте нам раскрыть эту 
                <br>волнующую тайну и 
                <br><span>с точностью определить дату 
                <br>и время вашей смерти,</span> а 
                <br>также предшествующую 
                <br>этому событию причину
            </p>
        </div>
        <div class="home__box-img">
            <p class="home__text-img">
                Многие не верят 
                <br>предсказаниям и мы решили 
                <br>доказать каждому,
                <br><span>что прогноз может 
                <br>изменить жизнь любого человека!</span>
            </p>
        </div>
        <p class="home__first-question">Боитесь ли вы умереть?</p>

        <router-link to="/second" id="second"><button class="home__btn">Да</button></router-link>
        <router-link to="/second"><button class="home__btn">Нет</button></router-link>

        <p class="home__num-question">Вопрос 1-5</p>

        <div class="home__box-rune">
            <img class="home__img-eye" style="opacity: 0;" src="../assets/img/eye.svg" alt="eye">
            <img class="home__img-rune" src="../assets/img/rune1.svg" alt="rune1">
            <img class="home__img-eye1" src="../assets/img/eye-1.svg" alt="eye-1">
        </div>
        <p class="home__quote">
            Вы, конечно, умрете. 
            <br>И все, с кем вы знакомы, 
            <br>тоже однажды умрут.
        </p>
        <div class="home__box-rune" style="margin-bottom: 48px;">
            <img class="home__img-eye" src="../assets/img/eye.svg" alt="eye">
            <img class="home__img-rune" src="../assets/img/rune2.svg" alt="rune2">
            <img class="home__img-eye1" style="opacity: 0;" src="../assets/img/eye-1.svg" alt="eye-1">
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .home {
        background-image: url(../assets/img/blik.png);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0% -78%;
    }
    .home__title {
        font-family: Roboto;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);

        padding-top: 30px;
        margin: 0 0 20px 0;
    }
    .home__line {
        width: 100%;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .home__accuracy {
        font-weight: 300;
        font-size: 25px;
        line-height: 29px;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);

        margin: 12px 0 64px 0;
    }
    .home__img-woman {
        display: block;
        height: 250px;
        border-radius: 100%;
        margin: 0 auto;
    }
    .home__question {
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        color: #F6C866;

        margin: 23px 0 40px 0;
    }
    .home__btn {
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
    .home__online {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);

        margin-bottom: 24px;
    }
    .home__img-hands {
        display: block;
        height: 150px;
        margin: 0 auto -75px auto;
    }
    .home__box-text {
        width: 442px;
        height: 437px;
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 3px;
        margin: 0 auto;
        margin-bottom: 69px;
    }
    .home__text {
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        color: #FFFFFF;

        margin-top: 128px;
    }
    .home__box-img {
        width: 1440px;
        height: 606px;
        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../assets/img/image7.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0% 50%;
        margin: 0 auto;
    }
    .home__text-img {
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        color: #FFFFFF;    

        padding-top: 240px;
    }
    .home__first-question {
        font-weight: normal;
        font-size: 25px;
        line-height: 29px;
        text-align: center;
        text-transform: uppercase;
        color: #F6C866;

        margin: 133px 0 46px 0;
    }
    .home__num-question {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);
    }
    .home__box-rune {
        display: flex;
        justify-content: space-between;
        margin: 0 150px;
    }
    .home__img-eye {
        width: 160px;
        opacity: 0.6;
    }
    .home__img-rune {
        width: 56px;
        margin-left: 140px;
    }
    .home__img-eye1 {
        width: 300px;
        opacity: 0.6;
    }
    .home__quote {
        font-family: 'Bad Script', cursive;
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        color: #FFFFFF;
    }
    span {
        color: #F6C866;
    }
</style>