let selectedWord = "";

chrome.runtime.onMessage.addListener((msg) => {
  console.log('[VocabStory] Message received in popup:', msg);
  if (msg.word) {
    selectedWord = msg.word;
    document.getElementById("wordDisplay").innerText = selectedWord;
    console.log('[VocabStory] Updated wordDisplay:', selectedWord);
  }
});

document.getElementById("sendBtn").addEventListener("click", async () => {
  if (!selectedWord) return;

  await fetch("https://your-backend.com/api/relay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ word: selectedWord })
  });
});