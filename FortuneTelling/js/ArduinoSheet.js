const sheet = [
    {
    type: "",
    A:"I have heard your call and come forth to respond.",
    audio: 0,
    },
    {
    type: "analysis",
    A:"",
    },
    {
    type: "",
    A:"I believe you still carry many questions about life, and I am willing to answer some of them for you.",
    audio: 10,
    },
    {
    type: "analysis",
    A:"",
    },
    {
    type: "",
    A:"I believe there is much more I can offer you.",
    audio: 20,
    },
    {
    type: "analysis",
    A:"",
    },
    {
    type: "",
    A:"I believe I must share with you the inevitable truth of life now.",
    audio: 29,
    },
    {
    type: "analysis",
    A:"",
    },
    {
    type: "answer",
    A:"This is the final counsel I offer, and I hope you will keep it close to your heart.",
    audio: 36,
    },
    {
    type: "analysis",
    A:"",
    },
    /*
    {
    type: "end",
    A:"Good luck to you",
    audio: 46,
    },
    */
]
const labelsheet = {
    0: {
    lab :["STATUS","EDUCATED"],
    audio :{
        sentecnes: [1, 2],
        'manager': 3,
        'Emperor': 4,
        'Normal person': 5,
        'famous': 6, 
        'bachelor': 7,
        'master': 8,
        'doctorate': 9,
    },       
    sentecnes: ["You must face the future with vigilance, but do not worry, for your life is already set on its course and will find its way.", "You possess immense potential. Your strong abilities and unwavering effort will lead you to great achievements."],
    'manager': "Your life is destined for greatness. Your exceptional abilities will elevate you to high positions, bringing remarkable achievements. Through relentless effort, you will attain both fame and fortune, and you are well-suited for leadership roles.",
    'Emperor': "Your destiny is already extraordinary, with the potential to become a leader, wield supreme power, and govern all beings. You are a being of noble stature.",
    'Normal person': "Though your life may seem ordinary, it is far from lacking in interest; there is hardship, but also joy. While it may not be filled with the thrilling adventures or unforgettable moments of a hero, you can still find unique and meaningful moments within the simplicity of everyday life.",
    'famous': "Blessed by the heavens, you are a person of captivating charm, the shining star in the spotlight, admired by the world and surrounded by countless gazes.", 
    'bachelor': "You will gain outstanding achievements in your academic pursuits, serving as a role model and earning the respect of others.",
    'master': "Your outstanding accomplishments will earn you the admiration of others.",
    'doctorate': "With profound expertise in your field, you have the potential to make significant contributions to the academic world."
    },
    
    1: {
    lab :["RELATIONSHIP","WARNING"],
    smalllab: ["PARTNERED","SINGLE"],
    smalllabindex: {
        'Late married' :0, 'married a lot': 0, 'long married': 0, 'Cheating': 0, 'betray': 0, 'Break up': 0, 
        'single':1,
    },
    audio:{
        sentecnes: [11],
        'Late married': 12,
        'married a lot': 13,
        'long married': 14,
        'Cheating': 15,
        'betray': 15,
        'Break up': 16,
        'single': 17,
        'warning':{
            'married a lot': 18,
            'betray': 19,
            'Cheating': 19,
        }
    },
    
    sentecnes: ["Congratulations, you will find your significant other."],
    'Late married': "Your bond with your partner will be strong and unwavering. If you haven’t met the right person yet, don't worry—sometimes the meeting comes later, but it will be one of true understanding. ",
    'married a lot': "You are well-liked, with continuous romantic prospects. You will have multiple meaningful relationships, and we believe you will find a soulmate among them.",
    'long married': "You will spend many years together, side by side, growing old together. Make sure to nurture and cherish the love between you.",
    'Cheating': "However, your relationship may not always be stable. Hidden challenges may arise within it, and it is hoped that you will find the right moment to have an open conversation and face these challenges together.", 
    'betray': "However, your relationship may not always be stable. Hidden challenges may arise within it, and it is hoped that you will find the right moment to have an open conversation and face these challenges together.",
    'Break up': "Your relationship may face a crisis. Even if parting comes, do not despair. Continuously strive to improve yourself, and good fortune will eventually come your way.",
    'single': "Even when on your own, you live a life full of richness and joy, delighting in the tranquility that surrounds you. With a heart at peace and a spirit of contentment, you find happiness in the simplicity of life, free from worry or concern.",
    'warning':{
        'married a lot': "When interacting with others, always be sincere and cherish the bond you share.",
        'betray':"When difficulties arise, remember that you are not alone. Reach out for help from those you trust and who are worthy of your confidence.",
        'Cheating':"When difficulties arise, remember that you are not alone. Reach out for help from those you trust and who are worthy of your confidence.",
    }
    },
    2: {
    lab :["ECONOMIC","WARNING"],
    smalllab: ["RICH","NORMAL"],
    smalllabindex: {
        'rich' :0, 'eligible': 0, 'bankruptcy': 0, 'nouveau riche': 0, 
        'normal': 1,'poor':1,
    },
    audio :{
        sentecnes: [21],
        'rich': 22,
        'eligible': 23,
        'normal': 24,
        'poor': 25,
        'bankruptcy': 26,
        'nouveau riche': 26,
        'warning':{
            'bankruptcy':27,
            'nouveau riche':28,
        }
    },
    
    sentecnes: ["Your life is free from worries about basic needs, and wealth flows abundantly."],
    'rich': "These resources allow you to focus not only on your essentials but also on leisure and entertainment, while your family remains strong and harmonious.",
    'eligible': "The abundant resources at your disposal ensure that daily expenses are never a concern. Beyond that, you have the means to pursue your dreams and engage in the activities you desire. Even if alone, you still live joyfully.",
    'normal': " You may not be exceedingly wealthy, but you will never face hunger or scarcity. A comfortable income ensures you are well-fed and secure. Life is carefree, and contentment brings happiness.",
    'poor': "Your financial situation might not be ideal, but do not be discouraged. There are priceless treasures in life waiting for you to discover and cherish.",
    'bankruptcy': "However, your financial situation may have already undergone, or could be facing, significant changes. Whether this is a blessing or a curse remains uncertain.",
    'nouveau riche': "However, your financial situation may have already undergone, or could be facing, significant changes. Whether this is a blessing or a curse remains uncertain.",
    'warning':{
        'bankruptcy':"Be cautious with your finances, managing it wisely. Avoid impulsive decisions. ",
        'nouveau riche':"Bold investments and seizing opportunities can help you accumulate wealth and secure your future.",
    }
    
    },
    3: {
    lab :["UPHEAVAL"],
    smalllab: ["ENVIRONMENT","NORMAL","ACCIDENT"],
    smalllabindex: {
        'move abroad':0,'jobless': 0,
        'prisoner': 2, 'car accident':2,
        'normal': 1
    },
    audio:{
        sentecnes: [30],
        'move abroad': 31,
        'jobless': 32,
        'normal': 33,
        'car accident': 34,
        'prisoner': 35,
    },
    
    sentecnes: ["Life is full of uncertainties; approach it with caution and cherish the present moment."],
    'move abroad': "You may soon face significant changes in your living situation, such as moving, relocation, or traveling abroad. These shifts could bring temporary discomfort, requiring you to adjust your mindset and prepare for a new chapter in life.",
    'jobless': "Financial changes may also be on the horizon, whether positive or negative. These shifts could lead to brief periods of instability. Focus on managing your emotions and getting ready to embrace new opportunities or challenges.",
    'normal': "Life has been calm and uneventful recently, free from turbulence. This is an auspicious sign, and may the days ahead continue in this peaceful manner.",
    'car accident': "Pay extra attention when traveling or commuting. Be mindful of traffic safety, drive carefully, and stay alert to road conditions. Slow down, and ensure a safe journey wherever you go.",
    'prisoner': "Beware of potential misfortune. Standing out too much or acting too aggressively could draw unwanted attention or lead to unnecessary conflicts. Stay low-key and maintain harmony during this period.",

    }
    ,
    4: {
    lab :["DISASTER"],
    smalllab: ["ILLNESS","ACCIDENT","NORMAL CAUSE"],
    smalllabindex: {
        'war':1, 'murder':1, 'shoted':1,
        'illness':0, 'health problem': 0, 
        'sleep': 2,'natural cause': 2, 'normal':2,
    },
    audio :{
        sentecnes: [37],
        'war': 38,
        'sleep': 39,
        'natural cause': 40,
        'illness': 41,
        'health problem': 42,
        'murder': 43,
        'shoted': 44,
        'normal': 45,
    },
    sentecnes: ["Fate has an end; how one overcomes trials depends entirely on personal fortune."],
    'war': "Sudden misfortune is inevitable. Avoid places of conflict and disputes whenever possible. Reduce unnecessary arguments or confrontations, and refrain from observing or getting involved in others' quarrels.",
    'sleep': "Life is unpredictable; its elegance often fades silently. Dreams may be beautiful, yet they, too, are trials to be endured.",
    'natural cause': "The heavens have their plan. Everything has been arranged for you by a higher power. Follow its guidance, and you will find your way. When the moment comes, you will understand—release your attachments and embrace it.",
    'illness': "Weak health makes you susceptible to illness. Prioritize your well-being with a healthy diet, proper hygiene, and regular exercise to build resilience.",
    'health problem': "Chronic health concerns call for vigilance. Pay close attention to your physical condition, ensure a balanced intake of nutrients, and strive to maintain a strong and healthy body.",
    'murder': "Be mindful of your surroundings. While trust is important, a degree of caution is necessary. Deception by ill-intentioned individuals can be difficult to foresee. Stay alert to subtle changes and remain vigilant.",
    'shoted': "Unexpected calamities may arise, and they are hard to escape. However, beware of standing out too much, for prominence invites attention. Those in high positions should exercise discretion and prudence in their words and actions.",
    'normal': "The heavens have their plan. Everything has been arranged for you by a higher power. Follow its guidance, and you will find your way. When the moment comes, you will understand—release your attachments and embrace it.",
    
    }    
}