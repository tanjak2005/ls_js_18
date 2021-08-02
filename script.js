

//1
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

 




