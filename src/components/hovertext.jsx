import { useEffect } from 'react';

const HoverText = ({ text }) => {
  useEffect(() => {
    const handleHover = () => {
      const speechSynthesis = window.speechSynthesis;

      const logVoices = () => {
        const voices = speechSynthesis.getVoices();
        console.log('Available voices:', voices);
      };

      const onVoicesChanged = () => {
        const voices = speechSynthesis.getVoices();
        console.log('Available voices:', voices);

        const selectedVoice = voices.find(voice => voice.name === 'Urdu+RicishayMax2'); // Change this to the desired voice name

        if (selectedVoice) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.voice = selectedVoice;
          utterance.rate = 0.8; // Adjust speech rate (0.1 to 10)

          speechSynthesis.speak(utterance);
        } else {
          console.error('Desired voice not found.');
        }
      };

      speechSynthesis.onvoiceschanged = onVoicesChanged;
      onVoicesChanged(); // Call once immediately in case voices are already available
    };

    const handleHoverOut = () => {
      window.speechSynthesis.cancel();
    };

    const element = document.getElementById('hover-text');
    element.addEventListener('mouseenter', handleHover);
    element.addEventListener('mouseleave', handleHoverOut);

    return () => {
      element.removeEventListener('mouseenter', handleHover);
      element.removeEventListener('mouseleave', handleHoverOut);
      window.speechSynthesis.cancel();
    };
  }, [text]);

  return <span id="hover-text">{text}</span>;
};

export default HoverText;
