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

export const ContentData = {
  title: "Найближчі Тури",
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
    },
    {
      id: "3",
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
    },
    {
      id: "4",
      image: { src: Prague, alt: "Prague background image" },
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
    },
    {
      id: "5",
      image: { src: Budapest, alt: "Budapest background image" },
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
    },
  ],
};
