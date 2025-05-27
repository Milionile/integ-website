export const events = [
    {
        id: "1",
        title: "Global Festival 2025",
        image: "../images/global_festival_2025.png",
        description: "Join the biggest cultural celebration in the heart of the city.",
        price: 500,
        organizer: "WorldFest Org",
        date: "2025-08-12",
        location: "Manila, Philippines",
        category: "food_and_drink"
    },
    {
        id: "2",
        title: "Defender Octa Launch",
        image: "../images/defender_octa.avif",
        description: "Get ready to witness the epic launch of our newest product, Defender Octa - an event full of excitement and innovation!",
        price: 0,
        organizer: "Land Rover",
        date: "2025-05-21",
        location: "80 Eulogio Rodriguez Jr. Avenue Quezon City, NCR 1110",
        category: "business"
    },
    {
        id: "3",
        title: "Traders Fair 2025 - (Financial Education Event)",
        image: "../images/traders_fair.avif",
        description: "Stocks, Forex, Futures, Cryptocurrency and Options, Investing and Brokers - all in one trading educational event!",
        price: 0,
        organizer: "FINEXPO - Traders Fair & Traders Awards",
        date: "2025-05-24",
        location: "Edsa Shangri-La, Manila",
        category: "business"
    },
    {
        id: "4",
        title: "Life Fairview Terraces Fund Raising",
        image: "../images/movie_cause.avif",
        description: "Brace yourselves for we are about to embark on a BIGGER SCREEN for a BIGGER PURPOSE!",
        price: 950,
        organizer: "Life An Every Nation Church",
        date: "2025-05-24",
        location: "Ayala Malls Fairview Terraces",
        category: "holidays"
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
        },
        category: "music"
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
        },
        category: "music"
    },
    {
        id: "7",
        title: "Snarky Puppy: We Like It Here Tour",
        image: "../images/snarky_puppy2.jpg",
        description: "A celebration of their jazz-fusion masterpiece with a live set full of groove and musicianship.",
        price: 4910,
        organizer: "Karpos Multimedia",
        date: "2025-05-27",
        location: "The Filinvest Tent, Muntinlupa City",
        category: "music"
    },
    {
        id: "8",
        title: "ADO World Tour: Manila Stop",
        image: "../images/hibana.jpg",
        description: "The mysterious J-pop artist known for anime soundtracks brings an immersive visual-musical experience.",
        price: 3200,
        organizer: "Ovation Productions",
        date: "2025-05-08",
        location: "SM Mall of Asia Arena, Pasay",
        category: "music"
    },
    {
        id: "9",
        title: "Dear Evan Hansen",
        image: "../images/evan_hansen.webp",
        description: "A heartwarming story of love, loss, and redemption.",
        price: 1200,
        organizer: "GMG Productions",
        date: "2025-09-04",
        location: "Solaire",
        category: "performing_arts"
    },
    {
        id: "10",
        title: "Hamilton: Manila Premiere",
        image: "../images/hamilton.webp",
        description: "Lin-Manuel Miranda's revolutionary musical debuts in Manila, blending hip-hop, jazz, and history in a genre-defining theatrical experience.",
        price: 4200,
        organizer: "GMG Productions",
        date: "2025-09-17",
        location: "The Theatre at Solaire, Parañaque City",
        category: "performing_arts"
    },
    {
        id: "11",
        title: "Delia D.",
        image: "../images/delia_d.jpg",
        description: "An original Filipino musical spotlighting queer stories, set to the music of Jonathan Manalo. Bold, powerful, and proudly local.",
        price: 2500,
        organizer: "TicketWorld PH",
        date: "2025-04-25",
        location: "Newport Performing Arts Theater, Pasay City",
        category: "performing_arts"
    },
    {
        id: "12",
        title: "One More Chance, The Musical",
        image: "../images/one_more_chance.webp",
        description: "A stage adaptation of the hit film, featuring the music of Ben&Ben in a heartfelt romantic journey.",
        price: 1200,
        organizer: "Philippine Educational Theater Association (PETA)",
        date: "2025-08-22",
        location: "PETA Theater Center, New Manila, Quezon City",
        category: "performing_arts"
    },
    {
        id: "13",
        title: "Valorant Champions Tour: Masters Toronto",
        image: "../images/valorant_masters_toronto.avif",
        description: "Top Valorant teams clash in Toronto for a chance to advance to Champions 2025 in Paris.",
        price: 0,
        organizer: "Riot Games",
        date: "2025-06-07",
        location: "Online / Toronto, Canada (Streaming Available)",
        category: "hobbies"
    },
    {
        id: "14",
        title: "Global Gaming Expo (G2E) 2025",
        image: "../images/global_gaming_expo.jpg",
        description: "The premier event for the global gaming industry, showcasing the latest innovations and trends shaping the future of gaming.",
        price: 1500,
        organizer: "Global Gaming Expo",
        date: "2025-10-06",
        location: "The Venetian Expo, Las Vegas, USA",
        category: "hobbies"
    },
    {
        id: "15",
        title: "Gamescom 2025",
        image: "../images/gamescom.webp",
        description: "The world's largest gaming event where developers showcase upcoming titles and gaming technology innovations.",
        price: 1200,
        organizer: "Koelnmesse",
        date: "2025-08-20",
        location: "Koelnmesse, Cologne, Germany",
        category: "hobbies"
    },
    {
        id: "16",
        title: "Summer Game Fest 2025",
        image: "../images/summer_game_fest.webp",
        description: "A global event celebrating the latest in gaming with world premieres, live performances, and exclusive content.",
        price: 0,
        organizer: "Summer Game Fest",
        date: "2025-06-06",
        location: "YouTube Theater, Los Angeles, USA",
        category: "hobbies"
    },
    {
        id: "21",
        title: "Manila Night Bash",
        image: "../images/manila_nightclub.jpg",
        description: "Dance the night away with top DJs and a vibrant crowd.",
        price: 1000,
        organizer: "PartyLife PH",
        date: "2025-06-10",
        location: "Manila, Philippines",
        category: "nightlife"
    },
    {
        id: "31",
        title: "Broadway in Manila",
        image: "../images/broadway_manila.jpg",
        description: "A night of world-class musical performances.",
        price: 2500,
        organizer: "StageWorks",
        date: "2025-07-01",
        location: "Cultural Center of the Philippines",
        category: "performing_arts"
    },
    {
        id: "41",
        title: "Christmas Market Festival",
        image: "../images/christmas_market.jpg",
        description: "Celebrate the holidays with food, music, and gifts.",
        price: 0,
        organizer: "Holiday Events PH",
        date: "2025-12-15",
        location: "Bonifacio High Street",
        category: "holidays"
    },
    {
        id: "51",
        title: "Singles Mixer Night",
        image: "../images/singles_mixer.jpg",
        description: "Meet new people and maybe find your match!",
        price: 500,
        organizer: "LoveConnect",
        date: "2025-06-20",
        location: "Makati, Philippines",
        category: "dating"
    },
    {
        id: "61",
        title: "DIY Crafting Workshop",
        image: "../images/craft_workshop.jpg",
        description: "Unleash your creativity with hands-on crafting.",
        price: 300,
        organizer: "CraftyHands",
        date: "2025-07-10",
        location: "Quezon City",
        category: "hobbies"
    },
    {
        id: "71",
        title: "Startup Summit 2025",
        image: "../images/startup_summit.jpg",
        description: "Where innovation meets opportunity. Meet top tech founders.",
        price: 1200,
        organizer: "InnovateNow PH",
        date: "2025-09-05",
        location: "Cebu, Philippines",
        category: "business"
    },
    {
        id: "81",
        title: "Food & Drink Expo",
        image: "../images/food-expo.png",
        description: "Taste the best food and drinks from around the world.",
        price: 200,
        organizer: "Foodies United",
        date: "2025-08-15",
        location: "SMX Convention Center",
        category: "food_and_drink"
    },
    {
        id: "22",
        title: "A Night Out in Manila",
        image: "../images/manila_nightlife.jpg",
        description: "City life can be lonely, especially when you're surrounded by so many people. Take the opportunity to meet others hoping for new connections",
        price: 700,
        organizer: "Ermantourage Europe & US",
        date: "2025-05-23",
        location: "Blackbird Makati",
        category: "nightlife"
    },
    {
        id: "23",
        title: "Neon Rave Manila",
        image: "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?cs=srgb&dl=pexels-maumascaro-801863.jpg&fm=jpg",
        description: "An electrifying neon-themed rave party featuring top local DJs and immersive light shows.",
        price: 1000,
        organizer: "Glow Party PH",
        date: "2025-07-15",
        location: "Manila, Philippines",
        category: "nightlife"
    },
    {
        id: "24",
        title: "Cebu Beach Bash",
        image: "https://images.pexels.com/photos/1117256/pexels-photo-1117256.jpeg?cs=srgb&dl=pexels-osvaldo-coelho-jr-388501-1117256.jpg&fm=jpg",
        description: "Sunset beach party in Cebu with live DJs, tropical cocktails, and local craft beer.",
        price: 800,
        organizer: "Island Sounds PH",
        date: "2025-08-01",
        location: "Mactan Island, Cebu, Philippines",
        category: "nightlife"
    },
    {
        id: "42",
        title: "Binondo Chinese New Year Parade",
        image: "https://images.pexels.com/photos/30494367/pexels-photo-30494367.jpeg?cs=srgb&dl=pexels-alexisricardoalaurin-30494367.jpg&fm=jpg",
        description: "A lively street parade in Manila’s Chinatown with traditional dragon and lion dances to welcome the Lunar New Year.",
        price: 0,
        organizer: "Binondo Chamber of Commerce",
        date: "2025-01-29",
        location: "Binondo, Manila, Philippines",
        category: "holidays"
    },
    {
        id: "43",
        title: "Monster Mash Manila",
        image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?cs=srgb&dl=pexels-olly-787961.jpg&fm=jpg",
        description: "A spooky Halloween costume party with a live DJ, themed photo booth, and eerie decorations.",
        price: 500,
        organizer: "Nightlife Manila",
        date: "2025-10-31",
        location: "Greenbelt Park, Makati, Philippines",
        category: "holidays"
    },
    {
        id: "52",
        title: "Makati Speed Dating",
        image: "https://images.pexels.com/photos/7339615/pexels-photo-7339615.jpeg?cs=srgb&dl=pexels-cottonbro-7339615.jpg&fm=jpg",
        description: "Fast-paced speed dating event for singles in Makati to meet and mingle in a fun, relaxed setting.",
        price: 300,
        organizer: "HeartMatch Manila",
        date: "2025-07-20",
        location: "Makati, Philippines",
        category: "dating"
    },
    {
        id: "53",
        title: "Valentine Jazz & Wine",
        image: "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?cs=srgb&dl=pexels-maumascaro-801863.jpg&fm=jpg",
        description: "An intimate Valentine’s Day evening with smooth jazz performances and wine tasting for couples and singles alike.",
        price: 1500,
        organizer: "Love Lounge PH",
        date: "2025-02-14",
        location: "BGC, Taguig, Philippines",
        category: "dating"
    },
    {
        id: "54",
        title: "Coffee & Connect",
        image: "https://images.pexels.com/photos/1117256/pexels-photo-1117256.jpeg?cs=srgb&dl=pexels-osvaldo-coelho-jr-388501-1117256.jpg&fm=jpg",
        description: "Casual morning meet-up at a Quezon City cafe where singles can chat over coffee and pastries.",
        price: 150,
        organizer: "Cafe Culture Collective",
        date: "2025-07-05",
        location: "Quezon City, Philippines",
        category: "dating"
    }
];