export const events = [
    {
        id: "1",
        title: "Global Festival 2025",
        image: "../images/global_festival_2025.png",
        description: "Join the biggest cultural celebration in the heart of the city.",
        price: 500,
        organizer: "WorldFest Org",
        date: "2025-08-12",
        location: "Manila, Philippines"
    },
    {
        id: "2",
        title: "Defender Octa Launch",
        image: "../images/defender_octa.avif",
        description: "Get ready to witness the epic launch of our newest product, Defender Octa - an event full of excitement and innovation!",
        price: 0,
        organizer: "Land Rover",
        date: "2025-05-21",
        location: "80 Eulogio Rodriguez Jr. Avenue Quezon City, NCR 1110"
    },
    {
        id: "3",
        title: "Traders Fair 2025 - (Financial Education Event)",
        image: "../images/traders_fair.avif",
        description: "Stocks, Forex, Futures, Cryptocurrency and Options, Investing and Brokers - all in one trading educational event!",
        price: 0,
        organizer: "FINEXPO - Traders Fair & Traders Awards",
        date: "2025-05-24",
        location: "Edsa Shangri-La, Manila"
    },
    {
        id: "4",
        title: "Life Fairview Terraces Fund Raising",
        image: "../images/movie_cause.avif",
        description: "Brace yourselves for we are about to embark on a BIGGER SCREEN for a BIGGER PURPOSE!",
        price: 950,
        organizer: "Life An Every Nation Church",
        date: "2025-05-24",
        location: "Ayala Malls Fairview Terraces"
    },
    {
        id: "5",
        title: "G-DRAGON: Übermensch Tour",
        image: "../images/ubermensch.jpg",
        description: "K-pop icon G-DRAGON performs his long-awaited solo show with powerful visuals and stagecraft.",
        price: 8500,
        organizer: "AEG Presents Asia",
        date: "2025-05-17",
        location: "Philippine Arena, Bulacan",
        days: ["2025-05-17", "2025-05-18"],
        seatTypes: [
            { type: "SVIP", price: 12000 },
            { type: "VIP", price: 9000 },
            { type: "Regular", price: 5000 }
        ],
        seatMap: {
            "SVIP": ["A1", "A2", "A3", "A4", "A5"],
            "VIP": ["B1", "B2", "B3", "B4", "B5", "B6"],
            "Regular": ["C1", "C2", "C3", "C4", "C5", "C6"]
        },
        occupiedSeats: {
            "2025-05-17": {
                "SVIP": ["A2"],
                "VIP": ["B3", "B4"],
                "Regular": ["C1"]
            },
            "2025-05-18": {
                "SVIP": [],
                "VIP": ["B1"],
                "Regular": ["C2", "C3"]
            }
        }
    },
    {
        id: "6",
        title: "Boyz II Men: Live in Manila",
        image: "../images/boyz_ii_men2.jpg",
        description: "The iconic R&B group serenades fans with timeless hits and smooth harmonies.",
        price: 1200,
        organizer: "Wilbros Live",
        date: "2025-05-18",
        location: "Smart Araneta Coliseum, Quezon City",
        days: ["2025-05-18"],
        seatTypes: [
            { type: "VIP", price: 2500 },
            { type: "Regular", price: 1200 }
        ],
        seatMap: {
            "VIP": ["A1", "A2", "A3", "A4"],
            "Regular": ["B1", "B2", "B3", "B4", "B5"]
        },
        occupiedSeats: {
            "2025-05-18": {
                "VIP": ["A3"],
                "Regular": ["B2"]
            }
        }
    },
    {
        id: "7",
        title: "Snarky Puppy: We Like It Here Tour",
        image: "../images/snarky_puppy2.jpg",
        description: "A celebration of their jazz-fusion masterpiece with a live set full of groove and musicianship.",
        price: 4910,
        organizer: "Karpos Multimedia",
        date: "2025-05-27",
        location: "The Filinvest Tent, Muntinlupa City"
    },
    {
        id: "8",
        title: "ADO World Tour: Manila Stop",
        image: "../images/hibana.jpg",
        description: "The mysterious J-pop artist known for anime soundtracks brings an immersive visual-musical experience.",
        price: 3200,
        organizer: "Ovation Productions",
        date: "2025-05-08",
        location: "SM Mall of Asia Arena, Pasay"
    },
    {
        id: "9",
        title: "Dear Evan Hansen",
        image: "../images/evan_hansen.webp",
        description: "A heartwarming story of love, loss, and redemption.",
        price: 1200,
        organizer: "GMG Productions",
        date: "2025-09-04",
        location: "Solaire"
    },
    {
        id: "10",
        title: "Hamilton: Manila Premiere",
        image: "../images/hamilton.webp",
        description: "Lin-Manuel Miranda's revolutionary musical debuts in Manila, blending hip-hop, jazz, and history in a genre-defining theatrical experience.",
        price: 4200,
        organizer: "GMG Productions",
        date: "2025-09-17",
        location: "The Theatre at Solaire, Parañaque City"
    },
    {
        id: "11",
        title: "Delia D.",
        image: "../Pictures/event11.jpg",
        description: "An original Filipino musical spotlighting queer stories, set to the music of Jonathan Manalo. Bold, powerful, and proudly local.",
        price: 2500,
        organizer: "TicketWorld PH",
        date: "2025-04-25",
        location: "Newport Performing Arts Theater, Pasay City"
    },
    {
        id: "12",
        title: "One More Chance, The Musical",
        image: "../Pictures/event12.webp",
        description: "A stage adaptation of the hit film, featuring the music of Ben&Ben in a heartfelt romantic journey.",
        price: 1200,
        organizer: "Philippine Educational Theater Association (PETA)",
        date: "2025-08-22",
        location: "PETA Theater Center, New Manila, Quezon City"
    },
    {
        id: "13",
        title: "Valorant Champions Tour: Masters Toronto",
        image: "../images/valorant_masters_toronto.avif",
        description: "Top Valorant teams clash in Toronto for a chance to advance to Champions 2025 in Paris.",
        price: 0,
        organizer: "Riot Games",
        date: "2025-06-07",
        location: "Online / Toronto, Canada (Streaming Available)"
    },
    {
        id: "14",
        title: "Global Gaming Expo (G2E) 2025",
        image: "../images/global_gaming_expo.jpg",
        description: "The premier event for the global gaming industry, showcasing the latest innovations and trends shaping the future of gaming.",
        price: 1500,
        organizer: "Global Gaming Expo",
        date: "2025-10-06",
        location: "The Venetian Expo, Las Vegas, USA"
    },
    {
        id: "15",
        title: "Gamescom 2025",
        image: "../images/gamescom.webp",
        description: "The world's largest gaming event where developers showcase upcoming titles and gaming technology innovations.",
        price: 1200,
        organizer: "Koelnmesse",
        date: "2025-08-20",
        location: "Koelnmesse, Cologne, Germany"
    },
    {
        id: "16",
        title: "Summer Game Fest 2025",
        image: "../images/summer_game_fest.webp",
        description: "A global event celebrating the latest in gaming with world premieres, live performances, and exclusive content.",
        price: 0,
        organizer: "Summer Game Fest",
        date: "2025-06-06",
        location: "YouTube Theater, Los Angeles, USA"
    },
    {
        id: "21",
        title: "Manila Night Bash",
        image: "../Pictures/nightlife1.jpg",
        description: "Dance the night away with top DJs and a vibrant crowd.",
        price: 1000,
        organizer: "PartyLife PH",
        date: "2025-06-10",
        location: "Manila, Philippines"
    },
    {
        id: "31",
        title: "Broadway in Manila",
        image: "../Pictures/performing-arts1.jpg",
        description: "A night of world-class musical performances.",
        price: 2500,
        organizer: "StageWorks",
        date: "2025-07-01",
        location: "Cultural Center of the Philippines"
    },
    {
        id: "41",
        title: "Christmas Market Festival",
        image: "../Pictures/holidays1.jpg",
        description: "Celebrate the holidays with food, music, and gifts.",
        price: 0,
        organizer: "Holiday Events PH",
        date: "2025-12-15",
        location: "Bonifacio High Street"
    },
    {
        id: "51",
        title: "Singles Mixer Night",
        image: "../Pictures/dating1.jpg",
        description: "Meet new people and maybe find your match!",
        price: 500,
        organizer: "LoveConnect",
        date: "2025-06-20",
        location: "Makati, Philippines"
    },
    {
        id: "61",
        title: "DIY Crafting Workshop",
        image: "../Pictures/hobbies1.jpg",
        description: "Unleash your creativity with hands-on crafting.",
        price: 300,
        organizer: "CraftyHands",
        date: "2025-07-10",
        location: "Quezon City"
    },
    {
        id: "71",
        title: "Startup Summit 2025",
        image: "../Pictures/business1.jpg",
        description: "Where innovation meets opportunity. Meet top tech founders.",
        price: 1200,
        organizer: "InnovateNow PH",
        date: "2025-09-05",
        location: "Cebu, Philippines"
    },
    {
        id: "81",
        title: "Food & Drink Expo",
        image: "../Pictures/food1.jpg",
        description: "Taste the best food and drinks from around the world.",
        price: 200,
        organizer: "Foodies United",
        date: "2025-08-15",
        location: "SMX Convention Center"
    },
    {
        id: "22",
        title: "A Night Out in Manila",
        image: "../Pictures/nightlife.avif",
        description: "City life can be lonely, especially when you're surrounded by so many people. Take the opportunity to meet others hoping for new connections",
        price: 700,
        organizer: "Ermantourage Europe & US",
        date: "2025-05-23",
        location: "Blackbird Makati"
    }
];