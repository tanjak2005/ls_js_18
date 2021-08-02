// const box = {
//     height: 0,
//     width: 0,
//     length: 0,
//     get size () {
//       return [ this.height, this.width, this.length ];
//     },
//     set size(size) {
//       [ this.height, this.width, this.length ] = size;
//     }
//    };

   // Переписать на конструктор

   function Box() {
    this.height = 10;
    this.width = 10;
    this.length = 10;
    Object.defineProperty(this, 'size', {
        get() {
            return [ this.height, this.width, this.length ];  
        },
        set(size) {
            [ this.height, this.width, this.length ] = size; 
        },
    });

}
const box = new Box();
box.size = [1, 2, 3];
console.log(box.size);


//2
const cities = [
    // массив нашик опшенов для селекта
    {
      name: "Москва",
      timeZone: "Europe/Moscow",
    },
    {
      name: "Лондон",
      timeZone: "Europe/London",
    },
    {
      name: "Токио",
      timeZone: "Asia/Tokyo",
    },
    {
      name: "Пекин",
      timeZone: "Asia/Shanghai",
    },
  ];
  
  /**
   * getDateAndTimeByTimeZone возвращает дату и в ремя для переданной таймзоны
   * @param {string} tz, таймзона https://www.iplocate.com/en/resources/timezones
   * @returns {object}, объект с датой и временем, пример:  {date: "2 августа", time: "01:45:41"}
   */
  function getDateAndTimeByTimeZone(tz = "Europe/Moscow") {
    const date = new Date();
  
    return {
      date: date.toLocaleDateString("ru", {
        month: "long",
        day: "numeric",
        timeZone: tz,
      }),
      time: date.toLocaleTimeString("ru", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: tz,
      }),
    };
   
  }
  console.log(Date());
  
  cities.forEach((city) => {
    console.log(getDateAndTimeByTimeZone(city.timeZone)); // вывод времени и даты для каждой зоны
  });

  const london = document.querySelector('.london');
  const moskow = document.querySelector('#moskow');
  const tokio = document.querySelector('#tokio');
  const pekin = document.querySelector('#pekin');

const getDateAndTimeByTimeZoneNew = getDateAndTimeByTimeZone.bind(document.querySelector('#app'));

getDateAndTimeByTimeZoneNew();

london.addEventListener('click', getDateAndTimeByTimeZoneNew);

 




