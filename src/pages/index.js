import Head from "next/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeUp,
  faExchangeAlt,
  faMicrophone,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const countries = {
  "am-ET": "Amharic",
  "ar-SA": "Arabic",
  "be-BY": "Bielarus",
  "bem-ZM": "Bemba",
  "bi-VU": "Bislama",
  "bjs-BB": "Bajan",
  "bn-IN": "Bengali",
  "bo-CN": "Tibetan",
  "br-FR": "Breton",
  "bs-BA": "Bosnian",
  "ca-ES": "Catalan",
  "cop-EG": "Coptic",
  "cs-CZ": "Czech",
  "cy-GB": "Welsh",
  "da-DK": "Danish",
  "dz-BT": "Dzongkha",
  "de-DE": "German",
  "dv-MV": "Maldivian",
  "el-GR": "Greek",
  "en-GB": "English",
  "es-ES": "Spanish",
  "et-EE": "Estonian",
  "eu-ES": "Basque",
  "fa-IR": "Persian",
  "fi-FI": "Finnish",
  "fn-FNG": "Fanagalo",
  "fo-FO": "Faroese",
  "fr-FR": "French",
  "gl-ES": "Galician",
  "gu-IN": "Gujarati",
  "ha-NE": "Hausa",
  "he-IL": "Hebrew",
  "hi-IN": "Hindi",
  "hr-HR": "Croatian",
  "hu-HU": "Hungarian",
  "id-ID": "Indonesian",
  "is-IS": "Icelandic",
  "it-IT": "Italian",
  "ja-JP": "Japanese",
  "kk-KZ": "Kazakh",
  "km-KM": "Khmer",
  "kn-IN": "Kannada",
  "ko-KR": "Korean",
  "ku-TR": "Kurdish",
  "ky-KG": "Kyrgyz",
  "la-VA": "Latin",
  "lo-LA": "Lao",
  "lv-LV": "Latvian",
  "men-SL": "Mende",
  "mg-MG": "Malagasy",
  "mi-NZ": "Maori",
  "ms-MY": "Malay",
  "mt-MT": "Maltese",
  "my-MM": "Burmese",
  "ne-NP": "Nepali",
  "niu-NU": "Niuean",
  "nl-NL": "Dutch",
  "no-NO": "Norwegian",
  "ny-MW": "Nyanja",
  "ur-PK": "Pakistani",
  "pau-PW": "Palauan",
  "pa-IN": "Panjabi",
  "ps-PK": "Pashto",
  "pis-SB": "Pijin",
  "pl-PL": "Polish",
  "pt-PT": "Portuguese",
  "rn-BI": "Kirundi",
  "ro-RO": "Romanian",
  "ru-RU": "Russian",
  "sg-CF": "Sango",
  "si-LK": "Sinhala",
  "sk-SK": "Slovak",
  "sm-WS": "Samoan",
  "sn-ZW": "Shona",
  "so-SO": "Somali",
  "sq-AL": "Albanian",
  "sr-RS": "Serbian",
  "sv-SE": "Swedish",
  "sw-SZ": "Swahili",
  "ta-LK": "Tamil",
  "te-IN": "Telugu",
  "tet-TL": "Tetum",
  "tg-TJ": "Tajik",
  "th-TH": "Thai",
  "ti-TI": "Tigrinya",
  "tk-TM": "Turkmen",
  "tl-PH": "Tagalog",
  "tn-BW": "Tswana",
  "to-TO": "Tongan",
  "tr-TR": "Turkish",
  "uk-UA": "Ukrainian",
  "uz-UZ": "Uzbek",
  "vi-VN": "Vietnamese",
  "wo-SN": "Wolof",
  "xh-ZA": "Xhosa",
  "yi-YD": "Yiddish",
  "zu-ZA": "Zulu"
};
// country code

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [translateValueT, setTranslateValueT] = useState([]);
  const [textValueFrom, setTextValueFrom] = useState("");
  const [exTranslateFrom, setExTranslateFrom] = useState("en-GB");
  const [exTranslateTo, setExTranslateTo] = useState("bn-IN");
  const toTextTransition = useRef();
  console.log(exTranslateTo);
  const exchangeButton = () => {
    // const fromText = document.querySelector(".from-text");
    // const toText = document.querySelector(".to-text");
    // let tempText = textValueF;
    // fromText.value = translateValueT;
    // setTextValueF(translateValueT)
    setTextValueFrom(translateValueT);
    setTranslateValueT(textValueFrom);
    console.log(translateValueT);
    console.log(textValueFrom);
    setExTranslateTo(exTranslateFrom);
    setExTranslateFrom(exTranslateTo);
  };
  const submitTranslate = (data) => {
    // setExTranslateFrom(data.fromT);
    // setExTranslateTo(data.toT)
    // console.log(value, value2);
    setTextValueFrom(data.fromText);
    // let fromTrans = exTranslateFrom;
    // let toTrans = exTranslateTo;
    let text = textValueFrom;
    if (!text) return;
    if (data.fromText == "") setTranslateValueT("");
    if (data.fromText.length === 0) setTranslateValueT("");
    console.log(text);
    console.log(fromTrans);
    console.log(toTrans);
    // console.log(data.fromText.length);
    //save value to use this exchange button
    // new value set in placeholder inside
    toTextTransition.current.attributes.placeholder.value = "Translating....";
    //api and axios work for translation
    //  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${fromTrans}|${toTrans}`;
    //  axios.get(apiUrl).then((res) => {
    //    // console.log(res.data.matches[].source)
    //    // Object.values(res.data.matches).map((data) => {
    //    res.data.matches.map((data) => {
    //      console.log(data);
    //      if (data.translation.length == 1) {
    //        // don't need a one word so i avoid this
    //        // toTextTransition.current.value = "";
    //        setTranslateValueT([""]);
    //      } else if (data.id === 0 || data.source == exTranslateFrom) {
    //        // to set the value in ref or useState method
    //        // console.log(data.translation);
    //        setTranslateValueT(data.translation);
    //        // toTextTransition.current.value = data.translation;
    //      }
    //    });
    //    toTextTransition.current.attributes.placeholder.value =
    //      "Translator....:)";
    //  });
  };

  const handleControlAxios = () => {
    let text = textValueFrom;
    if (!text) return;
    //api and axios work for translation
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${fromTrans}|${toTrans}`;
    axios.get(apiUrl).then((res) => {
      // console.log(res.data.matches[].source)
      // Object.values(res.data.matches).map((data) => {
      res.data.matches.map((data) => {
        console.log(data);
        if (data.translation.length == 1) {
          // don't need a one word so i avoid this
          // toTextTransition.current.value = "";
          setTranslateValueT([""]);
        } else if (data.id === 0 || data.source == exTranslateFrom) {
          // to set the value in ref or useState method
          // console.log(data.translation);
          setTranslateValueT(data.translation);
          // toTextTransition.current.value = data.translation;
        }
      });
      toTextTransition.current.attributes.placeholder.value =
        "Translator....:)";
    });
  };

  const keyupHandler = () => {
    // console.log("keyup");
    if (!textValueFrom) {
      setTranslateValueT("");
    }
  };

  // const iconHandler = (e) => {
  //   console.log(toTextTransition.current.value);
  //   console.log(e.target.id);
  //   let utterance;
  //   if (e.target.id === "from") {
  //   } else {
  //   }
  // };
  const microHandler = () => {};
  return (
    <>
      <Head>
        <title>Translator App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <h1>GO Translator</h1>
          <form
            // onBlur={handleSubmit(submitTranslate)}
            onChange={handleSubmit(submitTranslate)}
            className="wrapper"
          >
            <div className="text-input">
              <textarea
                onKeyUp={keyupHandler}
                spellCheck="false"
                className="from-text"
                placeholder="Enter Text"
                {...register("fromText")}
                value={textValueFrom}
              ></textarea>
              <textarea
                spellCheck="false"
                readOnly
                disabled
                className="to-text"
                placeholder="Translator"
                ref={toTextTransition}
                value={translateValueT}
              ></textarea>
            </div>
            <ul className="controls">
              <li className="row from">
                <div className="icons1 icons">
                  <FontAwesomeIcon
                    onClick={microHandler}
                    icon={faMicrophone}
                    className="icon microphone"
                    id="from"
                  />
                </div>
                <div className="icons2 icons">
                  <FontAwesomeIcon
                    onClick={() => {
                      if (!textValueFrom || !translateValueT) return;
                      let utterance;
                      utterance = new SpeechSynthesisUtterance(textValueFrom);
                      utterance.lang = exTranslateFrom;
                      speechSynthesis.speak(utterance);
                    }}
                    className="icon volumeUp"
                    icon={faVolumeUp}
                    id="from"
                  />
                </div>
                <select
                  {...register("fromT")}
                  value={exTranslateFrom}
                  onChange={(e) => setExTranslateFrom(e.target.value)}
                >
                  {Object.keys(countries).map((key, i) => {
                    return (
                      <option key={i} value={key}>
                        {countries[key]}
                      </option>
                    );
                  })}
                </select>
              </li>
              <li className="exchange" onClick={exchangeButton}>
                <FontAwesomeIcon icon={faExchangeAlt} className="icon" />
              </li>
              <li className="row to">
                <select
                  {...register("toT")}
                  value={exTranslateTo}
                  onChange={(e) => setExTranslateTo(e.target.value)}
                >
                  {Object.keys(countries).map((key, i) => {
                    return (
                      <option key={i} value={key}>
                        {countries[key]}
                      </option>
                    );
                  })}
                </select>
                <div className="icons1 icons">
                  <FontAwesomeIcon
                    onClick={() =>
                      navigator.clipboard.writeText(
                        toTextTransition.current.value
                      )
                    }
                    icon={faCopy}
                    className="icon copy"
                    id="to"
                  />
                </div>
                <div className="icons2 icons">
                  <FontAwesomeIcon
                    onClick={() => {
                      if (!textValueFrom || !translateValueT) return;
                      let utterance;
                      utterance = new SpeechSynthesisUtterance(translateValueT);
                      utterance.lang = exTranslateTo;
                      speechSynthesis.speak(utterance);
                    }}
                    icon={faVolumeUp}
                    className="icon faVolumeUp"
                    id="to"
                  />
                </div>
              </li>
            </ul>
          </form>
        </div>
      </main>
    </>
  );
}
