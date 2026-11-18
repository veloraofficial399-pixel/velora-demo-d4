// All page content lives here. Layout lives in the components.
export type EventInfo = {
  key: 'nikah' | 'valima'
  title: string
  /** Shown on the schedule timeline. */
  time: string
  timeNote: string
  venue: {
    name: string
    /** Two-line version used inside the card. */
    cardName: [string, string]
    mapsUrl: string
  }
  /** Lines under the venue name in the Location section. */
  summary: string
  /** Two lines shown inside the card. */
  cardLines: [string, string]
  calendar: { title: string; dates: string; details: string; location: string }
}

export const invite = {
  groom: { name: 'Imran', fullName: 'Imran Mohammed Shariff' },
  bride: { name: 'Mehnaz', fullName: 'Mehnaz Kauser' },

  eyebrow: 'Nikah & Valima',
  dateShort: '07.11.27',
  dateLong: 'Sunday, 7 November 2027',
  tagline: ['Two Souls', 'One destiny', 'A Lifetime written by Allah'],
  greeting: 'Dear Friends and Family',
  message:
    'Join us for an evening of love, laughter, duas, and unforgettable memories as we begin our forever.',

  // The celebration begins with the Nikah (5:30 PM IST, 7 Nov 2027).
  countdownTarget: new Date('2027-11-07T17:30:00+05:30'),
  countdownTitle: 'The Celebration Begins In',
  countdownDone: 'See you there!',

  scheduleTitle: 'Schedule of Events',

  events: [
    {
      key: 'nikah',
      title: 'Nikah',
      time: '5:30 PM',
      timeNote: 'After Asr ki Namaz',
      venue: {
        name: 'Masjid e Noor ul Huda',
        cardName: ['Masjid e Noor', 'ul Huda'],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Frazer%20Town%2C%20Bengaluru%2C%20Karnataka',
      },
      summary: 'Sunday, 7 November 2027 at 5:30 PM\n(After Asr ki Namaz)',
      cardLines: ['Sunday, 7 November 2027', '5:30 PM (After Asr ki Namaz)'],
      calendar: {
        title: 'Nikah of Imran & Mehnaz',
        dates: '20271107T173000/20271107T193000',
        details: 'Nikah of Imran Mohammed Shariff and Mehnaz Kauser, after Asr ki Namaz.',
        location: 'Masjid e Noor ul Huda, Frazer Town, Bengaluru',
      },
    },
    {
      key: 'valima',
      title: 'Valima',
      time: '8 PM',
      timeNote: 'Onwards',
      venue: {
        name: 'Silver Moon Function Hall',
        cardName: ['Silver Moon', 'Function Hall'],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=RT%20Nagar%2C%20Bengaluru%2C%20Karnataka',
      },
      summary:
        'Address: Silver Moon, 14th Cross, RT Nagar Main Rd, Ganganagar, Bengaluru, Karnataka 560032',
      cardLines: ['Sunday, 7 November 2027', '8:00 PM Onwards'],
      calendar: {
        title: 'Valima of Imran & Mehnaz',
        dates: '20271107T200000/20271107T230000',
        details: 'Valima of Imran Mohammed Shariff and Mehnaz Kauser, 8 PM onwards.',
        location:
          'Silver Moon Function Hall, 14th Cross, RT Nagar Main Rd, Ganganagar, Bengaluru, Karnataka 560032',
      },
    },
  ] satisfies EventInfo[],

  familiesTitle: 'Our Families',
  families: [
    {
      name: 'Imran Mohammed Shariff',
      relation: 'Son of',
      parents: ['Late Mohammed Rafiq', 'Shariff Saheb', '& Shabana Rafiq Shariff'],
    },
    {
      name: 'Mehnaz Kauser',
      relation: 'Daughter of',
      parents: ['Late Janab Syed Kaleem', '(Urf) Kaleem Saheb', '& Rukhsana Begum'],
    },
  ],
  closing: { title: 'With Love', text: 'We humbly request your presence and duas.' },

  credit: { label: 'Crafted by', name: 'Velora', url: 'https://wa.me/917025423395?text=' + encodeURIComponent("Hi Velora! I saw your wedding invitation templates and I'm interested. I'd like to get a wedding e-invitation made for us. Could you please share the details?") },

  media: {
    introCover: '/media/seal.png',
    introVideo: '/media/intro.mp4',
    music: '/media/music.mp3',
    heroVideo: '/media/swans.mp4',
    venue: '/media/venue.png',
  },
}
