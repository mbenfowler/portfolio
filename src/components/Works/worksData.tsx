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
        name: 'Bird Alert (in progress)',
        image: `${process.env.PUBLIC_URL}/images/birdalert.png`,
        i18nDescriptionKey: 'birdalert_description',
        deployLink: 'https://bird-alert.vercel.app/',
        repo: 'https://github.com/mbenfowler/bird-alert',
        tags: ['JavaScript', 'React', 'Context API', 'CSS', 'Cypress']
    },
    {
        name: "What's Cookin'",
        image: `${process.env.PUBLIC_URL}/images/whatscookin.png`,
        i18nDescriptionKey: 'whatscookin_description',
        deployLink: 'https://lauraguerra1.github.io/whats-cookin/',
        repo: 'https://github.com/lauraguerra1/whats-cookin',
        tags: ['Javascript', 'CSS', 'HTML', 'Mocha/Chai']
    },
    {
        name: 'Colorandom',
        image: `${process.env.PUBLIC_URL}/images/colorandom.png`,
        i18nDescriptionKey: 'colorandom_description',
        deployLink: 'https://mbenfowler.github.io/coloRandom/',
        repo: 'https://github.com/mbenfowler/coloRandom',
        tags: ['Javascript', 'CSS', 'HTML', 'Mocha/Chai']
    },
    {
        name: 'Overlook',
        image: `${process.env.PUBLIC_URL}/images/overlook.png`,
        i18nDescriptionKey: 'overlook_description',
        deployLink: 'https://mbenfowler.github.io/overlook/',
        repo: 'https://github.com/mbenfowler/overlook',
        tags: ['Javascript', 'CSS', 'HTML', 'Mocha/Chai']
    },
    {
        name: 'MelodyMaker (in progress)',
        image: `${process.env.PUBLIC_URL}/images/melodymaker.png`,
        i18nDescriptionKey: 'melodymaker_description',
        deployLink: 'https://zen-cori-c5a337.netlify.app/',
        repo: 'https://github.com/mbenfowler/melody-maker',
        tags: ['JavaScript', 'React', 'Node/Express', 'Netlify', 'CSS', 'Jest', 'Cypress', 'SlackBot']
    },
    {
        name: 'CharPrompt',
        image: `${process.env.PUBLIC_URL}/images/charprompt.png`,
        i18nDescriptionKey: 'charprompt_description',
        deployLink: 'https://eloquent-jackson-4036f6.netlify.app/',
        repo: 'https://github.com/mbenfowler/charprompt-slackbot',
        tags: ['JavaScript', 'Node/Express', 'Netlify', 'SlackBot']
    }
]

export const WORKS_DATA = worksDataWithoutIDs.map((project, i) => ({id: i + 1, ...project}))
