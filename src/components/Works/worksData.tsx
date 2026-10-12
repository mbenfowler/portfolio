const worksDataWithoutIDs = [
    {
        name: 'Backyarder',
        image: `${process.env.PUBLIC_URL}/images/backyarder.png`,
        i18nDescriptionKey: 'backyarder_description',
        deployLink: 'https://backyarder.vercel.app/',
        repo: 'https://github.com/Backyarder/backyarder-ui',
        tags: ['TypeScript', 'React', 'SCSS', 'Cypress']
    },
    {
        name: 'Sound Stash',
        image: `${process.env.PUBLIC_URL}/images/soundstash.png`,
        i18nDescriptionKey: 'soundstash_description',
        deployLink: 'https://sound-stash.vercel.app/',
        repo: 'https://github.com/mbenfowler/sound-stash',
        tags: ['JavaScript', 'React', 'Context API', 'CSS', 'Cypress']
    },
    {
        name: 'Bird Alert',
        image: `${process.env.PUBLIC_URL}/images/birdalert.png`,
        i18nDescriptionKey: 'birdalert_description',
        deployLink: 'https://bird-alert.vercel.app/',
        repo: 'https://github.com/mbenfowler/bird-alert',
        tags: ['JavaScript', 'React', 'Context API', 'CSS', 'Cypress', 'Vercel Serverless Functions', 'Knex.js', 'PostgreSQL']
    },
    {
        name: 'CharPrompt',
        image: `${process.env.PUBLIC_URL}/images/charprompt.png`,
        i18nDescriptionKey: 'charprompt_description',
        repo: 'https://github.com/mbenfowler/charprompt-slackbot',
        tags: ['JavaScript', 'Node/Express', 'Netlify', 'SlackBot']
    }
]

export const WORKS_DATA = worksDataWithoutIDs.map((project, i) => ({id: i + 1, ...project}))
