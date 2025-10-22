document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    console.log('[VocabStory] Selected:', selectedText);
    chrome.runtime.sendMessage({ word: selectedText }, () => {
      if (chrome.runtime.lastError) {
        console.error('[VocabStory] Message error:', chrome.runtime.lastError);
      } else {
        console.log('[VocabStory] Message sent');
      }
    });
  }
});