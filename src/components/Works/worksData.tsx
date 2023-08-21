const worksDataWithoutIDs = [
    {
        name: 'Sound Stash',
        image: `${process.env.PUBLIC_URL}/images/soundstash.png`,
        description: 'The must have app for all vinyl collectors! Search for music, save to your personal collection, add journal entries for specific albums, and discover new music aligned with your music preferences!',
        deployLink: 'https://sound-stash.vercel.app/',
        repo: 'https://github.com/mbenfowler/sound-stash'
    },
    {
        name: 'Bird Alert (in progress)',
        image: `${process.env.PUBLIC_URL}/images/birdalert.png`,
        description: 'Bird Alert! Is the tool every bird-enthusiast needs, from the casual back yard birder to the hardcore expert looking to finish a strong Big Year!',
        deployLink: 'https://bird-alert.vercel.app/',
        repo: 'https://github.com/mbenfowler/bird-alert'
    },
    {
        name: "What's Cookin'",
        image: `${process.env.PUBLIC_URL}/images/whatscookin.png`,
        description: 'Browse for and save your favorite recipes!',
        deployLink: 'https://lauraguerra1.github.io/whats-cookin/',
        repo: 'https://github.com/lauraguerra1/whats-cookin'
    },
    {
        name: 'Colorandom',
        image: `${process.env.PUBLIC_URL}/images/colorandom.png`,
        description: 'Do you need a custom color palette for your website? How about visualizing how different colors work together for your next digital art project? This application assists designers generate and save custom palettes of 5 colors and their hex-codes.',
        deployLink: 'https://mbenfowler.github.io/coloRandom/',
        repo: 'https://github.com/mbenfowler/coloRandom'
    },
    {
        name: 'Overlook',
        image: `${process.env.PUBLIC_URL}/images/overlook.png`,
        description: 'A streamlined, no-frills room booking app for the professional on the go!',
        deployLink: 'https://mbenfowler.github.io/overlook/',
        repo: 'https://github.com/mbenfowler/overlook'
    },
    {
        name: 'MelodyMaker (in progress)',
        image: `${process.env.PUBLIC_URL}/images/melodymaker.png`,
        description: 'An open source music education/creative tool that will generate and play you a unique melody!',
        deployLink: 'https://zen-cori-c5a337.netlify.app/',
        repo: 'https://github.com/mbenfowler/melody-maker'
    },
    {
        name: 'CharPrompt',
        image: `${process.env.PUBLIC_URL}/images/charprompt.png`,
        description: 'A character/backstory generator API + slackbot!',
        deployLink: 'https://eloquent-jackson-4036f6.netlify.app/',
        repo: 'https://github.com/mbenfowler/charprompt-slackbot'
    }
]

export const worksData = worksDataWithoutIDs.map((project, i) => ({id: i, ...project}))