function changeLanguage(language) {
  if (language === 'de') {
    document.documentElement.lang = 'de';
    updateTextContent('about-heading', 'Über mich');
    updateTextContent('aboutP1', 'Wer ist Can Demirayak? Zweifellos hat diese Frage unzählige große Köpfe im Laufe der Geschichte beschäftigt. Sie hallt durch die Annalen der Zeit, fesselt die Vorstellungskraft von Gelehrten, Wissenschaftlern und natürlich auch von Spiegel-Enthusiasten. Denn in der rätselhaften Persönlichkeit von Can Demirayak entdeckt man eine außergewöhnliche Verschmelzung von unglaublicher Intelligenz, unwiderstehlicher Attraktivität und beispielloser Bescheidenheit.');
    updateTextContent('projects-heading', 'Projekte');
    updateTextContent('contact-heading', 'Kontaktiere mich');
    updateTextContent('rights-reserved', '© 2023 Can Demirayak');
    updateProjectTexts('de');
  } else {
    document.documentElement.lang = 'en';
    updateTextContent('about-heading', 'About Me');
    updateTextContent('aboutP1', '"Who is Can Demirayak? No doubt, this question has been pondered by countless great minds throughout history. It echoes through the annals of time, captivating the imagination of scholars, scientists, and, of course, mirror enthusiasts. For within the enigmatic persona of Can Demirayak, one discovers an extraordinary fusion of <span class="about-highlight">unbelievable intelligence</span>, <span class="about-highlight">irresistible handsomeness</span>, and <span class="about-highlight">unparalleled humility</span>."');
    updateTextContent('projects-heading', 'Projects');
    updateTextContent('contact-heading', 'Contact Me');
    updateTextContent('rights-reserved', '© 2023 Can Demirayak');
    updateProjectTexts('en');
  }
}

function updateTextContent(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = text;
  }
}

function updateProjectTexts(language) {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    const heading = project.querySelector('h3');
    const description = project.querySelector('p');
    const downloadButton = project.querySelector('.download-button');
    
    if (heading && description && downloadButton) {
      switch (heading.textContent.trim()) {
        case 'Slurp Quest':
          updateTextContent(heading.id, language === 'de' ? 'Schlürf-Quest' : 'Slurp Quest');
          updateTextContent(description.id, language === 'de' ? 'Hergestellt zum 6. Jahrestag von Slurpwis. Einer der wenigen Streamer da draußen, die tatsächlich etwas Interessantes tun! Das Gameplay selbst ist ziemlich langweilig, da das Spiel größtenteils um lustige Referenzen und Witze geht, also macht es keinen Sinn zu spielen, wenn du es schon gesehen hast. Oh, auch, leider war dieses Spiel ein bisschen überstürzt, es könnte von außen gut aussehen, aber innen? Nun... sagen wir einfach, dass es NICHT der sauberste noch der optimierteste Code ist, den ich je geschrieben habe. Aber es funktioniert, und es ist ein vollständiges Spiel. Das ist alles was zählt!' : 'Made for the 6th anniversary of Slurpwis. One of the few streamers out there who actually do something interesting! The gameplay itself is quite boring as the game is mostly about the funny references and jokes, so no point in playing if you have already seen it. Oh also, unfortunately this game was a <i>bit</i> rushed, it might look fine on the outside, but inside? Well... let\'s just say that it is NOT the cleanest nor the most optimised code I have ever written. But it is working, and it is a complete game. That is all that matters!');
          downloadButton.textContent = language === 'de' ? 'Herunterladen' : 'Download';
          break;
        case 'Bad Space Shooter':
          updateTextContent(heading.id, language === 'de' ? 'Schlechter Weltraum-Shooter' : 'Bad Space Shooter');
          updateTextContent(description.id, language === 'de' ? 'Das war ein Spiel, das ich gemacht habe, um den Prozess des Veröffentlichens im Google Play Store zu verstehen. Ich habe auch gelernt, wie man Werbung in meine Spiele implementiert und bin genau auf 0,00 Dollar gekommen. Leider wurde das Spiel aus dem Store entfernt, da ich aufgehört habe, es zu aktualisieren. Ich konnte auch keine Builds des Spiels finden, daher führt der Download-Button stattdessen zum Unity-Projektordner (Ich habe es nicht geschafft, es in einen Build umzuwandeln. Zu viele Fehler in diesem Schlingel!). Du könntest versuchen, es in Unity zu öffnen und damit herumzuspielen.' : 'This was a game I made to understand the process of putting something up in the Google Play Store. I have also learned how to implement ads in my games and proceeded to gain exactly 0.00 dollars. Unfortunately the game has been removed from the store as I have stopped updating it. I also wasn\'t able to find any builds of the game so the download button will take you to the Unity project folder instead (Haven\'t managed to turn it into a build. Way too many errors in this bad boy!). You might try opening it in Unity and mess around with it.');
          downloadButton.textContent = language === 'de' ? 'Herunterladen' : 'Download';
          break;
        case 'Terra Incognita':
          updateTextContent(heading.id, language === 'de' ? 'Terra Incognita' : 'Terra Incognita');
          updateTextContent(description.id, language === 'de' ? 'Schon lange hege ich eine Faszination für Themen wie Wirtschaft, Demografie, Logistik und den Lebenszyklus großer Organisationen wie Imperien, wie ihre Teile sich alle bewegen, verändern und sich gegenseitig und die Welt außerhalb der Organisation beeinflussen. Ich wollte ein absurd tiefes Strategiespiel machen. Terra Incognita soll die Komplexität von Paradox-Spielen wie Victoria (aber NOCH TIEFER) und den Spaß und die Erkundung eines Spiels wie Civilization haben. Es ist noch lange kein lustiges oder sogar spielbares Spiel. Aber ich glaube, es könnte irgendwann dorthin kommen!' : 'Long have I harbored a fascination for subjects such as economics, demographics, logistics, and the lifecycle of large organizations like empires, how their parts all keep moving, changing and effecting each other and the world outside of the organisation. I wanted to make a ridiculously deep strategy game. Terra Incognita is supposed to have the complexity of paradox games like Victoria (but EVEN DEEPER) and the fun and exploration of a game like Civilization. It is nowhere near a fun or even playable game yet. But I believe it might get there one day!');
          downloadButton.textContent = language === 'de' ? 'Herunterladen' : 'Download';
          break;
        case 'Dungeon Delver':
          updateTextContent(heading.id, language === 'de' ? 'Dungeon-Delver' : 'Dungeon Delver');
          updateTextContent(description.id, language === 'de' ? 'Ich hatte in der Vergangenheit ein wenig Probleme mit Unity. Dungeon Delver ist das Ergebnis dieser Trennung und meiner anschließenden Versuche, eine bessere Engine zu finden. Leider habe ich nach einiger Zeit, in der ich versucht habe, mich an Godot zu gewöhnen, erkannt, dass ich wie eine misshandelte Ehefrau zu ihrem Ehemann zurückkehren musste, bin ich zu Unity zurückgekehrt. Daher ist dieses Projekt offiziell aufgegeben. ABER! Ich bin ziemlich stolz auf meinen Level-Generator. Die Pixelkunst sieht auch ziemlich niedlich aus, um ehrlich zu sein.' : 'I have had a bit of a falling out with Unity in the past. Dungeon Delver is a result of that breakup and my subsequent attempts of finding a better engine. Unfortunately after some time trying to get used to Godot I have realized that just like a battered wife returning to her husband I had to return to Unity. Therefore, this project is officially abandoned. HOWEVER! I am quite proud of my level generator. The pixel art also looks quite cute not gonna lie.');
          downloadButton.textContent = language === 'de' ? 'Herunterladen' : 'Download';
          break;
        case 'Big Honey':
          updateTextContent(heading.id, language === 'de' ? 'Großer Honig' : 'Big Honey');
          updateTextContent(description.id, language === 'de' ? 'Großer Honig ist eine einfache Website, du hast einen Knopf, du drückst den Knopf, Honig wird größer. Ziemlich einfach. Die eigentliche Frage ist, wie groß kann Honig werden? Nun, du könntest fragen "Warum heißt es ein Download-Button und kein Besuche-die-Seite-Button?" Nun, weil ich es mag, wenn Ordnung und Einheitlichkeit herrscht. (!!!Die Seite ist vorübergehend nicht verfügbar!!!)' : 'Big Honey is a simple website, you have a button, you press the button, honey gets bigger. Quite simple. The real question is, how big can honey get? Now you might ask "Why is it called a download button and not a visit the site button?" well, because I like it when there is order and uniformity. (!!!The site is temporarily down!!!)');
          downloadButton.textContent = language === 'de' ? 'Herunterladen' : 'Download';
          break;
        case 'Slurp Quest 2':
          updateTextContent(heading.id, language === 'de' ? 'Schlürf-Quest 2' : 'Slurp Quest 2');
          updateTextContent(description.id, language === 'de' ? 'Ich möchte hier keine Spoiler geben, da es als Überraschung für den Jahrestag gedacht ist. Aber sagen wir einfach, dass dieses hier ein richtiger Kracher wird! (Wenn ich tatsächlich alle Funktionen implementieren kann, die ich geplant habe, ohne meine Lebensfreude zu verlieren.)' : 'I wouldn\'t want to give any spoilers here as it is meant to be a surprise for the anniversary. But let\'s just say that this one will be a real banger! <small>(If I can actually implement all the features I have planned without losing my will to live.)</small>');
          downloadButton.textContent = language === 'de' ? 'Herunterladen' : 'Download';
          break;
        case 'Peasant King':
          updateTextContent(heading.id, language === 'de' ? 'Bauernkönig' : 'Peasant King');
          updateTextContent(description.id, language === 'de' ? 'Ich kann nur zwei Dinge über Bauernkönig sagen. Erstens, es ist mein Traumspiel. Es ist das Spiel, das ich immer spielen wollte, und du weißt, was sie sagen "Wenn du etwas richtig machen willst, musst du es selbst machen!" Das zweite ist das hier, Bauernkönig WIRD fertig sein! Ich werde diese Idee in die Realität umsetzen, egal was passiert! Egal wie viel Blut, Schweiß und Tränen es kostet, DER. JOB. WIRD. GEMACHT.' : 'I can say only two things about Peasant King. Firstly, it is my dream game. It is the game I have always wanted to play, and you know what they say "If you want something done right, you have to do it yourself!" The second thing is this, Peasant King WILL be finished! I WILL turn this idea into reality no matter what happens! No matter how much blood, sweat, and tears it costs, THE. JOB. WILL. BE. DONE.');
          downloadButton.textContent = language === 'de' ? 'Herunterladen' : 'Download';
          break;
        default:
          break;
      }
    }
  });
}