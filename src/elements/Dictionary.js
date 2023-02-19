export const dictionary = [
  {
    lang: "en",
    languagebtn_text_1: "Change language",
    downloadpdf_text_1: "Download my CV",
    headerdescription_text_1:
      "Hi ! Im Przemek and i just started my adventure!",
    hiddenmenu_opt1: "Main Menu",
    hiddenmenu_opt2: "About Me",
    hiddenmenu_opt3: "Skills",
    hiddenmenu_opt4: "Repository",
    hiddenmenu_opt5: "Contact",
    aboutmesection_title: "Hi, nice to meet you.",
    aboutmesection_description_1:
      "I'm young and ambitious guy, who is just entering the IT world.",
    aboutmesection_description_2:
      "I graduated with a degree in Mechanical Engeenering, and started work as a constructor. During the 4-year carrer in industry, i started to struggle with problems, that i can't jump over.",
    aboutmesection_description_3:
      "Then my friend, proposed my to try my luck at programming. And here I'm !",
    aboutmesection_description_4:
      "You are visitor of my first publicated website !",
    aboutmesection_description_5:
      "Make yourself like home ! Feedback is more than nessesary :)",
    aboutmesection_description_6: "Yo !",
    skills_title: "Technologies which I'm familiar with, and still learning",
    repository_title: "My Repository",
    repository_description:
      "You should check out my Github, where I pasted a lot of smaller projects:",
    form_title: "Contact Form",
    form_name: "Please, introduce yourself...",
    form_email: "Put your contact email...",
    form_msg: "Message...",
    form_btn: "send",
    form_msg1: "You forgot to introduce Yourself :)",
    form_msg2: "You forgot to type yours email",
    form_msg3: "Please, verify your email",
    form_msg4: "You forgot to type a message",
    form_msg5: "Sended !",
    form_msg6: "Error ! Sorry, it's not your fault !",
  },
  {
    lang: "pl",
    languagebtn_text_1: "Zmień język",
    downloadpdf_text_1: "Pobierz moje CV",
    headerdescription_text_1:
      "Cześć ! Jestem Przemek i właśnie zaczynam swoją przygodę!",
    hiddenmenu_opt1: "Strona główna",
    hiddenmenu_opt2: "O mnie",
    hiddenmenu_opt3: "Umiejętności",
    hiddenmenu_opt4: "Repozytorium",
    hiddenmenu_opt5: "Kontakt",
    aboutmesection_title: "Cześć, miło Cię poznać.",
    aboutmesection_description_1:
      "Jestem młodym i ambitnym chłopakiem, który dopiero wkracza w świat IT.",
    aboutmesection_description_2:
      "Ukończyłem studia z tytułem inżyniera mechanika i podjąłem pracę jako konstruktor. Podczas 4 letniej kariery w branży zacząłem borykać się z problemami, których nie jestem w stanie przeskoczyć.",
    aboutmesection_description_3:
      "Kolega zaproponował mi, abym spróbował swoich sił w programowaniu. I oto jestem !",
    aboutmesection_description_4:
      "Jesteś gościem mojej pierwszej opublikowanej strony !",
    aboutmesection_description_5:
      "Czuj się jak w domu ! Feedback jest bardziej niż konieczny :)",
    aboutmesection_description_6: "Yo !",
    skills_title: "Technologie ,których używam i wciąż się uczę",
    repository_title: "Moje Repozytorium",
    repository_description:
      "Powinieneś sprawdzić mojego Githuba, gdzie wrzucam mniejsze projety:",
    form_title: "Formularz kontaktowy",
    form_name: "Przedstaw się, proszę...",
    form_email: "Podaj swój email...",
    form_msg: "Treść wiadomości...",
    form_btn: "Wyślij",
    form_msg1: "Zapomniałeś/aś się przedstawić",
    form_msg2: "Dodaj swój mail !",
    form_msg3: "Sprawdź swój email",
    form_msg4: "Napisz treść wiadomości",
    form_msg5: "Wysłano !",
    form_msg6: "Error ! Wybacz, to nie z Twojej winy !",
  },
  {
    lang: "de",
    languagebtn_text_1: "Sprache ändern",
    downloadpdf_text_1: "Mein Lebenslauf",
    headerdescription_text_1:
      "Hallo ! Ich bin Przemek und habe gerade mein Abenteuer begonnen!",
    hiddenmenu_opt1: "Hauptmenü",
    hiddenmenu_opt2: "Über Mich",
    hiddenmenu_opt3: "Fähigkeiten",
    hiddenmenu_opt4: "Repository",
    hiddenmenu_opt5: "Kontakt",
    aboutmesection_title: "Hallo, schön dich kennenzulernen.",
    aboutmesection_description_1:
      "Ich bin ein junger und ehrgeiziger Typ, der gerade erst in die IT-Welt einsteigt.",
    aboutmesection_description_2:
      "Ich schloss mein Studium mit einem Abschluss in Maschinenbau ab und begann als Konstrukteur zu arbeiten. Während der 4-jährigen Karriere in der Industrie fing ich an, mit Problemen zu kämpfen, die ich nicht überspringen konnte.",
    aboutmesection_description_3:
      "Dann schlug mir mein Freund vor, mein Glück beim Programmieren zu versuchen. Und hier bin ich!",
    aboutmesection_description_4:
      "Sie sind Besucher meiner ersten veröffentlichten Website !",
    aboutmesection_description_5:
      "Fühlen Sie sich wie zu Hause! Feedback ist mehr als notwendig :)",
    aboutmesection_description_6: "Yo !",
    skills_title: "Technologien, die ich verwende und die ich noch lerne",
    repository_title: "Mein Repository",
    repository_description:
      "Sie sollten sich mein Github ansehen, wo ich kleinere Projekte hochlade:",
    form_title: "Kontakt Formular",
    form_name: "Stelle dich bitte vor...",
    form_email: "Gib mir deine Email...",
    form_msg: "Nachrichteninhalt...",
    form_btn: "schicken",
    form_msg1: "Sie haben vergessen, sich vorzustellen",
    form_msg2: "Sie haben vergessen, Ihre E-Mail-Adresse einzugeben",
    form_msg3: "Bitte bestätigen Sie Ihre E-Mail",
    form_msg4: "Sie haben vergessen, eine Nachricht einzugeben",
    form_msg5: "Gesendet !",
    form_msg6: "Error ! Tut mir leid, es ist nicht deine Schuld !",
  },
];

export const dictionaryStart = (language) => {
  const findLanguage = dictionary.filter((word) => word.lang === language);
  const choosenLanguage = findLanguage[0];
  return choosenLanguage;
};
