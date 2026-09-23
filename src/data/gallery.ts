import sportsRelay from '../assets/images/gallery/item-sports-relay.jpeg'
import annualDance from '../assets/images/gallery/item-annual-dance.jpeg'
import scienceExpo from '../assets/images/gallery/item-activities-science-expo.jpeg'
import sportsBasketball from '../assets/images/gallery/item-sports-basketball.jpeg'
import annualChoir from '../assets/images/gallery/item-annual-choir.jpeg'
import codingLab from '../assets/images/gallery/item-activities-coding-lab.jpeg'
import sportsMedalCeremony from '../assets/images/gallery/item-sports-medal-ceremony.jpeg'
import libraryStudy from '../assets/images/gallery/item-activities-library.jpeg'
import annualTheatricalPlay from '../assets/images/gallery/item-annual-theatrical-play.jpeg'
import pottery from '../assets/images/gallery/item-activities-pottery.jpeg'
import sportsYoga from '../assets/images/gallery/item-sports-yoga.jpeg'
import ecoClub from '../assets/images/gallery/item-activities-eco-club.jpeg'
import annualCeremonialLamp from '../assets/images/gallery/item-annual-ceremonial-lamp.jpeg'
import activitiesDebate from '../assets/images/gallery/item-activities-debate.jpeg'

export type GalleryCategoryId = 'sports' | 'annual' | 'activities'

export interface GalleryCategory {
  id: GalleryCategoryId
  label: string
  icon: string
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'sports', label: 'Sports Day', icon: '⚽' },
  { id: 'annual', label: 'Annual Day', icon: '🎭' },
  { id: 'activities', label: 'Activities & Expos', icon: '🔬' },
]

export interface GalleryItem {
  id: string
  image: string
  caption: string
  category: GalleryCategoryId
}

export const galleryItems: GalleryItem[] = [
  { id: 'sports-relay', image: sportsRelay, caption: 'Sports Relay', category: 'sports' },
  { id: 'annual-dance', image: annualDance, caption: 'Annual Day Dance', category: 'annual' },
  { id: 'science-expo', image: scienceExpo, caption: 'Activities — Science Expo', category: 'activities' },
  { id: 'sports-basketball', image: sportsBasketball, caption: 'Sports Basketball', category: 'sports' },
  { id: 'annual-choir', image: annualChoir, caption: 'Annual Day Choir', category: 'annual' },
  { id: 'coding-lab', image: codingLab, caption: 'Activities — Coding Lab', category: 'activities' },
  { id: 'sports-medal-ceremony', image: sportsMedalCeremony, caption: 'Sports Medal Ceremony', category: 'sports' },
  { id: 'library-study', image: libraryStudy, caption: 'Activities — Library Study', category: 'activities' },
  { id: 'annual-theatrical-play', image: annualTheatricalPlay, caption: 'Annual Day Theatrical Play', category: 'annual' },
  { id: 'pottery', image: pottery, caption: 'Activities — Pottery & Fine Arts', category: 'activities' },
  { id: 'sports-yoga', image: sportsYoga, caption: 'Sports — Morning Yoga & Wellness', category: 'sports' },
  { id: 'eco-club', image: ecoClub, caption: 'Activities — Eco-Club Green Drive', category: 'activities' },
  { id: 'annual-ceremonial-lamp', image: annualCeremonialLamp, caption: 'Annual Day Ceremonial Lamp', category: 'annual' },
  { id: 'activities-debate', image: activitiesDebate, caption: 'Activities — Debate & Elocution', category: 'activities' },
]
