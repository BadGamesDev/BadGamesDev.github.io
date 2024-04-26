function changeLanguage(language) {
    if (language === 'de') {
      document.documentElement.lang = 'de';
      updateTextContent('about-heading', 'Über mich');
      updateTextContent('aboutP1', '"Wer ist Can Demirayak? Zweifellos hat diese Frage unzählige große Köpfe im Laufe der Geschichte beschäftigt. Sie hallt durch die Annalen der Zeit, fesselt die Vorstellungskraft von Gelehrten, Wissenschaftlern und natürlich auch von Spiegel-Enthusiasten. Denn in der rätselhaften Persönlichkeit von Can Demirayak entdeckt man eine außergewöhnliche Verschmelzung von unglaublicher Intelligenz, unwiderstehlicher Attraktivität und beispielloser Bescheidenheit."');
      // Update other paragraphs accordingly for German
    } else {
      document.documentElement.lang = 'en';
      updateTextContent('about-heading', 'About Me');
      updateTextContent('aboutP1', '"Who is Can Demirayak? No doubt, this question has been pondered by countless great minds throughout history. It echoes through the annals of time, captivating the imagination of scholars, scientists, and, of course, mirror enthusiasts. For within the enigmatic persona of Can Demirayak, one discovers an extraordinary fusion of <span class="about-highlight">unbelievable intelligence</span>, <span class="about-highlight">irresistible handsomeness</span>, and <span class="about-highlight">unparalleled humility</span>."');
      // Update other paragraphs accordingly for English
    }
  }
  
  function updateTextContent(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = text;
    }
  }