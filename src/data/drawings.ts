export interface Drawing {
  id: string           // "000", "001", …
  title: string
  date: string         // TODO: replace with final date
  medium: string       // TODO: replace with final medium
  description: string  // TODO: replace with final description
  imageSrc: string
  audioCommentary: string  // URL or empty string
  audioHandpan: string     // URL or empty string
}

// TODO: Replace placeholder images and audio with final assets.
// All image/audio paths are relative to /public/assets/.

const PLACEHOLDER_IMG = 'https://placehold.co/600x800/1a1a1a/5a5248?text=Kresba'
const PLACEHOLDER_AUDIO = ''

export const drawings: Drawing[] = [
  {
    id: '000',
    title: 'Shrnutí',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+000',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '001',
    title: 'XXX',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+001',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '002',
    title: 'XXX',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+002',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '003',
    title: 'XXX',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+003',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '004',
    title: 'situac3',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+004',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '005',
    title: 'z očí do tmy?',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+005',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '006',
    title: 'svět4',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+006',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '007',
    title: 'statika, dynamika',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+007',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '008',
    title: '(asi) kocour',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+008',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '009',
    title: 'svoboda vězení, vězení svobody',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+009',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '010',
    title: 'disciplína je víc, než vůle',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+010',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '011',
    title: 'rozlitý čaj (pokory)',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+011',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '012',
    title: '?kdo jsem?',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+012',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '013',
    title: 'strach ze st(art)u',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+013',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '014',
    title: 'milníky, check',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+014',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
  {
    id: '015',
    title: 'XXX',
    date: 'TODO: doplnit datum',
    medium: 'TODO: papír A4, tužka',
    description: 'TODO: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: PLACEHOLDER_IMG + '+015',
    audioCommentary: PLACEHOLDER_AUDIO,
    audioHandpan: PLACEHOLDER_AUDIO,
  },
]
