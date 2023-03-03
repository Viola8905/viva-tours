import infoIcon from "../../../../assets/info-icon.png";
import drivingIcon from "../../../../assets/driving-icon.png";
import bookingIcon from "../../../../assets/booking-icon.png";
import excursionIcon from "../../../../assets/excursion-icon.png";
import clockIcon from "../../../../assets/clock-icon.png";
import locationIcon from "../../../../assets/location-icon.png";
import arrowIcon from "../../../../assets/arrow-icon.png";
import Vienna from "../../../../assets/toursImages/Vienna.png";
import Prague from "../../../../assets/toursImages/Prague.png";
import Budapest from "../../../../assets/toursImages/Budapest.png";
import nextArrow from "../../../../assets/next.png";
import prevArrow from "../../../../assets/left-arrow.png";
import buda1 from "../../../../assets/budapestImages/budapest1.webp";
import buda2 from "../../../../assets/budapestImages/budapest2.webp";
import buda3 from "../../../../assets/budapestImages/budapest3.webp";

export const ContentData = {
  title: "Найближчі Тури",
  allToursBtn: "ДИВИТИСЯ ВСІ",
  subtitle: "Комфортно, Цікаво, Якісно!",
  sliderArrows: {
    nextArr: { src: nextArrow, alt: "next slide arrow" },
    prevArr: { src: prevArrow, alt: "prev slide arrow" },
  },
  iconsList: [
    { id: "0", src: infoIcon, alt: "info icon" },
    { id: "1", src: drivingIcon, alt: "driving icon" },
    { id: "2", src: bookingIcon, alt: "booking icon" },
    { id: "3", src: excursionIcon, alt: "excursion icon" },
  ],
  tourCardIcons: {
    location: { src: locationIcon, alt: "location icon" },
    clock: { src: clockIcon, alt: "clock icon" },
    arrow: { src: arrowIcon, alt: "arrow icon" },
  },
  btnTxt: "ДЕТАЛЬНІШЕ",
  toursList: [
    {
      id: "1",
      image: { src: Budapest, alt: "Budapest background image" },
      title: "Будапешт",
      price: "2400 грн",
      period: "11-12 березня",
      distance: {
        from: "Ужгород",
        to: "Будапешт",
      },
      duration: { txt: "Тривалість:", time: "1 день" },
      descr:
        "Пориньтесь у захоплюючі вигляди Старого Міста та величного Собору св. Віта. Старовинна краса Вишеграду складе вам чудову компанію!",
      startDate: "11.03 (субота)",
      endDate: "12.03 (неділя)",
      tourProgram: [
        "4:00 — виїзд з Ужгорода. Зустрічаємося біля готелю Закарпаття і рушаємо до Будапешту. Час в дорозі приблизно 4 години + проходження кордону (приблизно 2-3 години)",
        "10:00-11:15 — Екскурсія площею Героїв, замок Вайдахуняд",
        "11:15-12:00 — переїзд",
        "12:00-13:30 — Екскурсія Рибальским Бастіоном та Королівським Палацем",
        "13:30-14:00 — Переїзд в центр",
        "14:00-18:30 — Вільний час в центрі, можливість самостійно відвідати Базіліку св.Іштвана, пройтись вулочками з чудовими магазинами, скуштувати угорську кухню в численних кафе та ресторанчиках",
        "18:30 Виїзд додому. Прибуття в Ужгород приблизно в 1:00 (залежить від проходження кордону)",
      ],
      serviceInPrice: {
        title: "У вартість входить:",
        list: [
          "Проїзд Opel Vivaro, 8+1 мест",
          "Проїзд до пам’яток",
          "Супровід",
          "Гід-професіонал",
        ],
      },
      serviceOutOfPrice: {
        title: "У вартість не входить",
        list: [
          "Особисте медичне страхування",
          "Вхід в музеї,аквапарки и зоопарки (ви самі оберете, куди хочете зайти)",
        ],
      },

      images: [buda1, buda2, buda3],
    },

    {
      id: "2",
      image: { src: Vienna, alt: "Vienna background image" },
      title: "Різдвяний Відень",
      price: "€250",
      period: "24-26 грудня",
      distance: {
        from: "Ужгород",
        to: "Відень",
      },
      duration: { txt: "Тривалість:", time: "3 дні / 2 ночі " },
      descr:
        "Пориньтесь у захоплюючі вигляди Старого Міста та величного Собору св. Віта. Старовинна краса Вишеграду складе вам чудову компанію!",
      startDate: "11.03 (субота)",
      endDate: "12.03 (неділя)",
      tourProgram: [
        "4:00 — виїзд з Ужгорода. Зустрічаємося біля готелю Закарпаття і рушаємо до Будапешту. Час в дорозі приблизно 4 години + проходження кордону (приблизно 2-3 години)",
        "10:00-11:15 — Екскурсія площею Героїв, замок Вайдахуняд",
        "11:15-12:00 — переїзд",
        "12:00-13:30 — Екскурсія Рибальским Бастіоном та Королівським Палацем",
        "13:30-14:00 — Переїзд в центр",
        "14:00-18:30 — Вільний час в центрі, можливість самостійно відвідати Базіліку св.Іштвана, пройтись вулочками з чудовими магазинами, скуштувати угорську кухню в численних кафе та ресторанчиках",
        "18:30 Виїзд додому. Прибуття в Ужгород приблизно в 1:00 (залежить від проходження кордону)",
      ],
      serviceInPrice: {
        title: "У вартість входить:",
        list: [
          "Проїзд Opel Vivaro, 8+1 мест",
          "Проїзд до пам’яток",
          "Супровід",
          "Гід-професіонал",
        ],
      },
      serviceOutOfPrice: {
        title: "У вартість не входить",
        list: [
          "Особисте медичне страхування",
          "Вхід в музеї,аквапарки и зоопарки (ви самі оберете, куди хочете зайти)",
        ],
      },

      images: [buda1, buda2, buda3],
    },
  ],
};
