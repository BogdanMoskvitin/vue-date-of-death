<template>
    <div class="third">
        <div class="third__box-quote">
            <p class="third__quote">
                Уже совсем скоро Вы узнаете 
                <br>много интересного о своем будущем!
            </p>
            <img class="third__img-eye1" src="../assets/img/eye-1.svg" alt="eye-1">
        </div>
        <div class="third__line"></div>
        <p class="third__question">Укажите свою дату рождения:</p>

        <form @submit="checkForm">
            <select :class="{ 'active': activeDay==true }" class="third__input" name="day" v-model="day">
                <option>День</option>
                <option class="third__option" v-for="day in days" :key="day">{{day}}</option>
            </select>

            <select :class="{ 'active': activeMonth==true }" class="third__input" name="month" v-model="month">
                <option>Месяц</option>
                <option class="third__option" v-for="month in months" :key="month">{{month}}</option>
            </select>

            <select :class="{ 'active': activeYear==true }" class="third__input" name="year" v-model="year">
                <option>Год</option> 
                <option class="third__option" v-for="year in years" :key="year">{{year}}</option>
            </select>

            <button class="third__btn" type="submit">Далее</button>
        </form>

        

        <img class="third__img-eye" src="../assets/img/eye.svg" alt="eye">
        <p class="third__num-question">Вопрос 3-5</p>
    </div>    
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                activeDay: false,
                activeMonth: false,
                activeYear: false,
                day: "День",
                month: "Месяц",
                year: "Год",
                days: [
                    "01","02","03","04","05","06","07","08","09","10",
                    "11","12","13","14","15","16","17","18","19","20",
                    "21","22","23","24","25","26","27","28","29","30","31"
                ],
                months: ["01","02","03","04","05","06","07","08","09","10","11","12"],
                years: [
                    "1921","1922","1923","1924","1925",
                    "1926","1927","1928","1929","1930",
                    "1931","1932","1933","1934","1935",
                    "1936","1937","1938","1939","1940",
                    "1941","1942","1943","1944","1945",
                    "1946","1947","1948","1949","1950",
                    "1951","1952","1953","1954","1955",
                    "1956","1957","1958","1959","1960",
                    "1961","1962","1963","1964","1965",
                    "1966","1967","1968","1969","1970",
                    "1971","1972","1973","1974","1975",
                    "1976","1977","1978","1979","1980",
                    "1981","1982","1983","1984","1985",
                    "1986","1987","1988","1989","1990",
                    "1991","1992","1993","1994","1995",
                    "1996","1997","1998","1999","2000",
                    "2001","2002","2003"
                ]
            }
        },
        computed: {
            ...mapGetters([
                'STATE_YEAR'
            ])
        },
        methods: {
            ...mapActions([
                'TOGGLE_YEAR'
            ]),
            checkForm(e) {
                if (this.year != "Год" && this.month != "Месяц" && this.day != "День") {
                    this.TOGGLE_YEAR(this.year)
                    this.$router.push('/fourth')
                } else {
                    if(this.year == "Год") this.activeYear = true
                    if(this.month == "Месяц") this.activeMonth = true
                    if(this.day == "День") this.activeDay = true
                }
                e.preventDefault();
            }
        }
        
    }
</script>

<style scoped>
    .third__box-quote {
        height: 224px;
        position: relative;
    }
    .third__quote {
        font-family: 'Bad Script', cursive;
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        color: #FFFFFF;
        opacity: 0.6;

        padding-top: 48px;
    }
    .third__img-eye1 {
        position: absolute;
        right: 630px;
        top: 125px;
        width: 150px;
        opacity: 0.2;
        transform: rotate(-9.61deg);
    }
    .third__line {
        width: 100%;
        height: 0px;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .third__question {
        font-weight: normal;
        font-size: 25px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        color: #F6C866;

        margin: 74px 0 22px 0;
    }
    .third__btn {
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
    .third__input {
        display: block;
        width: 310px;
        height: 70px;
        background: linear-gradient(90deg, rgba(228, 228, 228, 0.9) -6.2%, rgba(203, 203, 203, 0.9) 100%);
        border-radius: 50px;
        margin: 0 auto;

        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;

        margin-bottom: 35px;

        text-align-last: center;
    }
    .third__option {
        color: black;
    }
    .third__img-eye {
        margin-left: 408px;
        width: 89px;
        opacity: 0.6;
    }
    .third__num-question {
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.6);

        margin: 35px 0 25px 0;
    }
    .active {
        border: solid red 2px;
    }
</style>