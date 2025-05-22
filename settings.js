/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBD9l3rVGLkKGtERi4CKihcQRDf2oYQCChCwKEWc8N830O7piZjd2V6eirpknnPyZH4HeYErNEcNGH4HJcFXSFG7pE2JwBCMLmGICOiCAFIIhmBv+Ayz6KzWZrIRB6bJHe/bomTL1a20dp2gN4hK7uhN59x08wYeXVBejhn2fxNwMqkNktS9w5yKrrfQy8mZzIobXabmJDAcoZSyQS3uCE2VN/BoI0JMcB7pZYxOiMBsjpo1xORr8B2V0AW+5u5+0Us4Tjno0S7z5rAnSMytUmq310ncWzm9jM2vwZe84mAt9qtOx2k65tyb7EN6TJZ3x5sePJsZhMHWnEKMxqn+gl/hKEeBEaCcYtp8WfeNaTj7fG54OJPO1K6pfZ01Gb+kx/5o02zIXkuDhj1uz3z6NeB0bzvn7DLtzwjdJOnCM40m3Ryc+oK9WIsH/m6nXefO6GxVPwNfkw+vpP9H90hTDqa9VtZ2H3Fc5xwzk7iYh7dgHeEmh2i04++psJaPTv01+CGTRjcMV7tsU545vhhwI+fgdHqu4M/0ADmJpOJjzPNJanzCh/RCfodyx4k4tJzgtILXfCLK0/PAvvRv656uHHLHTjbSSQ0HOylqOilfnvqWFffMO1noy4Ycsk7fNDCyxdk2CLTjPaSNura8RHl7MkpRYwRgyD66gKAIV5RAiou83RPlLoDB1UY+QfSpLuhMWYNxhWg6E5Vqj8Wbwi0v8UExd/u+K/HzNL4h2b4s0nX1BrqgJIWPqgoFU1zRgjQmqioYoQoM/3wWquVM0KmgaIYDMAScKEiiLAg8y7J/VN/qGNIKluW3HFHQBSEpTiYCQ0ouqAueD5i+3Fc5SWXGCs+JA07RJU2QxxzLagNFUJiW4emVdItPqKLwVIIhKwnSgJUHnPD4qwtydKMv+7SkebYLQkwq6uSXMitg8OGtj0Po+8Ulp3aT+2q7QAQMmc9tRCnOo6pldskh8WN8RWrLAwxDmFXoh86IoOCDy/vsUIugLf/EtTaS685Ai70N9Is2Q1b4VZ7seY1lJUFmZE7qizInMu3N9uDxA2EbMEAU4qwCQ6CaC0suUl1f5MrV1CcTZRMpaqSAT0YfBn05QLakUTS/Ha+rpTTJE9v1LH9Z6bx6V8cZG0enQJRXk/RuZf7bPwQBQ7DMTCmEVnTfjHK5z4r7u8c2fGjotJZvkt6xBvvppjGSpHGz8dYhVu/qaOsNFTthtAhHK4mHrKfp2gqu8XWXuMV8NtLqtzZbgK7YRz8nS859eoECNKUO5MNSEVDj+MrS8KdHK/CIFtin5a0aH2OPl9fnypHIZmxo9nXRN+iEd66qs8pgVUl5ltdism1OTBHF9at1nq2bvY9M/O5q/PwNMXpOoBy2Ffzv2r2AtxZjHt2fYrzPtH+ZC6NQR/VerXbSPUG3UmAyl/G042hZV3V8CPb7WY5CLS5N5uCBR+v1MoM0LMgJDAHMA1LgAHQBKS6tZ408LH6TTFUcQ49ezDNYUeWzD/6htdjB69aaFOUUVnErgitJZ6c1daOUpU0h/WgroLTfQpbA429CWQbp+AcAAA==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'MR ΛĿĿƐИ';
const packname = process.env.PACKNAME || 'MR ΛĿĿƐИ';
const dev = process.env.OWNER_NUMBER || '254758443111';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'typing';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '🔗';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'false';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'false';
const antimention = process.env.ANTIMENTION || 'true';
const antibot = process.env.ANTIBOT || 'true';
const antilink = process.env.ANTILINK || 'false';
const antibad = process.env.ANTIBAD || 'false';
const autoview = process.env.AUTOVIEW_STATUS || 'false';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'false';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'MR ΛĿĿƐИ';
const greetmsg = process.env.GREET_MSG || 'my owner is unavailable text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'false';
const permit = process.env.PM_PERMIT || 'false';
const voicechatbot = process.env.VOICECHATBOT || 'false';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'false';
const anticallmsg = process.env.ANTICALL_MSG || 'ΛĿĿƐИ ĪS ΛŦ ßƐΛSŦ MᎾDƐ YᎾƱ ßƐŦƐŔ ᏯΛŦƇĤ YᎾƱŔ ΛƇŦĪᎾИS ☠️';
const autobio = process.env.AUTOBIO || 'false';



module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
