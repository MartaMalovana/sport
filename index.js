const cities = [
    {
    "city": "київ",
    "country": "України"
    },
    {
    "city": "вашингтон",
    "country": "США"
    },
    {
    "city": "лондон",
    "country": "Великобританії"
    }
];

const sport = [
    {
        "type": "футбол",
        "champion": "Ліонелем Мессі"
    },
    {
        "type": "бокс",
        "champion": "Віталієм Кличко"
    },
    {
        "type": "карате",
        "champion": "Джекі Чаном"
    }
];

function getUser () {
    const form = document.querySelector('form');
    form.addEventListener('submit', getInfo);

    function getInfo (e) {
        e.preventDefault();
        // Name
        const name = document.querySelector('[name=name]').value;
        // Age
        const year = document.querySelector('[name="year"]').value;
        const age = Math.abs(Number((new Date().getFullYear())) - Number(year));
        let seriously = false;
        if(age > Number(100) || age < 3) {
            seriously = true;
        };
        //City
        const inputCity = document.querySelector('[name="city"]').value;
        let countryToShow = null;
        cities.find(({city, country}) => {
            if(city === inputCity.toLowerCase()) {
                countryToShow = country;
            };
        });
        //Sport
        const inputSport = document.querySelector('[name="sport"]').value;
        let champToShow = null;
        sport.find(({type, champion}) => {
            if(type === inputSport) {
                champToShow = champion;
            };
        });
        //Show info
        const info = document.querySelector('.info');
        const a = document.querySelector('.name-age');
        const b = document.querySelector('.country');
        const c = document.querySelector('.champion');

        form.style.display = 'none';
        info.style.display = 'flex';
        a.textContent = seriously ? `${name}, ${age} років (cерйозно ${age}?)` : `${name}, ${age} років.`;
        b.textContent = countryToShow ? `Ти живеш у столиці  ${countryToShow}` : `Ти живеш у місті  ${inputCity}`;
        c.textContent = champToShow ? `Круто! Хочеш стати  ${champToShow}?` : `${inputSport[0].toUpperCase()}${inputSport.slice(1)} - це круто!` 
    };
};

getUser();