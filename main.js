// This is my first piece of code on GitHub ever, so don't be to harsh with me when reading it! 
//If you find any mistaked or instances of bad practice feel free to reach out.






// Definition area

// getRandEntryByPercentageArray returns a random entry selected usind an Array with specified percentages (i.e. [['Option 1', 60], ['Option 2', 40]]).
function getRandEntryByPercentageArray(percentageArray) {
    let currentEntry = 0;
    let sumSoFar = 0;
    let randNum = Math.floor((Math.random() * getTotalPercentage(percentageArray)) + 1); 
/* Defined by the percentage sum instead of 100 so that total percentages under 100 still work. 
When there is a total percentage of 75 for example the entry it chooses would be calculated with the number 75 instead of 100 
effectively returning the same as if we went with a total of 100 and reran if the result was undefined. */

    for (i=1; i++; < 100) {
        if ((percentageArray[currentEntry][1] + sumSoFar) <= i) {
            sumSoFar += percentageArray[currentEntry][1];
            currentEntry++;
        }
        if (i === randNum) {
            return percentageArray[currentEntry][0];
        }
        i++;
    }
}

function getTotalPercentage(percentageArray) {
    let total = 0;
    percentageArray.forEach(elm => total += elm[1])
    return total;
}

// getRandMessage will select a random message and use given parameters to create it.
function getRandMessage(doesWellWith, doesNotDoWellWith, likedActivity, dislikedActivity) {
    const randNum = Math.floor((Math.random() * 10) + 1)
    switch (randNum) {
        case 1:
            return `You will start ${likedActivity}.`;
            break;
        case 2:
            return `You will think about ${likedActivity}.`
            break;
        case 3:
            return `You will fall in love with a ${doesWellWith}.`
            break;
        case 4:
            return `You will have a bad time with a ${doesNotDoWellWith}.`
            break;
        case 5:
            return `You will talk to a ${doesWellWith}.`
            break;
        case 6:
            return `You will join the people ${likedActivity}.`
            break;
        case 7:
            return `You will have a bad time ${dislikedActivity}.`
            break;
        case 8:
            return `You will start to dislike ${dislikedActivity}.`
            break;
        case 9:
            return `You will be happy to talk with a ${doesWellWith}.`
            break;
        case 10:
            return `You will hate to talk with a ${doesNotDoWellWith}.`
            break;
    }
}
function getZodiacObject(signString) {
    switch (signString) {
        case 'aquarius':
            return {
                doesWellWith: [['aquarius', 10], ['pisces', 5], ['aries', 10], ['taurus', 1], ['gemini', 10], ['cancer', 1], ['leo', 10], ['virgo', 1], ['libra', 10], ['scorpio', 5], ['sagittarius', 10], ['capricorn', 1]],
                doesNotDoWellWith: [['aquarius', 1], ['pisces', 5], ['aries', 1], ['taurus', 10], ['gemini', 1], ['cancer', 10], ['leo', 1], ['virgo', 10], ['libra', 1], ['scorpio', 5], ['sagittarius', 1], ['capricorn', 10]],
                likedActivities: [['volunteering', 15], ['painting', 15], ['debating', 15], ['collecting Pokémon cards', 15], ['decorating', 20], ['boxing', 5], ['riding a horse', 5], ['shopping', 5], ['slam poetry reading', 5]],
                dislikedActivities: [['painting', 5], ['debating', 5], ['collecting Pokémon cards', 5], ['decorating', 5], ['boxing', 20], ['riding a horse', 20], ['shopping', 20], ['slam poetry reading', 20]]
            };
            break;
        case 'pisces':
            return {
                doesWellWith: [['aquarius', 1], ['pisces', 10], ['aries', 5], ['taurus', 10], ['gemini', 1], ['cancer', 10], ['leo', 5], ['virgo', 5], ['libra', 1], ['scorpio', 10], ['sagittarius', 5], ['capricorn', 10]],
                doesNotDoWellWith: [['aquarius', 10], ['pisces', 1], ['aries', 5], ['taurus', 1], ['gemini', 10], ['cancer', 1], ['leo', 5], ['virgo', 5], ['libra', 10], ['scorpio', 1], ['sagittarius', 5], ['capricorn', 1]],
                likedActivities: [['drawing', 15], ['writing', 15], ['photographing', 15], ['swimming', 15], ['playing music', 15], ['skydiving', 5], ['climbing', 5], ['sports', 5], ['cleaning', 5], ['hunting', 5]],
                dislikedActivities: [['drawing', 5], ['writing', 5], ['photographing', 5], ['swimming', 5], ['playing music', 5], ['skydiving', 15], ['climbing', 15], ['sports', 15], ['cleaning', 15], ['hunting', 15]]
            };
            break;
        case 'aries':
            return {
                doesWellWith: [['aquarius', 10], ['pisces', 5], ['aries', 10], ['taurus', 1], ['gemini', 10], ['cancer', 1], ['leo', 10], ['virgo', 5], ['libra', 10], ['scorpio', 1], ['sagittarius', 10], ['capricorn', 1]],
                doesNotDoWellWith: [['aquarius', 1], ['pisces', 5], ['aries', 1], ['taurus', 10], ['gemini', 1], ['cancer', 10], ['leo', 1], ['virgo', 5], ['libra', 1], ['scorpio', 10], ['sagittarius', 1], ['capricorn', 10]],
                likedActivities: [['climbing', 15], ['doing yoga', 15], ['travelling', 15], ['competing in a race', 15], ['learning to skydive', 15], ['waiting in a line', 5], ['scamming', 5], ['losing', 5], ['reading safety warnings', 5], ['debating', 5]],
                dislikedActivities: [['climbing', 5], ['doing yoga', 5], ['travelling', 5], ['competing in a race', 5], ['learning to skydive', 5], ['waiting in a line', 15], ['scamming', 15], ['losing', 15], ['reading safety warnings', 15], ['debating', 15]]
            };
            break;
        case 'taurus':
            return {
                doesWellWith: [['aquarius', 1], ['pisces', 10], ['aries', 1], ['taurus', 10], ['gemini', 1], ['cancer', 10], ['leo', 5], ['virgo', 10], ['libra', 5], ['scorpio', 10], ['sagittarius', 1], ['capricorn', 10]],
                doesNotDoWellWith: [['aquarius', 10], ['pisces', 1], ['aries', 10], ['taurus', 1], ['gemini', 10], ['cancer', 1], ['leo', 5], ['virgo', 1], ['libra', 5], ['scorpio', 1], ['sagittarius', 10], ['capricorn', 1]],
                likedActivities: [['watching TV', 15], ['playing chess', 15], ['reading', 15], ['hiking', 15], ['danceing', 15], ['setting deadlines', 5], ['doing illegal things', 5], ['sitting in loud enviroments', 5], ['changing your life', 5], ['running', 5]],
                dislikedActivities: [['watching TV', 5], ['playing chess', 5], ['reading', 5], ['hiking', 5], ['danceing', 5], ['setting deadlines', 15], ['doing illegal things', 15], ['sitting in loud enviroments', 15], ['changing your life', 15], ['running', 15]]
            };
            break;
        case 'gemini':
            return {
                doesWellWith: [['aquarius', 10], ['pisces', 1], ['aries', 10], ['taurus', 1], ['gemini', 10], ['cancer', 1], ['leo', 10], ['virgo', 5], ['libra', 10], ['scorpio', 1], ['sagittarius', 5], ['capricorn', 5]],
                doesNotDoWellWith: [['aquarius', 1], ['pisces', 10], ['aries', 1], ['taurus', 10], ['gemini', 1], ['cancer', 10], ['leo', 1], ['virgo', 5], ['libra', 0], ['scorpio', 10], ['sagittarius', 5], ['capricorn', 5]],
                likedActivities: [['skateing', 15], ['danceing', 15], ['reading', 15], ['motorcycling', 15], ['studying', 15], ['joining a book club', 5], ['meditating', 5], ['organizing', 5], ['gardening', 5], ['going to the cinema', 5]],
                dislikedActivities: [['skateing', 5], ['danceing', 5], ['reading', 5], ['motorcycling', 5], ['studying', 5], ['joining a book club', 15], ['meditating', 15], ['organizing', 15], ['gardening', 15], ['going to the cinema', 15]]
            };
            break;
        case 'cancer':
            return {
                doesWellWith: [['aquarius', 1], ['pisces', 10], ['aries', 1], ['taurus', 10], ['gemini', 1], ['cancer', 10], ['leo', 5], ['virgo', 1], ['libra', 10], ['scorpio', 10], ['sagittarius', 5], ['capricorn', 10]],
                doesNotDoWellWith: [['aquarius', 10], ['pisces', 1], ['aries', 10], ['taurus', 1], ['gemini', 10], ['cancer', 1], ['leo', 5], ['virgo', 10], ['libra', 1], ['scorpio', 1], ['sagittarius', 5], ['capricorn', 1]],
                likedActivities: [['writing', 15], ['swimming', 15], ['danceing', 15], ['singing', 15], ['reading', 15], ['fighting', 5], ['gaming', 5], ['partying', 5], ['spending time with friends', 5], ['hosting a garage sale', 5]],
                dislikedActivities: [['writing', 5], ['swimming', 5], ['danceing', 5], ['singing', 5], ['reading', 5], ['fighting', 15], ['gaming', 15], ['partying', 15], ['spending time with friends', 15], ['hosting a garage sale', 15]]
            };
            break;
        case 'leo':
            return {
                doesWellWith: [['aquarius', 5], ['pisces', 5], ['aries', 10], ['taurus', 1], ['gemini', 10], ['cancer', 5], ['leo', 10], ['virgo', 1], ['libra', 1], ['scorpio', 5], ['sagittarius', 10], ['capricorn', 1]],
                doesNotDoWellWith: [['aquarius', 5], ['pisces', 5], ['aries', 1], ['taurus', 10], ['gemini', 1], ['cancer', 5], ['leo', 1], ['virgo', 10], ['libra', 10], ['scorpio', 5], ['sagittarius', 1], ['capricorn', 10]],
                likedActivities: [['writing', 15], ['singing', 15], ['acting', 15], ['shopping', 15], ['taking selfies', 15], ['running', 5], ['bingewatching', 5], ['camping', 5], ['exploring new places', 5], ['playing sports', 5]],
                dislikedActivities: [['writing', 5], ['singing', 5], ['acting', 5], ['shopping', 5], ['taking selfies', 5], ['running', 15], ['bingewatching', 15], ['camping', 15], ['exploring new places', 15], ['playing sports', 15]]
            };
            break;
        case 'virgo':
            return {
                doesWellWith: [['aquarius', 5], ['pisces', 5], ['aries', 1], ['taurus', 10], ['gemini', 1], ['cancer', 10], ['leo', 5], ['virgo', 10], ['libra', 1], ['scorpio', 10], ['sagittarius', 1], ['capricorn', 10]],
                doesNotDoWellWith: [['aquarius', 5], ['pisces', 5], ['aries', 10], ['taurus', 1], ['gemini', 10], ['cancer', 1], ['leo', 5], ['virgo', 1], ['libra', 10], ['scorpio', 1], ['sagittarius', 1], ['capricorn', 1]],
                likedActivities: [['puzzling', 15], ['creating artpieces', 15], ['gardening', 15], ['playing chess', 15], ['writing', 15], ['video games', 5], ["playing with a rubik's cube", 5], ['bingewatching', 5], ['snowboarding', 5], ['football', 5]],
                dislikedActivities: [['puzzling', 5], ['creating artpieces', 5], ['gardening', 5], ['playing chess', 5], ['writing', 5], ['video games', 15], ["playing with a rubik's cube", 15], ['bingewatching', 15], ['snowboarding', 15], ['football', 15]]
            };
            break;
        case 'libra':
            return {
                doesWellWith: [['aquarius', 10], ['pisces', 5], ['aries', 5], ['taurus', 5], ['gemini', 10], ['cancer', 1], ['leo', 10], ['virgo', 1], ['libra', 10], ['scorpio', 1], ['sagittarius', 10], ['capricorn', 1]],
                doesNotDoWellWith: [['aquarius', 1], ['pisces', 5], ['aries', 5], ['taurus', 5], ['gemini', 1], ['cancer', 10], ['leo', 1], ['virgo', 10], ['libra', 1], ['scorpio', 10], ['sagittarius', 1], ['capricorn', 10]],
                likedActivities: [['creating art', 15], ['gardening', 15], ['shopping', 15], ['swimming', 15], ['yoga', 15], ['debating', 5], ['losing', 5], ['fighting', 5], ['rushing things', 5], ['lying', 5]],
                dislikedActivities: [['creating art', 5], ['gardening', 5], ['shopping', 5], ['swimming', 5], ['yoga', 5], ['debating', 15], ['losing', 15], ['fighting', 15], ['rushing things', 15], ['lying', 15]]
            };
            break;
        case 'scorpio':
            return {
                doesWellWith: [['aquarius', 1], ['pisces', 10], ['aries', 5], ['taurus', 10], ['gemini', 1], ['cancer', 10], ['leo', 5], ['virgo', 10], ['libra', 1], ['scorpio', 10], ['sagittarius', 1], ['capricorn', 10]],
                doesNotDoWellWith: [['aquarius', 10], ['pisces', 1], ['aries', 5], ['taurus', 1], ['gemini', 10], ['cancer', 1], ['leo', 5], ['virgo', 1], ['libra', 10], ['scorpio', 1], ['sagittarius', 10], ['capricorn', 1]],
                likedActivities: [['doing workouts', 15], ['playing card games', 15], ['hiking', 15], ['boxing', 15], ['learning to code', 15], ['dancing', 5], ['knitting', 5], ['scrapebooking', 5], ['meditating', 5], ['writing', 5]],
                dislikedActivities: [['doing workouts', 5], ['playing card games', 5], ['hiking', 5], ['boxing', 5], ['learning to code', 5], ['dancing', 15], ['knitting', 15], ['scrapebooking', 15], ['meditating', 15], ['writing', 15]]
            };
            break;
        case 'sagittarius':
            return {
                doesWellWith: [['aquarius', 10], ['pisces', 5], ['aries', 10], ['taurus', 1], ['gemini', 10], ['cancer', 5], ['leo', 10], ['virgo', 1], ['libra', 10], ['scorpio', 5], ['sagittarius', 10], ['capricorn', 1]],
                doesNotDoWellWith: [['aquarius', 1], ['pisces', 5], ['aries', 1], ['taurus', 10], ['gemini', 1], ['cancer', 5], ['leo', 1], ['virgo', 10], ['libra', 1], ['scorpio', 5], ['sagittarius', 1], ['capricorn', 10]],
                likedActivities: [['cooking', 15], ['hiking', 15], ['watching comedy shows', 15], ['travelling', 15], ['learning to code', 15], ['thinking about others', 5], ['lying', 5], ['not being honest', 5], ['sticking to old things', 5], ['waiting for something', 5]],
                dislikedActivities: [['cooking', 5], ['hiking', 5], ['watching comedy shows', 5], ['travelling', 5], ['learning to code', 5], ['thinking about others', 15], ['lying', 15], ['not being honest', 15], ['sticking to old things', 15], ['waiting for something', 15]]
            };
            break;
        case 'capricorn':
            return {
                doesWellWith: [['aquarius', 1], ['pisces', 10], ['aries', 1], ['taurus', 10], ['gemini', 1], ['cancer', 10], ['leo', 5], ['virgo', 10], ['libra', 5], ['scorpio', 10], ['sagittarius', 1], ['capricorn', 10]],
                doesNotDoWellWith: [['aquarius', 10], ['pisces', 1], ['aries', 10], ['taurus', 1], ['gemini', 10], ['cancer', 1], ['leo', 5], ['virgo', 1], ['libra', 5], ['scorpio', 1], ['sagittarius', 10], ['capricorn', 1]],
                likedActivities: [['working', 15], ['exploring new possibilities', 15], ['playing games', 15], ['competeing in a race', 15], ['playing poker', 15], ['not getting something done', 5], ['not knowing how something will end up', 5], ['getting lazy', 5], ['having too much sleep', 5], ['being stressed', 5]],
                dislikedActivities: [['working', 5], ['exploring new possibilities', 5], ['playing games', 5], ['competeing in a race', 5], ['playing poker', 5], ['not getting something done', 15], ['not knowing how something will end up', 15], ['getting lazy', 15], ['having too much sleep', 15], ['being stressed', 15]]
            };
            break;
        default:
            return 'unspecified'
    };
};

// Code executed at run
const inputArgument = process.argv[2].toLowerCase();
const zodiacObject = getZodiacObject(inputArgument);
if (zodiacObject === 'unspecified') {
    console.log('This zodiac sign does not exist. Valid options: aquarius, aisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius and capricorn.');
} else {
    const randomMessage = getRandMessage(getRandEntryByPercentageArray(zodiacObject.doesWellWith), getRandEntryByPercentageArray(zodiacObject.doesNotDoWellWith), getRandEntryByPercentageArray(zodiacObject.likedActivities), getRandEntryByPercentageArray(zodiacObject.dislikedActivities));
    console.log(randomMessage);
}

