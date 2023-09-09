const worksDataWithoutIDs = [
    {
        name: 'Backyarder',
        image: `${process.env.PUBLIC_URL}/images/backyarder.png`,
        description: 'BackYarder enables the user to create and maintain a beautiful garden tailored to their unique vision. Whether you\'re a seasoned gardener or just starting your gardening journey, this app will be the perfect companion for you!',
        deployLink: 'https://backyarder.vercel.app/',
        repo: 'https://github.com/Backyarder/backyarder-ui',
        tags: ['TypeScript', 'React', 'SCSS', 'Cypress']
    },
    {
        name: 'Sound Stash',
        image: `${process.env.PUBLIC_URL}/images/soundstash.png`,
        description: 'The must have app for all vinyl collectors! Search for music, save to your personal collection, add journal entries for specific albums, and discover new music aligned with your music preferences!',
        deployLink: 'https://sound-stash.vercel.app/',
        repo: 'https://github.com/mbenfowler/sound-stash',
        tags: ['JavaScript', 'React', 'Context API', 'CSS', 'Cypress']
    },
    {
        name: 'Bird Alert (in progress)',
        image: `${process.env.PUBLIC_URL}/images/birdalert.png`,
        description: 'Bird Alert! Is the tool every bird-enthusiast needs, from the casual back yard birder to the hardcore expert looking to finish a strong Big Year!',
        deployLink: 'https://bird-alert.vercel.app/',
        repo: 'https://github.com/mbenfowler/bird-alert',
        tags: ['JavaScript', 'React', 'Context API', 'CSS', 'Cypress']
    },
    {
        name: "What's Cookin'",
        image: `${process.env.PUBLIC_URL}/images/whatscookin.png`,
        description: 'Browse for and save your favorite recipes!',
        deployLink: 'https://lauraguerra1.github.io/whats-cookin/',
        repo: 'https://github.com/lauraguerra1/whats-cookin',
        tags: ['Javascript', 'CSS', 'HTML', 'Mocha/Chai']
    },
    {
        name: 'Colorandom',
        image: `${process.env.PUBLIC_URL}/images/colorandom.png`,
        description: 'Do you need a custom color palette for your website? How about visualizing how different colors work together for your next digital art project? This application assists designers generate and save custom palettes of 5 colors and their hex-codes.',
        deployLink: 'https://mbenfowler.github.io/coloRandom/',
        repo: 'https://github.com/mbenfowler/coloRandom',
        tags: ['Javascript', 'CSS', 'HTML', 'Mocha/Chai']
    },
    {
        name: 'Overlook',
        image: `${process.env.PUBLIC_URL}/images/overlook.png`,
        description: 'A streamlined, no-frills room booking app for the professional on the go!',
        deployLink: 'https://mbenfowler.github.io/overlook/',
        repo: 'https://github.com/mbenfowler/overlook',
        tags: ['Javascript', 'CSS', 'HTML', 'Mocha/Chai']
    },
    {
        name: 'MelodyMaker (in progress)',
        image: `${process.env.PUBLIC_URL}/images/melodymaker.png`,
        description: 'An open source music education/creative tool that will generate and play you a unique melody!',
        deployLink: 'https://zen-cori-c5a337.netlify.app/',
        repo: 'https://github.com/mbenfowler/melody-maker',
        tags: ['JavaScript', 'React', 'Node/Express', 'Netlify', 'CSS', 'Jest', 'Cypress', 'SlackBot']
    },
    {
        name: 'CharPrompt',
        image: `${process.env.PUBLIC_URL}/images/charprompt.png`,
        description: 'A character/backstory generator API + slackbot!',
        deployLink: 'https://eloquent-jackson-4036f6.netlify.app/',
        repo: 'https://github.com/mbenfowler/charprompt-slackbot',
        tags: ['JavaScript', 'Node/Express', 'Netlify', 'SlackBot']
    }
]

export const WORKS_DATA = worksDataWithoutIDs.map((project, i) => ({id: i + 1, ...project}))
