export const locales = ['en', 'ru'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];

export const ui = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      cinema: 'Cinema',
      library: 'Library',
      places: 'Places',
      projects: 'Projects',
      cv: 'CV',
    },
    common: {
      siteName: 'Nikita Paladi',
      personalArchive: 'Personal Archive',
      index: 'Index',
      favorite: 'Favorite',
      readNote: 'Read note',
      noCover: 'No cover yet',
      openProject: 'Open project',
      github: 'GitHub',
      builtWithAstro: 'Built with Astro.',
      footerArchive: 'Personal archive.',
      back: {
        cinema: 'Back to cinema',
        library: 'Back to library',
        places: 'Back to places',
        projects: 'Back to projects',
      },
    },
    home: {
      title: 'Nikita Paladi',
      description: 'A personal archive of films, books, places, projects, and ideas.',
      enterArchive: 'Enter Archive',
      viewCv: 'View CV',
      sectionsTitle: 'Archive sections',
      sectionsDescription: 'Quiet rooms for personal notes, references, reviews, and selected work.',
    },
    pages: {
      about: 'About',
      cinema: 'Cinema',
      library: 'Library',
      places: 'Places',
      projects: 'Projects',
      cv: 'CV',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      cinema: 'Кино',
      library: 'Библиотека',
      places: 'Места',
      projects: 'Проекты',
      cv: 'CV',
    },
    common: {
      siteName: 'Nikita Paladi',
      personalArchive: 'Личный архив',
      index: 'Индекс',
      favorite: 'Избранное',
      readNote: 'Читать заметку',
      noCover: 'Обложка появится позже',
      openProject: 'Открыть проект',
      github: 'GitHub',
      builtWithAstro: 'Сделано на Astro.',
      footerArchive: 'Личный архив.',
      back: {
        cinema: 'Назад к кино',
        library: 'Назад в библиотеку',
        places: 'Назад к местам',
        projects: 'Назад к проектам',
      },
    },
    home: {
      title: 'Nikita Paladi',
      description: 'Личный архив фильмов, книг, мест, проектов и идей.',
      enterArchive: 'Войти в архив',
      viewCv: 'Смотреть CV',
      sectionsTitle: 'Разделы архива',
      sectionsDescription: 'Спокойные разделы для заметок, ссылок, отзывов и выбранных работ.',
    },
    pages: {
      about: 'Обо мне',
      cinema: 'Кино',
      library: 'Библиотека',
      places: 'Места',
      projects: 'Проекты',
      cv: 'CV',
    },
  },
} as const;
