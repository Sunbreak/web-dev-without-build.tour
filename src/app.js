import { message } from './message.js';

window.addEventListener('click', async () => {
  const module = await import('./message.js');

  console.log(`The message is: ${module.message}`);
});