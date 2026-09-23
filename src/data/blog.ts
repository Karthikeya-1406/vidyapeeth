import storySports from '../assets/images/blog/story-sports.png'
import storySkit from '../assets/images/blog/story-skit.png'
import storyLiterary from '../assets/images/blog/story-literary.png'

export interface BlogStory {
  id: string
  image: string
  tag: string
  tagVariant: 'dark' | 'accent'
  icon: string
  location: string
  readTime: string
  title: string
  excerpt: string
  linkLabel: string
}

export const secondaryStories: BlogStory[] = [
  {
    id: 'annual-sports-meets',
    image: storySports,
    tag: 'Athletics & Teamwork',
    tagVariant: 'dark',
    icon: '🏅',
    location: 'Sports Complex Track',
    readTime: '3 Min Read',
    title: 'Annual Sports Meets — Valor on the Track & Court',
    excerpt:
      'Four student houses contested spirited track sprints, high jumps, and basketball finals. Beyond medals, the meet cemented camaraderie, physical resilience, and team strategy.',
    linkLabel: 'Read Sports Dispatch →',
  },
  {
    id: 'skit-day-celebrations',
    image: storySkit,
    tag: 'Cultural Expression',
    tagVariant: 'accent',
    icon: '🎭',
    location: 'Performing Arts Wing',
    readTime: '4 Min Read',
    title: 'Skit Day Celebrations — Folklore, Wit & Stagecraft',
    excerpt:
      'Dramatic ensembles interpreted Indian historical folklore alongside socially relevant modern parables, honing voice modulation, self-possession, and theatrical confidence.',
    linkLabel: 'Read Stage Chronicles →',
  },
  {
    id: 'literary-competitions',
    image: storyLiterary,
    tag: 'Intellectual Rigor',
    tagVariant: 'dark',
    icon: '🎙️',
    location: 'Central Library Enclave',
    readTime: '3 Min Read',
    title: 'Literary Competitions — Eloquence & Reasoned Debate',
    excerpt:
      'Spanning parliamentary debates, extempore elocution, spelling bees, and creative essay composition, scholars defended philosophical theses with poise and linguistic finesse.',
    linkLabel: 'Read Oratory Notes →',
  },
]
