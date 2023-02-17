import styled from "styled-components";
import { ImCross } from "react-icons/im";

const RodoCookies = ({ setVisibleCookie }) => {
  const admin =
    "DANIEL PASZEK CYCLO TRENER, adres e-mail: info@cyclotrener.pl tel. +48 606 475 397";
  const website = "cycloagaete.pl";

  return (
    <>
      <Wrapper>
        <button onClick={() => setVisibleCookie(false)}>
          <ImCross />
        </button>
        <div className="title">
          <h2>Polityka Prywatności i Cookies</h2>
        </div>
        <h2>Polityka Prywatności</h2>
        <p>
          Zgodnie z art. 13 ust. 1 i ust. 2 rozporządzenia Parlamentu
          Europejskiego i Rady (UE) 2016/679 z 27 kwietnia 2016 r. w sprawie
          ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i
          w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
          95/46/WE (RODO), informujemy:
        </p>
        <p> Administratorem Pani/Pana danych osobowych jest {admin}. </p>
        <p>
          {" "}
          Ochrona danych odbywa się zgodnie z wymogami powszechnie
          obowiązujących przepisów prawa. Szanujemy prawo do prywatności i dbamy
          o bezpieczeństwo danych. W tym celu używany jest m.in. bezpieczny
          protokół szyfrowania komunikacji (SSL), a dane przechowywane są na
          zabezpieczonych serwerach, komputerach i u podmiotów trzecich (m.in.
          biuro rachunkowe, bank).Państwa zwykłe dane osobowe (np. imię,
          nazwisko, adres korespondencyjny, mail, numer telefonu, adres
          rozliczeniowy, NIP) mogą być przekazane Administratorowi za pomocą
          podanego numeru telefonu, adresu e-mail, oraz formularza dostępnego na
          stronie internetowej {website}. Dane mogą być zbierane także podczas
          firmowych eventów jak wystawy, targi, pokazy.{" "}
        </p>
        <p>
          {" "}
          Nasza strona internetowa {website} nie zbiera w sposób automatyczny
          żadnych informacji, z wyjątkiem informacji zawartych w plikach
          cookies. Więcej o plikach cookies (tzw. „ciasteczka”) w naszej
          Polityce cookies.{" "}
        </p>
        <p>
          {" "}
          Przetwarzanie Pani/Pana danych osobowych będzie się odbywać na
          podstawie art. 6 RODO. Administrator powołuje się na prawnie
          uzasadniony interes, którym jest zbieranie danych statystycznych i
          analizowanie ruchu na stronie internetowej. Państwa dane zbierane są w
          celu:{" "}
          <li>
            prowadzenie korespondencji z Klientami, w tym udzielania odpowiedzi
            na wiadomości, zapytania oraz prośbę o ofertę.
          </li>{" "}
          <li>
            zawarcie i realizację Umowy o Świadczenie Usług lub Umowa Sprzedaży.
          </li>{" "}
        </p>
        <p>
          Dane Osobowe przetwarzane są na podstawie zgody wyrażanej przez
          Państwa:
          <li>
            dobrowolną zgodę w przypadku danych wprowadzanych w formularzach w
            celu wynikającym z funkcji konkretnego formularza np. w celu
            kontaktowym.
          </li>{" "}
          <li>
            obowiązkowe w celu zawarcia i wykonywania Umowy Sprzedaży / Umowy o
            świadczenie usług, będąc niezbędne do realizacji celów sprzedażowych
            bądź wynikające z obowiązków prawnych.
          </li>
        </p>
        <p>
          W niektórych sytuacjach dane Klienta mogą być przekazywane podmiotom
          trzecim. Odbiorcami danych Klienta są:{" "}
          <li>
            upoważnieni pracownicy w celu wykonania powierzonych im obowiązków
          </li>
          <li>serwisanci oprogramowania i sprzętu komputerowego</li>
          <li>Bank</li>
          <li>Biuro rachunkowe</li>
          <li>Firma hostingowa</li>
          <li>Inni partnerzy: Facebook, Google AdWords, Google Analytics</li>
        </p>
        <p>
          Pani/Pana dane osobowe będą przechowywane przez okres 5 lat do czasu
          wykorzystywania możliwości marketingowych i analizy danych potrzebnych
          do prowadzenia działalności gospodarczej. W przypadku zawierania z
          Nami umowy, Twoje dane osobowe będą przez Nas przetwarzane przez cały
          czas, przez który umowa będzie wykonywana, a także później tj. do
          czasu upływu terminu przedawnienia ewentualnych roszczeń wynikających
          z umowy i w związku z realizacją 5 letniego obowiązku
          archiwizacyjnego.
        </p>
        <p>
          Posiada Pani/Pan prawo dostępu do treści swoich danych osobowych,
          prawo do ich sprostowania, usunięcia, jak i również prawo do
          ograniczenia ich przetwarzania/ prawo do cofnięcia zgody, prawo do
          przenoszenia danych, prawo do wniesienia sprzeciwu wobec przetwarzania
          Pani/Pana danych osobowych. Przysługuje Pani/Panu prawo wniesienia
          skargi do organu nadzorczego, jeśli Pani/Pana zdaniem, przetwarzanie
          danych osobowych Pani/Pana – narusza przepisy unijnego rozporządzenia
          RODO.{" "}
        </p>
        <p>
          Dane osobowe pozostawione w serwisie nie zostaną sprzedane ani
          udostępnione osobom trzecim, zgodnie z przepisami Ustawy o ochronie
          danych osobowych.
        </p>
        <h2>Polityka Cookies</h2>
        <p>
          Serwis nie zbiera w sposób automatyczny żadnych informacji, z
          wyjątkiem informacji zawartych w plikach cookies. Pliki cookies (tzw.
          „ciasteczka”) stanowią dane informatyczne, w szczególności pliki
          tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika
          Serwisu i przeznaczone są do korzystania ze stron internetowych
          Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z
          której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz
          unikalny numer.
        </p>
        <p>
          Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu
          pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu –
          {admin}.
        </p>
        <p>
          Pliki cookies wykorzystywane są w celu: <br /> 1. Dostosowania
          zawartości stron internetowych Serwisu do preferencji Użytkownika oraz
          optymalizacji korzystania ze stron internetowych; w szczególności
          pliki te pozwalają rozpoznać urządzenie Użytkownika Serwisu i
          odpowiednio wyświetlić stronę internetową, dostosowaną do jego
          indywidualnych potrzeb; <br /> 2. Tworzenia statystyk, które pomagają
          zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron
          internetowych, co umożliwia ulepszanie ich struktury i zawartości;
        </p>
        <p>
          W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
          „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies
          „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu
          końcowym Użytkownika do czasu wylogowania, opuszczenia strony
          internetowej lub wyłączenia oprogramowania (przeglądarki
          internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu
          końcowym Użytkownika przez czas określony w parametrach plików cookies
          lub do czasu ich usunięcia przez Użytkownika.
        </p>
        <p>
          W wielu przypadkach oprogramowanie służące do przeglądania stron
          internetowych (przeglądarka internetowa) domyślnie dopuszcza
          przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
          Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
          dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
          szczególności w taki sposób, aby blokować automatyczną obsługę plików
          cookies w ustawieniach przeglądarki internetowej bądź informować o ich
          każdorazowym zamieszczeniu w urządzeniu Użytkownika Serwisu.
          Szczegółowe informacje o możliwości i sposobach obsługi plików cookies
          dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).
        </p>
        <br />
        <span>
          Treść Polityki cookies na tej stronie powstała dzięki uprzejmości IAB
          Polska, które udostępniło jej wzór (© IAB Polska) na stronie
          www.wszystkoociasteczkach.pl.
        </span>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  width: 95vw;
  height: 95vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999999999;
  color: var(--primaryColor);
  overflow: auto;
  padding: 5vh 5vw;
  border-radius: 5px;
  border: 3px solid var(--secondaryColor);
  box-shadow: 3vw 3vw 3vw 15vw #222;
  h2,
  h1 {
    text-align: center;
    text-shadow: none;
    font-family: var(--titleFont);
  }
  h2 {
    color: var(--secondaryColor);
    text-transform: uppercase;
    margin: 5vh auto;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 2vh;
  }
  button {
    position: absolute;
    top: 5vh;
    right: 5vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--secondaryColor);
    cursor: pointer;
    padding: 10px;
    transition: 0.4s;
    :hover {
      color: #111;
    }
    @media screen and (max-width: 800px) {
      right: 80vw;
    }
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    padding: 10px;
    border-radius: 0px;
    box-shadow: none;
    p {
      text-align: justify;
      padding: 15px;
    }
    .title {
      margin: 10vh auto 5vh;
      text-align: center;
    }
    h1 {
      font-size: 2rem;
      margin-top: 10vh;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default RodoCookies;
