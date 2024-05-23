import Profile from "../Components/Profile";
// import Post from "../Components/Post";
function Profilepage() {
    const posts = [
        {
            postId: 1,
            title: "Excited about the latest AI breakthroughs!",
            description:
                "Just read about some amazing advancements in artificial intelligence. From language models to self-driving cars, the future is looking incredibly promising! 🤖🚀 #AI #TechBreakthroughs #FutureTech",
            date: "2024-04-28",
            postedBy: {
                userId: 101,
                username: "techlover123",
                avatar: "https://randomuser.me/api/portraits/men/11.jpg",
            },
            likes: 52,
            comments: [
                {
                    commentId: 101,
                    commenter: {
                        userId: 102,
                        username: "ai_enthusiast",
                        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                    },
                    text: "Absolutely! The progress in AI is truly remarkable. Can't wait to see what the future holds!",
                    likes: 14,
                },
                {
                    commentId: 102,
                    commenter: {
                        userId: 103,
                        username: "techgeek456",
                        avatar: "https://randomuser.me/api/portraits/men/13.jpg",
                    },
                    text: "AI is revolutionizing every industry! It's fascinating to witness.",
                    likes: 8,
                },
            ],
        },
        {
            postId: 2,
            title: "Exploring the potential of quantum computing!",
            description:
                "Spent the day diving into the world of quantum computing. The possibilities are mind-boggling! Can't wait to see how this technology transforms industries. 💻⚛️ #QuantumComputing #TechInnovation #FutureTech",
            date: "2024-04-27",
            postedBy: {
                userId: 104,
                username: "quantum_enthusiast",
                avatar: "https://randomuser.me/api/portraits/women/14.jpg",
            },
            likes: 42,
            comments: [
                {
                    commentId: 103,
                    commenter: {
                        userId: 105,
                        username: "quantum_nerd",
                        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
                    },
                    text: "Quantum computing is the future! The potential applications are endless.",
                    likes: 12,
                },
                {
                    commentId: 104,
                    commenter: {
                        userId: 106,
                        username: "future_techie",
                        avatar: "https://randomuser.me/api/portraits/women/16.jpg",
                    },
                    text: "I'm excited to see how quantum computing revolutionizes cryptography and data security.",
                    likes: 6,
                },
            ],
        },
        {
            postId: 3,
            title: "Blockchain revolutionizing industries!",
            description:
                "Blockchain technology is reshaping the way we do business, from finance to supply chain management. Exciting times ahead! 💼🔗 #Blockchain #TechInnovation #FutureTech",
            date: "2024-04-26",
            postedBy: {
                userId: 107,
                username: "blockchain_guru",
                avatar: "https://randomuser.me/api/portraits/men/17.jpg",
            },
            likes: 68,
            comments: [
                {
                    commentId: 105,
                    commenter: {
                        userId: 108,
                        username: "crypto_enthusiast",
                        avatar: "https://randomuser.me/api/portraits/women/18.jpg",
                    },
                    text: "Blockchain has the potential to disrupt multiple industries. It's fascinating to see its growth!",
                    likes: 20,
                },
                {
                    commentId: 106,
                    commenter: {
                        userId: 109,
                        username: "tech_innovator",
                        avatar: "https://randomuser.me/api/portraits/men/19.jpg",
                    },
                    text: "I'm exploring blockchain for supply chain management in my startup. It's a game-changer!",
                    likes: 15,
                },
            ],
        },
        {
            postId: 4,
            title: "The rise of 5G technology!",
            description:
                "With the rollout of 5G networks, we're on the brink of a connectivity revolution. Can't wait to experience faster speeds and lower latency! 📶🚀 #5G #TechTrends #FutureTech",
            date: "2024-04-25",
            postedBy: {
                userId: 110,
                username: "5g_enthusiast",
                avatar: "https://randomuser.me/api/portraits/women/20.jpg",
            },
            likes: 38,
            comments: [
                {
                    commentId: 107,
                    commenter: {
                        userId: 111,
                        username: "techlover456",
                        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
                    },
                    text: "5G is going to revolutionize mobile technology! Can't wait to see the new possibilities.",
                    likes: 10,
                },
                {
                    commentId: 108,
                    commenter: {
                        userId: 112,
                        username: "5g_enthusiast2",
                        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                    },
                    text: "I'm excited for the faster internet speeds with 5G. It'll be a game-changer for streaming!",
                    likes: 8,
                },
            ],
        },
        {
            postId: 5,
            title: "Augmented Reality transforming experiences!",
            description:
                "Augmented Reality is changing the way we interact with the world around us. From gaming to shopping, the possibilities are endless! 🕶️🎮 #AR #TechInnovation #FutureTech",
            date: "2024-04-24",
            postedBy: {
                userId: 113,
                username: "ar_enthusiast",
                avatar: "https://randomuser.me/api/portraits/men/23.jpg",
            },
            likes: 49,
            comments: [
                {
                    commentId: 109,
                    commenter: {
                        userId: 114,
                        username: "gaming_fanatic",
                        avatar: "https://randomuser.me/api/portraits/women/24.jpg",
                    },
                    text: "AR gaming is the future! Can't wait to see more immersive experiences.",
                    likes: 15,
                },
                {
                    commentId: 110,
                    commenter: {
                        userId: 115,
                        username: "tech_innovator2",
                        avatar: "https://randomuser.me/api/portraits/men/25.jpg",
                    },
                    text: "I'm working on an AR shopping app. It's exciting to see the potential of AR in retail.",
                    likes: 11,
                },
            ],
        },
        {
            postId: 6,
            title: "Intrigued by the potential of biotechnology!",
            description:
                "Biotechnology is unlocking new ways to tackle diseases, improve agriculture, and even create sustainable materials. The future of bioengineering looks promising! 🧬🌱 #Biotech #TechInnovation #FutureTech",
            date: "2024-04-23",
            postedBy: {
                userId: 116,
                username: "biotech_enthusiast",
                avatar: "https://randomuser.me/api/portraits/women/26.jpg",
            },
            likes: 55,
            comments: [
                {
                    commentId: 111,
                    commenter: {
                        userId: 117,
                        username: "science_lover",
                        avatar: "https://randomuser.me/api/portraits/men/27.jpg",
                    },
                    text: "Biotech advancements are crucial for addressing global challenges. Excited to see the progress!",
                    likes: 18,
                },
                {
                    commentId: 112,
                    commenter: {
                        userId: 118,
                        username: "biotech_researcher",
                        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
                    },
                    text: "I'm researching biofuels as a renewable energy source. Biotech offers so many possibilities!",
                    likes: 12,
                },
            ],
        },
        {
            postId: 7,
            title: "Virtual Reality revolutionizing industries!",
            description:
                "Virtual Reality technology is not just for gaming anymore. Industries like education, healthcare, and training are leveraging VR to create immersive experiences. 🎮🔮 #VR #TechTrends #FutureTech",
            date: "2024-04-22",
            postedBy: {
                userId: 119,
                username: "vr_enthusiast",
                avatar: "https://randomuser.me/api/portraits/men/29.jpg",
            },
            likes: 63,
            comments: [
                {
                    commentId: 113,
                    commenter: {
                        userId: 120,
                        username: "education_innovator",
                        avatar: "https://randomuser.me/api/portraits/women/30.jpg",
                    },
                    text: "I'm incorporating VR simulations into my classroom. It's amazing to see how engaged the students are!",
                    likes: 22,
                },
                {
                    commentId: 114,
                    commenter: {
                        userId: 121,
                        username: "healthcare_professional",
                        avatar: "https://randomuser.me/api/portraits/men/31.jpg",
                    },
                    text: "VR is transforming patient therapy and rehabilitation. It's a game-changer for healthcare.",
                    likes: 16,
                },
            ],
        },
        {
            postId: 8,
            title: "Internet of Things (IoT) shaping the future!",
            description:
                "The Internet of Things is connecting devices like never before, making our homes smarter and our cities more efficient. Excited to see how IoT evolves! 🏠💡 #IoT #TechInnovation #FutureTech",
            date: "2024-04-21",
            postedBy: {
                userId: 122,
                username: "iot_enthusiast",
                avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            },
            likes: 59,
            comments: [
                {
                    commentId: 115,
                    commenter: {
                        userId: 123,
                        username: "smart_home_owner",
                        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
                    },
                    text: "I love how IoT devices make my home more convenient and energy-efficient!",
                    likes: 24,
                },
                {
                    commentId: 116,
                    commenter: {
                        userId: 124,
                        username: "city_planner",
                        avatar: "https://randomuser.me/api/portraits/women/34.jpg",
                    },
                    text: "IoT sensors are helping us monitor traffic and improve urban planning. It's fascinating!",
                    likes: 15,
                },
            ],
        },
        {
            postId: 9,
            title: "Cybersecurity in the spotlight!",
            description:
                "With the rise in cyber threats, cybersecurity has never been more important. Investing in robust security measures is crucial to safeguarding our digital assets. 🔒💻 #Cybersecurity #TechTrends #FutureTech",
            date: "2024-04-20",
            postedBy: {
                userId: 125,
                username: "cybersecurity_expert",
                avatar: "https://randomuser.me/api/portraits/men/35.jpg",
            },
            likes: 46,
            comments: [
                {
                    commentId: 117,
                    commenter: {
                        userId: 126,
                        username: "security_analyst",
                        avatar: "https://randomuser.me/api/portraits/women/36.jpg",
                    },
                    text: "Cybersecurity is a constant battle against evolving threats. We must stay vigilant!",
                    likes: 18,
                },
                {
                    commentId: 118,
                    commenter: {
                        userId: 127,
                        username: "privacy_advocate",
                        avatar: "https://randomuser.me/api/portraits/men/37.jpg",
                    },
                    text: "Protecting user privacy should be at the forefront of cybersecurity efforts.",
                    likes: 12,
                },
            ],
        },
        {
            postId: 10,
            title: "Renewable energy innovations!",
            description:
                "Renewable energy technologies like solar and wind power are paving the way towards a greener future. Let's harness the power of clean energy to combat climate change! ☀️🌬️ #RenewableEnergy #TechInnovation #FutureTech",
            date: "2024-04-19",
            postedBy: {
                userId: 128,
                username: "green_energy_advocate",
                avatar: "https://randomuser.me/api/portraits/women/38.jpg",
            },
            likes: 57,
            comments: [
                {
                    commentId: 119,
                    commenter: {
                        userId: 129,
                        username: "sustainability_activist",
                        avatar: "https://randomuser.me/api/portraits/men/39.jpg",
                    },
                    text: "Renewable energy is essential for a sustainable future. We need to invest more in clean technologies!",
                    likes: 20,
                },
                {
                    commentId: 120,
                    commenter: {
                        userId: 130,
                        username: "climate_change_activist",
                        avatar: "https://randomuser.me/api/portraits/women/40.jpg",
                    },
                    text: "Addressing climate change requires a rapid transition to renewable energy sources. It's our responsibility.",
                    likes: 18,
                },
            ],
        },
        {
            postId: 11,
            title: "Big Data driving insights!",
            description:
                "Big Data analytics is transforming industries by providing valuable insights and driving informed decision-making. Excited to see how data-driven strategies shape the future! 📊💡 #BigData #TechTrends #FutureTech",
            date: "2024-04-18",
            postedBy: {
                userId: 131,
                username: "bigdata_enthusiast",
                avatar: "https://randomuser.me/api/portraits/men/41.jpg",
            },
            likes: 61,
            comments: [
                {
                    commentId: 121,
                    commenter: {
                        userId: 132,
                        username: "data_analyst",
                        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
                    },
                    text: "Big Data insights are invaluable for businesses to stay competitive in today's market.",
                    likes: 22,
                },
                {
                    commentId: 122,
                    commenter: {
                        userId: 133,
                        username: "tech_innovator3",
                        avatar: "https://randomuser.me/api/portraits/men/43.jpg",
                    },
                    text: "I'm using Big Data analytics to optimize supply chain operations. It's making a significant impact!",
                    likes: 17,
                },
            ],
        },
        {
            postId: 12,
            title: "Artificial Intelligence in healthcare!",
            description:
                "AI is revolutionizing healthcare by enabling early disease detection, personalized treatment plans, and medical research advancements. The future of healthcare looks promising! 💉🤖 #AIinHealthcare #TechInnovation #FutureTech",
            date: "2024-04-17",
            postedBy: {
                userId: 134,
                username: "healthcare_innovator",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            likes: 50,
            comments: [
                {
                    commentId: 123,
                    commenter: {
                        userId: 135,
                        username: "medical_professional",
                        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                    },
                    text: "AI is streamlining patient care and improving treatment outcomes. It's a game-changer for healthcare!",
                    likes: 18,
                },
                {
                    commentId: 124,
                    commenter: {
                        userId: 136,
                        username: "research_scientist",
                        avatar: "https://randomuser.me/api/portraits/women/46.jpg",
                    },
                    text: "I'm using AI algorithms to analyze medical imaging data. It's accelerating our research efforts.",
                    likes: 15,
                },
            ],
        },
        {
            postId: 13,
            title: "Space exploration milestones!",
            description:
                "With recent achievements in space exploration, we're inching closer to unlocking the mysteries of the universe. Exciting times ahead for space enthusiasts! 🚀🌌 #SpaceExploration #TechTrends #FutureTech",
            date: "2024-04-16",
            postedBy: {
                userId: 137,
                username: "space_enthusiast",
                avatar: "https://randomuser.me/api/portraits/men/47.jpg",
            },
            likes: 72,
            comments: [
                {
                    commentId: 125,
                    commenter: {
                        userId: 138,
                        username: "space_enthusiast2",
                        avatar: "https://randomuser.me/api/portraits/women/48.jpg",
                    },
                    text: "Space exploration inspires us to push the boundaries of human knowledge. It's incredible!",
                    likes: 25,
                },
                {
                    commentId: 126,
                    commenter: {
                        userId: 139,
                        username: "space_researcher",
                        avatar: "https://randomuser.me/api/portraits/men/49.jpg",
                    },
                    text: "I'm researching new propulsion technologies for interstellar travel. The possibilities are exciting!",
                    likes: 20,
                },
            ],
        },
        {
            postId: 14,
            title: "Bioinformatics revolutionizing genomics!",
            description:
                "Bioinformatics is playing a crucial role in analyzing vast amounts of genomic data, leading to breakthroughs in personalized medicine and genetic research. 🧬💻 #Bioinformatics #TechInnovation #FutureTech",
            date: "2024-04-15",
            postedBy: {
                userId: 140,
                username: "bioinformatics_expert",
                avatar: "https://randomuser.me/api/portraits/women/50.jpg",
            },
            likes: 53,
            comments: [
                {
                    commentId: 127,
                    commenter: {
                        userId: 141,
                        username: "genetics_researcher",
                        avatar: "https://randomuser.me/api/portraits/men/51.jpg",
                    },
                    text: "Bioinformatics tools are indispensable for understanding genetic diseases and developing targeted therapies.",
                    likes: 16,
                },
                {
                    commentId: 128,
                    commenter: {
                        userId: 142,
                        username: "medical_geneticist",
                        avatar: "https://randomuser.me/api/portraits/women/52.jpg",
                    },
                    text: "I'm using bioinformatics to study the genetic basis of rare diseases. It's a fascinating field!",
                    likes: 14,
                },
            ],
        },
        {
            postId: 15,
            title: "Smart cities of the future!",
            description:
                "Smart city initiatives are leveraging technology to enhance urban living, improve infrastructure, and promote sustainability. Excited to see cities evolve into smarter, more efficient hubs! 🌆🌐 #SmartCities #TechInnovation #FutureTech",
            date: "2024-04-14",
            postedBy: {
                userId: 143,
                username: "smart_city_advocate",
                avatar: "https://randomuser.me/api/portraits/men/53.jpg",
            },
            likes: 67,
            comments: [
                {
                    commentId: 129,
                    commenter: {
                        userId: 144,
                        username: "urban_planner",
                        avatar: "https://randomuser.me/api/portraits/women/54.jpg",
                    },
                    text: "Smart city technologies are reshaping urban infrastructure and improving quality of life.",
                    likes: 21,
                },
                {
                    commentId: 130,
                    commenter: {
                        userId: 145,
                        username: "sustainability_activist2",
                        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
                    },
                    text: "I'm advocating for renewable energy integration in smart city projects. It's essential for sustainability.",
                    likes: 18,
                },
            ],
        },
        {
            postId: 16,
            title: "Ethical AI considerations!",
            description:
                "As AI continues to advance, it's crucial to prioritize ethical considerations, including fairness, transparency, and accountability. Let's ensure AI benefits society as a whole! 🤖🤔 #EthicalAI #TechTrends #FutureTech",
            date: "2024-04-13",
            postedBy: {
                userId: 146,
                username: "ai_ethics_advocate",
                avatar: "https://randomuser.me/api/portraits/women/56.jpg",
            },
            likes: 48,
            comments: [
                {
                    commentId: 131,
                    commenter: {
                        userId: 147,
                        username: "ethics_researcher",
                        avatar: "https://randomuser.me/api/portraits/men/57.jpg",
                    },
                    text: "Ethical AI frameworks are essential for ensuring fairness and accountability in AI systems.",
                    likes: 17,
                },
                {
                    commentId: 132,
                    commenter: {
                        userId: 148,
                        username: "ai_developer",
                        avatar: "https://randomuser.me/api/portraits/women/58.jpg",
                    },
                    text: "I'm incorporating ethical guidelines into the design of AI algorithms. It's an important aspect of responsible AI development.",
                    likes: 14,
                },
            ],
        },
        {
            postId: 17,
            title: "Advancements in renewable fuels!",
            description:
                "Renewable fuels like hydrogen and biofuels are gaining traction as sustainable alternatives to traditional fossil fuels. Excited to see how these innovations reshape the energy landscape! ⛽️🌱 #RenewableFuels #TechInnovation #FutureTech",
            date: "2024-04-12",
            postedBy: {
                userId: 149,
                username: "renewable_fuel_advocate",
                avatar: "https://randomuser.me/api/portraits/men/59.jpg",
            },
            likes: 44,
            comments: [
                {
                    commentId: 133,
                    commenter: {
                        userId: 150,
                        username: "renewable_energy_enthusiast",
                        avatar: "https://randomuser.me/api/portraits/women/60.jpg",
                    },
                    text: "Renewable fuels offer a sustainable solution to our energy needs. It's time to shift away from fossil fuels.",
                    likes: 16,
                },
                {
                    commentId: 134,
                    commenter: {
                        userId: 151,
                        username: "environmentalist",
                        avatar: "https://randomuser.me/api/portraits/men/61.jpg",
                    },
                    text: "I'm advocating for policies that promote the adoption of renewable fuels. It's crucial for combating climate change.",
                    likes: 12,
                },
            ],
        },
        {
            postId: 18,
            title: "The potential of nanotechnology!",
            description:
                "Nanotechnology is unlocking new possibilities in medicine, electronics, and materials science. Excited to see how nanotech innovations revolutionize various industries! 🔬🌟 #Nanotechnology #TechInnovation #FutureTech",
            date: "2024-04-11",
            postedBy: {
                userId: 152,
                username: "nanotech_enthusiast",
                avatar: "https://randomuser.me/api/portraits/women/62.jpg",
            },
            likes: 60,
            comments: [
                {
                    commentId: 135,
                    commenter: {
                        userId: 153,
                        username: "nanotech_researcher",
                        avatar: "https://randomuser.me/api/portraits/men/63.jpg",
                    },
                    text: "Nanotechnology holds immense potential for creating innovative solutions to complex challenges.",
                    likes: 23,
                },
                {
                    commentId: 136,
                    commenter: {
                        userId: 154,
                        username: "material_science_expert",
                        avatar: "https://randomuser.me/api/portraits/women/64.jpg",
                    },
                    text: "I'm researching nanomaterials for renewable energy applications. It's an exciting field with endless possibilities.",
                    likes: 18,
                },
            ],
        },
        {
            postId: 19,
            title: "The future of transportation!",
            description:
                "From electric vehicles to hyperloop technology, transportation is undergoing a major transformation. Excited to witness the evolution of mobility! 🚗🚄 #FutureTransportation #TechInnovation #FutureTech",
            date: "2024-04-10",
            postedBy: {
                userId: 155,
                username: "transportation_innovator",
                avatar: "https://randomuser.me/api/portraits/men/65.jpg",
            },
            likes: 55,
            comments: [
                {
                    commentId: 137,
                    commenter: {
                        userId: 156,
                        username: "ev_enthusiast",
                        avatar: "https://randomuser.me/api/portraits/women/66.jpg",
                    },
                    text: "Electric vehicles are the future of transportation! Excited to see more EV options on the market.",
                    likes: 20,
                },
                {
                    commentId: 138,
                    commenter: {
                        userId: 157,
                        username: "hyperloop_enthusiast",
                        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
                    },
                    text: "Hyperloop technology has the potential to revolutionize long-distance travel. It's incredibly exciting!",
                    likes: 18,
                },
            ],
        },
        {
            postId: 20,
            title: "The era of biometric security!",
            description:
                "Biometric authentication methods like fingerprint and facial recognition are enhancing security and convenience in digital systems. Excited to see biometrics become mainstream! 🔒👤 #BiometricSecurity #TechTrends #FutureTech",
            date: "2024-04-09",
            postedBy: {
                userId: 158,
                username: "biometric_security_expert",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            likes: 49,
            comments: [
                {
                    commentId: 139,
                    commenter: {
                        userId: 159,
                        username: "security_consultant",
                        avatar: "https://randomuser.me/api/portraits/men/69.jpg",
                    },
                    text: "Biometric authentication provides an extra layer of security against unauthorized access.",
                    likes: 18,
                },
                {
                    commentId: 140,
                    commenter: {
                        userId: 160,
                        username: "privacy_advocate2",
                        avatar: "https://randomuser.me/api/portraits/women/70.jpg",
                    },
                    text: "It's important to address privacy concerns associated with biometric data collection and storage.",
                    likes: 15,
                },
            ],
        },
        {
            postId: 21,
            title: "The promise of 6G technology!",
            description:
                "As 5G networks continue to roll out, discussions about the next generation of wireless technology, 6G, are already underway. Excited to see what the future holds for connectivity! 📶🌐 #6G #TechInnovation #FutureTech",
            date: "2024-04-08",
            postedBy: {
                userId: 161,
                username: "6g_enthusiast",
                avatar: "https://randomuser.me/api/portraits/men/71.jpg",
            },
            likes: 53,
            comments: [
                {
                    commentId: 141,
                    commenter: {
                        userId: 162,
                        username: "connectivity_expert",
                        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
                    },
                    text: "6G technology has the potential to revolutionize communication networks and enable new applications.",
                    likes: 19,
                },
                {
                    commentId: 142,
                    commenter: {
                        userId: 163,
                        username: "future_technologist",
                        avatar: "https://randomuser.me/api/portraits/men/73.jpg",
                    },
                    text: "I'm excited to see how 6G addresses the challenges of ultra-low latency and high reliability.",
                    likes: 16,
                },
            ],
        },
        {
            postId: 22,
            title: "The future of remote work!",
            description:
                "Remote work is here to stay, with more companies embracing flexible work arrangements. Excited to see how technology continues to facilitate remote collaboration and productivity! 💼💻 #RemoteWork #TechTrends #FutureTech",
            date: "2024-04-07",
            postedBy: {
                userId: 164,
                username: "remote_work_advocate",
                avatar: "https://randomuser.me/api/portraits/women/74.jpg",
            },
            likes: 58,
            comments: [
                {
                    commentId: 143,
                    commenter: {
                        userId: 165,
                        username: "digital_nomad",
                        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
                    },
                    text: "Remote work offers flexibility and work-life balance. It's the future of work!",
                    likes: 22,
                },
                {
                    commentId: 144,
                    commenter: {
                        userId: 166,
                        username: "telecommuting_expert",
                        avatar: "https://randomuser.me/api/portraits/women/76.jpg",
                    },
                    text: "Technology platforms like video conferencing and collaborative tools are essential for effective remote work.",
                    likes: 18,
                },
            ],
        },
        {
            postId: 23,
            title: "Advancements in regenerative medicine!",
            description:
                "Regenerative medicine holds the promise of repairing and replacing damaged tissues and organs, revolutionizing healthcare and extending human lifespan. Excited to see breakthroughs in this field! 🩺🔬 #RegenerativeMedicine #TechInnovation #FutureTech",
            date: "2024-04-06",
            postedBy: {
                userId: 167,
                username: "regenerative_medicine_enthusiast",
                avatar: "https://randomuser.me/api/portraits/men/77.jpg",
            },
            likes: 64,
            comments: [
                {
                    commentId: 145,
                    commenter: {
                        userId: 168,
                        username: "medical_researcher",
                        avatar: "https://randomuser.me/api/portraits/women/78.jpg",
                    },
                    text: "Regenerative medicine offers hope for patients with chronic diseases and injuries. It's a game-changer for healthcare!",
                    likes: 24,
                },
                {
                    commentId: 146,
                    commenter: {
                        userId: 169,
                        username: "stem_cell_researcher",
                        avatar: "https://randomuser.me/api/portraits/men/79.jpg",
                    },
                    text: "I'm researching stem cell therapies for regenerative medicine applications. It's an exciting field with immense potential.",
                    likes: 20,
                },
            ],
        },
        {
            postId: 24,
            title: "The future of education technology!",
            description:
                "EdTech platforms are transforming the way we learn and teach, offering personalized learning experiences and accessible education resources. Excited to see how technology continues to innovate education! 📚💻 #EdTech #TechTrends #FutureTech",
            date: "2024-04-05",
            postedBy: {
                userId: 170,
                username: "edtech_innovator",
                avatar: "https://randomuser.me/api/portraits/women/80.jpg",
            },
            likes: 59,
            comments: [
                {
                    commentId: 147,
                    commenter: {
                        userId: 171,
                        username: "educational_technologist",
                        avatar: "https://randomuser.me/api/portraits/men/81.jpg",
                    },
                    text: "EdTech tools are revolutionizing classroom learning and making education more accessible to all students.",
                    likes: 22,
                },
                {
                    commentId: 148,
                    commenter: {
                        userId: 172,
                        username: "online_learning_advocate",
                        avatar: "https://randomuser.me/api/portraits/women/82.jpg",
                    },
                    text: "I'm advocating for online learning platforms to bridge the education gap and provide opportunities for lifelong learning.",
                    likes: 18,
                },
            ],
        },
        {
            postId: 25,
            title: "The potential of quantum cryptography!",
            description:
                "Quantum cryptography offers unparalleled security through the principles of quantum mechanics, paving the way for secure communication networks and data protection. Excited to see advancements in this field! 🔒🔑 #QuantumCryptography #TechInnovation #FutureTech",
            date: "2024-04-04",
            postedBy: {
                userId: 173,
                username: "quantum_cryptography_expert",
                avatar: "https://randomuser.me/api/portraits/men/83.jpg",
            },
            likes: 52,
            comments: [
                {
                    commentId: 149,
                    commenter: {
                        userId: 174,
                        username: "cryptography_specialist",
                        avatar: "https://randomuser.me/api/portraits/women/84.jpg",
                    },
                    text: "Quantum cryptography has the potential to revolutionize cybersecurity by offering unbreakable encryption methods.",
                    likes: 19,
                },
                {
                    commentId: 150,
                    commenter: {
                        userId: 175,
                        username: "security_consultant2",
                        avatar: "https://randomuser.me/api/portraits/men/85.jpg",
                    },
                    text: "I'm advising businesses on implementing quantum-resistant security measures to protect against future threats.",
                    likes: 15,
                },
            ],
        },
        {
            postId: 26,
            title: "The rise of e-commerce platforms!",
            description:
                "E-commerce platforms are reshaping the retail landscape, offering convenience, choice, and personalized shopping experiences. Excited to see how online shopping continues to evolve! 🛍️💻 #Ecommerce #TechTrends #FutureTech",
            date: "2024-04-03",
            postedBy: {
                userId: 176,
                username: "ecommerce_enthusiast",
                avatar: "https://randomuser.me/api/portraits/women/86.jpg",
            },
            likes: 56,
            comments: [
                {
                    commentId: 151,
                    commenter: {
                        userId: 177,
                        username: "online_shopper",
                        avatar: "https://randomuser.me/api/portraits/men/87.jpg",
                    },
                    text: "E-commerce has transformed the way we shop, offering convenience and access to a wide range of products.",
                    likes: 20,
                },
                {
                    commentId: 152,
                    commenter: {
                        userId: 178,
                        username: "retail_technologist",
                        avatar: "https://randomuser.me/api/portraits/women/88.jpg",
                    },
                    text: "I'm working on AI-powered recommendation systems to enhance the e-commerce shopping experience. It's an exciting challenge!",
                    likes: 18,
                },
            ],
        },
        {
            postId: 27,
            title: "The future of gaming technology!",
            description:
                "Gaming technology continues to push the boundaries of immersive experiences, realism, and social interaction. Excited to see how gaming evolves with advancements in hardware and software! 🎮🕹️ #GamingTech #TechTrends #FutureTech",
            date: "2024-04-02",
            postedBy: {
                userId: 179,
                username: "gaming_enthusiast",
                avatar: "https://randomuser.me/api/portraits/men/89.jpg",
            },
            likes: 68,
            comments: [
                {
                    commentId: 153,
                    commenter: {
                        userId: 180,
                        username: "gaming_community_member",
                        avatar: "https://randomuser.me/api/portraits/women/90.jpg",
                    },
                    text: "Gaming brings people together and offers unique experiences. It's more than just entertainment!",
                    likes: 25,
                },
                {
                    commentId: 154,
                    commenter: {
                        userId: 181,
                        username: "game_developer",
                        avatar: "https://randomuser.me/api/portraits/men/91.jpg",
                    },
                    text: "I'm developing VR games that push the boundaries of immersion and interaction. It's an exciting time for gaming!",
                    likes: 20,
                },
            ],
        },
        {
            postId: 28,
            title: "The potential of blockchain technology!",
            description:
                "Blockchain technology offers decentralized and transparent solutions for various industries, including finance, supply chain, and healthcare. Excited to see how blockchain continues to disrupt traditional systems! ⛓️💡 #Blockchain #TechInnovation #FutureTech",
            date: "2024-04-01",
            postedBy: {
                userId: 182,
                username: "blockchain_enthusiast",
                avatar: "https://randomuser.me/api/portraits/women/92.jpg",
            },
            likes: 65,
            comments: [
                {
                    commentId: 155,
                    commenter: {
                        userId: 183,
                        username: "blockchain_developer",
                        avatar: "https://randomuser.me/api/portraits/men/93.jpg",
                    },
                    text: "Blockchain has the potential to revolutionize the way we record and verify transactions. It's a game-changer!",
                    likes: 22,
                },
                {
                    commentId: 156,
                    commenter: {
                        userId: 184,
                        username: "crypto_enthusiast",
                        avatar: "https://randomuser.me/api/portraits/women/94.jpg",
                    },
                    text: "I'm investing in blockchain projects that aim to disrupt traditional industries and create new economic models.",
                    likes: 18,
                },
            ],
        },
    ];

    return (
        <div className="w-full flex items-center justify-center relative overflow-hidden flex-col">
            <div className="h-[30rem] w-[30rem] -z-10 -top-10 bg-red-500 rounded-full absolute"></div>
            <Profile />
            <div className="flex items-center justify-center flex-col gap-4 w-[30rem]">
                <h1 className=" text-white p-4 rounded-md bg-red-500 w-full text-center">
                    Your Ideas
                </h1>
                <ul className="flex items-center justify-between flex-col">
                    {posts.map((post, index) => (
                        <li key={index}>
                            <Post
                                postId={post.id}
                                title={post.title}
                                description={post.description}
                                date={post.date}
                                postedBy={post.postedBy}
                                likes={post.likes}
                                comments={post.comments}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Profilepage;
