// Homepage News, Events & Achievements.
// Add only verified items. For achievements, confirm the award, level, organiser,
// recipient and date before publishing. Past events and stories drop off the
// "Upcoming" list automatically once their date has passed.

export type NewsCategory = 'News' | 'Event' | 'Achievement'

export interface NewsItem {
  category: NewsCategory
  title: string
  /** Publication date, or the event date for events. Format: YYYY-MM-DD */
  date: string
  summary: string
  /** Link to the full story or event page. */
  href: string
  image?: string
  /** Describe what is actually pictured. */
  imageAlt?: string
}

export const newsItems: NewsItem[] = []
